// object is group of related properties 
// inside object we use comma(,) to seperate data instead of semicolomn
// object={key:value};

const person1 = {
    fName: "spongebob",
    lName: "squarepants",
    age: 30,
    isEmployed: true,
    sayHello: () => console.log("Hello my friend I Spongebob"),
}
const person2 = {
    fName: "Patrick",
    lName: "Star",
    age: 30,
    isEmployed: true,
    sayHello: () => console.log("Hello my friend I Patrick"),
}



console.log(person1.fName);
console.log(person2.fName);
person1.sayHello()
person2.sayHello()