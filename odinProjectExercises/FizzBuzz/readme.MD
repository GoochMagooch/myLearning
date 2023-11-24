The goal of this project is to create a script that takes user input (number, up to 100) and then prints all numbers from 1 to the chosen number, but for multiples of 3 it prints out "Fizz", for mulitples of 5 it prints out "Buzz", and for multiples of both it prints out "FizzBuzz"

Notes and Planning:
multiples of 3 up to 100:
3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99
multiples of 5 up to 100:
5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100
multiples of both up to 100:
15, 30, 45, 60, 75, 90

FizzBuzz steps broken down:
INTERFACE:
The interface will be a simple text box for the user to input their number from 1 to 100, with a button to enter the number. If the number is over 100, or is 0 then an alert should pop up telling the user that their number has to be between 1 and 100
This will be done with a simple form and a button element. The form and button will be in the middle of the screen and the output will be directly underneath them
SCRIPT:
The entirety of the script will be in a function called choose, and will be executed when the button is pressed
FIRST:
If statement for the constraints of the number to ensure that a number between 0 and 100 is applied.
If num === 0 || > 100 => alert(the number must be 1 through 100)
else => rest of the function
SECOND:
The for loop will be contained inside of the first if statement as the else statement...I think...
for (let i = 0; i < num; i++) {
  text += num[i];
} if (num / 3 == % 0) {
    textContent = "Fizz"
} else if (num / 5 == % 0) {
    textContent = "Buzz"
} else if (num / 3 == % 0 && num / 5 == % 0) {
    textContent = "FizzBuzz"
} else {
    textContent = i
}

Idea:
Make this work by using a button that outputs a random number and does everything else the same. Later