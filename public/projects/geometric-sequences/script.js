function calculator(){
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var cf = document.getElementById("c").value;
  var c = parseFloat(cf);
  var state = Number.isInteger(c);
  console.log(state);
  if (state){
    var power = Math.pow(b, c);
    var answer = (a*(1-(power)))/(1-b);
    var total = Math.round(answer*100)/100;
    console.log(total);
    document.querySelector("#answer").innerText = "Sum: " + total;
  }
  else {
    

    document.querySelector("#answer").innerText = "The number of terms must be an integer!";
  }
}

setInterval(calculator,1000);