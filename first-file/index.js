console.log('hello world');
// We use variable to store data temporarily
// inside a variable we can define any data types like string number boolean undefined null
// by default a variable is has value undefined
let a = 5;
let firstName = 'Beasty';
let secondName = "002"
console.log(a + 4);
console.log("My name is " + firstName + secondName);
// the value of 'let' can change 


// we cannot reassign a constant
const rate = 10;
console.log("The interest rate is always " + rate);

let ak = true;
let bk = false;
if (ak == true && bk == false) {
    console.log("ak is true & bk is false");
}
let color = null;



// -----------------------------------------This is an object
// let name = 'aswin';
// let age = '21';
let person = {
    name: 'Aswin',
    age: 20
}
person.name = 'Beasty';
// reassigning the value using the dot operator/notation
console.log(person);
console.log(person.age);
// reassigning the value using bracket notation
person['name'] = 'The Beasty'
console.log(person);

person.name = 'Aswin';


// Below are the arrays used to list items
let colors = [];
// this is an empty array;
console.log(colors);
colors = ['red', 'yellow', 'green'];
console.log(colors);
console.log(colors[2]);
colors[3] = 'hotpink';
// adds this color at 3rd index in the arraw
console.log(colors);
colors[6] = 9009090;
console.log(colors);
console.log(colors.length)

// ------------------------function example
function greet(name, lname) {
    console.log("Hello again my Friend " + name + lname);
}
greet('aswin', 'chhetri');
greet('Beasty', 'the one');

function square(number) {
    return number * number;
}
let avalue = square(100);
console.log(avalue);
console.log(square(48));