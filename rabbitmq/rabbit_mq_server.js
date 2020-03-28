

var amqp = require('amqplib');
var co = require('co');
var orderModel = require('./model/orderLib');
var q = 'fibq';

amqp.connect('amqp://127.0.0.1:5672').then(function(conn){
  process.once('SIGN',function(){
    conn.close();
  });
  return conn.createChannel().then(function(ch){
//设置公平调度，这里是指rabbitmq不会向一个繁忙的队列推送超过1条消息。
    ch.prefetch(1);
    //定义回传消息函数
    var ackSend = function(msg,content){
      //要注意这里我们之前传上来的队列名和uuid会被保存在msg对象的properties中
      //因为服务端并不知道回传的队列名字，所以我们需要把它带过来
      ch.sendToQueue(msg.properties.replyTo,new Buffer(content.toString()),
          {correlationId:msg.properties.correlationId});
      //ack表示消息确认机制。这里我们告诉rabbitmq消息接收成功。
      ch.ack(msg);
    }
    //定义收到消息的处理函数
    var reply = function (msg){
      var userid = parseInt(msg.content.toString());
      //这里由于consume的处理函数不支持generator语法，这里我们就用es5的方式访问数据库、
      orderModel.countAllNormal({},function(err,count){
        if(count >= 100){
          return ackSend(msg,'sold out!');
        }else{
          orderModel.insertOneByObjNormal({
            userId:userid
          },function(err,model){
            return ackSend(msg,"buy success,orderid:"+model._id.toString())
          });
        }
      });
    };
    //监听队列q并消费
    var ok = ch.assertQueue(q,{durable:false}).then(function(){
      ch.consume(q,reply,{noAck:false});
    });
    return ok.then(function(){
      console.log(' [*] waiting for message')
    })
  })
}).then(null,console.error);