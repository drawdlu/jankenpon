// Creates a random choice of rock, paper or scissors
function getComputerChoice() {
    // Get a random number from 1-100
    let randomNumber = Math.round(Math.random() * 100) + 1;

    // Less than or equal to 33 means rock
    if ( randomNumber <= 33 ) {
        return "rock";
    // Greater than 33 or less than or equal to 66 means paper
    } else if ( randomNumber > 33 && randomNumber <= 66) {
        return "paper";
    // Anything greater than 66 is scissors
    } else {
        return "scissors";
    }

}

// track scores
let humanScore = 0;
let computerScore = 0;

// Play a round of rock, paper, scissors
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    // Determine round winner if computer plays rock
    if (computerChoice === 'rock') {
        if (humanChoice === 'scissors') {
            printResult("You lose! Scissors loses to rock.");
            computerScore++;
        } else if (humanChoice === 'paper') {
            printResult("You win! Paper beats rock.");
            humanScore++;
        } else {
            printResult("It's a Draw! Both played rock");
        }
    // Determine round winner if computer plays paper
    } else if (computerChoice === 'paper') {
        if (humanChoice === 'rock') {
            printResult("You lose! Rock loses to paper.");
            computerScore++;
        } else if (humanChoice === 'scissors') {
            printResult("You win! Scissors beats paper.");
            humanScore++;
        } else {
            printResult("It's a Draw! Both played paper.");
        }
    // Determine round winner if computer plays scissors
    } else {
        if (humanChoice === 'rock') {
            printResult("You win! Rock beats scissors.");
            humanScore++;
        } else if (humanChoice === 'paper') {
            printResult("You lose! Paper loses to scissors.");
            computerScore++;
        } else {
            printResult("It's a Draw! You both played scissors.");
        }
    }

    displayScore();
}

function printResult(message) {
    const resultsDiv = document.querySelector('.results');
    const para = document.createElement('p');
    para.textContent = message;
    resultsDiv.appendChild(para);
}

function displayScore() {
    const scoreDiv = document.querySelectorAll('.score');
    scoreDiv.forEach( (player) => {
        if (player.getAttribute('data-player') === 'human') {
            player.textContent = player.textContent.slice(0, -1) + humanScore;
        } else {
            player.textContent = player.textContent.slice(0, -1) + computerScore;
        }
    })
}


function recordButtons() {
    const buttons = document.querySelectorAll('.choice');

    let playerSelection;
    
    buttons.forEach( (button) => {
        button.addEventListener('click', () => {
            playerSelection = button.textContent;
            playRound(playerSelection, getComputerChoice())
        })
    });
}

recordButtons();
