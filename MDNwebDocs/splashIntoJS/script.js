// variable of raNum, given the value of a random number between 1 - 100
let raNum = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guess = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

// Function that checks the users guess and runs it through a series of
// conditional statements, resulting in one of many results
function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if (guess === raNum) {
        lastResult.textContent = "You guessed the number, congratulations!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = "Game Over - womp";
        lowOrHi.textContent = "";
        setGameOver();
    } else {
        lastResult.textContent = "nop!";
        lastResult.style.backgroundColor = "red";
        if (guess < raNum) {
            lowOrHi.textContent = "You guessed less than the number, try again!";
        } else if (guess > raNum) {
            lowOrHi.textContent = "You guessed higher than the number, try again!";
        }
    }

guessCount++;
guessField.value = "";
guessField.focus();
}