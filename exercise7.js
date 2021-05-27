// Write an arrow function that takes in an array and returns true, if all items in that array have the same type.

const isSameTypes = (array) => {
    const typeOfFirstElement = typeof array[0];
    const mismatches = array.filter(element => typeof element !== typeOfFirstElement);
    return mismatches.length === 0;
}

console.log(isSameTypes([1, 2, 3, 4])); // true
console.log(isSameTypes([1, 2.0, 3, 4])); // true
console.log(isSameTypes([1, 2, 3, "4"])); // false
console.log(isSameTypes(["1", "2", "3", true])); // false



