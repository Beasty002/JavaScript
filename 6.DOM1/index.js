// document.body.style.background = "hotpink";
// document.body.childNodes[1].innerText = "abcd"
// document.body.childNodes[1].innerText = "abcd"
// console.dir(document.body);


// ---------------------------------Selecting with id
let var1 = document.getElementById("Id");
var1.innerText = "I have been changed";
var1.style.color = 'red';

//----------------------------------Selecting with class
let var2 = document.getElementsByClassName("class");
var2.innerText = "I have also been changed";
for (let i = 0; i < var2.length; i++) {
    var2[i].innerText = "I have also been changed";
    var2[i].style.background = "hotpink";
}
// you need to add loop for tag and class name to change the property


// l----------------------------- by tag name

let var3 = document.getElementsByTagName("button");
for (let i = 0; i < var3.length; i++) {
    var3[i].style.background = "red";
}