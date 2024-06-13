// --------------------------Array methods
let heroes = ["ironman", "hulk", "thor", "batman"];
let heroesG = ["Wanda", "VaLkyrie", "Peggy"]
heroes.push("Spiderman", "Storm");
// adds element at last of the origninal array
console.log(heroes);
let deletedItem = heroes.pop()
// deletes the element at the last index
// Change is original array
console.log(heroes);
console.log("we deleted " + deletedItem);
console.log(heroes.toString());
let allHeroes = heroes.concat(heroesG);
// no change in original array
console.log(allHeroes);

heroes.unshift("Thor");
console.log(heroes)
// acts as push but element is added at the first

heroes.shift();
console.log(heroes);
// acts as pop but element from the first is deleted







