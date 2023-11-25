const num = document.querySelector('.num');
const button = document.querySelector('.button');
const output = document.querySelector('.output');

function choose() {
    if (num.value >= 1 && num.value <= 100) {
        for (let i = 0; i < num.value; i++){
            output.textContent += i;
          } if (i % 3 === 0) {
              output.textContent = "Fizz"
          } else if (i % 5 === 0) {
              output.textContent = "Buzz"
          } else if (i % 3 === 0 && i % 5 == 0) {
              output.textContent = "FizzBuzz"
          } else {
              output.textContent = i
          }
    } else {
        output.textContent = 'choose a number that is 1 through 100';
    }

}

button.addEventListener('click', choose);