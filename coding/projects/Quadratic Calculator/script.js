function calculator(){
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const c = document.getElementById("c").value;
  console.log(a,b,c);
  if((b*b)-(4*a*c)<0){
    var root1 = Math.sqrt(0-((b*b)-(4*a*c)));
    var down = 2*a;
    var down1 = down.toString();
    var first = (0-b)/(2*a);
    var first2 = first.toString();
    var seconda = root1/(2*a);
    var second = seconda.toString();
    var second2 = second+"i";
    var answerF = first2+"+"+second2;
    var answerF2 = first2+"-"+second2;
    console.log("This is different:"+answerF+" or "+answerF2);
    document.querySelector("#positive").innerText = "X= " + answerF;
    document.querySelector("#negative").innerText = "X= " + answerF2;
  }
  else {
    var root1 = Math.sqrt((b*b)-(4*a*c));
    var upa = 0-b + root1;
    var upb = 0-b - root1;
    var down = 2*a;
    var down1 = down.toString();
    var answerF = upa/down;
    var answerF2 = upb/down;
    console.log(answerF,answerF2);
    document.querySelector("#positive").innerText = "X= " + answerF;
    document.querySelector("#negative").innerText = "X=" + answerF2;
  }
}

setInterval(calculator,1000);