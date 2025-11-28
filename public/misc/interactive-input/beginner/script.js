const actionBtn = document.getElementById("action-btn");
const input = document.getElementById("input");

actionBtn.addEventListener("click", () => {
  input.classList.add("animating");
  setTimeout(() => {
    input.classList.remove("animating");
  }, 500);
});

const colorSlider = document.getElementById("color-slider");
let hue = 250;

colorSlider.addEventListener("input", (e) => {
  hue = e.target.value * 3.6;
  const rootStyles = document.documentElement.style;
  rootStyles.setProperty("--primary-bg", `hsl(${hue},10%,10%)`);
  rootStyles.setProperty("--first-color", `hsl(${hue},100%,50%)`);
  rootStyles.setProperty("--second-color", `hsl(${hue - 40},100%,50%)`);
});
