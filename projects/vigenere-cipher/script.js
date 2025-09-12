const encrypt = document.getElementById("encrypt");
const decrypt = document.getElementById("decrypt");
const input = document.getElementById("input");
const key = document.getElementById("key");
const output = document.getElementById("output");
const copy = document.getElementById("copy");
const randomKey = document.getElementById("checkbox");
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(output.innerHTML);
  copy.innerHTML = "Copied";
  setTimeout(() => {
    copy.innerHTML = "Copy";
  }, 2000);
});

encrypt.addEventListener("click", () => {
  let inputText = input.value.trim();
  if (randomKey.checked) {
    let length = Math.round(Math.random() * 5) + 3;
    let randomKeyArr = [];
    for (let i = 0; i < length; i++) {
      randomKeyArr.push(alphabet[Math.floor(Math.random() * 26)]);
    }
    key.value = randomKeyArr.join("");
  }
  let keyText = key.value.trim();
  let keyIndexes = keyText.split("").map((char) => {
    return alphabet.indexOf(char.toLowerCase());
  });
  output.parentElement.classList.remove("none");
  if (!keyIndexes.every((index) => index !== -1)) {
    output.innerHTML = "Invalid key. Please enter only letters.";
    return;
  }
  if (!inputText || !keyText) {
    output.innerHTML = "Both input message and key must be provided.";
    return;
  }
  let keyCount = 0;
  output.innerHTML = inputText
    .split("")
    .map((char) => {
      let charIndex = alphabet.indexOf(char.toLowerCase());
      if (charIndex === -1) {
        return char;
      }
      let shiftedIndex =
        (charIndex + keyIndexes[keyCount % keyIndexes.length]) % 26;
      keyCount++;
      return char === char.toUpperCase()
        ? alphabet[shiftedIndex].toUpperCase()
        : alphabet[shiftedIndex];
    })
    .join("");
});

decrypt.addEventListener("click", () => {
  let inputText = input.value.trim();
  if (randomKey.checked) {
    let length = Math.round(Math.random() * 5) + 3;
    let randomKeyArr = [];
    for (let i = 0; i < length; i++) {
      randomKeyArr.push(alphabet[Math.floor(Math.random() * 26)]);
    }
    key.value = randomKeyArr.join("");
  }
  let keyText = key.value.trim();
  let keyIndexes = keyText.split("").map((char) => {
    return alphabet.indexOf(char.toLowerCase());
  });
  output.parentElement.classList.remove("none");
  if (!keyIndexes.every((index) => index !== -1)) {
    output.innerHTML = "Invalid key. Please enter only letters.";
    return;
  }
  if (!inputText || !keyText) {
    output.innerHTML = "Both input message and key must be provided.";
    return;
  }
  let keyCount = 0;
  output.innerHTML = inputText
    .split("")
    .map((char) => {
      let charIndex = alphabet.indexOf(char.toLowerCase());
      if (charIndex === -1) {
        return char;
      }
      let targetIndex = charIndex - keyIndexes[keyCount % keyIndexes.length];
      let shiftedIndex = targetIndex < 0 ? 26 + targetIndex : targetIndex;
      keyCount++;
      return char === char.toUpperCase()
        ? alphabet[shiftedIndex].toUpperCase()
        : alphabet[shiftedIndex];
    })
    .join("");
});
