PLANNING

UNDERSTANDING THE PROBLEM
The thing to figure out is how to take three possible choices, and run them through a series of conditions, where when one choice is made, another random choice is made by the computer and then those two choices are compared. Then depending on the two choices that have been made, a final condition determines a final decision

IDEAS
Of course, first thing that comes to mind is a text box where a set of constraints are set to only allow "rock", "paper" or "scissors" to be entered and then once the button is pressed a script runs so that the computer randomly chooses either rock, paper or scissors. Once both choices have been made, a series of conditionals are run to determine if the user or the computer wins the game
if (input == 'rock' && random == 'scissors') {
    console.log('user wins!')
}
something like that
The question is: what is the script going to need to contain in order for the computer to randomly choose between rock paper & scissors?

Switch statement may be more practical for this situation