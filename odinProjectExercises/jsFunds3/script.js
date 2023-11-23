/* adds 7 to a given parameter */
let add7 = num => num + 7;

console.log(add7(62))

/* returns the product of two number parameters */
function multiply(num1,num2) {
    return num1 * num2
}

console.log(multiply(70,6))

/* capitalizes the first letter of a string parameter */
function capitalize(string) {
    return string.charAt().toUpperCase() + string.slice(1)
}

console.log(capitalize('this is my boomstick!'))

/* returns the last letter of a string parameter */
function lastLetter(string) {
    return string.slice(-1)
}

console.log(lastLetter('the last letter should be returned'))