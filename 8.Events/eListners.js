let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    console.log("button1 was clicked");
})
btn.addEventListener("click", (eve) => {
    console.log("button1 was clicked through handler2");
    console.log(eve.type);
})
const handler3 = () => {
    console.log("got clicked in handler3")
}
btn.addEventListener("click", handler3);
btn.removeEventListener("click", handler3)


// ------------------------------------------------------------dark mode light mode
let curMode = "light";
let tog = document.getElementById("toggler");
tog.addEventListener(("click"), () => {
    if (curMode === "light") {
        curMode = "dark";
        document.querySelector("body").style.backgroundColor = "black"

    }
    else {
        curMode = "light";
        document.querySelector("body").style.backgroundColor = "white"
    }
    console.log(curMode)
})
