// JS is a scynchronous language
// this means that by default js executes code in a sequential manner one line after another waiting for eacj operation to be completed before another

// JS is a single threaded language
// this means that js can only execute one line of code at a time , it can only perform one task at a time

// JS is a non-blocking language
// this means that js can perform multiple tasks at the same time by using callbacks and promises

console.log(1);
console.log(2);
setTimeout(() => {  //this is asynchronous and doesnt block the code andis executed after 2s
    console.log("callback fired");
}, 2000);
console.log(3);
console.log(4);





