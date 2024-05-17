//Higher order functions.
// Takes a funct ion as an argument (or)
// Returns the function as the argument

// Custom Higher order function.
function greet(name, formatter) {
    return formatter(name);
}

function uppercaseFormatter(name) {
    return name.toUpperCase();
}

function lowercaseFormatter(name) {
    return name.toLowerCase();
}

const friendlyGreeting = greet("Alice", uppercaseFormatter);
console.log(friendlyGreeting); // Output: ALICE

const casualGreeting = greet("Bob", lowercaseFormatter);
console.log(casualGreeting); // Output: bob

// Common Higher-Order Functions

// map: Transforms each element in an array based on a provided function
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2);  // [2, 4, 6]

// filter: Creates a new array with elements that pass a test
const evens = numbers.filter(x => x % 2 === 0); // [2]

// reduce: Combines all elements into a single value
console.log('Reduce.....');
const sum = numbers.reduce((total, current) => total + current, 0); // 6
console.log(sum);
const multipliesVal = numbers.reduce((Multiply, cur) => Multiply + cur, 0); // 6
console.log(multipliesVal);

// forEach: Executes a function for each element (doesn't return a new array)
console.log('forEach....')
numbers.forEach(x => console.log(x * 3)); // 1, 2, 3


