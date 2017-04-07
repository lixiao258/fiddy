$(function(){
	var span=$(".s_span");
	var li=$(".s-li",$(".s-bottom")[0]);
	function move(num){
		span[num].onclick=function(){
		    li[num].style.display="none";
		}
	}
	for(var i=0;i<span.length;i++){
		move(i);
	}
})
