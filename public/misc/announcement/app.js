const annoucement = document.getElementById("annoucement");
const close = document.getElementById("close");
annoucement.classList.remove("not-appear");

function notappear() {
  annoucement.classList.add("not-appear");
}

close.addEventListener("click",notappear);