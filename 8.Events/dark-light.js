let tog = document.getElementById("toggler");
let body = document.querySelector("body");
tog.addEventListener(("click"), () => {
    let curClass = body.className;
    console.log(curClass)
    if (curClass === "light") {
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else {
        body.classList.add("light");
        body.classList.remove("dark");
    }
});