class Person {
    constructor(name, address, hobbies) {
        this.name = name
        this.address = address
        this.hobbies = hobbies
    }
    print() {
        console.log(this)
    }
}

function printPersonStreet(person) {
    //console.log(person.address.street);    // if person is undefined then others are too and if address is undefined the one after it are too  this throws errorso the other way to write is good

    // this can be written as
    console.log(person && person.address && person.address.street) // this is read as do owe have a person if so do we have address on the person if so then print the street
    //easy way to write is
    console.log(person?.address?.street); //does the person exist if yes then move to address does it exist inside person if so then print the street
}

const kyle = new Person("Kyle", {
    street: "12345 main st", city: "somewhere"
}, ["bowling", 'WeightLifting'])


const vik = new Person("vik", {
    undefined
}, undefined)


kyle.print();
printPersonStreet(kyle);
printPersonStreet(undefined);
printPersonStreet(vik);   //this throws undefined since we dont have address as it is undefeined



// optional chainning helps us check if something we like is there in the object or not

kyle.printName?.(); //this checks if printName exists or not and is it a function or not
//we didnt use optional chaining it would throw error but not here


// it can even be used for array
console.log(vik.hobbies?.[4]);
// now it wouldnt throw error rather it would throw undefined
