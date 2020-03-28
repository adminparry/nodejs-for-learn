/**
 * Created by hwh on 17/2/23.
 */
var koa = require('koa');
var co = require("co");
var route = require('koa-route');
var bodyparser = require('koa-bodyparser');
var app = new koa();
var orderModel = require('./model/orderLib.js');
var listenPort = 3000;

app.use(bodyparser())

app.use(route.get('/',function (ctx){
  ctx.body = "hello world,listenPort:" + listenPort
}));


app.use(route.get('/buy', function(ctx){
  co(function* (){
    console.log(ctx.request.query)
  //拿到参数
    var userid = ctx.request.query.userid;
  //获取数据库中订单数量
    orderModel.countAll().then((count)=>{
         if (count >= 100){
          console.log(count)
          ctx.body = 'sold out!';
        }else{
          // console.log("入库")
          var model = orderModel.insertOneByObj({
            userId:userid
          });
          if(model){
            ctx.body = 'success';
          }
        }
    });

  //做判断，大于100就不再入库
    // if (count >= 100){
    //   console.log("不再入库")
    //   ctx.body = 'sold out!';
    // }else{
    //   console.log("入库")
    //   var model = yield orderModel.insertOneByObj({
    //     userId:userid
    //   });
    //   if(model){
    //     ctx.body = 'success';
    //   }
    // }
  })
}));

app.listen(listenPort,function(){
  console.log('Server listening on:',3000);
})