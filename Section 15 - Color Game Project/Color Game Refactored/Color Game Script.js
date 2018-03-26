// Variables
var numberOfSquares = 6;
var colors = [];
var selectedColor;

// Selectors
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var	resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

// Initialize game
init();

// Function to initialize game
function init() {
	// Mode buttons event listeners
	setupModeButtons();

	// Squares event listeners
	setupSquares();

	// Reset variables and selectors
	reset();
}

// Function to set up the mode buttons
function setupModeButtons() {
		for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			
			// Figure out how many squares to show
			// Select new colors
			// Select a new selectedColor
			// Update page to reflect changes

			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			// if (this.textContent === "Easy") {
			// 	numberOfSquares = 3;
			// }
			// else {
			// 	numberOfSquares = 6;
			// }

			// Alternatively if statement can be written as...
			this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
			reset();
		});
	}
}

// Function to set up the squares
function setupSquares() {
		for (var i = 0; i < squares.length; i++) {
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
}

// Function to reset state of the game
function reset() {
	// Generate all new colors
	colors = generateRandomColors(numberOfSquares);
	// Select a new random color from array
	selectedColor = selectColor();
	// Change colorDisplay to match selected color
	colorDisplay.textContent = selectedColor;
	// Change text to "New Colors"
	resetButton.textContent = "New Colors";
	// Empty the text content for the win text
	messageDisplay.textContent = "";
	// Change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

// Calls reset whenever the reset button is clicked
resetButton.addEventListener("click", function() {
	// Call reset()
	reset();
});

// Function to update colors of the sqaures
function changeColors(color) {
	// Loop through all squares
	for (var i = 0; i < squares.length; i++) {
		// Change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

// Function that selects one randomized rgb color
function selectColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

// Function that pushes the random colors into an array of length n
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

// Function that randomizes each individual r, g, and b value
function randomColor() {
	// Pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	// Pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	// Pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

// ---------- Old Unfactored code ----------

/* easyBtn.addEventListener("click", function() {
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
}); */