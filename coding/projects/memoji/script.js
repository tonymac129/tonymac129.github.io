const cardsContainer = document.querySelector(".cards");
const moveElement = document.getElementById("moves");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");
const replayBtn = document.getElementById("replay");
const modal = document.getElementById("modal");
const modalTime = document.getElementById("modal-time");
const modalMove = document.getElementById("modal-move");
const startModal = document.getElementById("startmodal");
const startBtn = document.getElementById("start");
const difficulty = document.getElementById("difficulty");
let level = 2;

startBtn.addEventListener("click", () => {
  startModal.style.display = "none";
  startGame(2);
});

let revealed = [],
  move = 0,
  success = [];
let timer;

replayBtn.addEventListener("click", () => {
  difficulty.innerHTML = level == 4 ? "Medium" : "Hard";
  move = 0;
  revealed = [];
  success = [];
  modal.style.display = "none";
  moveElement.innerHTML = "0";
  minuteElement.innerHTML = "0";
  secondElement.innerHTML = "00";
  clearInterval(timer);
  document.querySelectorAll(".back").forEach((card) => {
    card.style.display = "flex";
    cardsContainer.style.pointerEvents = "none";
  });
  setTimeout(() => {
    startGame(level);
  }, 1000);
});

function startGame(number) {
  let num = number;
  document
    .querySelector(":root")
    .style.setProperty("--card-size", String(470 / num) + "px");

  const emojis = [
    "🐵",
    "🤡",
    "💀",
    "🗿",
    "🤓",
    "😎",
    "🥵",
    "🤤",
    "🤪",
    "🍑",
    "🍆",
    "😘",
    "🤫",
    "🤨",
    "🥶",
    "🍇",
    "😈",
    "💩",
  ];
  cardsContainer.innerHTML = "";
  let emojisUsed = emojis.slice(0, (num * num) / 2);
  let emojisArr = emojisUsed.concat(emojisUsed);

  for (let i = 0; i < num * num; i++) {
    let randomIndex = Math.floor(Math.random() * emojisArr.length);
    let newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.innerHTML = `<div class="back"></div><div class="front">${emojisArr[randomIndex]}</div>`;
    emojisArr.splice(randomIndex, 1);
    cardsContainer.appendChild(newCard);
  }
  let seconds = 0;
  let minutes = 0;
  timer = setInterval(function () {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    secondElement.innerHTML = seconds.toString().padStart(2, "0");
    minuteElement.innerHTML = minutes;
  }, 1000);
  setTimeout(function () {
    document.querySelectorAll(".back").forEach((card) => {
      card.style.display = "flex";
      cardsContainer.style.pointerEvents = "auto";
    });
  }, 1500);

  document.addEventListener("click", cardClickHandler);
}

function cardClickHandler(e) {
  let card = e.target;
  if (card.classList.contains("back")) {
    card.style.display = "none";
    revealed.push(card.parentElement.children[1]);
    if (revealed.length === 2) {
      move++;
      moveElement.innerHTML = move;
      if (revealed[0].innerHTML !== revealed[1].innerHTML) {
        revealed.forEach((item) => {
          setTimeout(() => {
            item.parentElement.children[0].style.display = "flex";
          }, 500);
        });
      } else {
        revealed.forEach((item) => {
          item.style.backgroundColor = "green";
          success.push(item);
        });
      }
      revealed = [];
    }
    if (success.length == level * level) {
      clearInterval(timer);
      level += 2;
      if (level == 8) {
        modal.innerHTML = `<div class="modal">
         <h2>You beat the game!</h2>
         <p>Congratulations! You beat the final level in ${minuteElement.innerHTML}:${secondElement.innerHTML} with ${move} moves! Thanks for playing this little game!</p>
       </div>`;
      }
      setTimeout(() => {
        modal.style.display = "flex";
        modalTime.innerHTML =
          minuteElement.innerHTML + ":" + secondElement.innerHTML;
        modalMove.innerHTML = move;
        document.removeEventListener("click", cardClickHandler);
      }, 1000);
    }
  }
}
