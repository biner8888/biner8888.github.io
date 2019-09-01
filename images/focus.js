window.onload = function ()
{
  var oBox = document.getElementById("box");
  var oList = oBox.getElementsByTagName("ul")[0];
  var aImg = oBox.getElementsByTagName("img");
  var timer = playTimer = null;
  var index = i = 0;
  var bOrder = true;
  var aTmp = [];
  var aBtn = null;
  //生成数字
  for (i = 0; i < aImg.length; i++) aTmp.push("<li>" + (i + 1) + "</li>");
  //插入元素
  var oCount = document.createElement("ul");
  oCount.className = "count";
  oCount.innerHTML = aTmp.join("");
  oBox.appendChild(oCount); 
  aBtn = oBox.getElementsByTagName("ul")[1].getElementsByTagName("li");
  //初始化状态
  cutover();
  //
  for (i = 0; i < aBtn.length; i++)
  {
    aBtn[i].index = i;
    aBtn[i].onmouseover = function ()
    {
      index = this.index;
      cutover()
    }
  }
  function cutover()
  {
    for (i = 0; i < aBtn.length; i++) aBtn[i].className = "";
    aBtn[index].className = "current";      
    startMove(-(index * aImg[0].offsetHeight))
  }
  function next()
  {
    bOrder ? index++ : index--;
    index <= 0 && (index = 0, bOrder = true);
    index >= aBtn.length - 1 && (index = aBtn.length - 1, bOrder = false);
    cutover();
  }
  playTimer = setInterval(next, 3000);
  //鼠标移入展示区停止自动播放
  oBox.onmouseover = function ()
  {
    clearInterval(playTimer);
  };
  //鼠标离开展示区开始自动播放
  oBox.onmouseout = function ()
  {
    playTimer = setInterval(next, 3000)
  };
  function startMove(iTarget)
  {
    clearInterval(timer);
    timer = setInterval(function ()
    {
      doMove(iTarget)
    }, 30)  
  }
  function doMove (iTarget)
  {   
    var iSpeed = (iTarget - oList.offsetTop) / 10;
    iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);   
    oList.offsetTop == iTarget ? clearInterval(timer) : oList.style.top = oList.offsetTop + iSpeed + "px"
  }
};


var timerID = null;
var timerRunning = false;
function stopclock (){
  if(timerRunning)
  clearTimeout(timerID);
  timerRunning = false;
}
function startclock () {
  stopclock();
  showtime();
}
function showtime () {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var Week=['星期天','星期一','星期二','星期三','星期四','星期五','星期六'];
  var timeValue = now.getYear()+1900+"年"+(now.getMonth()+1)+"月"+now.getDate()+"日 ";
    timeValue += Week[now.getDay()]+" ";
    timeValue += now.getHours();
    timeValue += ((minutes < 10) ? ":0" : ":") + minutes;
    timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
  $('.l2').html(timeValue);
  timerID = setTimeout("showtime()",1000);
  timerRunning = true;
}
$(function(){
  startclock(); 
});

var speed=30;
marquee_product2.innerHTML=marquee_product1.innerHTML;
function Marquee(){
  if(marquee_demo.scrollLeft>=marquee_product1.scrollWidth){
    marquee_demo.scrollLeft=0;
  }else{
    marquee_demo.scrollLeft++;
  }
}
var MyMar=setInterval(Marquee,speed);
marquee_demo.onmouseover=function(){clearInterval(MyMar);}
marquee_demo.onmouseout=function(){MyMar=setInterval(Marquee,speed);}

