// function sum(a, b) {
//     return a + b;
// }

// vairable = parameter => {code}
//this can be written as 
// remove the function keyword
// assign the function to a variable
let sum = (a, b) => a + b // you may remove the return as well




// function isPositive(number) {
//     return number >= 0;
// }

// Written as as
let isPositive = num => num >= 0 //for a singel parameter we may even remove the parenthesis



// function randomNumber() {
//     return Math.random;
// }

// can be written as

let randomNumber = () => Math.random







// document.addEventListener('click', function () {
//     console.log('click')
// })

//can be written as 

document.addEventListener('click', () => console.log('click'))




class Person {
    constructor(name) {
        this.name = name;
    }
    printNameArrow() {
        setTimeout(() => {
            console.log('Funtion', this.name); // in arrow function "this" is not redefined
        }, 100)
    }
    printNameFunction() {
        setTimeout(function () {
            console.log('Function', this.name);  //Here 'this' is based on where it is called from in this case which is outside the class , and since outside we dont have any 'this.name' it wont work
        }, 100)
    };
}

let person = new Person('John');
person.printNameArrow(); //it prints the name
person.printNameFunction(); //But it doesn't



// Arrow Functions
// Arrow functions don't have their own 'this'. Instead, they inherit this from the enclosing context where they are defined. This means that when you use an arrow function inside a method of a class, the value of this inside the arrow function will be the same as the value of this in the enclosing method.

// Regular Functions
// Regular functions, on the other hand, have their own this. The value of this inside a regular function depends on how the function is called. When used in setTimeout or similar functions, this will refer to the global object (in browsers, this is window) or undefined in strict mode, not the instance of the class.