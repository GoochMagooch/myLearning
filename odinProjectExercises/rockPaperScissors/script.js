const button = document.querySelector('.button');
const move = document.querySelector('.move');

const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const index = Math.floor(Math.random() * 3);
const choices = [rock, paper, scissors];

function game() {
    const computer = choices[index];
    if (move.value == rock && computer == paper) {
        console.log('computer has chosen: ' + computer);
        console.log('computer wins!')
    } else if (move.value == rock && computer == scissors) {
        console.log('computer has chosen: ' + computer);
        console.log('user wins!')
    } else if (move.value == paper && computer == rock) {
        console.log('computer has chosen: ' + computer);
        console.log('user wins!')
    } else if (move.value == paper && computer == scissors) {
        console.log('computer has chosen: ' + computer);
        console.log('computer wins!')
    } else if (move.value == scissors && computer == rock) {
        console.log('computer has chosen: ' + computer);
        console.log('computer wins')
    } else if (move.value == scissors && computer == paper) {
        console.log('computer has chosen: ' + computer);
        console.log('user wins!')
    } else if (move.value == rock && computer == rock || move.value == paper && computer == paper || move.value == scissors && computer == scissors) {
        console.log('computer has chosen: ' + computer);
        console.log('stalemate. choose again...')
    } else {
        alert('you must choose between \'rock\' \'paper\' or \'scissors\'')
    }
}

button.addEventListener('click', game);

function renewGame() {
    location.reload()
    game();
}

button.addEventListener('click', renewGame);