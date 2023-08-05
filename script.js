// Function to get the computer's choice (rock, paper, or scissors)
let playerScore = 0;
let computerScore = 0;
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

// Function to play a single round of the game
function playRound (playerSelection, computerSelection) {
    // Convert playerSelection to lowercase to handle case-insensitive input
    playerSelection = playerSelection.toLowerCase(); 

    // Check for ties
    if (playerSelection === computerSelection) {
        return "It's a tie!!!";
    }

    // Check different scenarios for playerSelection and computerSelection
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You lose! Paper beats rock.';
        } else {
            return 'You win! Rock beats scissors.';
        }
    }   

    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'You lose! Scissors beats paper.';
        } else {
            return 'You win! Paper beats rock.';
        }
    }

    if (playerSelection === 'scissors'){
        if (computerSelection === 'rock') {
            return 'You lose! Rock beats scissors.';
        } else {
            return 'You win! Scissors beats paper.';
        }
    }
}   

function updateScoreAndDisplayResult(result) {
    console.log(result);

    // Update scores based on the result of the round
    if (result.startsWith('You win')) {
        playerScore++;
    } else if (result.startsWith('You lose')) {
        computerScore++;
    }

    // Display current scores
    const currentScoreDisplay = document.getElementById('currentScore');
    currentScoreDisplay.textContent = `Current Score: You ${playerScore}, Computer ${computerScore}`;

    // Display the result of each round
    const resultDisplay = document.getElementById('result');
    resultDisplay.textContent = result;

    // Check if 5 rounds have been played and display the final score
    roundsPlayed++;
    if (roundsPlayed === totalRounds) {
        const finalScoreDisplay = document.getElementById('finalScore');
        finalScoreDisplay.textContent = `Final Score: You ${playerScore}, Computer ${computerScore}`;

        // Determine the winner of the game and display the result
        if (playerScore > computerScore) {
            resultDisplay.textContent = 'You win!!!';
        } else if (playerScore < computerScore) {
            resultDisplay.textContent = 'You lose!!!';
        } else {
            resultDisplay.textContent = "It's a tie!!!";
        }

        // Disable buttons to prevent further plays
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
    }
}

// Event listeners for the buttons
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