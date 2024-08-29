// Creates a random choice of rock, paper or scissors
function getComputerChoice() {
    // Get a random number from 1-100
    let randomNumber = Math.round(Math.random() * 100) + 1;

    // Less than or equal to 33 means rock
    if ( randomNumber <= 33 ) {
        return "rock"
    }

}