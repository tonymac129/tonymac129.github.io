document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  const menu = document.getElementById("menu");
  menu.style.display = "block";
  console.log(e.clientY, menu.getBoundingClientRect().width);
  if (
    e.clientY >= window.innerHeight - menu.getBoundingClientRect().height &&
    e.clientX >= window.innerWidth - menu.getBoundingClientRect().width - 90
  ) {
    menu.style.top = e.clientY - menu.getBoundingClientRect().height + "px";
    menu.style.left =
      e.clientX - menu.getBoundingClientRect().width - 90 + "px";
  } else if (
    e.clientY >=
    window.innerHeight - menu.getBoundingClientRect().height
  ) {
    menu.style.top = e.clientY - menu.getBoundingClientRect().height + "px";
    menu.style.left = e.clientX + "px";
  } else if (
    e.clientX >=
    window.innerWidth - menu.getBoundingClientRect().width - 90
  ) {
    menu.style.top = e.clientY + "px";
    menu.style.left =
      e.clientX - menu.getBoundingClientRect().width - 90 + "px";
  } else {
    menu.style.top = e.clientY + "px";
    menu.style.left = e.clientX + "px";
  }
});

document.addEventListener("click", function (e) {
  const menu = document.getElementById("menu");
  menu.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const copy = document.getElementById("copy");
  const share = document.getElementById("share");
  const dark = document.getElementById("dark");
  const light = document.getElementById("light");
  const body = document.getElementById("body");
  copy.addEventListener("mousedown", function (e) {
    e.preventDefault();
    foo();
  });
  share.addEventListener("click", function () {
    navigator.clipboard.writeText(window.location.href);
    alert(
      "Link copied! Share it through an email, a post, text, or any other form of communication!"
    );
  });
  dark.addEventListener("click", function () {
    let check = document.getElementById("check");
    let lCheck = document.getElementById("check2");
    if (check.style.visibility === "hidden") {
      check.style.visibility = "visible";
      lCheck.style.visibility = "hidden";
      body.style.backgroundColor = "rgb(60, 60, 60)";
      body.style.color = "white";
    } else {
      console.log("already in dark!");
    }
  });
  light.addEventListener("click", function () {
    let check = document.getElementById("check2");
    let dCheck = document.getElementById("check");
    if (check.style.visibility === "hidden") {
      check.style.visibility = "visible";
      dCheck.style.visibility = "hidden";
      body.style.backgroundColor = "rgb(200, 200, 200)";
      body.style.color = "black";
    } else {
      console.log("already in dark!");
    }
  });
});

function foo() {
  const selected = window.getSelection();
  navigator.clipboard.writeText(selected);
}
