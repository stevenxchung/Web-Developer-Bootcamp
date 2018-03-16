// Exercise 1

function test(x, y) {
	return y - x;
}

test(10, 40)

// Exercise 2

function test(x) {
	return x * 2;

	// These two lines do not print because the function ends after value is returned
	console.log(x);
	return x / 2;
}

test(40);