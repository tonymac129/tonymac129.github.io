const input = document.getElementById("input");
const btn = document.getElementById("btn");
const output = document.getElementById("output");
let category = "Any";
let safe = "safe-mode";
let lang = "en";
let type = "";
let flags = "";
let amount = "1";
btn.addEventListener("click", () => {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://v2.jokeapi.dev/joke/${category}?${safe}&blacklistFlags=${flags}&lang=${lang}&type=${type}&amount=${amount}`,
    true
  );
  xhr.onload = function () {
    if (xhr.status === 200) {
      let joke = JSON.parse(xhr.responseText);
      output.innerHTML =
        joke.type === "twopart"
          ? joke.setup + "<br>" + joke.delivery
          : joke.joke;
    } else {
      console.error("Error:", xhr.status);
    }
  };
  xhr.onerror = function () {
    console.error("Request failed");
  };
  xhr.send();
});
