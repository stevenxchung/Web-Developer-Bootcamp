// Color Changer

/* Toggle the body's background color between purple and while, 
when a button is clicked */
var button = document.querySelector("button");
var isPurple = false;

// button.addEventListener("click", function() {
// 	if (isPurple) {
// 		document.body.style.backgroundColor = "white";
// 	}
// 	else {
// 		document.body.style.backgroundColor = "purple";
// 	}
// 	isPurple = !isPurple;
// });

// Alternatively...

button.addEventListener("click", function() {
	document.body.classList.toggle("purple");
});