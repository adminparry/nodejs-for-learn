
'min max'.replace(/\w+/g,(prop)=>{
	var min = Math.min;
	var max = Math.max;

	Math[prop] = (...arg) =>{
		switch(prop){
			case 'min':return Math.min.apply(this,arg);
			break;
			case 'max':return Math.max.apply(this,arg);
		}
		
	}
})