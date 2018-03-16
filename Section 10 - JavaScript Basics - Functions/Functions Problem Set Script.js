// Functions Problem Set

// Problem 1
// Takes a single numeric arguement and returns true if the number is even and false otherwise
// function isEven(n) {
// 	if (n % 2 === 0) {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }
// This method is more efficient
function isEven(n) {
	return n % 2 === 0;
}
// Testing isEven()
isEven(1);
isEven(2);

// Problem 2
// Takes a single numeric argument and returns the factorial of that number
function factorial(n) {
	if (n === 0) {
		return 1;
	}
	for (var i = n - 1; i > 0; i--) {
		n = n * i;
	}
	return n;
}
// Testing factorial()
factorial(5);
factorial(2);

// Problem 3
// Takes a single kebab-cased string argument and returns the snake_cased version
function kebabToSnake(string) {
	return var newString = string.replace("-", "_");
}
// Testing kebabToSnake()
kebabToSnake("hello-world");
kebabToSnake("dogs-are-awesome");
kebabToSnake("blah");