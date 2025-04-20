document.addEventListener("DOMContentLoaded", () => {
  const inputForm = document.getElementById("input");
  const inputBar = document.getElementById("inputbar");
  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  let score = 0;
  let started = false;
  const inputBtn = document.querySelector(".inputbtn");
  const guessed = document.querySelector(".guessed");
  const guessedNumber = document.getElementById("current");
  const giveup = document.getElementById("giveup");
  const alert = document.querySelector(".alert");
  const info = document.querySelector(".info");
  const close = document.querySelector(".close");
  const modal = document.querySelector(".modalback");
  let alreadyGuessed = [];
  let minuteE = document.getElementById("minute");
  let secondE = document.getElementById("second");
  var countdownI = setInterval(() => {
    if (started === true) {
      let minute = parseInt(minuteE.innerHTML);
      let second = parseInt(secondE.innerHTML);
      second--;
      if (second < 0) {
        second = 59;
        minute--;
      }
      minuteE.innerHTML = minute.toString().padStart(2, "0");
      secondE.innerHTML = second.toString().padStart(2, "0");
      if (minute < 0) {
        clearInterval(countdownI);
        alert.innerHTML = `Oops, you ran out of time! You guessed ${score} out of the 50 states in 10 minutes. Try again later?`;
        minuteE.innerHTML = "00";
        secondE.innerHTML = "00";
        failed();
      }
    }
  }, 1000);
  giveup.addEventListener("click", () => {
    clearInterval(countdownI);
    alert.innerHTML = `You gave up! You guessed ${score} out of the 50 states, with ${minuteE.innerHTML} minutes and ${secondE.innerHTML} seconds remaining. Better luck next time?`;
    inputBar.disabled = "true";
    inputBtn.disabled = "true";
    failed();
  });
  inputForm.addEventListener("submit", (e) => {
    if (started === false) {
      started = true;
    }
    e.preventDefault();
    let guess = inputBar.value;
    let alreadyFlag = false;
    alert.innerHTML = "";
    if (guess !== "") {
      for (let i = 0; i < states.length; i++) {
        let state = states[i];
        if (guess.toUpperCase() === state.toUpperCase()) {
          if (alreadyGuessed.length > 0) {
            alreadyGuessed.forEach((already) => {
              if (already === state) {
                alreadyFlag = true;
                inputBar.value = "";
                alert.innerHTML = "You've already guessed this state!";
                return;
              }
            });
          }
          if (alreadyFlag === false) {
            let newState = document.createElement("div");
            newState.classList.add("guess");
            newState.innerHTML = state;
            guessed.appendChild(newState);
            inputBar.value = "";
            score++;
            alreadyGuessed.push(state);
            guessedNumber.innerHTML = score;
            alert.innerHTML = "";
            if (score === 50) {
              alert.innerHTML = `Congratulations! You've guessed all 50 states, with ${minuteE.innerHTML} minutes and ${secondE.innerHTML} seconds remaining!`;
              alert.style.color = "green";
              inputBar.disabled = "true";
              inputBtn.disabled = "true";
              guessedNumber.style.color = "green";
              clearInterval(countdownI);
            }
          }
          break;
        } else {
          inputBar.value = "";
          alert.innerHTML = "This is not a state!";
        }
      }
    }
  });

  info.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  close.addEventListener("click", () => {
    modal.style.display = "none";
  })

  function failed() {
    alreadyGuessed.forEach((already) => {
      states.forEach((state) => {
        if (already === state) {
          states.splice(states.indexOf(state), 1);
        }
      });
    });
    states.forEach((state) => {
      let newState = document.createElement("div");
      newState.classList.add("guess");
      newState.classList.add("failed");
      newState.innerHTML = state;
      guessed.appendChild(newState);
    });
  }
});
