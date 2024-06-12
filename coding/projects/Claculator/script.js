function cal(){
  var num1 = document.getElementById("num1").value;
  var operation = document.getElementById("operation").value;
  var num2 = document.getElementById("num2").value;
  if (operation=="1"){
    var numa = parseFloat(num1);
    var numb = parseFloat(num2);
    var answer = numa + numb;
    document.querySelector("#answer").innerHTML = "Answer: " + answer;
  }
  else if(operation=="2"){
    var numa = parseFloat(num1);
    var numb = parseFloat(num2);
    var answer = numa - numb;
    document.querySelector("#answer").innerHTML = "Answer: " + answer;
  }
  else if(operation=="3"){
    var numa = parseFloat(num1);
    var numb = parseFloat(num2);
    var answer = numa * numb;
    document.querySelector("#answer").innerHTML = "Answer: " + answer;
  }
  else if(operation=="4"){
    var numa = parseFloat(num1);
    var numb = parseFloat(num2);
    var answer = numa / numb;
    document.querySelector("#answer").innerHTML = "Answer: " + answer;
  }
  else if(operation=="5"){
    var numa = parseFloat(num1);
    var answer = numa * numa;
    document.querySelector("#answer").innerHTML = "Answer: " + answer;
  }
  else if(operation=="6"){
    var numa = parseFloat(num1);
    var answer = (numa) * (numa) * (numa);
    document.querySelector("#answer").innerHTML = "Answer: " + answer;
  }
  else if(operation=="8"){
    var numa = parseFloat(num1);
    var answer = Math.sqrt(numa);
    document.querySelector("#answer").innerHTML = "Answer: " + answer;
  }
  else if(operation=="9"){
    var numa = parseFloat(num1);
    var answer = Math.cbrt(numa);
    document.querySelector("#answer").innerHTML = "Answer: " + answer;
  }

  else if(operation=="10"){
    var numa = parseFloat(num1);
    var total = numa;
    while(numa > 1){
      total *= (numa-1);
      numa--;
    }
    document.querySelector("#answer").innerHTML = "Answer: " + total;
  }
  else if(operation=="7"){
    var numa = parseFloat(num1);
    var numb = parseFloat(num2);
    var total = numa;
    while(numb > 1){
      total *= numa;
      numb--;
    }
    document.querySelector("#answer").innerHTML = "Answer: " + total;
  }
  else {
    document.querySelector("#answer").innerHTML = "Please select an operator in the \"Operator\" field to calculate!";
  }
}

function clearfunc() {
  document.getElementById("num1").value="";
  document.getElementById("operation").value="";
  document.getElementById("num2").value="";
  document.querySelector("#answer").innerHTML = "Answer";
}

const button = document.getElementById("button");
const clear = document.getElementById("button2");
button.addEventListener("click",cal);
clear.addEventListener("click",clearfunc);
