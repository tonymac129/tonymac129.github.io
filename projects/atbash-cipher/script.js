const form = document.getElementById("form");
const input = document.getElementById("input");
const output = document.getElementById("output");
const copy = document.getElementById("copy");
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(output.innerHTML);
  copy.innerHTML = "Copied";
  setTimeout(() => {
    copy.innerHTML = "Copy";
  }, 2000);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputText = input.value.trim();
  output.parentElement.classList.remove("none");
  if (!inputText) {
    output.innerHTML = "The input message must be provided.";
    return;
  }
  output.innerHTML = inputText
    .split("")
    .map((char) => {
      let charIndex = alphabet.indexOf(char.toLowerCase());
      if (charIndex === -1) {
        return char;
      }
      return char === char.toUpperCase()
        ? alphabet[25 - charIndex].toUpperCase()
        : alphabet[25 - charIndex];
    })
    .join("");
});
