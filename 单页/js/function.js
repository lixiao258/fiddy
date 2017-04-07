
// 解决获取类名的兼容函数
function getclass(classname,father)
{	father=father||document;
	if(father.getElementsByClassName)
	{
		 return father.getElementsByClassName(classname);
	}
	else
	{
		var all=father.getElementsByTagName("*");
		var newarr=[];
		for(var i=0;i<all.length;i++)
		{
			if(checkrep(all[i].className,classname))
			{
				newarr.push(all[i]);
			}
		};
		return newarr;
	}
	
}
function checkrep(str,val)
{	
	var b=str.split(" ");
	for(var i=0;i<b.length;i++)
	{
		if(b[i]==val)
		{
			return true;
		}
	}
	return false;
}



// 解决获取样式的兼容函数
function getstyle(obj,attr){
	if(obj.currentStyle){
		return parseInt(obj.currentStyle[attr]);
	}
	else{
		return parseInt(getComputedStyle(obj,null)[attr]);
	}
}



// ****************************
	function $(selector,father){
		father=father||document;
		if(typeof selector=="string"){
			selector=selector.replace(/^\s*|\s*$/,"")
			if(selector.charAt(0)=="."){
				return getclass(selector.substring(1),father);
			}else if(selector.charAt(0)=="#"){
				return document.getElementById(selector.substring(1));
			}else if(/^[a-zA-Z][a-zA-Z1-6]*$/.test(selector)){
				return father.getElementsByTagName(selector);
			}
		}
		else if(typeof selector=="function"){
			window.onload=function(){
				selector();
			}
		}
	}

//******获取所有节点的兼容函数只有元素节点）
function getchilds(father){
	var childs=father.childNodes;
	var newarr=[];
	for(var i=0;i<childs.length;i++){
		if(childs[i].nodeType==1){
			newarr.push(childs[i]);
		}
	}
return newarr;
}






//***获取第一个子节点
function getfirst(father){
	return getchilds(father)[0];
}

//***获取最后一个子节点
function getlast(father){
	return getchilds(father)[getchilds(father).length-1];
}


//***获取指定位置子节点
function getnum(fathre,num){
	return getchilds(father)[num];
}



//获取下一个兄弟节点
function getnext(nodeobj){
	var next=nodeobj.nextSibling;
	if(next==null){
		return false;
	}
	while(next.nodeType==3||next.nodeType==8){
		next=next.nextSibling;
		if(next==null){
			return false;
		}
	}
	return next;
}



//获取上一个兄弟节点
function getprevious(nodeobj){
	var previous=nodeobj.nextSibling;
	if(previous==null){
		return false;
	}
	while(previous.nodeType==3||previous.nodeType==8){
		previous=previous.nextSibling;
		if(previous==null){
		return false;
	}
	}
	return previous;
}



//将一个元素插入到另一个元素的后面
function insertafter(father,newobj,nowobj){
	var next=getnext(nowobj);
	if(next){
		return father.insertBefore(newobj,next);
	}else{
		return father.appendChild(newobj);
	}
}

//将一个元素插入到另一个元素的前面

function insertbefore(newobj,nowobj){
	var father=nowobj.parentNode;
	return father.insertBefore(newobj,nowobj);
}
   //节点轮播
   