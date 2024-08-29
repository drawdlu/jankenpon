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