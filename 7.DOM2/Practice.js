let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
newBtn.style.background = "red";
newBtn.style.color = "white";
newBtn.style.fontSize = "3rem";
let body = document.querySelector("body");
body.prepend(newBtn);


let para = document.getElementsByClassName("para");
body.append(para);

para[0].classList.add("new-class");