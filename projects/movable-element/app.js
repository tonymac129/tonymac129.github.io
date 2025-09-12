document.addEventListener("DOMContentLoaded", function () {
  let isDragging = false;
  let offsetX, offsetY;
  let movableDiv = document.getElementById("movable");
  movableDiv.style.userSelect = "none";
  movableDiv.style.position = "absolute";
  movableDiv.style.width = "150px";
  movableDiv.style.height = "80px";
  movableDiv.style.backgroundColor = "black";
  movableDiv.style.color = "white";
  movableDiv.style.borderRadius = "30px";
  movableDiv.style.padding = "20px";
  movableDiv.style.cursor = "move";
  movableDiv.style.boxShadow = "0px 0px 10px black";

  movableDiv.addEventListener("mousedown", function (e) {
    isDragging = true;
    offsetX = e.clientX - movableDiv.getBoundingClientRect().left;
    offsetY = e.clientY - movableDiv.getBoundingClientRect().top;
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      let newTop = e.clientY - offsetY;
      let newWidth = e.clientX - offsetX;
      let maxHeight = window.innerHeight - movableDiv.offsetHeight;
      let maxWidth = window.innerWidth - movableDiv.offsetWidth;
      if (newTop >= 0 && newTop <= maxHeight && newWidth >=0 && newWidth <= maxWidth) {
        movableDiv.style.top = newTop + "px";
        movableDiv.style.left = newWidth + "px";
      } else {
        isDragging = false;
        return;
      }
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
  });
});
