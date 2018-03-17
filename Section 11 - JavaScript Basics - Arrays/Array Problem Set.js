// Problem 1

/* Takes an array as an argument and prints out the elements 
in the array in reverse order */
var input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function printReverse(array) {
	for (var i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);
	}
}
// Testing printReverse()
printReverse(input);

// Problem 2

/* Takes an array as an argument and returns true if all elements 
in the array are identical */
function isUniform(array) {
	for (var i = 1; i < array.length; i++) {
		if (array[i] !== array[0]) {
			return false;
		}
	}
	return true;
}
// Testing isUniform()
isUniform([1, 1, 1, 1]);
isUniform([2, 1, 1, 1]);
isUniform(["a", "b", "a"]);
isUniform(["a", "a", "b"]);

// Problem 3

// Accepts an array of numbers and returns the sum of all numbers in the array
// function sumArray(array) {
// 	var total = 0;
// 	array.forEach(function(element) {
// 		total += element;
// 	})
// 	return total;
// }

// Alternatively...
function sumArray(array) {
	// Used reduce to accumulate numbers in an array into a sum
	return array.reduce(addNum);
}
// Function to add two numbers
function addNum(a, b) {
	return a + b;
}
// Testing sumArray()
sumArray([1, 2, 3]);
sumArray([10, 3, 10, 4]);
sumArray([-5, 100]);

// Problem 4

// Accepts an array of numbers and returns the maximum number in the array
function max(array) {
	var max = array[0];
	for (var i = 1; i < array.length; i++) {
		if (array[i] > array[0]) {
			max = array[i];
		}
	}
	return max;
}
// Testing max()
max([1, 2, 3]);
max([10, 3, 10, 4]);
max([-5, 100]);