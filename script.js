let values = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;
const userRock = document.getElementById("rock");
const userPaper = document.getElementById("paper");
const userScissors = document.getElementById("scissors");
const results = document.querySelector(".results-container");
const winnerDiv = document.querySelector(".winner");

userRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
userPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
userScissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

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

function playRound(humanChoice, computerChoice) {
    if (humanScore >= 5 || computerScore >= 5) {
        return;
    }
    let resultMessage = `You chose ${humanChoice}, Computer chose ${computerChoice}.<br>`;

    if ((humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")) {
        resultMessage += ` You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore += 1;
    } else if ((computerChoice === "rock" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "rock")) {
        resultMessage += ` You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore += 1;
    } else {
        resultMessage += " It's a draw!";
    }

    results.innerHTML = `<p>${resultMessage}</p>
                     <p>Human ${humanScore}, Computer: ${computerScore}</p>`;


    if (humanScore >= 5) {
        announceWinner("You");
    } else if (computerScore >= 5) {
        announceWinner("The Computer");
    }

}

function announceWinner(winningPlayer) {
    winnerDiv.innerHTML = `<h2>${winningPlayer} has won the game!</h2>`;

    // Disable buttons after a winner is announced
    userRock.disabled = true;
    userPaper.disabled = true;
    userScissors.disabled = true;
}