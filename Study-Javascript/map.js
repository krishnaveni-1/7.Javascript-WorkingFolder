// map to a array.
const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map(number => {
    return number * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8]


// map to a array of objects
const people = [
    { firstName: 'Alice', lastName: 'Smith' },
    { firstName: 'Bob', lastName: 'Johnson' },
    { firstName: 'Charlie', lastName: 'Brown' }
];
const fullNames = people.map(person => {
    return { ...person, location: "Delhi" };
});
console.log('fullNames....', fullNames); 
