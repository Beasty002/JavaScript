// ---------------------------------------------Array
// array is a collection of items
// array is a type of an object

let heroes = ["ironman", "hulk", "thor", "batman"];
let marks = [20, 47, 56, 55];
let info = ["ironman", "tony stark", 38];
console.log(heroes);
console.log(heroes[0]);
console.log(`the length of array info is ${info.length}`);
console.log(typeof heroes);
// array is like a object where instead of key we use index
heroes[1] = "superman";
console.log(`the hero Hulk at index 1 is changed to ${heroes[1]}`)