// While Loops Problem Set

// Print all numbers between -10 and 19
var num = -10;

console.log("Print all numbers between -10 and 19");
while (num <= 19) {
	console.log(num);
	num += 1;
}

// Print all even numbers between 10 and 40
var num = 10;

console.log("Print all even numbers between 10 and 40");
while (num <= 40) {
	if (num % 2 == 0) {
		console.log(num);
	}
	num += 1;
}

// Print all odd numbers between 300 and 333
var num = 300;

console.log("Print all odd numbers between 300 and 333");
while (num <= 333) {
	if (num % 2 != 0) {
		console.log(num);
	}
	num += 1;
}

// Print all numbers divisible by 5 and 3 between 5 and 50
var num = 5;

console.log("Print all numbers divisible by 5 and between 5 and 50");
while (num <= 50) {
	if (num % 5 == 0 && num % 3 == 0) {
		console.log(num);
	}
	num += 1;
}