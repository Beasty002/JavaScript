// the reduce method reduces the elements of an array to a single value

const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);
console.log(`$${total.toFixed(3)}`)
function sum(previous, next) {  //function that used as callback by the reduce always requires two parameters one holds the previous value/accumulator  and the other holds the next value
    return previous + next;
}


// how it works

// Initial previous value is the first element, 5. The next value is the second element, 30.
// sum(5, 30) returns 35.
// previous is now 35, next is the third element, 10.
// sum(35, 10) returns 45.
// previous is now 45, next is the fourth element, 25.
// sum(45, 25) returns 70.
// previous is now 70, next is the fifth element, 15.
// sum(70, 15) returns 85.
// previous is now 85, next is the sixth element, 20.
// sum(85, 20) returns 105.



const grades = [70, 65, 80, 90, 55];
const max = grades.reduce(getMax);
console.log("the max is " + max)
function getMax(accumulator, elemet) {
    return Math.max(accumulator, elemet);
}

//Here's how this works

// Initial accumulator value is the first element, 70. The element value is the second element, 65.
// getMax(70, 65) returns 70.
// accumulator is now 70, element is the third element, 80.
// getMax(70, 80) returns 80.
// accumulator is now 80, element is the fourth element, 90.
// getMax(80, 90) returns 90.
// accumulator is now 90, element is the fifth element, 55.
// getMax(90, 55) returns 90.
// At the end of these iterations, the accumulated value (max) is 90.