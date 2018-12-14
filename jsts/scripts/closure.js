var example = (function() {

    console.log('inside iife');

    // Free Variable
    var counter = 0;

    // Closure Function - closing around counter
    return function() {

        return counter = counter + 1;
    }

})();

var counterRef = example;

console.log(counterRef());
console.log(counterRef());
console.log(counterRef());
console.log(counterRef());