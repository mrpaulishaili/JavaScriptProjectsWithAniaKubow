const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");

let playerChoice;
let computerChoice;
let result;

let winMessage = "🏆 You win!";
let loseMessage = "❌ You lost";
let drawMessage = "🀄 it's a draw";

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;

    playGame();
  })
);

function generateComputerChoice() {
  // Generate random number
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1; // or 3

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === playerChoice) {
    result = drawMessage;
  }
  if (computerChoice === "rock" && playerChoice === "paper") {
    result = winMessage;
  }
  if (computerChoice === "paper" && playerChoice === "rock") {
    result = loseMessage;
  }
  if (computerChoice === "paper" && playerChoice === "scissor") {
    result = winMessage;
  }
  if (computerChoice === "scissor" && playerChoice === "paper") {
    result = loseMessage;
  }
  if (computerChoice === "scissor" && playerChoice === "rock") {
    result = winMessage;
  }
  if (computerChoice === "rock" && playerChoice === "scissor") {
    result = loseMessage;
  }

  resultDisplay.innerHTML = result;
}

function playGame(e) {
  generateComputerChoice();
  getResult();
}
