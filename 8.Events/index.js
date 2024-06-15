// The change in the state of an object is known as an Event
// Events are fired to notify cocde of "intersting changes" that may affect code execution
/* Mouse Events(click , double click , ..........)
Keyboard Events(keypress,keyup,keydown)
for events (submit ..........)
print event and many more
*/



let btn1 = document.querySelector('#btn1');
btn1.onclick = () => {
    alert("btn 1 was clicked");

}


// --------------------------------------------Event Object
// it is a special object that has details about the event all event handlers have access to the event object's propeties and methods

btn1.onclick = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
}

let box = document.getElementById("box")
box.onmouseover = (evt) => {
    console.log(evt.clientX, evt.clientY)
}

// ---------------------------event listeners
