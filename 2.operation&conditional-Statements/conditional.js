// ---------------------------to implement some conditions in the code
// if statement
/* if(condition){
     statement;
 } */
// if the condition is true then the statement is executed
let age = 25
if (age > 18) {
    console.log("you are eligible to vote this time");
}

let mode = 'dark';
let color;
if (mode === "dark") {
    color = "black";
}
if (mode === "light") {
    color = "white";
}
console.log(color);

//------------------ if else conditon
// when the condition on if is false then execute the condition on else
age = 16;
if (age > 16) {
    console.log("you are eligible to vote");
}
else {
    console.log("you are not eligible to vote");
}

// -----------else if condition
// check multiple condition
age = 69;
if (age < 18) {
    console.log("you are a Minor");
}
else if (age > 60) {
    console.log("you are a Senior");
}
else {
    console.log("you are a middle");

}


//---------------------------------------------------Ternary operators

// syntax :  condition?true o/p : false o/p
// eg a?b:c     , if a is true then execute b else execute c

age = 40;
let result = age > 20 ? "adult" : "not adult";
console.log(result);

// -------------------------------switch statement

const name = 'beasty';
switch (name) {
    case 'nick': console.log('hey nick'); break;
    case 'Rick': console.log('hey rick'); break;
    case 'beasty': console.log('hey beasty'); break;
}


//--------------------------practice question to check if the number is multiple of 5
// let num = prompt("enter a number");
// console.log(num);
// if (num % 5 === 0) {
//     alert(num + " is multiple of 5");
//     // in alert use '+' instead of comma to concatenate the string or any data types
// }
// else {
//     alert(num + "is not multiple of 5"); 4
// }

// -------------------code to give student a grade
let grade = prompt("enter your grade")
if (grade > 100 || grade10 < 0) {
    alert("enter a valid grade");
}
else if (grade >= 90 && grade <= 100) {
    alert("Congrats you got A");
}
else if (grade >= 70 && grade <= 89) {
    alert("Congrats you got B");
}
else if (grade >= 60 && grade <= 69) {
    alert("Congrats you got C");
}
else if (grade >= 50 && grade <= 59) {
    alert("Congrats you got D");
}
else {
    alert("Try again")
}



