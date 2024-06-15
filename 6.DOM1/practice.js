let el = document.querySelector("h2");
el.innerText = el.innerText + " From Beasty";

let ele = document.querySelectorAll(".box");
for (el of ele) {
    el.style.height = "200px";
    el.style.width = "200px";
    el.style.border = "1px solid coral";

}



let elem = document.querySelectorAll(".box");
// elem[0].innerText = "Hello my friend"
// elem[1].innerText = "I am fine"
// elem[2].innerText = "How are you"

let i = 0;
elem.forEach((elements) => {
    elements.innerText = `i am the unique value ${i}`
    i++;


});