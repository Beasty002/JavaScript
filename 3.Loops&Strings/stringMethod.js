let str = "            Hello My         Friday ll"
// -----------------------string methods
// syntax : str.method()

console.log(str.length)
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.trim())
// removes the whitespace at the starting and ending of the words
let str1 = '0123456789'
console.log(str1.slice(0, 4));
console.log(str1.slice(4));
console.log(str1.slice(5, 8));
console.log(str.concat(str1));
let str2 = str1 + str;
console.log(str2);
console.log(str.replace("l", 4))
// only replaces the first character that comes , which is specified
console.log(str.replaceAll("l", 4))
// replaces all the character that is specified 
console.log("The character at 8th index is ", str.charAt(18))


let userName = prompt("Enter your name");
alert("Your username is @" + userName);
// Note :-  you can only concatenate in alert using '+' you can't use comma unlike console.log()
console.log("Your username is @", userName); 