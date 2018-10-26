// all the someone is return 
export function valueOf(p){
	return Object.prototype.toString.call(p);
}
// all the object types
export function isObject(value) {
	return /Object/.test(valueOf(p));
}
export function isFunction(p){
	return /Function/.test(valueOf(p));
}
export function isUndefined(p){
	return /Undefined/.test(valueOf(p));
}
export function isBoolean(p){
	return /Boolean/.test(valueOf(p));
}
export function isRegExp(p){
	return /RegExp/.test(valueOf(p));
}
export function isSymbol(p){
	return /Symbol/.test(valueOf(p));
}
export function isDate(p){
	return /Date/.test(valueOf(p));
}
export function isString(p){
	return /String/.test(valueOf(p));
}
export function isNumber(p){
	return /Number/.test(valueOf(p));
}
export function isArray(p){
	return /Array/.test(valueOf(p));
}
export function isMath(p){
	return /Math/.test(valueOf(p));
}

// usual 
export function isFalse(p){
	return p === false;
}
export function isTrue(p){
	return p === true;
}
export function isPrimitive(value){
	var ret = false;
	'string boolean number symbol'.split(' ').forEach((item)=>{
		if(typeof value == item){
			ret = true;
		}
	})
	return ret;
}
