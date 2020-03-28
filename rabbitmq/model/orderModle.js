/**
 * Created by hwh on 17/2/23.
 */
var mongoose = require('mongoose');
//连接到本地开启的mongodb，mongodb默认监听27017端口
var connstr = 'mongodb://127.0.0.1:27017/http_vs_rabbit';
//设置数据库连接池大小
var poolsize = 50;
mongoose.connect(connstr,{poolSize:poolsize, useNewUrlParser: true})
var Schema = mongoose.Schema;

var obj = {
  userId:{type:Number, required:true},
  writeTime:{type: Date,default: Date.now()}
}

var objSchema = new Schema(obj);
module.exports = mongoose.model('orders',objSchema);