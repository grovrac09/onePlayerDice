let diceOne = document.getElementById("one");
let diceTwo = document.getElementById("two");
let diceThree = document.getElementById("three");
let diceFour = document.getElementById("four");
let diceFive = document.getElementById("five");
let diceSix = document.getElementById("six");

let heading = document.getElementById("heading");
let winner = document.getElementById("winner");
let loser = document.getElementById("loser");
let result = document.getElementById("result");

let rollBtn = document.getElementById("rollBtn");
let playAgain = document.getElementById("playAgainBtn");

let total = 0;

rollBtn.addEventListener("click", () => {
  let num = Math.floor(Math.random()*6);
  heading.style.display = "none";
  if (num == 1) {
    total = 0;
    loser.style.display = "block";
    diceOne.style.display = "block";
    rollBtn.style.display = "none";
    playAgain.style.display = "block";
    diceTwo.style.display = "none";
    diceThree.style.display = "none";
    diceFour.style.display = "none";
    diceFive.style.display = "none";
    diceSix.style.display = "none";
  } else if (num == 2) {
    total += 2;
    diceTwo.style.display = "block";
    result.textContent = `${total}`;
    diceOne.style.display = "none";
    diceThree.style.display = "none";
    diceFour.style.display = "none";
    diceFive.style.display = "none";
    diceSix.style.display = "none";
    winner.style.display = "none";
    loser.style.display = "none";
  } else if (num == 3) {
    total += 3;
    diceThree.style.display = "block";
    result.textContent = `${total}`;
    diceOne.style.display = "none";
    diceTwo.style.display = "none";
    diceFour.style.display = "none";
    diceFive.style.display = "none";
    diceSix.style.display = "none";
    winner.style.display = "none";
    loser.style.display = "none";
  } else if (num == 4) {
    total += 4;
    diceFour.style.display = "block";
    result.textContent = `${total}`;
    diceOne.style.display = "none";
    diceTwo.style.display = "none";
    diceThree.style.display = "none";
    diceFive.style.display = "none";
    diceSix.style.display = "none";
    winner.style.display = "none";
    loser.style.display = "none";
  } else if (num == 5) {
    total += 5;
    diceFive.style.display = "block";
    result.textContent = `${total}`;
    diceOne.style.display = "none";
    diceTwo.style.display = "none";
    diceThree.style.display = "none";
    diceFour.style.display = "none";
    diceSix.style.display = "none";
    winner.style.display = "none";
    loser.style.display = "none";
  } else if (num == 6) {
    total += 6;
    diceSix.style.display = "block";
    result.textContent = `${total}`;
    diceOne.style.display = "none";
    diceTwo.style.display = "none";
    diceThree.style.display = "none";
    diceFour.style.display = "none";
    diceFive.style.display = "none";
    winner.style.display = "none";
    loser.style.display = "none";
  } if (total >= 20) {
    winner.style.display = "block";
    result.textContent = `${total}`;
    rollBtn.style.display = "none";
    playAgain.style.display = "block";
  }
});

playAgain.addEventListener("click", () => {
  total = 0;
  result.textContent = "Roll to begin..";
  rollBtn.style.display = "block";
  playAgain.style.display = "none";
  diceOne.style.display = "none";
  diceTwo.style.display = "none";
  diceThree.style.display = "none";
  diceFour.style.display = "none";
  diceFive.style.display = "none";
  diceSix.style.display = "none";
  winner.style.display = "none";
  loser.style.display = "none";
});

