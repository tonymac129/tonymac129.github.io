const actionBtn = document.getElementById("action-btn");
const input = document.getElementById("input");
const colorSlider = document.getElementById("color-slider");
const colorValue = document.getElementById("color-value");
let showing = false;
let hue = 200;

actionBtn.addEventListener("click", () => {
  showing = !showing;
  if (showing) {
    input.classList.add("showing");
    input.classList.remove("hidden");
    input.classList.remove("hide");
  } else {
    input.classList.remove("showing");
    input.classList.add("hidden");
    setTimeout(() => {
      input.classList.add("hide");
    }, 300);
  }
});

colorSlider.addEventListener("input", (e) => {
  hue = e.target.value * 3.6;
  document.documentElement.style.setProperty("--primary-bg", `hsl(${hue},10%,10%)`);
  document.documentElement.style.setProperty("--first-color", `hsl(${hue},100%,50%)`);
  document.documentElement.style.setProperty("--second-color", `hsl(${hue - 40},100%,50%)`);
  colorValue.innerText = `hsl(${Math.round(hue)},100%,50%)`;
});
