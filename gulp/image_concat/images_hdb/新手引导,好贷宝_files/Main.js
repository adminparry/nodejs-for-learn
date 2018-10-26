// JavaScript Document
function comparisonChart()
{
	var aLi = $("#comparisonChart li");		
	var aMask = $("#comparisonChart .mask");
	var aColor = $("#comparisonChart .color");	
	var aI = $("#comparisonChart .level i");	
	var starData = [["★★★★★","★","★"],["★★★★","★★","★★★★★"],["★★★★★","★★★★★","★★★★"],["★★★★","★★★","★★★★★"],["★★★","★★","★★"]];
	var levelContainer = $("#comparisonChart .level");
	var colorArr = ["90ff00","ff9d0a","ff1f3e","0090ff","ff01e4"];

	var startIndex = 2;
	aLi.mouseover(function()
	{
		var self = $(this);
		var index = self.index();
		var mask = aMask.eq(index);
		
		if(startIndex===index)return;
		startIndex = index;
		
		self.addClass("active"+index);	
		levelContainer.css({"color":"#"+colorArr[index],"border-color":"#"+colorArr[index]});
		
		aI.each(function(n) {
			$(this).text(starData[index][n]);            
        });
		
		aMask.not(mask).stop().animate({"height":0},100);	
		mask.stop().animate({"height":aColor.eq(index).height()},400,'easeOutQuad',function(){
			//aMask.not(mask).css("height",0);
			aLi.each(function(n) {
                if(index != n)$(this).removeClass("active"+n);
            });			
			});

		//console.log(aI);			
	});
}

function scrollHandler()
{
	var liArr = $("#nav li").not(".reg");
    var posArr = [];

    for(var i = 0; i<liArr.length;i++)posArr.push($(".con"+(i+1)).offset().top);

	liArr.click(function()
	{
		var index = $(this).index();
		//var pos = $(".con"+(index+1)).offset().top;
		
		for(var i = 0; i<liArr.length;i++)liArr[i].children[0].className = "";			
		liArr[index].children[0].className = "active";	
		
	    $("html,body").stop().animate({scrollTop:posArr[index]},600,'easeOutQuad')
	});

    $(window).scroll(currentPosition);

    function currentPosition()
    {
        var scrollTop = $(this).scrollTop();
        var numList = [];
        for(var i = 0; i<liArr.length;i++) numList.push(Math.abs(scrollTop - posArr[i]));

        var minNum = Math.min.apply(null,numList);
        var index = 0;
        for(var j = 0; j<numList.length;j++)if(numList[j] === minNum)index = j;

        //console.log(index);
        for(var k = 0; k<liArr.length;k++)liArr[k].children[0].className = "";
        liArr[index].children[0].className = "active";

        if(scrollTop + $(window).height() == $(document).height()&&liArr[liArr.length-1].children[0].className != "active")
        {
            for(var k = 0; k<liArr.length;k++)liArr[k].children[0].className = "";
            liArr[liArr.length-1].children[0].className = "active";
            //alert("ok");
        }
    }
    currentPosition();
}

$(function()
{
    comparisonChart();	
	scrollHandler();
});