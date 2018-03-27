// Node Exercise 1

// Function that takes 2 arguments (string and number) and prints out the string a number of times
function echo(string, number) {
    for (var i = 0; i < number; i++) {
        console.log(string);
    }
}

// Testing echo()
echo("Echo!!!", 10);
echo("Tater Tots", 3);