var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var selectedColor = selectColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var	resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	selectedColor = selectColor();
	colorDisplay.textContent = selectedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	selectedColor = selectColor();
	colorDisplay.textContent = selectedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function() {
	// Generate all new colors
	colors = generateRandomColors(numberOfSquares);
	// Select a new random color from array
	selectedColor = selectColor();
	// Change colorDisplay to match selected color
	colorDisplay.textContent = selectedColor;
	// Change text to "New Colors"
	this.textContent = "New Colors";
	// Empty the text content for the win text
	messageDisplay.textContent = "";
	// Change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = selectedColor;

for (var i = 0; i < squares.length; i++) {
	// Add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// Add click listeners to squares
	squares[i].addEventListener("click", function() {
		// Grab colo of clicked square
		var clickedColor = this.style.backgroundColor
		// Compare color to selectedColor (win condition)
		if (clickedColor === selectedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		} 
	});
}

function changeColors(color) {
	// Loop through all squares
	for (var i = 0; i < squares.length; i++) {
		// Change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function selectColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(n) {
	// Make an array
	var array = [];
	// Repeat n times
	for (var i = 0; i < n; i++) {
		// Get random colors and push into array
		array.push(randomColor());
	}
	// Return that array
	return array;
}

function randomColor() {
	// Pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	// Pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	// Pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}