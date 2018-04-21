
var static_bar;
(function($){
	jQuery.fn.StaticBar = function(options) {
		var defaults = {
			stx: static_bar.stx,
			sty: static_bar.sty,
			id:'floatbar'			
		};
		
		var settings = $.extend(defaults, options);

		function iecompattest(){
			 return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
		
		}
		
		var startX=settings.stx,startY=settings.sty
		barheight=document.getElementById(settings.id).offsetHeight;
		var ns = (navigator.appName.indexOf("Netscape") != -1) || window.opera;
		var d = document;
		
		function ml(id){
			var el=d.getElementById(id);
			el.style.visibility="visible"
			if(d.layers)el.style=el;
			el.sP=function(x,y){this.style.right=x+"px";this.style.top=y+"px";};
			el.x = startX;
			el.y = startY;
			return el;
		}
		
		window.stayTopLeft=function(){
			var pY = ns ? pageYOffset : iecompattest().scrollTop;
			ftlObj.y += (pY + startY - ftlObj.y)/5;
			ftlObj.sP(ftlObj.x, ftlObj.y);
			setTimeout("stayTopLeft()", 5);
		}
		
		ftlObj = ml(settings.id);
		stayTopLeft();	    
	}
$('body').StaticBar();
})(jQuery)