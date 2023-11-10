// variable of raNum, given the value of a random number between 1 - 100
const raNum = Math.floor(Math.random() * 100 + 1);

// skeleton of function that takes raNum and runs it against user input
// to determine if the user input matches the value of raNum
function userInput() {
if (guess < raNum) {
    console.log("You guessed lower than the number, try again!");
} else if (guess > raNum) {
    console.log("You guessed higher than the number, try again!");
} else (guess === raNum) {
    console.log("You guessed the number, congratulations!");
}
}