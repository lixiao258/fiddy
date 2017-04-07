/*
1. 构造一个通用函数。
2. 获取样式的兼容性。
3. 获取元素。
4. 获取所有的子节点的兼容函数。
5. 获取第一个子节点。
6. 获取最后一个子节点。
7. 获取任意位置一个子节点。
8. 获取下一个兄弟节点。
9. 获取上一个兄弟节点。
10.将一个元素插入到另一个元素的后面。
*/

/*1.构造一个通用的函数
1. 先对浏览器进行判断
（利用if语句进行判断，判断条件：是否能够识别类名获取元素的语句）
2. 能识别的用类名进行获取，识别不了的用其他的方法代替
3. 分析：IE8识别不了类名，并且用id只能获取一个。排除这两种以后，还有标签语句。标签语句能选出所有，然后进行筛选。
4. 方法：
   a.利用标签获取所有的标签
   b.对选出的数组进行遍历 
   c.利用className选择出能够匹配的类名
   d.利用push将符合条件的元素赋值在一个空的数组内

细节问题：符合条件的返回值return
          选出标签的类名用className
          选择所有的标签有 * 

细节补充：
    1.为防止出现一个标签多个类名的情况，将匹配条件进行单独的判断
    2.首先利用split将选出的所有标签的类名形成的字符串转换为数组
    3.将选出的数组进行匹配 有符合类名条件的return出 true，若遍历完的没有符合条件的，待循环结束以后return出false*/




/*function getClass(classname,father){
  //利用 || 的特性简化输入的形参 若输入形参father则为输入的形参，若没有输入形参则为默认的document。
  father=father||document;
  //利用if语句对浏览器进行判断
	if(father.getElementsByClassName){
        return father.getElementsByClassName(classname);
        //符合条件用类名return选出的元素
	}else{
    //不符合条件的利用标签进行转换筛选出达到要求的元素
       var all=father.getElementsByTagName("*");
       //利用*选出所有的标签
       var newarr=[];
       //利用className选出类名进行匹配
        for(var i=0;i<all.length;i++){
       	   if(checkPepeat(all[i].className,classname)){
           newarr.push(all[i]);
           //将符合条件的元素输入到一个空的数组中。
       	   }
       }
        return newarr;
        //return出循环以后选出的数组
	}
} 
function checkPepeat(str,leiming){
  //将字符串转化为数组进行遍历判断是否有符合的类名
  var aa=str.split(" ");
    for(var i=0;i<aa.length;i++){
      if(aa[i]==leiming){
        return true;
      }
    }
    return false;
}*/

function getClass(classname,father){
  father=father||document
  if(father.getElementsByClassName){
    return father.getElementsByClassName(classname)
  }else{
    var all=father.getElementsByTagName("*");
    var newarr=[];
    for(i=0;i<all.length;i++){
      if(rePepeat(all[i].className,classname)){
        newarr.push(all[i])
      }
    }
    return newarr;
  }
}
function rePepeat(str,leiming){
  var aa=str.split(" ");
  for(var j=0;j<aa.length;j++){
    if(aa[j]==leiming){
      return true;
    }
  }
  return false;
}

//2.获取样式的兼容性
//obj:获取哪一个对象


function getStyle(obj,attr){
  if(obj.currentStyle){
    return parseInt(obj.currentStyle[attr]);
  }else{
    return parseInt(getComputedStyle(obj,null)[attr]);
  }
}




/*3.获取元素*/

function $(selector,father){
    father=father||document;
    if(typeof selector=="string"){
      selector=selector.replace(/^\s*|\s*$/,"");
      //两个斜杠杠用来定界，中间竖杠杠 | 为中间的字符串, ^$定开始结束  \s空格   *表示多个空格
        if(selector.charAt(0)=="."){
          return getClass(selector.substring(1));
        }else if(selector.charAt(0)=="#"){
          return document.getElementById(selector.substring(1));
          //id的范围只能是document，不能缩小检测范围
        }else if(/^[a-zA-Z][a-zA-Z1-6]*$/.test(selector)){
          return father.getElementsByTagName(selector);
        }
    }else if(typeof selector=="function"){
      window.onload=function(){
          selector();
      }
    }

}

/*4.2016.10.25 获取所有的子节点的兼容函数 （只有元素节点）*/

function getChilds(father){
  var childs=father.childNodes;
  var newarr=[];
  for(var i=0;i<childs.length;i++){
    if(childs[i].nodeType==1){
      newarr.push(childs[i]);
    }
  }
  return newarr;
}

/*5.获取第一个子节点*/
function getFirst(father){
  return getChilds(father)[0];
}

/*6.获取最后一个子节点*/
function getLast(father){
  return getChilds(father)[getChilds(father).length-1];
}

/*7.获取任意位置子节点*/
function getNum(father,num){
  return getChilds(father)[num];
}

/*8.获取下一个兄弟节点*/
function getNext(nodeObj){
  var next=nodeObj.nextSibling;
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

/*9.获取上一个兄弟节点*/
function getPrevious(nodeObj){
  var previous=nodeObj.previousSibling;
  if(previous==null){
    return false;
  }
      while(previous.nodeType==3||previous.nodeType==8){
        previous=previous.previousSibling;
          if(previous==null){
            return false;
          }
      }
  return previous;    
}


/*10.将一个元素插入到另一个元素的后面*/
function insertAfter(father,newobj,nowobj){
  var next=getNext(nowobj);
  if(next){
    father.insertBefore(newobj,next);
  }else{
  father.appendChild(newobj);
  }
}