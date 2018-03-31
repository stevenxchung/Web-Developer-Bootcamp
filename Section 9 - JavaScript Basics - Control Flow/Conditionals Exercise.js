// Example

if (age < 18) {
	console.log("Sorry, you are not old enough to enter the venue.");
}

else if (age < 21) {
	console.log("You can enter, but cannot drink.");
}

else {
	console.log("Come on in! You can drink.");
}

// Exercise

// Store user input
var age = Number(prompt("What is your age?"));

// If age is less than zero throw an error message
if (age < 0) {
	console.log("Error, please enter a valid age.");
}

// If age is equal to 21 throw a Happy 21st message
if (age === 21) {
	console.log("Happy 21st Birthday!");
}

// If age is odd
if (age % 2 !== 0) {
	console.log("Your age is odd!");
}

// If age is a perfect square
if (Math.sqrt(age) % 1 === 0) {
	console.log("Perfect square!");
}
