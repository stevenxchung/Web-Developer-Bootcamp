// Initialize secret number as a variable
var secretNum = 4;

// Ask user for guess
var guess = Number(prompt("Guess a number!"));

// Check if guess is right
if (guess === secretNum) {
	alert("Correct guess!");
}

else if (guess > secretNum) {
	alert("Your guess is too high, try again!");
}

else {
	alert("Your guess is too low, try again!");
}