class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewdata() {
        console.log("some data")
    }
}
class admin extends user {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        console.log("some new data");
    }
}

let s1 = new user("john", "sdfd2@email");
let s2 = new user("doe", "ddd@email");
let t1 = new user("dean", "dean@college.com");
let a1 = new admin("admin", "admin@gmail.com");
a1.editData();
a1.viewdata();
