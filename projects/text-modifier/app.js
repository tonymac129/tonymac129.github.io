document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("text");
  const output = document.getElementById("output");
  const go = document.getElementById("go");
  const copy = document.getElementById("copy");
  go.addEventListener("click", (e) => {
    e.preventDefault();
    let value = text.value.toString();
    let letters = value.split("");
    let final = [];
    letters.forEach((letter) => {
      let cap = Math.round(Math.random());
      if (cap === 0) {
        letter = letter.toUpperCase();
      } else {
        letter = letter.toLowerCase();
      }
      final.push(letter);
    });
    let result = final.join("");
    output.innerHTML = result;
  });
  copy.addEventListener("click", () => {
    navigator.clipboard.writeText(output.innerHTML);
  });
});
