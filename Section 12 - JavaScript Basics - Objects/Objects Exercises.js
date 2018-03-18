 // Exercise 1

 var someObject = {};

 // Which of the following are valid?

 someObject._name = "Hedwig"; // Valid

 someObject.age = 6; // Valid

 var prop = "color"; 

/* This should be valid since someObject["color"] = "red" 
would store "red" as a "color" under someObject */
 someObject[prop] = "red";

 someObject.123 = true; // Not valid, I don't think you can use numbers to store data

 // Exercise 2

 var someObject = {
 	friends: [
 		{name: "Malfoy"},
 		{name: "Crabbe"},
 		{name: "Goyle"}
 	],
 	color: "baby blue",
 	isEvil: true
 };

 // Write code to retrieve "Malfoy" from someObject
someObject.friends[0].name;
