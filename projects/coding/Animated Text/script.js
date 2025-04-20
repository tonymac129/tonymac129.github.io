function appear(){
  var text = document.querySelector(".text");
  var position = text.getBoundingClientRect().top;
  var screenPosition = window.innerHeight/1.7;

  if(position<screenPosition){
    text.classList.add("effect");
  }
}

window.addEventListener('scroll',appear);