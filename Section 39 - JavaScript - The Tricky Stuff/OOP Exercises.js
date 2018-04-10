// Exercise 1

// // Create a constructor function for a Dog - each dog should have a name and an age. 
// function Dog(name, age) {
// 	this.name = name;
// 	this.age = age;
// 	// As a bonus, add a function for each dog called 'bark', which console.log's the name of the dog added to the string 'just barked!'
// 	this.bark = function() {
// 		console.log(this.name + " just barked!");
// 	}
// }

// Refactoring (Bonus)
// Since objects created by the same constructor have a shared prototype we can refactor as follows:
function Dog(name, age) {
	this.name = name;
	this.age = age;
}
// Notice how this function is only called when necessary, not every time when an object is created as above
Dog.prototype.bark = function () {
	return this.name + " just barked!";
}
// Testing Dog constructor and bark()
var rusty = new Dog('Rusty', 3);
var fido = new Dog('Fido', 1);

rusty.bark() // Rusty just barked!
fido.bark() // Fido just barked!

// Exercise 2

// Create a constructor function for a Vehicle: every object created from this constructor shoud have a make, model, and year property.
// Each object should also have a property called isRunning, which should be set to false.
function Vehicle(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.isRunning = false;
}
// Prototype turnOn()
Vehicle.prototype.turnOn = function () {
	this.isRunning = true;
}
// Prototype turnOff()
Vehicle.prototype.turnOff = function () {
	this.isRunning = false;
}
// Prototype honk()
Vehicle.prototype.honk = function () {
	return this.isRunning ? "Beep!" : "Car is not running!";
}
// Testing Vehicle constructor, turnOn, turnOff, and honk
var ferrari = new Vehicle('Ferrari', 'LaFerrari', 2015);
ferrari.turnOn();
ferrari.honk();