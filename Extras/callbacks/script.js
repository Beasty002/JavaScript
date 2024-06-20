// call back is a function that is passed as an argument to another function
// used to handle asynchronous operations
// like reading a file network request and interacting with databases
// hey when you're done , call this next

hello(goodBye); //the function passed shouldn't have a prenthesis
// function hello(callback) {
//     setTimeout(function () {
//         console.log('hell0');

//     }, 3000);
// }
function hello(callback) { // here the function is passed as an argument
    console.log('hell0');
    callback();
}
//goodbye will be printed then hello , js wont wait for other functions

// goodBye();
function goodBye() {
    console.log('GoodBye');
}





sum(display, 5, 6);
function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}
function display(result) {
    console.log(result);
}