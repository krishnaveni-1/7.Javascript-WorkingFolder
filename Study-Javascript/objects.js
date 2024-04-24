const myObject = {};
myObject.name = "Alice";
myObject.occupation = "Developer";
console.log('myObject ==>', myObject);

const myObject1 = {};
myObject1["name"] = "Veni";
myObject1["occupation"] = "Sr Developer";
console.log('myObject1 ==>', myObject1);

const myObject2 = {
    name: "Tarun",
    occupation: "Student"
}
console.log('myObject2 ==>', myObject2);


// Adding 
const person = { name: "Sarah", skill: "JavaScript" };
const updatedPerson = { ...person, age: 28, country: "Canada" };
console.log(updatedPerson);