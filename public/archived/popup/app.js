document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("macvg-btn");
  const up = document.getElementById("macvg-pop");
  const off = document.getElementById("macvg-off");
  button.addEventListener("click", function () {
    up.classList.remove("macvg-close");
  });
  off.addEventListener("click", function () {
    up.classList.add("macvg-close");
  });
});
