function countdown(){
  var y=document.querySelector(".yearInput").value;
  var m=document.querySelector(".monthInput").value;
  var d=document.querySelector(".dayInput").value;
  var h=document.querySelector(".hourInput").value;
  var min=document.querySelector(".minuteInput").value;
  var s=document.querySelector(".secondInput").value;
  var title=document.querySelector(".nameInput").value;
  var countDateTest =new Date(Date.UTC(y, m, d, h, min, s)).getTime();
  const now = new Date ().getTime(); 
  const gap=(countDateTest-now)-2660400016; 
  const second=1000;
  const minute=second*60;
  const hour=minute*60;
  const day=hour*24;
  const year=day*365;
  const fYear=Math.floor(gap/year);
  const fDay=Math.floor((gap%year)/day);
  const fHour=Math.floor(((gap%year)%day)/hour);
  const fMinute=Math.floor((((gap%year)%day)%hour)/minute);
  const fSecond=Math.floor(((((gap%year)%day)%hour)%minute)/second);
  document.querySelector(".title").innerText=`${title} | Count Down Timer`;
  document.querySelector(".name").innerText=title;
  document.querySelector(".year").innerText=fYear;
  document.querySelector(".day").innerText=fDay;
  document.querySelector(".hour").innerText=fHour;
  document.querySelector(".minute").innerText=fMinute;
  document.querySelector(".second").innerText=fSecond;
  console.log("Hello! If you are reading this, that means you are also a developer and interested on my code, right? The data below are every \"hour\" \"minute\" and \"second\". Oh, and this is a project based on a YouTube tutorial, if you are interesting on it, go to YouTube and search\"developedbyed\" and you can find the tutorial! Thanks for reading this garbage!😁");
  console.log(y,m,d,h,min,s,title);
  console.log(countDateTest,now,gap);
  console.log(fHour,fMinute,fSecond);
  if (fDay==-1&&fHour==-1&&fMinute==-1&&fSecond==-1&&fYear==-1){
    alert("Time's up!");
  }
}

function whole(){
  countdown();
  setInterval(countdown,1000);
}

const button=document.querySelector(".go");
button.addEventListener("click",whole)