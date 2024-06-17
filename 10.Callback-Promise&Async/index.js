function hello() {
    console.log("I have been delayed");
}
setTimeout(hello, 3000); //after 3s the function is called
console.log("one")
setTimeout(() => {
    console.log("HEllo");

}, 4000); //after 4s the function is called
console.log("two")

//Call back is a function passed as argument to other function
function sum(a, b) {
    console.log(a + b);
}
function calculator(a, b, sumCallback) {
    sumCallback(a, b * 3);
}
calculator(5, 6, sum); //callback should.t be passed with an parenthesis
calculator(10, 20, (a, b) => {
    console.log("The sum is ", a + b)
})