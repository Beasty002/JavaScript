// // loops are used to exeute a piece of code again and again

// // ---------------------For loop
// for (let i = 1; i <= 4; i++) {
//     console.log("repeating time " + i);
// }
// // the loop is executed until the provided condition becomes false
// console.log("loop ended");
// // this prints the statement 4 times
// let sum = 0;
// for (let i = 1; i <= 4; i++) {
//     sum += i
// };
// console.log(sum);

// // --------------------------------------------------while loop
// let i = 1
// while (i <= 4) {
//     console.log("repeating time " + i);
//     i++;
// }

// // ----------------------------------------------------------do while
// // do while is executed atleast once for sure
// do {
//     console.log("repeating time " + i);
//     i++;

// } while (i <= 4)

// //---------------------------------------------------For of loop
// // helps to add loop for arrays and string
// let str = "The beasty";
// let size = 0;

// for (let i of str) {
//     console.log("i=", i);
//     size++;
// }
// console.log("the string size is " + size);

// // --------------------------------------------------for in loop
// // used for objects
// // key is returned in this loop
// const student = {
//     name: "Kaneki Ken",
//     age: 20,
//     cgpa: 4,
//     isPass: true
// };
// for (let i in student) {
//     console.log("key is ", i, " value is ", student[i]);
// }

// ----------------------------------------------Using loop to print all the even numbers

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

//-------------------------------------------------------- Guessing the number 
let uNum = prompt("Guess a number from 1-10");
let gameNum = 10;

while (uNum != gameNum) {
    uNum = prompt("you entered the wrong number . Guess Again :");
}
alert("congratulation you entered the right number");
10