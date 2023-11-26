const button = document.querySelector('.button');
const num = document.querySelector('.num');

function oddEven() {
    if (num.value >= 1 && num.value <= 100) {
        for (i = 1; i <= num.value; i++) {
            if (num.value % 2 === 0) {
                console.log('even');
            } else {
                console.log('odd');
            }
        }
    } else {
        alert('enter a number from 1 to 100');
    }
}

button.addEventListener('click', oddEven);

/*
Next steps:
When the first if statement is checking even for a number between 1 and 100
and the number I enter is a number between 1 and 100, the console does not
spit out an 'even' or 'odd' for each number. It only spits out 1 'even' or
1 'odd', essentially saying "yes there are even numbers and odd numbers",
but it's not spitting out every instance of a number.
I think something is wrong with the for loop.

Also I need to figure out how to write the first condition as "if ANY number
is entered, do the following". Not just asking for a number in a certain 
range
*/