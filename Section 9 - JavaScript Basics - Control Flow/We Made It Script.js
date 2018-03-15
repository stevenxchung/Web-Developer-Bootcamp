// var answer = prompt("Are we there yet?");
// var audio = new Audio("We Made It.wav");

// while (answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("Are we there yet?");
// }

// audio.play();
// alert("Yay! We made it!");

// Version 2

var answer = prompt("Are we there yet?");
var audio = new Audio("We Made It.wav");

while (answer.indexOf("yes") === -1) {
	var answer = prompt("Are we there yet?");
}

audio.play();
alert("Yay! We made it!");