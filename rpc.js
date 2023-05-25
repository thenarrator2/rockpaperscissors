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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose rock, paper, or scissors:");
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);

    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);

    if (roundResult === "win") {
      playerScore++;
      console.log("You win this round!");
    } else if (roundResult === "lose") {
      computerScore++;
      console.log("You lose this round!");
    } else {
      console.log("It's a tie this round!");
    }

    console.log("-----------------------");
  }

  console.log("Final Score:");
  console.log("Player: " + playerScore);
  console.log("Computer: " + computerScore);

  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie game!");
  }
}

game();
