const form = document.getElementById("form");
const input = document.getElementById("input");
const output = document.getElementById("output");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newArray = input.value.split(",").map((num) => {
    return parseInt(num);
  });
  output.innerHTML = draw(newArray);
});

function draw(waves) {
  let fin = [];
  for (let i = Math.max(...waves); i > 0; i--) {
    let index = 0;
    let array = [];
    for (let g = waves.length; g > 0; g--) {
      if (waves[index] >= i) {
        array.push("■");
      } else {
        array.push("□");
      }
      index++;
    }
    fin.push(array.join(""));
  }
  return fin.join("<br>");
}
