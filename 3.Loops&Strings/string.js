// String is a sequence of characters used to represent text
let str = "I am a string";
// the above is an example of string
let str1 = 'I am a string';
// we can use both double and single quote to give value of the string
console.log("the length of str is ", str.length);
console.log("the first character of str is ", str[0]);
console.log("the fifth character of str is ", str[5]);


// ---------------------------------------------- Template literals
// a way to have embedded expression in strings
// is is a special kind of string
// syntax : ${expression}
let str2 = `I am a special string`;
// notice here we didn't used single or double quotation instead we use back ticks ( ` `);
console.log(str2);
// we see no difference here we see it same as usign the quotations but there is big use for it 

let obj = {
    item: 'pen',
    price: 20,
};
// console.log("The cost of ", obj.item, " is ", obj.price, "rupees");

// we can make this easier by using template literals or special strings
let output = `The cost of ${obj.item} is ${obj.price}`;
console.log(output);
// this makes the way to access object value along with string easier
console.log(`the update price of ${obj.item} is ${2 * obj.price} `)
console.log(`the sum of 1 , 2 and 3 is ${1 + 2 + 3}`)
// we can also perform different operations using template literals
