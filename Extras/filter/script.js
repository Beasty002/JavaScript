// filter creates a new array by filtering out elements

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNum = number.filter(isEven)
console.log(evenNum)

function isEven(element) {
    return element % 2 === 0;
}


const ages = [16, 17, 18, 18, 19, 20, 60];
const adult = ages.filter(isAdult); //the filter method expects the callback to return true or false 

// The filter method iterates over each element in the ages array.
// For each element, it calls the isAdult function and passes the current element as an argument.
// If isAdult returns true, the current element is included in the new array.
// If isAdult returns false, the current element is excluded from the new array.
console.log(adult)
function isAdult(element) {
    return element >= 18;
}