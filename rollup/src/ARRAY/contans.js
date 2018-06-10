// 从数组中删除元素返回新的地址
export var array_remove = function(){
	var args = Array.prototype.slice.call(arguments);
	var arr = [];

	args.forEach((item)=>{
		arr = Array.prototype.splice.call(this,item,1);
	})
	
	return this;
}