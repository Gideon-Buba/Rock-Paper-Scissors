
let playerScore = 0;
let computerScore = 0;
const totalRounds = 5;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors'; 
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); 

    if (playerSelection === computerSelection) {
        return "It's a tie!!!";
    }

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore++;
            return 'You lose! Paper beats rock.';
        } else {
            playerScore++;
            return 'You win! Rock beats scissors.';
        }
    }   

    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerScore++;
            return 'You lose! Scissors beats paper.';
        } else {
            playerScore++;
            return 'You win! Paper beats rock.';
        }
    }

    if (playerSelection === 'scissors'){
        if (computerSelection === 'rock') {
            computerScore++;
            return 'You lose! Rock beats scissors.';
        } else {
            playerScore++;
            return 'You win! Scissors beats paper.';
        }
    }
}   

function updateScoreAndDisplayResult(result) {
    console.log(result);

    const currentScoreDisplay = document.getElementById('currentScore');
    currentScoreDisplay.textContent = `Current Score: You ${playerScore}, Computer ${computerScore}`;

    const resultDisplay = document.getElementById('result');
    resultDisplay.textContent = result;

    if (playerScore >= totalRounds || computerScore >= totalRounds) {
        const finalScoreDisplay = document.getElementById('finalScore');
        finalScoreDisplay.textContent = `Final Score: You ${playerScore}, Computer ${computerScore}`;

        if (playerScore > computerScore) {
            resultDisplay.textContent = 'You win the game!!!';
        } else if (playerScore < computerScore) {
            resultDisplay.textContent = 'You lose the game!!!';
        } else {
            resultDisplay.textContent = "It's a tie!!!";
        }

        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
    }
}

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', function () {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateScoreAndDisplayResult(result);
});

paperButton.addEventListener('click', function () {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateScoreAndDisplayResult(result);
});

scissorsButton.addEventListener('click', function () {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateScoreAndDisplayResult(result);
});
