/**
 * Created by hwh on 17/2/24.
 */
var objModel = require('./orderModle.js');
//针对generator的存取操作
exports.countAll = function(obj){
//获得订单总数
	return new Promise((resolve, reject)=>{
		resolve(objModel.count(obj || {}))
	})
  // return objModel.estimatedDocumentCount()
}
exports.insertOneByObj = function(obj){
//创建订单
  return objModel.create(obj);
}

//针对非generator的存取操作
exports.countAllNormal = function(obj,cb){
  return objModel.count(obj || {},cb)
}
exports.insertOneByObjNormal = function(obj,cb){
  return objModel.create(obj || {},cb)
}
