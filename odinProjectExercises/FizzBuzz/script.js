const num = document.querySelector('.num');
const button = document.querySelector('.button');
const output = document.querySelector('.output');

function choose() {
    if (num.value == 0 || num.value > 100) {
        output.textContent = 'choose a number that is 1 through 100';
    } else {
        output.textContent = 'so far your program is working';
    }
}

button.addEventListener('click', choose);

/*
If num === 0 || > 100 => alert(the number must be 1 through 100)
else => rest of the function
*/

