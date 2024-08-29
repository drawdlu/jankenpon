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

// Gets choice from user
function getHumanChoice() {
    // Array for valid choices in game
    let validChoices = ['rock', 'paper', 'scissors'];

    let userChoice;
    let promptUser = true;
    let firstPrompt = true;

    // Prompts user until valid value is given
    while ( promptUser ) {

        if ( firstPrompt ) {
            userChoice = prompt(`Do you pick 'rock', 'paper', or 'scissors'?`);
            firstPrompt = false;
        } else {
            userChoice = prompt(`You didn't enter a valid response. Please choose between 'rock', 'paper', and 'scissors'`);
        }

        if ( validChoices.includes(userChoice.toLowerCase()) ) {
            promptUser = false;
        }
    }

    return userChoice;
}

getHumanChoice();