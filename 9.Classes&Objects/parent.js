class parent {
    hello() {
        console.log("hello from parent");
    }
}
class child extends parent {
}
let obj = new child();
obj.hello();

// ----------------------------------------super keyword
// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods

class person {
    constructor(var1) {
        this.species = "home sapiens"
        console.log(var1)
    }
    eaat() {
        console.log("eat");
    }
}

class engineer extends person {
    constructor(branch, var1) {
        super(var1); //if the parent class has constructor then must call the super class at first or else it would throw error
        this.branch = branch;
    }
    work() {
        super.eaat(); //to access the parent element we need to use super keyword
        console.log("solve problem build something");
    }
}
let engObj = new engineer("chem", "man")
engObj.work();