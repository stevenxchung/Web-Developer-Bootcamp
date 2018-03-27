// Node Exercise 2

// Function to return average of an array of scores
function average(array) {
    
    var len = array.length;
    var sum = 0;
    var avg = 0;
    
    for (var i = 0; i < len; i++) {
        sum += array[i];
    }
    
    return avg = Math.round(sum/len);
}

// Testing average()
var scores1 = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores1)); // Returns 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); // Returns 68