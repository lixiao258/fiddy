$(function(){


	// 下拉框
	function selector1(num){
		var lhh_right=$(".lhh_right",lhh_bigbox);
		var lhh_p1=$(".lhh_text",lhh_bigbox);
		var lhh_hidden=$(".lhh_hidden");
		var lhh_p2=$("p",lhh_hidden[num]);
		var lhh_content=$(".lhh_content",lhh_hidden[num]);
		var flag=true;
		for(var i=0;i<lhh_sanjiaos.length;i++){
			lhh_sanjiaos[i].index=i;
			lhh_sanjiaos[i].onclick=function(){
			if(flag){
				flag=false;
				lhh_hidden[this.index].style.display="block";
			}else{
				flag=true;
				lhh_hidden[this.index].style.display="none";
			}
		}
		}
		
		for(var j=0;j<lhh_content.length;j++){
			lhh_content[j].index=j;
			lhh_content[j].onclick=function(){
				lhh_p1[num].innerText="";
				lhh_hidden[num].style.display="none";
				lhh_p1[num].innerText=lhh_p2[this.index].innerText;	
			}
		}
	}
	var lhh_bigbox=$(".lhh_bigbox")[0];
	var lhh_sanjiaos=$(".lhh_sanjiaos",lhh_bigbox);
	for(var i=0;i<lhh_sanjiaos.length;i++){
		selector1(i);
	}
	// 修改手机，邮箱，网址
	var lhh_change=$(".lhh_change")[0];
	var lhh_changegreen=$(".lhh_changegreen")[0];
	
		lhh_changegreen.onclick=function(){
			lhh_change.value="";
		}
	
})