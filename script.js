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

function playRound (playerSelection, ComputerSelection) {

    playerSelection === playerSelection.toLowerCase(); 
    //check for ties
    if (playerSelection === ComputerSelection) {
        return "It's a tie!!!";
    }

    //for rock
    if (playerSelection === 'rock') {
        if (ComputerSelection === 'paper') {
            return 'You lose!, paper beats rock'
        } else {
            return 'You win!, rock beats scissors'
        }
    }   

    //for paper
    if (playerSelection === 'paper') {
        if (ComputerSelection ==='scissors') {
            return 'You lose! Scissors beats paper'
        } else {
            return 'You win! paper beats rock!'
        }
    }

    // for scissors
    if (playerSelection === 'scissors'){
        if (ComputerSelection === 'rock') {
            return 'You lose! rock beats scissors'
        } else {
            return 'You win! scissors beats paper'
        }
    }
}   

function game() {
    let  playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Enter your choice (Rock/Paper/Scissors):');
        let computerSelection = getComputerChoice();
    
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
    
        if (result.startsWith('You win')) {
          playerScore++;
        } else if (result.startsWith('You lose')) {
          computerScore++;
        }
      }
    console.log(`Final Score: You ${playerScore}, Computer${computerScore}`);

    if (playerScore > computerScore) {
        console.log('You win!!!');
    } else if (playerScore < computerScore) {
        console.log('You lose!!!');
    } else {
        console.log ("It's a tie!!!"); 
    }

}

console.log(game())