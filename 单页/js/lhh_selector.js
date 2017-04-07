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

	// 是否公开
	var lhh_publicbox=$(".lhh_publicbox")[0];
	var lhh_publicyuan1=$(".lhh_publicyuan1",lhh_publicbox)[0];
	var lhh_publicyuan2=$(".lhh_publicyuan2",lhh_publicbox)[0];
	var texts=$(".lhh_publictext");
	var first=$(".first",lhh_publicbox)[0];
	var second=$(".second",lhh_publicbox)[0];
	lhh_publicyuan1.onclick=function(){
		this.style.display="none";
		lhh_publicyuan2.style.display="block";
		first.style.display="none";
		second.style.display="block";
	}
	lhh_publicyuan2.onclick=function(){
		lhh_publicyuan1.style.display="block";
		this.style.display="none";
		first.style.display="block";
		second.style.display="none";
	}



	// 修改手机，邮箱，网址
	// var lhh_change=$(".lhh_change");
	// var lhh_changegreen=$(".lhh_changegreen");
	// for(var i=0;i<lhh_changegreen.length;i++){
	// 	lhh_changegreen[i].index=i;
	// 	lhh_changegreen[i].onclick=function(){
	// 		lhh_change.value="";
	// 	}

	// }
	
})