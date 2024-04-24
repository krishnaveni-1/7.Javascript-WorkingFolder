/*
Important
        1. Order matters in array
        2. Name matters in object.
        3. ... on the left hand side is rest
        4. ... on the right is the spread operator.
*/
let obj = {
    collegeName: "IITE",
    location: "Delhi",
    teachers: [
        [
            'Davis', 'David', 'Roger'
        ],
        [
            'Mike', 'lover', 'Micheal'
        ],
        [
            'Rajesh', 'Ramesh', 'Nishanth'
        ]
    ],
    prinicipal: {
        name: 'Shree',
        age: 23,
        degree: 'PhD'
    },
    vicePrinicipal: {
        name: 'Shree',
        age: 23,
        degree: 'PhD'
    }
}

let cName = obj.collegeName;
console.log(cName);

// destructing the array. // order matters.
let [mathTeacher1, engTeacher2, sciTeacher3] = obj.teachers;
console.log('Teachers1', mathTeacher1);
console.log('Teachers2', engTeacher2);
console.log('Teachers3', sciTeacher3);

let [onlyMath, ...allRemaining] = obj.teachers;
console.log('onlyMath', onlyMath);

let [math, onlyEnglish, ...rest] = obj.teachers;
console.log('onlyEnglish', onlyEnglish);
console.log('rest', rest);

//concatenating the array
let allTeachers = [...mathTeacher1, ...engTeacher2, ...sciTeacher3];
console.log('All Teachers', allTeachers);

//concatenating the obj.

let head1 = obj.prinicipal;
let head2 = obj.vicePrinicipal;
let heads = { ...head1, ...head2 };
console.log('Heads..', heads);


//destructing the object// the name matters// alias is given
let { name, age: ageDes, degree } = obj.prinicipal;
console.log('ageDes', ageDes);
console.log('Age.....', obj.prinicipal.age);

let { name: nameString, ...rests } = obj.prinicipal;
console.log('nameString..', nameString);
console.log('rests..', rests);

// looping through the array using for...of loop with index
//for...of is generally recommended for iterating over arrays in JavaScript.
for (let [index, value] of mathTeacher1.entries()) {
    console.log(`Index ${index}: ${value}`);
}
for (let i = 0; i < mathTeacher1.length; i++) {
    const value = mathTeacher1[i];
    console.log(`Index ${i}: ${value}`);
}
// Using a normal for loop
const principal = obj.prinicipal;
const keys = Object.keys(principal);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(`${key}: ${principal[key]}`);
}
// Using a for...in loop
const principals = obj.prinicipal;
for (let key in principals) {
    if (principal.hasOwnProperty(key)) {
        console.log(`${key}: ${principal[key]}`);
    }
}

//String destructing...
const str = "Hello";
const [firstChar, ...remainingChars] = str;
console.log("First character:", firstChar);
console.log("Remaining characters:", remainingChars);
console.log("Remaining characters..:", remainingChars.join(""));


const str1 = "Hello";
const chars = [...str1];
console.log('Chars...', chars);

// spread opertor in functions and arrow function.
let myFunction = (a, b, c, d) => console.log('Value of a,b,c,d..', a, b, c, d);
const a = [1, 2, 3];
myFunction(...a, 5);




