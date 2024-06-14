//----------------------------------------- Array method
// ------------------------------Map
// Creates a new array with the results of some operation. The value its callback returns are used to form new array
// syntax :   arr.map(callbackFnx(value,index,array));

let arr = [1, 2, 3, 4, 5, 6];
let newArr = arr.map((val) => {
    return val * val;
});
console.log(newArr);

// --------------------Filter Method 
// Creates a new array of elements that give true for a condition / filter

let newArr1 = arr.filter((val) => {
    return val % 2 === 0;  //we can add the condition we require and the only true condition are stored in the new array
});
console.log(newArr1);



// -------------------------------- reduce
// performs some operations and reduces the array to a single value. It returns that single value
let evenArr = arr.reduce((result, current) => {
    return result + current;
})
console.log(evenArr);


const output = arr.reduce((prev, cur) => {
    return prev > cur ? prev : cur;
})
console.log(output)



// Filter out the marks of student that scored more than 90+.
let marks = [12, 38, 90, 78, 93, 89, 94];
const marks90 = marks.filter((val) => {
    return val >= 90;
})
console.log(marks90);



// take number n as input from user . Create an array of numbers from 1 to n. USe the reduce method to calculate sum of all numbers in the array use the reduce method to calculate sum of all numbers in the array. Again use the reduce method to calculate product of all numbers in the array.


let n = prompt('Enter a number');
let arrN = [];
for (let i = 1; i <= n; i++) {
    arrN.push(i);
}
let sumA = arrN.reduce((prev, cur) => {
    return prev + cur;
})
console.log(`Your sum is ${sumA}`);

let prodA = arrN.reduce((prev, cur) => {
    return prev * cur;
});
console.log(`Your sum is ${prodA}`);

