//------------------ for Each loop in arrays

// syntax : arr.forEach(callBackFunction)
// CallbackFunction is a function to execute for each element in the array
// A Callback is a function passed as an argument to another function

// function can be passed as parameter/argument in js and returned as well
let arr = [1, 2, 3, 4, 5, 6];
arr.forEach(function printVal(Val) { // Val is the value at each index
    console.log(Val);
});

arr.forEach((val) => {
    console.log(val.toUpperCase());
});
