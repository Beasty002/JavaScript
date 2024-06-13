let heroes = ["ironman", "hulk", "thor", "batman", "Deadpool", "Wolverine", "Wanda", "Moon Knight"];
console.log(heroes);

// ---------------------------slice
// Syntax:- slice(startIndex,endIndex);
// this doesn't change the original array

console.log(heroes.slice(2, 4));
// This returns me the item at the index 2 and 3
console.log(heroes.slice(1,));
// This returns me the all  the starting from index 1 to the end


// -----------------------------Splice
// syntax : splice(startIndex,delCount,newElement......)
// This changes the original array

let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
num.splice(2, 0, "new num", "new num");
// Starting at index 2 without deleting any element (since we provided 0) it adds two string after it , we can add any thing as long as it is valid
console.log(num);
num.splice(2, 3,)
// starting from index 2 it will delete 3 elements and add none since we didnt provided any value
console.log(num);
num.splice(3, 3, "i am new", 3)
// starting at index 3 it deleted 3 elements and added 2 new provided datas
console.log(num);

// using spice to replace
num.splice(2, 1, 400);
// replaced the element at index 2 with 400
console.log(num);
num.splice(2);
// startin from index 2 it deleted all the later elements
console.log(num);





// create an array to store companies "bloomberg" , "microsoft" , "uber" , "google" , "IBM" , "netflix"

let company = ["bloomberg", "microsoft", "uber", "google", "IBM", "netflix"];
// remove the first company
company.shift();
console.log(company)

// remove uber and add ola
company.splice(1, 1, "Ola")
console.log(company)


// add amazon at the end
company.push("Amazon");
console.log(company)
