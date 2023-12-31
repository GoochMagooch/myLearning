// variable of raNum, given the value of a random number between 1 - 100
let raNum = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guess = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
guessField.focus();

// function used for number guess calculations
function checkGuess() {
// storing user input (guess) into a constant of 'userGuess'
    const guess = Number(guessField.value);
// conditional denoting something...
    if (guessCount === 1) {
        guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent = `${guesses.textContent} ${guess}`;
// conditional denoting the results of a correct answer, an answer that is
// too low and an answer that is to high
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

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "start new game?";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
      resetPara.textContent = "";
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
  
    lastResult.style.backgroundColor = "white";
  
    raNum = Math.floor(Math.random() * 100) + 1;
  }