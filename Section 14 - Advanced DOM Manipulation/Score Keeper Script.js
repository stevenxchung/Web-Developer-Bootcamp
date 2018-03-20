// Add dynamics to Score Keeper HTML

// Select elements from HTML
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winLimitDisplay = document.querySelector("p span");

// Log scores, win condition, and winning limit
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var	winLimit = 5;

// Event which monitors for a click on the player one button
p1.addEventListener("click", function() {
	if (!gameOver) {
		p1Score++;
		if (p1Score === winLimit){
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

// Event which monitors for a click on the player two button
p2.addEventListener("click", function() {
	if (!gameOver) {
		p2Score++;
		if (p2Score === winLimit){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

// Event to reset game to specified conditions in resetGame()
reset.addEventListener("click", function() {
	resetGame();
});

// Event to change winning limit conditions and reset the game
numInput.addEventListener("change", function() {
	winLimitDisplay.textContent = this.value;
	winLimit = Number(this.value);
	resetGame();
});

// Function to reset the game to be used in multiple events above
function resetGame() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
};