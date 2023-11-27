const button = document.querySelector('.button');
const num = document.querySelector('.num');

function oddEven() {
    if (num.value >= 1) {
        for (i = 1; i <= num.value; i++) {
            if (i % 2 === 0) {
                console.log('even');
            } else if (i === 69) {
                console.log('~~~~~~~NICE~~~~~~~');
            } else {
                console.log('odd');
            }
        }
    } else {
        alert('input must be a number');
    }
}

button.addEventListener('click', oddEven);