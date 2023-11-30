const button = document.querySelector('.button');
const move = document.querySelector('.move');

const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const index = Math.floor(Math.random() * 3);
const choices = [rock, paper, scissors];

function game() {
    const computer = choices[index];
    console.log('computer has chosen: ' + computer);
    if (move.value == rock && computer == paper) {
        console.log('computer wins!')
    } else if (move.value == rock && computer == scissors) {
        console.log('user wins!')
    } else if (move.value == paper && computer == rock) {
        console.log('user wins!')
    } else if (move.value == paper && computer == scissors) {
        console.log('computer wins!')
    } else if (move.value == scissors && computer == rock) {
        console.log('computer wins')
    } else if (move.value == scissors && computer == paper) {
        console.log('user wins!')
    } else {
        console.log('stalemate. choose again...')
    }
}

button.addEventListener('click', game);

function renewGame() {
    location.reload()
    game();
}

button.addEventListener('click', renewGame);

/*
NOTES:
Add a condition that runs an alert if anything other than 'rock', 'paper'
or 'scissors' in inputted
*/