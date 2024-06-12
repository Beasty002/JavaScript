console.log("Hello world");

/* ----------------------------------------------Arthemetic Operatiors 
modulus(%) = reminder
exponantion = power eg 2^2
*/
// these all are normal operator that work on two or multiple operand
let a = 5;
let b = 4;
let c = a - b;
console.log("a + b =", a + b); b
console.log("a - b =", c);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a to the power b =", a ** b);




// the following are unary operators
let d = a++;
// a++ means incrementing a by 1 i.e a +  , this means post incrementing
let e = a--;
// d--  means decrementing a by 1 i.e a - 
console.log('the value of d = ' + d + ' and the value of e = ' + e)
console.log('the value of d = ', d, ' and the value of e = ', e)
// here we get the value wrong why?
// because a++ means that d gets the current value of a before a is incremented by 1.
// because a-- means that e gets the current value of a before a is decremented by 1. 

// we can solve this by 
a = 40;
a++;
d = a;
console.log('d = ', d)
// or 
d = ++a;
// ++a means the value of a is incremented and 'd' gets that value , this is known as pre increment
console.log('d = ', d);

// same way we can do for decrementing




// -------------------------------------------------- Assignment operators
// '=' is an assignment operator