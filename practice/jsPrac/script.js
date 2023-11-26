const button = document.querySelector('.button');
const num = document.querySelector('.num');

function oddEven() {
    if (num.value == number) {
        for (i; i <= num.value; i++) {
            if (num.value % 2 === 0) {
                console.log('even');
            } else {
                console.log('odd');
            }
        }
    } else {
        alert('please enter a number');
    }
}

button.addEventListener('click', oddEven);