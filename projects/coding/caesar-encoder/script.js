const input = document.getElementById("input");
const shift = document.getElementById("shift");
const form = document.getElementById("form");
const outputBox = document.getElementById("output");
const copy = document.getElementById("copy");
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
copy.addEventListener("click", () => {
  navigator.clipboard.writeText(output.innerHTML);
  copy.innerHTML = "Copied!";
  setTimeout(() => {
    copy.innerHTML = "Copy";
  }, 3000);
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let indexes = [];
  if (shift.value.length != -1) {
    input.value
      .toLowerCase()
      .split("")
      .forEach((char) => {
        indexes.push(alphabet.indexOf(char));
      });
  }
  let output = [];
  let index = 0;
  indexes.forEach((indexx) => {
    if (indexx !== -1) {
      let shiftedIndex = indexx + parseInt(shift.value);
      shiftedIndex = shiftedIndex > 25 ? shiftedIndex % 26 : shiftedIndex;
      output.push(alphabet[shiftedIndex]);
    } else {
      output.push(input.value.toLowerCase().split("")[index]);
    }
    index++;
  });
  outputBox.innerHTML = output.join("");
});
