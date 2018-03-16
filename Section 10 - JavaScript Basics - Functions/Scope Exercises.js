// Scope Quiz

var num = 8;

function doMath() {
	num += 1;
	return num % 5 == 0;
}
// Calling doMath() will produce true as num += 1 after the function will change it into 10 % 5 which is == 0
num += 1;
doMath()