// 8. Print the type of a variable that has a normal function value.
console.log('Exercise 8');
const square1 = function(arg) { return arg**2 };
console.log(square1);   // [Function: square1]
console.log(typeof square1); // function
console.log(typeof square1(2));  // number

// Print the type of a variable that has an arrow function value.
console.log('Exercise 9');
const square2 = arg => arg**2;
console.log(square2);  // [Function: square2]
console.log(typeof square2);  // function
console.log(typeof square2(2));  // number


