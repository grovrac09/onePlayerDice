// RULES
let showBtn = document.getElementById("showRules");

showBtn.addEventListener("click", () => {
    if (rules.style.display == "none") {
        rules.style.display = "block";
        showBtn.textContent = "HIDE RULES";
    } else if (rules.style.display = "block") {
        rules.style.display = "none";
        showBtn.textContent = "SHOW RULES";

    }
});

// STYLING
let dice = document.getElementById("dice");
let heading = document.getElementById("heading");
let result = document.getElementById("result");

// BUTTONS
let rollBtn = document.getElementById("rollBtn");
let playAgain = document.getElementById("playAgainBtn");

// DICE ROLLS
let total = 0;

rollBtn.addEventListener("click", () => {
  document.getElementById("diceMp3").play();
  let num = Math.floor(Math.random()*6);
  result.style.display = "flex";
  dice.style.display = "flex";
  heading.innerHTML = "";
  if (num == 1) {
    total = 0;
    result.style.display = "none";
    heading.innerHTML = "Game over!"
    rollBtn.style.display = "none";
    playAgain.style.display = "block";
    dice.innerHTML = '<i id="one" class="fas fa-dice-one"></i>';
  } else if (num == 2) {
    total += 2;
    result.textContent = `${total}`;
    heading.innerHTML = "";
    dice.innerHTML = `<i id="two" class="fas fa-dice-two"></i>`;
  } else if (num == 3) {
    total += 3;
    result.textContent = `${total}`;
    heading.innerHTML = "";
    dice.innerHTML = `<i id="three" class="fas fa-dice-three"></i>`;
  } else if (num == 4) {
    total += 4;
    result.textContent = `${total}`;
    heading.innerHTML = "";
    dice.innerHTML = `<i id="four" class="fas fa-dice-four"></i>`;
  } else if (num == 5) {
    total += 5;
    result.textContent = `${total}`;
    heading.innerHTML = "";
    dice.innerHTML = `<i id="five" class="fas fa-dice-five"></i>`;
  } else if (num == 6) {
    total += 6;
    result.textContent = `${total}`;
    heading.innerHTML = "";
    dice.innerHTML = `<i id="six" class="fas fa-dice-six"></i>`;
  } if (total >= 20) {
    result.textContent = `${total}`;
    heading.innerHTML = "Winner!";
    rollBtn.style.display = "none";
    playAgain.style.display = "block";
  }
});

playAgain.addEventListener("click", () => {
  total = 0;
  result.style.display= "none";
  heading.innerHTML = "Roll to begin..";
  rollBtn.style.display = "block";
  playAgain.style.display = "none";
  dice.style.display = "none";
});

