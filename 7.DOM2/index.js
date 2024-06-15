//-------------------------------------------------------------- attribute Selector
let div = document.querySelector("div");
console.log(div);
div.style.border = "1px solid gray"
let id = div.getAttribute("id")
console.log(id);

let box = div.getAttribute("name");
console.log(box);

div.setAttribute("class", "className");


//--------------------------------------------------------------set elements
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
console.log(newBtn);
div.append(newBtn);
//adds the element at the end of the node as a child
div.prepend(newBtn);
//adds the element at the first of the node as a child
div.before(newBtn);
//adds the element just before the element as a sibling
div.after(newBtn);
//adds the element just after the element as a sibling

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi I am the new</i> heading"
let bod = document.querySelector("body");
bod.prepend(newHeading);

// ------------------------------------Delete node/element
let para = document.querySelector("p");
para.remove();












