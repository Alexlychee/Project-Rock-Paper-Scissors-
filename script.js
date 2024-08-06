let values = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        num = "rock"
    } else if (num == 1) {
        num = "paper"
    } else {
        num = "scissors"
    }
    return num;
}

function getHumanChoice() {
    let input = window.prompt("Rock, Paper, or Scissors?");
    input = input.toLowerCase();
    return input;
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    } else if ((computerChoice == "rock" && humanChoice == "paper") || (computerChoice == "paper" && humanChoice == "scissors") || (computerChoice == "scissors" && humanChoice == "rock")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    } else {
        console.log("It's a draw!");
    }
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}

playGame();