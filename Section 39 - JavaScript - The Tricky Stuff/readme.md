# JavaScript - The Trick Stuff

Notes from this section on tricky JavaScript topics

## Keyword *this*

What is *this*?
* The keyword *this* is a reserved keyword in JavaScript
* Usually determined by how a function is called (what we call "execution context")
* Can be determined using four rules (global, object/implicit, explicit, new)

### Rule 1 - Global Context

* When the keyword *this* is not inside of a declared object, its value is the global object. 
* Enabling strict mode makes *this* undefined if used inside of a function since declaring a global variable inside of a function is not a good practice.

### Rule 2 - Implicit/Object

* When the keyword *this* is inside of a declared object we look at the closest parent object to figure out the value of *this*

```javascript
 // Strict mode does not apply here
var person = {
	firstName: "Elie",
	sayHi: function() {
		return "Hi " + this.firstName
	},
	determineContext: function() {
		return this === person
	}
}
// Testing sayHi() and determineContext()
person.sayHi() // "Hi Elie"
person.determineContext() // true
```

### Rule 3 - Explicit Binding

We can choose what we want the context of *this* to be using the call(), apply(), or bind() method. These methods can only be applied to functions.

Name of Method | Parameters | Invoke Immediately?
--- | --- | ---
call() | thisArg, a, b, c,... | Yes
apply() | thisArg, [a, b, c,...] | Yes
bind() | thisArg, a, b, c,... | Yes

In the following example we have setTimeout() which happens to be global as it is called at a later time, therefore *this* becomes global

```javascript
var colt = {
	firstName: "Colt",
	sayHi: function() {
		setTimeout(function() {
			console.log("Hi " + this.firstName)
		}, 1000)
	}
}
// Testing sayHi()
colt.sayHi() // Hi undefined (1000 ms later)
```

How do we solve this problem? Use bind()

```javascript
var colt = {
	firstName: "Colt",
	sayHi: function() {
		setTimeout(function() {
			console.log("Hi " + this.firstName)
		}.bind(this), 1000)
	}
}
// Testing sayHi()
colt.sayHi() // Hi Colt (1000 ms later)
```

### Rule 4 - The *new* Keyword

We can also set the context of the keyword *this* using the *new* keyword:

```javascript
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}
// Create a new instance
var steven = new Person("Steven", "Chung");
```

## Object-Oriented Programming

* A programming model based around the idea of objects
* These objects are constructed from what are called "classes", which we can think of like a blueprint. We call these objects created from classes "instances"
* We strive to make our classes abstract and modular
* Because JavaScript does not have "classes" built in, we use functions and objects

### Constructor Functions

We can use a constructor function as a blueprint for what something should be:

```javascript
 // Blueprint for a house
 function House(bedrooms, bathrooms, numSqft) {
 	this.bedrooms = bedrooms;
 	this.bathrooms = bathrooms;
 	this.numSqft = numSqft;
 }
```

### The *new* Keyword 

Following the example above, if we run

```javascript
var firstHouse = House(2, 2, 1000);
firstHouse // undefined
```

Why is our first House undefined?
* We are not return anything from the function
* We are explicitly binding the keyword *this* or placing it inside of a declared object. This means the value of the keyword *this* will be the global object.

To fix this we introduce the keyword *new* as follows:

```javascript
var firstHouse = new House(2, 2, 1000);
firstHouse.bedrooms // 2
firstHouse.bathrooms // 2
firstHouse.Sqft // 1000
```

The keyword *new* performs the following:
* Creates an empty object
* Sets the keyword *this* to be that empty object
* Returns (implicitly) *this*
* Add a property to the empty object called "__proto__" which links the prototype property on the constructor function to the empty object

### Multiple Constructors

What if we have multiple constructors and we want to refactor due to similarities in classes?
* Use the call/apply method

In the following example we take expressions from a similar class and map it onto another:

```javascript
function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
	// We can also set properties on the keyword this that are preset values
	this.numWheels = 4;
}

function Motorcycle(make, model, year) {
	// Call method reduces code redundancy
	Car.call(this, make, model, year);
	this.numWheels = 2;
}
```

Alternatively, we can use the apply method:

```javascript
function Motorcycle(make, model, year) {
	// Call method reduces code redundancy
	Car.call(this, [make, model, year]);
	this.numWheels = 2;
}
```

Using the keyword "arguments" we can pass all the arguments of a particular function through to simplify further:

```javascript
function Motorcycle(make, model, year) {
	// Call method reduces code redundancy
	Car.call(this, [arguments]);
	this.numWheels = 2;
}
```

### Prototypes

Prototypes allow us to eliminate redundancies when instances are created.

Here is an example without using protoypes:

```javascript
// Create a constructor function for a Dog - each dog should have a name and an age. 
function Dog(name, age) {
	this.name = name;
	this.age = age;
	// As a bonus, add a function for each dog called "bark", which console.log's the name of the dog added to the string "just barked!"
	this.bark = function() {
		console.log(this.name + " just barked!");
	}
}
```

It is clear that each time a new Dog is created, this.bark = function() is always redefined (not efficient). We can fix this buy implementing a prototype:

```javascript
// Since objects created by the same constructor have a shared prototype we can refactor as follows:
function Dog(name, age) {
	this.name = name;
	this.age = age;
}
// Notice how this function is only called when necessary, not every time when an object is created
Dog.prototype.bark = function () {
	return this.name + " just barked!";
}
// Testing Dog constructor and bark()
var rusty = new Dog("Rusty", 3);
var fido = new Dog("Fido", 1);

rusty.bark() // Rusty just barked!
fido.bark() // Fido just barked!
```

### Closures

What is the difference between example 1 and example 2 below?


```javascript
/// Example 1
function outer() {
	var data = "Something from outer"
	return function inner() {
		return "Just returned from the inner function"
	}
}
```

```javascript
/// Example 2
function outer() {
	var data = "Something from outer"
	return function inner() {
		var innerData = "Something from inner"
		return data + " " + innerData
	}
}
```

The second function is a closure because the inner function uses "data" which was declared in the outer function.

Closures can help us build private variables:

```javascript
function counter() {
	var count = 0;
	return function() {
		return ++count
	}
}
// Testing c1() and c2(), notice how c1() and c2() use the same function but are completely independent
var c1 = counter()
c1() // 1
c1() // 2

var c2 = counter()
c2() // 1
c2() // 2
```