// For a given array with marks of students -> [85,97,44,37,76,60] find the avg marks of entire class
let arr1 = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let arVal of arr1) {
    sum += arVal;
}
console.log('The avg is ', sum / arr1.length)



// for a given array with prices of 5 items -> [250,645,270,900,50] All items have an offer of 10% off on them. Change the array to staore the final price after appying the offer

let arr2 = [250, 645, 300, 900, 50];
for (let i in arr2) {
    arr2[i] = arr2[i] - 0.1 * arr2[i];
}
for (let i of arr2) {
    console.log(`The new price is ${i}`)
}

