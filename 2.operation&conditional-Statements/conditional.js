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