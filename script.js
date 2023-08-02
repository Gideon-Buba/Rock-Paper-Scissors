// Function to get the computer's choice (rock, paper, or scissors)
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

// Function to play a 5-round game and keep track of scores
function game() {
    let playerScore = 0;
    let computerScore = 0;

    // Loop for 5 rounds
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Enter your choice (Rock/Paper/Scissors):');
        let computerSelection = getComputerChoice();
    
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
    
        // Update scores based on the result of the round
        if (result.startsWith('You win')) {
            playerScore++;
        } else if (result.startsWith('You lose')) {
            computerScore++;
        }
    }

    // Display final scores and determine the winner of the game
    console.log(`Final Score: You ${playerScore}, Computer ${computerScore}`);
    if (playerScore > computerScore) {
        console.log('You win!!!');
    } else if (playerScore < computerScore) {
        console.log('You lose!!!');
    } else {
        console.log ("It's a tie!!!"); 
    }
}

// Start the game and log the result
console.log(game());
