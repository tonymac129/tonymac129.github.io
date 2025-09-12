const slide = document.querySelector(".slide");
const img = document.querySelectorAll(".slide img");

const prev = document.querySelector("#prevBtn");
const next = document.querySelector("#nextBtn");

let counter = 1;
const size = img[0].clientWidth;

slide.style.transform = "translateX(" + (-size*counter) + "px";

nextBtn.addEventListener("click", ()=>{
  if(counter>= img.length-1 ) return;
  slide.style.transition = "transform 0.3s ease-in-out";
  counter++;
  slide.style.transform = "translateX(" + (-size*counter) + "px";
  
})

prevBtn.addEventListener("click", ()=>{
  if(counter<=0) return;
  slide.style.transition = "transform 0.3s ease-in-out";
  counter--;
  slide.style.transform = "translateX(" + (-size*counter) + "px";
  
})

slide.addEventListener("transitionend", ()=>{
  console.log("listening"); 
  if (img[counter].id=="last-clone"){
    slide.style.transition = "none";
    counter = img.length -2;
    slide.style.transform = "translateX(" + (-size*counter) + "px";
    console.log("Last"); 
  }
  if (img[counter].id=="first-clone"){
    slide.style.transition = "none";
    counter = 1;
    slide.style.transform = "translateX(" + (-size*counter) + "px";
    console.log("First"); 
  }
})