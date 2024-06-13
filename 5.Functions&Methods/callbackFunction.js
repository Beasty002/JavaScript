//------------------ for Each loop in arrays

// syntax : arr.forEach(callBackFunction)
// CallbackFunction is a function to execute for each element in the array
// A Callback is a function passed as an argument to another function

// function can be passed as parameter/argument in js and returned as well
let arr = [1, 2, 3, 4, 5, 6];
arr.forEach(function printVal(Val) { // Val is the value at each index
    console.log(Val);
});

let arr1 = ['ironman', 'batman', 'superman']
arr1.forEach((val, idx, array) => {
    console.log(val.toUpperCase(), idx, array);
});

// Higher order function is the function which use other function as parameter or uses as return and for each loop is a square method



// print the square of numbers in an array using loop

let nums = [1, 2, 3, 4];
nums.forEach(function printSquare(val) {
    console.log(`The square of ${val} is ${val * val}`);
});

let calcSquare = (num) => {
    console.log(num * num);
}

// Another way to do it
nums.forEach(calcSquare)


