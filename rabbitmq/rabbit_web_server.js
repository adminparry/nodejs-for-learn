/**
 * Created by wsd on 17/2/24.
 */
var koa = require('koa');
var router = require('koa-route');
var amqp = require('amqplib');
var uuid = require('node-uuid');
var app = new koa();
var co = require('co');
var correlationId = uuid();
var q = 'fibq';//前端发送消息队列
var q2 = 'ackq';//后台回复队列
//conn写成全局变量，循环利用。否则每次访问路由都会创建conn
var conn;
//依然id每次请求递增1
var globalUserId = 1;

app.use(router.get('/',function * (){
  this.body = 'hello world';
}));

app.use(router.get('/buy',function(ctx){

	co(function* (){
		console.log("jinlai")
	  var num = globalUserId ++;
	  //conn我们在外部创建，并且只创建一次（复用）
	  conn.createChannel().then(function(ch){
	    //监听q2队列（订单量如果到达100，服务端会通过q2队列返回信息）
	    return ok = ch.assertQueue(q2,{durable:false}).then(function(){
	      //创建消费q2队列，这里简单把信息设置到res的body里
	      ch.consume(q2,function(msg){
	        console.log(msg.content.toString());
	        ctx.body = msg.content.toString();
	        ch.close();
	      },{noAck:true});
	      //发送消息到q队列，这里把订单id作为content。把q2队列的name和uuid也传过去，这里uuid用来做消息的关联id
	      ch.sendToQueue(q,new Buffer(num.toString()),{replyTo:q2,correlationId:correlationId})
	    });
	  }).then(null,console.error);
	})
}));

amqp.connect('amqp://127.0.0.1:5672').then(function(_conn){
  conn = _conn;
});

app.listen(5001,function(){
  console.log('server listen on 5001');
});