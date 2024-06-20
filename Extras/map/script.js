const arr = [10, 11, 12, 13, 14, 15, 16];
// arr.forEach(array => {
//     console.log(array);
// })


//map is similar to forEach but here it accepts a callback and applies that function to each element then returns a new array
const squares = arr.map(square); //storing the new array
console.log(squares)
function square(element) {
    return Math.pow(element, 2);
}


const student = ["spongebob", "sqidward", "patrick"];
const studentsUpper = student.map(UpperConvert);
console.log(studentsUpper)
function UpperConvert(element) {
    return element.toUpperCase();
}


const dates = ["2024-1-10", "2023-10-12", "2026-3-30"];
const newDates = dates.map(formatDates);
console.log(newDates)
function formatDates(element) { //Here the elemet is the each element at the array index 
    const parts = element.split("-"); //splits the elemnt at each '-'
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}