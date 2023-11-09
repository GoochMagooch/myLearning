"I want you to create a simple guess the number type game. It should choose a random number between 1 and 100, then challenge the player to guess the number in 10 turns. After each turn, the player should be told if they are right or wrong, and if they are wrong, whether the guess was too low or too high. It should also tell the player what numbers they previously guessed. The game will end once the player guesses correctly, or once they run out of turns. When the game ends, the player should be given an option to start playing again."

- boss

MY NOTES:

I'm going to need a form that asks for user input, with the title of that text box being "Guess a number". That number will then need to be printed on the screen while also prompting one of three outputs: "This number is too low, try again", "this number is too high, try again" or "Congratulations, you guessed the number right". This will be made possible with a conditional, of course

With each response there will need to be some stylistic indicators that the answer was wrong or right, as well. When the answer is wrong, the number will appear in red, when the answer is right the number will appear in green. Or something

I will need to generate a random number between 1 - 100 at the beginning of each game, where each game ends when 10 guesses have been made or the answer is guessed right, where a new random number is then generated. I think I know how to get the random number, in which I multiply Math.floor(Math.random()) by 100 then add 1, so that the first number isn't a possible 0 and the last number isn't a possible 99. Instead the first number is a possible 1 and the last number is a possible 100. I think I got that down, but I'm not too sure how I'm then going to restart the game after the 10 guesses, or the correct answer. More specifically how to explicitly give the player the option to start the game over

I'm also not entirely sure how to print the output onto the screen