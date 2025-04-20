const modal = document.getElementById("modal");
const player = document.getElementById("player");
const blocks = document.querySelectorAll(".block");
const xscoreElement = document.getElementById("xscore");
const oscoreElement = document.getElementById("oscore");
const placeSound = document.getElementById("placeSound");
const winSound = document.getElementById("winSound");
const xdown = document.getElementById("xdown");
const odown = document.getElementById("odown");
const win = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let o = [];
let x = [];
let turn = "x";
let xscore = 0;
let oscore = 0;
placeSound.volume = 0.2;
winSound.volume = 0.1;

document.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("block") && e.target.innerHTML === "") {
    let blockNum = parseInt(target.getAttribute("id"));
    if (turn === "o") {
      o.push(blockNum);
      target.innerHTML = `<img src="o.svg">`;
      check(o);
      turn = "x";
      xdown.style.visibility = "visible";
      odown.style.visibility = "hidden";
    } else {
      x.push(blockNum);
      target.innerHTML = `<img src="x.svg">`;
      check(x);
      turn = "o";
      xdown.style.visibility = "hidden";
      odown.style.visibility = "visible";
    }
    placeSound.play();
  }
});

function restart() {
  closeModal();
  modal.style.visibility = "hidden";
  xdown.style.visibility = "visible";
  odown.style.visibility = "hidden";
  turn = "x";
  o = [];
  x = [];
  blocks.forEach((block) => {
    block.innerHTML = "";
    block.style.backgroundColor = "transparent";
  });
}

function closeModal() {
  modal.style.opacity = "0";
  modal.children[0].style.display = "none";
}

function finished(winPlayer) {
  player.innerHTML = "Player " + winPlayer + " wins!";
  modal.style.visibility = "visible";
  modal.style.opacity = "1";
  modal.children[0].style.display = "flex";
  if (winPlayer === "O") {
    oscore++;
    oscoreElement.innerHTML = oscore;
    oscoreElement.style.color = "var(--accent-color)";
    setTimeout(() => {
      oscoreElement.style.color = "white";
    }, 500);
  } else if (winPlayer === "X") {
    xscore++;
    xscoreElement.innerHTML = xscore;
    xscoreElement.style.color = "var(--accent-color)";
    setTimeout(() => {
      xscoreElement.style.color = "white";
    }, 500);
  }
}

function check(turnPlayer) {
  if (o.length + x.length === 9) {
    finished("draw");
    player.innerHTML = "It's a draw!";
  }
  for (let i = 0; i < win.length; i++) {
    if (win[i].every((num) => turnPlayer.includes(num))) {
      if (turnPlayer === o) {
        finished("O");
      } else {
        finished("X");
      }
      win[i].forEach((num) => {
        document.getElementById(num).style.backgroundColor =
          "var(--accent-color)";
      });
      winSound.play();
    }
  }
}

function color(setColor) {
  let root = document.documentElement.style;
  if (setColor === "gold") {
    root.setProperty("--background-color", "rgb(30, 20, 0)");
    root.setProperty("--accent-color", "rgb(170, 110, 0)");
    root.setProperty("--accent-hover", "rgb(150, 90, 0)");
  } else if (setColor === "cyan") {
    root.setProperty("--background-color", "rgb(0, 30, 30)");
    root.setProperty("--accent-color", "rgb(0, 150, 150");
    root.setProperty("--accent-hover", "rgb(0, 130, 130)");
  } else if (setColor === "green") {
    root.setProperty("--background-color", "rgb(0, 30, 0)");
    root.setProperty("--accent-color", "rgb(0, 90, 0");
    root.setProperty("--accent-hover", "rgb(0, 70, 0)");
  } else if (setColor === "brown") {
    root.setProperty("--background-color", "rgb(40, 0, 0)");
    root.setProperty("--accent-color", "rgb(150, 0, 0");
    root.setProperty("--accent-hover", "rgb(130, 0, 0)");
  } else {
    root.setProperty("--background-color", "rgb(30, 0, 30)");
    root.setProperty("--accent-color", "rgb(100, 0, 100");
    root.setProperty("--accent-hover", "rgb(80, 0, 80)");
  }
}
