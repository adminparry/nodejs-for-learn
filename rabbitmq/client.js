/**
 * Created by wsd on 17/2/23.
 */
var amqp = require('amqplib');
var when = require('when');
//连接本地消息队列服务
amqp.connect('amqp://127.0.0.1:5672').then(function(conn){
//创建通道，让when立即执行promise
  return when(conn.createChannel().then(function(ch){
    var q = 'hello';
    var msg = 'Hello World';
  //监听q队列，设置持久化为false。
    return ch.assertQueue(q,{durable: false}).then(function(_qok){
  //监听成功后向队列发送消息，这里我们就简单发送一个字符串。发送完毕后关闭通道。
      ch.sendToQueue(q,new Buffer(msg));
      console.log(" [x] Sent '%s'",msg);
      return ch.close()
    });
  })).ensure(function(){ //ensure是promise.finally的别名，不管promise的状态如何都会执行的函数
//这里我们把连接关闭
    conn.close();
  });
}).then(null,console.warn);