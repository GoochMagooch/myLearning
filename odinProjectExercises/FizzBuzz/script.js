const num = document.querySelector('.num');
const button = document.querySelector('.button');
const output = document.querySelector('.output');

function choose() {
    if (num.value >= 1 && num.value <= 100) {
        for (let i = 1; i <= num.value; i++){
            if (i % 3 === 0 && i % 5 === 0) {
                console.log('Fizz')
            } else if (i % 5 === 0) {
                console.log('Buzz')
            } else if (i % 3 === 0) {
                console.log('FizzBuzz')
            } else {
                console.log(i)
            }
          }
    } else {
        alert('choose a number that is 1 through 100');
    }

}

button.addEventListener('click', choose);

