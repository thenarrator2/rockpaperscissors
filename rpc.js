let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function updateScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function displayResult(resultText) {
  const resultElement = document.getElementById("results");
  resultElement.textContent = resultText;
}

function checkWinner() {
  if (playerScore === 5) {
    displayResult("Congratulations! You win the game!");
    disableButtons();
  } else if (computerScore === 5) {
    displayResult("Sorry, you lose the game!");
    disableButtons();
  }
}

function disableButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.disabled = true;
  });
}

function game(playerSelection) {
  const computerSelection = getComputerChoice();
  const roundResult = playRound(playerSelection, computerSelection);

  if (roundResult === "win") {
    playerScore++;
    displayResult(`You win this round! ${playerSelection} beats ${computerSelection}`);
  } else if (roundResult === "lose") {
    computerScore++;
    displayResult(`You lose this round! ${computerSelection} beats ${playerSelection}`);
  } else {
    displayResult(`It's a tie this round! Both chose ${playerSelection}`);
  }

  updateScore();
  checkWinner();
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    game(button.id);
  });
});
