	$(function(){
		var hx_bigbox=$(".hx_bigbox")[0];
		var hx_littlebox=$(".hx_littlebox")[0];
		var hx_tagbox=$(".hx_tagbox");
		var hx_tagboxa=$("a",hx_littlebox);
		var hx_box=$(".hx_box")[0];
		var hx_box1=$(".hx_box1");
		var hx_jianpan=$(".hx_jianpan")[0];
		var hx_underline=$(".hx_underline");
		
			hx_tagbox[0].onclick=function(){
				for (var j = 0; j < hx_box1.length-1; j++) {
					hx_tagbox[j].style.background="#3dc75d";
					hx_tagbox[j].style.width=152+"px";
					hx_tagbox[j].style.height=80+"px";
					hx_tagbox[j].style.marginTop=17+"px";
					hx_tagbox[j].style.lineHeight=51+"px";
					hx_tagbox[j].style.border=0;
					hx_tagboxa[j].style.border=0;
					hx_box1[j].style.display="none";
					hx_underline[j].style.display="none";
					hx_jianpan.style.display="none";
					hx_tagbox[hx_tagbox.length-1].style.width=152+"px";
					hx_tagbox[hx_tagbox.length-1].style.height=80+"px";
					hx_tagbox[hx_tagbox.length-1].style.marginTop=17+"px";
					hx_tagbox[hx_tagbox.length-1].style.lineHeight=51+"px";
					hx_tagbox[hx_tagbox.length-1].style.border=0;
					hx_tagboxa[hx_tagbox.length-1].style.border=0;
					hx_box1[hx_tagbox.length-1].style.display="none";
					hx_underline[hx_tagbox.length-1].style.display="none";


				};
				hx_tagbox[0].style.background="#e8bc0f";
				hx_tagbox[0].style.width=148+"px";
				hx_tagbox[0].style.height=76+"px";
				hx_tagbox[0].style.marginTop=0;
				hx_tagbox[0].style.border="2px solid #fff";
				hx_tagbox[0].style.lineHeight=66+"px";
				hx_box1[0].style.display="block";
				hx_underline[0].style.display="block";
				
					hx_jianpan.style.display="block";
			}
			hx_tagbox[1].onclick=function(){
				for (var j = 0; j < hx_box1.length-1; j++) {
					hx_tagbox[j].style.background="#3dc75d";
					hx_tagbox[j].style.width=152+"px";
					hx_tagbox[j].style.height=80+"px";
					hx_tagbox[j].style.marginTop=17+"px";
					hx_tagbox[j].style.lineHeight=51+"px";
					hx_tagbox[j].style.border=0;
					hx_tagboxa[j].style.border=0;
					hx_box1[j].style.display="none";
					hx_underline[j].style.display="none";
					hx_jianpan.style.display="none";
					hx_tagbox[hx_tagbox.length-1].style.width=152+"px";
					hx_tagbox[hx_tagbox.length-1].style.height=80+"px";
					hx_tagbox[hx_tagbox.length-1].style.marginTop=17+"px";
					hx_tagbox[hx_tagbox.length-1].style.lineHeight=51+"px";
					hx_tagbox[hx_tagbox.length-1].style.border=0;
					hx_tagboxa[hx_tagbox.length-1].style.border=0;
					hx_box1[hx_tagbox.length-1].style.display="none";
					hx_underline[hx_tagbox.length-1].style.display="none";


				};
				hx_tagbox[1].style.background="#e8bc0f";
				hx_tagbox[1].style.width=148+"px";
				hx_tagbox[1].style.height=76+"px";
				hx_tagbox[1].style.marginTop=0;
				hx_tagbox[1].style.border="2px solid #fff";
				hx_tagbox[1].style.lineHeight=66+"px";
				hx_box1[1].style.display="block";
				hx_underline[1].style.display="block";
				
					// hx_jianpan.style.display="block";
			}

		
		hx_tagbox[hx_tagbox.length-1].onclick=function(){
			for (var j = 0; j < hx_box1.length-1; j++) {
					hx_tagbox[j].style.background="#3dc75d";
					hx_tagbox[j].style.width=152+"px";
					hx_tagbox[j].style.height=80+"px";
					hx_tagbox[j].style.marginTop=17+"px";
					hx_tagbox[j].style.lineHeight=51+"px";
					hx_tagbox[j].style.border=0;
					hx_tagboxa[j].style.border=0;
					hx_box1[j].style.display="none";
					hx_jianpan.style.display="none";
				}
					hx_tagbox[hx_tagbox.length-1].style.width=152+"px";
					hx_tagbox[hx_tagbox.length-1].style.height=80+"px";
					hx_tagbox[hx_tagbox.length-1].style.marginTop=17+"px";
					hx_tagbox[hx_tagbox.length-1].style.lineHeight=51+"px";
					hx_tagbox[hx_tagbox.length-1].style.border=0;
					hx_tagboxa[hx_tagbox.length-1].style.border=0;
					hx_box1[hx_tagbox.length-1].style.display="none";
					// hx_jianpan.style.display="none";
				    hx_tagbox[1].style.background="#e8bc0f";
				    hx_underline[j].style.display="none";


				this.style.width=148+"px";
				this.style.height=76+"px";
				this.style.marginTop=0;
				this.style.border="2px solid #fff";
				this.style.lineHeight=66+"px";
				hx_box1[hx_tagbox.length-1].style.display="block";
			    hx_underline[hx_tagbox.length-1].style.display="block";
}
// 面试评价
var zq_mright=$(".zq_mright")[0];
	var span=$("span",zq_mright);
	function defen(a,b,c){
		span[0].style.right=270-a+"px";
		span[1].style.right=270-b+"px";
		span[2].style.right=270-c+"px";
	}
	defen(30,60,180)


//公司左边
var xColorbox=$(".x_colorbox")[0];
	var xLine=$(".x_line")[0];
	var number=$("b",$(".x_colorfont")[0])[0];
	var num=number.innerHTML;
	var span=$("span",$(".x_colorfont")[0])[0];
	function huoyuedu(){
		if(num<=120&&num>=0){
			xLine.style.left=num+"px";
		}
	}
	huoyuedu();
	if(num>=0&&num<=40){
		span.innerHTML="不活跃";
	}else if(num>40&&num<=80){
		span.innerHTML="活跃";
	}else if(num>80&&num<=120){
		span.innerHTML="很活跃";
	}



	var x_conrightBottom=$(".x_conright-bottom")[0];
	var wujiaonum=$("b",$(".wujiaonum")[0])[0];
	var wujiao=$("img",x_conrightBottom);
	var num=wujiaonum.innerHTML;
	var wujiao=function (){
		var n=4;
		if(Math.ceil(num)==5){
			wujiao.length=5;
		}else if(Math.ceil(num)==4){
			wujiao.length=4;
			wujiao[n].style.display="none";
		}else if(Math.ceil(num)==3){
			wujiao.length=3;
			wujiao[n].style.display="none";
			wujiao[n-1].style.display="none";
		}else if(Math.ceil(num)==2){
			wujiao.length=2;
			wujiao[n].style.display="none";
			wujiao[n-1].style.display="none";
			wujiao[n-2].style.display="none";
		}else if(Math.ceil(num)==1){
			wujiao.length=1;
			wujiao[n].style.display="none";
			wujiao[n-1].style.display="none";
			wujiao[n-2].style.display="none";
			wujiao[n-3].style.display="none";
		}
	}();


var x_threebox=$(".x_threebox");


/*// 下拉框
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



	// 修改手机，邮箱，网址
	var lhh_change=$(".lhh_change");
	var lhh_changegreen=$(".lhh_changegreen");
	for(var i=0;i<lhh_changegreen.length;i++){
		lhh_changegreen[i].index=i;
		lhh_changegreen[i].onclick=function(){
			lhh_change[this.index].value="";
		}

	}*/


	})