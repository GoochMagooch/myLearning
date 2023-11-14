const buttonA = document.querySelector("#buttonA");
const headingA = document.querySelector("#headingA");

buttonA.onclick = () => {
    const name = prompt("What is your name?")
        if (name == true) {
            alert(`Hello ${name}, nice to see you...`);
            headingA.textContent = `Welcome, ${name}`;
        } else {
            headingA.textContent = `We shall call you null`;
        }
};