// Movie Database

/* Create an array of movie objects. Each movie should have a title,
rating, and hasWatched properties. Iterate through the array and print out */

var movieDB = [
	{
		title: "In Bruges",
		rating: 5,
		hasWatched: true,
	},
	{
		title: "Frozen",
		rating: 4.5,
		hasWatched: false,
	},
	{
		title: "Mad Max Fury Road",
		rating: 5,
		hasWatched: true,
	},
	{
		title: "Les Miserables",
		rating: 3.5,
		hasWatched: false,
	}
];

// Function to print out stored information
function printInfo(array) {
	for (var i = 0; i < array.length; i++) {
		if (movieDB[i].hasWatched) {
			console.log("You have watched " + movieDB[i].title + " - " + movieDB[i].rating + " stars");
		}
		else {
			console.log("You have not seen " + movieDB[i].title + " - " + movieDB[i].rating + " stars");
		}
	}
}
// Alternatively...
/* movieDB.forEach(function(movie) {
	var result = "You have ";
	if (movie.hasWatched) {
		result += "watched ";
	}
	else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	console.log(result)
}) */

// Testing printInfo()
printInfo(movieDB);