/**
 * Created by wsd on 17/2/23.
 */
var amqp = require('amqplib');
//首先我们需要通过amqp连接本地的rabbitmq服务，返回一个promise对象
amqp.connect('amqp://127.0.0.1:5672').then(function(conn){
//进程检测到终端输入CTRL+C退出新号时，关闭RabbitMQ队列。
  process.once('SIGN',function(){
    conn.close();
  });
//连接成功后创建通道
  return conn.createChannel().then(function(ch){
//通道创建成功后我们通过通道对象的assertQueue方法来监听hello队列，并设置durable持久化为false。这里消息将会被保存在内存中。该方法会返回一个promise对象。
    var ok = ch.assertQueue('hello',{durable:false}).then(function(_qok){
//监听创建成功后，我们使用ch.consume创建一个消费者。指定消费hello队列和处理函数，在这里我们简单打印一句话。设置noAck为true表示不对消费结果做出回应。
//ch.consume会返回一个promise，这里我们把这个promise赋给ok。
      return ch.consume('hello',function(msg){
        console.log("[x] Received '%s'",msg.content.toString());
      },{noAck:true});
    });
//消费者监听完成之后，打印一行成功信息
    return ok.then(function(_consumeOk){
      console.log('[*] Waiting for message. To exit press CRTL+C');
    });
  });
}).then(null,console.warn);//如果报错打印报错信息