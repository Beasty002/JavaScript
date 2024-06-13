// array function is a compact way of writing a function
// function sum(a, b) {
//     return a + b;
// } this can be written as
// array function is used for short tasks


// in array function the variable stores the value of the function
const printP = () => {
    console.log("Random print");
}

printP();
const sum = (a, b) => {
    return a + b;
}
console.log(sum(5, 6));


let mul = (a, b) => {
    console.log(a * b);
}
mul(5, 6);

// the right side i.e the elements after equals to sign is the function the part on the left side is the variable where the value or the function is stored
mul = 'i have been renewed';
console.log(mul);




// -----------------Practice   create a function using the "function" keyword that takes a String as an argument and returns the number of vowels in the string;

function vowelCalc(letter) {
    let vowelCount = 0;
    for (let vowel of letter) {
        if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
            vowelCount++;
        }

    }
    console.log(`there are ${vowelCount} in the string`);
}
vowelCalc("aaaaa");

const vowelCount = (letter) => {
    let count = 0;
    for (let vowel of letter) {
        if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
            count++;
        }

    }
    console.log(`there are ${count} in the string`);
}
vowelCount('kegllo')