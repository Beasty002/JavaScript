// a js object is entity having state and behaviour (properties and method).
// js object have a special property called prototye
// prototype is object inside of an object
const student = {
    fullName: "The Beasty",
    marks: 9.4,
    printMarks: function () {
        console.log("marks = ", this.marks); //student.marks is what 'this' denotes
    },
    printMarks1() {
        console.log("marks = ", this.marks); //student.marks is what 'this' denotes
    }
    // both format can be used for function
}
console.log(student.printMarks());
console.log(student.printMarks());

// ---------------------------prototype

// it is a reference to any object

const employee = {
    calcTax() {
        const taxRate = 0.10;
        const tax = this.salary * taxRate;
        console.log(`Tax amount is ${tax}`);
    }
}

const emp1 = {
    salary: 5000,
}
emp1.__proto__ = employee;
emp1.calcTax();
// with __proto__ we can use one object inside the other