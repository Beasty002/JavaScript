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

let a1 = 40;
a1 += 20;
// this means a1 = a1 + 20
console.log('Value of a1 is', a1);
let b1 = 30;
b1 -= 20;
// this means b1 = b1 - 20
console.log('Value of b1 is', b1);
// in similar way we can do for divide and multiply and modulo (%) or exponianation (power)


// ---------------------------Comparison operators
// it us used to compare two values

// '==' : equal to
// '===' : equal to and data type
// '!=' : not equal to
// '!==' : not equal to and type
// > : greater than
// >= greater or equal to 
// < less than
// <= less than or equal to

let a2 = 4;
let b2 = 4;
let c2 = 8;
let d2 = '4'; //string
console.log('a2==d2', a2 == b2);
console.log('a2===d2', a2 === d2);
console.log('a2!=d2', a2 != d2);
console.log('a2!==d2', a2 != b2);
console.log('a2<=b2', a2 <= b2);
console.log('a2<=d2', a2 <= d2);



//---------------------------------- Logical Operators

// Logical And   ->        &&
// Logical or   ->        ||
// Logical not   ->        !

let a3 = 6;
let b3 = 5;
let cond1 = a3 < b3; //false
let cond2 = a3 === 6; //true
console.log('cond1 && cond2', cond1 && cond2);
// if both condition are true , then the value is true or else false
console.log('cond1 && cond2', cond1 || cond2);
// if any condition is true , then the calue is true or if both false then the condition is false
console.log('!(a<b) ', !(a < b));
// changes true to false and vice versa



