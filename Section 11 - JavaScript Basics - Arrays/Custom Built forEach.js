// Building Our Own forEach

// function myForEach(array, func) {
// 	// Loop through array
// 	for (var i = 0; i < array.length; i++) {
// 		// Call func for each item in array
// 		func(array[i]);
// 	}
// }

// We can pass a function through to use in another function like so
Array.prototype.myForEach = function(func) {
	// Loop through array
	for (var i = 0; i < this.length; i++) {
		// Call func for each item in array
		func(this[i]);
	}
}
