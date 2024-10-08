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
function playRound(event) {
    humanChoice = event.target.textContent.toLowerCase();
    computerChoice = getComputerChoice();

    switch (computerChoice) {
        case 'rock':
            switch (humanChoice) {
                case 'rock':
                    printResult("It's a Draw! Both played rock");
                    break;
                case 'paper': 
                    printResult("You win! Paper beats rock.");
                    humanScore++;
                    break;
                case 'scissors':
                    printResult("You lose! Scissors loses to rock.");
                    computerScore++;    
                    break;
            }
            break;
        case 'paper':
            switch (humanChoice) {
                case 'rock': 
                    printResult("You lose! Rock loses to paper.");
                    computerScore++;
                    break;
                case 'paper':
                    printResult("It's a Draw! Both played paper.");
                    break;
                case 'scissors': 
                    printResult("You win! Scissors beats paper.");
                    humanScore++;
                    break;
            }
            break;
        case 'scissors':
            switch (humanChoice) {
                case 'rock': 
                    printResult("You win! Rock beats scissors.");
                    humanScore++;
                    break;
                case 'paper': 
                    printResult("You lose! Paper loses to scissors.");
                    computerScore++;
                    break;
                case 'scissors':
                    printResult("It's a Draw! You both played scissors.");
                    break;
            }
            break;
    }

    displayScore();

    if (humanScore === 5 || computerScore === 5) {
        displayWinner();
    }
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
    
    buttons.forEach( (button) => {
        button.addEventListener('click', playRound)
    });
}

function stopButtonEvents() {
    const buttons = document.querySelectorAll('.choice');
    
    buttons.forEach( (button) => {
        button.removeEventListener('click', playRound);
    });
}

function displayWinner() {
    const resultsDiv = document.querySelector('.results');
    const para = document.createElement('p');
    para.style.fontSize = '2em';

    if (humanScore > computerScore) {
        para.textContent = 'Congratulations! You have won the game.';
    } else {
        para.textContent = 'The computer won the game :(';
    }

    resultsDiv.appendChild(para);
    stopButtonEvents();
}

recordButtons();
