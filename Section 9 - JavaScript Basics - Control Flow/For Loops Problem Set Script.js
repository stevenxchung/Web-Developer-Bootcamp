// For Loops Problem Set

// Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19");

for (var num = -10; num <= 19; num += 1) {
	console.log(num);
}

// Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");

for (var num = 10; num <= 40; num += 1) {
	if (num % 2 == 0) {
		console.log(num);
	}
}

// Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");

for (var num = 300; num <= 333; num += 1) {
	if (num % 2 != 0) {
		console.log(num);
	}
}

// Print all numbers divisible by 5 and 3 between 5 and 50
console.log("Print all numbers divisible by 5 and between 5 and 50");

for (var num = 5; num <= 50; num += 1) {
	if (num % 5 == 0 && num % 3 == 0) {
		console.log(num);
	}
}