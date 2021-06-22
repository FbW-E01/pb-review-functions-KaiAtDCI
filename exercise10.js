// 10. Write and test a function that takes in two parameters (min and max).
// That function should return another function that doesn't take in any parameters,
// but returns a random number between min and max. Effectively your "outer" function
// is a factory that creates customized random number generator functions.

function createRandomFunction(min, max) {
    const range = max - min;
    const offset = min;
    return function() {
        return Math.random() * range + offset;
    }
}

const createRandomNumber = createRandomFunction(-50,100);

for (let n = 0; n <= 10; n++) {
    console.log(createRandomNumber())
}
