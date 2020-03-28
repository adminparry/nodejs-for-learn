/**
 * Created by wsd on 17/2/23.
 */
var koa = require('koa');
//一个工具类
var util = require('util');
var route = require('koa-route');
var request = require('request');
//这个用于作为用户id
var globalUserId = 1;
var app = new koa()

//用于判断服务是否启动
app.use(route.get('/',function (ctx){
  ctx.body = 'Hello world';
}))

//定义请求到后端的URL地址，这里为了方便我就在本机上测试，大家如果有远程服务器的话可以在远程服务器上测试
var uri = 'http://127.0.0.1:3000/buy?userid=%d';
var timeout = 30 * 1000;//超时30s
//设置路由
app.use(route.get('/buy',function (ctx){
//用户id简单地每次请求递增1
  var num = globalUserId ++;
  console.log(num)
//调用request发起请求
  request({
    method:'GET',
    timeout:timeout,
    uri:util.format(uri,num)
  },function(error,req_res,body){
    if(error){
      ctx.status = 500
      ctx.error = error
    }else if(req_res.status != 200){
      ctx.status = 500
    }else{
      ctx.body = body
    }
  })
}))
app.listen(5000,function(){
  console.log('server listen on 5000');
})