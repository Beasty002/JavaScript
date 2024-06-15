// document.querySelector("myId/myClass/tag");
// returns first element

// document.querySelectorAll("myId/myClass/tag")'
// returns node list

let firstEl = document.querySelector("div");
firstEl.style.background = "red";
console.log(firstEl.tagName);

let el1 = document.querySelectorAll("div");
el1.forEach((element) => {
    element.style.marginTop = "40px";
    console.log(element.tagName);
})

let el2 = document.querySelector("#h1");
el2.style.color = "orange";

console.log(el2.tagName);

let p1 = document.querySelector(".p1")
p1.style.color = "red"

console.log(p1.innerText);

let sec = document.querySelector("#sec1");
console.log(sec.innerHTML); // Logs the inner HTML content of the element with ID "sec1"


let elem = document.querySelector("#hiddenH");
console.log(elem.innerText);
// returns nothing since the element is hidden
console.log(elem.textContent);
// returns even the hidden content