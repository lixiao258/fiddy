$(function(){


	// 下拉框
	function selector1(num){
		var lhh_right=$(".lhh_right",lhh_box1[num])[0];
		var lhh_p1=$("p",lhh_box1[num])[0]
		var lhh_sanjiao=$(".lhh_sanjiao",lhh_box1[num])[0];
		
		var lhh_p2=$("p",lhh_hidden[num]);
		var lhh_content=$(".lhh_content",lhh_hidden[num]);
		var flag=true;
		lhh_sanjiao.onclick=function(){
			if(flag){
				flag=false;
				lhh_hidden[num].style.display="block";
			}else{
				flag=true;
				lhh_hidden[num].style.display="none";
			}
		}
		for(var i=0;i<lhh_content.length;i++){
			lhh_content[i].index=i;
			lhh_content[i].onclick=function(){
				lhh_p1.innerText="";
				lhh_hidden[num].style.display="none";
				lhh_p1.innerText=lhh_p2[this.index].innerText;	
			}
		}
	}
	var lhh_box1=$(".lhh_box1");
	var lhh_hidden=$(".lhh_hidden");
	for(var i=0;i<lhh_box1.length;i++){
		selector1(i);
	}




	// 三个下拉框
	function selector3(num){
		var lhh_right=$(".lhh_right",lhh_boxthree1[num])[0];
		var lhh_p1=$("p",lhh_boxthree1[num])[0]
		var lhh_sanjiao=$(".lhh_sanjiao",lhh_boxthree1[num])[0];
		
		var lhh_p2=$("p",lhh_hiddenthree[num]);
		var lhh_contentthree=$(".lhh_contentthree",lhh_hiddenthree[num]);
		var flag=true;
		lhh_sanjiao.onclick=function(){
			if(flag){
				flag=false;
				lhh_hiddenthree[num].style.display="block";
			}else{
				flag=true;
				lhh_hiddenthree[num].style.display="none";
			}
		}
		for(var i=0;i<lhh_contentthree.length;i++){
			lhh_contentthree[i].index=i;
			lhh_contentthree[i].onclick=function(){
				lhh_p1.innerText="";
				lhh_hiddenthree[num].style.display="none";
				lhh_p1.innerText=lhh_p2[this.index].innerText;	
			}
		}
	}
	var lhh_boxthree1=$(".lhh_boxthree1");
	var lhh_hiddenthree=$(".lhh_hiddenthree");
	for(var i=0;i<lhh_boxthree1.length;i++){
		selector3(i);
	}


	// 两个下拉框

// 三个下拉框
	function selector2(num){
		var lhh_right=$(".lhh_right",lhh_boxtwo1[num])[0];
		var lhh_p1=$("p",lhh_boxtwo1[num])[0]
		var lhh_sanjiao=$(".lhh_sanjiao",lhh_boxtwo1[num])[0];
		
		var lhh_p2=$("p",lhh_hiddentwo[num]);
		var lhh_contenttwo=$(".lhh_contenttwo",lhh_hiddentwo[num]);
		var flag=true;
		lhh_sanjiao.onclick=function(){
			if(flag){
				flag=false;
				lhh_hiddentwo[num].style.display="block";
			}else{
				flag=true;
				lhh_hiddentwo[num].style.display="none";
			}
		}
		for(var i=0;i<lhh_contenttwo.length;i++){
			lhh_contenttwo[i].index=i;
			lhh_contenttwo[i].onclick=function(){
				lhh_p1.innerText="";
				lhh_hiddentwo[num].style.display="none";
				lhh_p1.innerText=lhh_p2[this.index].innerText;	
			}
		}
	}
	var lhh_boxtwo1=$(".lhh_boxtwo1");
	var lhh_hiddentwo=$(".lhh_hiddentwo");
	for(var i=0;i<lhh_boxtwo1.length;i++){
		selector2(i);
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
	var lhh_change=$(".lhh_change");
	var lhh_changegreen=$(".lhh_changegreen");
	for(var i=0;i<lhh_changegreen.length;i++){
		lhh_changegreen[i].index=i;
		lhh_changegreen[i].onclick=function(){
			lhh_change[this.index].value="";
		}

	}
	
})