// Exercise 1

// Prints undefined since numbers[5] is not defined
var numbers = [22, 67, 33, 96, 88];

console.log(numbers[numbers.length])

// Exercise 2

// Prints the element in the third row, first column, or "Mooney"
var friendsGroups = [
	["Harry", "Ron", "Hermione"],
	["Malfoy", "Crabbe", "Goyle"],
	["Mooney", "Wormtail", "Prongs"]
];

console.log(friendsGroups[2][0]);

// Array iteration challenge

/* Prints each number in numbers array which meets the criteria: 
color % 3 === 0 where color is just a placeholder variable */
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var colors = ["red", "orange", "yellow", "green"];

numbers.forEach(function(color) {
	if (color % 3 === 0) {
		console.log(color);
	}
});