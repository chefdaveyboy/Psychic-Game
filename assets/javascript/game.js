// create and array that lists out all the choices for the computer
var computerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "t", "u", "v", "w", "x", "y", "z"];
var computerChoice = "";

// create variables the remember number of wins and losses and remaining guesses
var wins = 0;
var losses = 0;
var remainingLetters = 10;
var guessedLetters = [];

// puts it into HTML
document.getElementById("win-text").innerHTML = "Wins: " + wins;
document.getElementById("losses-text").innerHTML = "Losses: " + losses;
document.getElementById("guesses-remain").innerHTML = "Guesses Left: " + remainingLetters;
document.getElementById("letters-picked").innerHTML = "Letters Guessed: " + guessedLetters;


// create a reset function
var reset = function () {
    remainingLetters = 10;
    guessedLetters = [];
    computerChoice = computerGuess[Math.floor(Math.random() * computerGuess.length)];
    

} 

// call reset function to start game
reset();





// create a function that listens for when a key is pressed

document.onkeyup = function(event) {

    var userChoice = event.key;

    

    guessedLetters.push(userChoice);

    if ((userChoice === computerChoice)) {
        wins++
        alert("You won! Computer Choice: " + computerChoice);
        reset();
    }
    else {
        remainingLetters--
    }
    // trying to give a hint based on index location.  Still needs debugging.
    // if ((remainingLetters < 2)) {
    //     document.getElementById("hint").innerHTML = "Hint: " + computerChoice[pos, +2];
    // }
    if ((remainingLetters === 0)) {
        losses++
        reset();

    }

    
    document.getElementById("win-text").innerHTML = "Wins: " + wins;
    document.getElementById("losses-text").innerHTML = "Losses: " + losses;
    document.getElementById("guesses-remain").innerHTML = "Guesses Left: " + remainingLetters;
    document.getElementById("letters-picked").innerHTML = "Letters Guessed: " + guessedLetters;
    console.log(computerChoice);    
}

    



