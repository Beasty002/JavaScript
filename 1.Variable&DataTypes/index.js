// Variable is a data holding container
// var : variable can be re declared and update . A globla scope variable
// let : Variable cannot be redeclared by can be updated . A block scope variable
// const : Variable cannot be redeclared or update. A block scope variable


// use 'let' or 'const' instead of var 

const a = 20;
// const always need value at the start
const student = {
    fullName: 'The Beasty',
    age: 20,
    gpa: 8.2,
    passedExam: true
};
student["age"] = student["age"] + 1;
// to access the key/data in an object we can use both the follwinf methods below
console.log(student['fullName']);
console.log(student.fullName);

const productCard = {
    img: 'll.jpg',
    title: "ball",
    rating: 4,
    sp: 270,
    mrp: 5
}
console.log(productCard);

const profileSocial = {
    img: 'img.src',
    name: 'The one',
    isFollow: true,
    noPost: 40,
    followers: 480,
    username: 'lasttheone',
    job: 'Entrepreneur',
    desc: 'I am lorem fdfdfd'
}
console.log(profileSocial);

console.log(typeof profileSocial.username);

