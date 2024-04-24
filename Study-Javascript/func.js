// regular function
function multiply(a, b) {
    return a * b;
}
console.log('multiply(3, 7) => ', multiply(3, 7));

//Anonymous Function - no name
let funReturn = function (a, b) {
    return a * b;
}
console.log('funReturn(3, 8) => ', funReturn(3, 8));

// arrow function
// if one argument no need of () .let funReturnArrow = a => {)
// if one statement . let funReturnArrow = a => 'hello' + a;
// in the arrow function the function key word is removed and it is replaced by =>

let funReturnArrow = (a, b) => {
    return a * b;
}
console.log('funReturnArrow(3, 8) => ', funReturnArrow(3, 8));

// arrow function with implicit return and two arguement.
let funReturnArrow1 = (a, b) => a * b;
console.log('funReturnArrow1(2, 8) => ', funReturnArrow(2, 8));

//Import -- unclear
const myObject = {
    value: 10,
    logValue: function () {
        console.log(this.value);
        return this.value;
    },
    logValueWithArrow: () => {
        console.log(this.value);
    }
}
console.log('myObject.logValue()', myObject.logValue()); // Output: 10, undefined
console.log('myObject.logValueWithArrow()', myObject.logValueWithArrow()); // Output: undefined, undefined

// Arrow functions can not be used in the constructor functions.








