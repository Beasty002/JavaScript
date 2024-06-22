const notesContainer = document.querySelector(".notes-container");
const addBtn = document.querySelector("button");
window.onload = showNotes();
function showNotes() {
    let notesList = localStorage.getItem("notesList");
    if (notesList == null) {
        notesList = [];
    }
    else {
        notesList = JSON.parse(notesList);
    }
    notesList.forEach((element, index) => {
        if (element.para === "" || element.para === undefined) {
            removeStorage(index);
        }
    })
    let containerData = "";
    notesList.forEach(element => {
        containerData += `<p class="input-box" contenteditable="true"> ${element.para}<img src="./images/delete.png" alt="Delete"></p>`;
    });
    notesContainer.innerHTML = containerData;
    updateText();
}


addBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    img.src = "./images/delete.png"
    img.classList.add("del-btn");
    inputBox.setAttribute("contenteditable", "true");
    inputBox.classList.add("input-box")
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    inputBox.addEventListener("keyup", () => {
        updateStorage(Array.from(notesContainer.children).indexOf(inputBox), inputBox.textContent);
    })

})

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        const parent = e.target.parentElement;
        const index = Array.from(notesContainer.children).indexOf(parent);
        parent.remove();
        removeStorage(index);
    }
});


function updateText() {
    let notes = document.querySelectorAll(".input-box");
    notes.forEach((element, index) => {
        element.addEventListener("keyup", () => {
            updateStorage(index, element.value)
            console.log(element.textContent)
        })
    })
}
function updateStorage(index, content) {
    let notesList = localStorage.getItem("notesList");
    if (notesList == null) {
        notesList = [];
    }
    else {
        notesList = JSON.parse(notesList);
    }
    if (content != "") {
        if (notesList[index]) {
            notesList[index].para = content;
        }
        else {
            notesList.push({ para: content });
        }
    }
    localStorage.setItem("notesList", JSON.stringify(notesList));
}

function removeStorage(index) {
    let notesList = localStorage.getItem("notesList");
    if (notesList != null) {
        notesList = JSON.parse(notesList);
        let recycleBin = localStorage.getItem("recycleBin");
        if (recycleBin == null) {
            recycleBin = [];
        }
        else {
            recycleBin = JSON.parse(recycleBin);
        }
        recycleBin.push(notesList[index]);
        localStorage.setItem("recycleBin", JSON.stringify(recycleBin))
        notesList.splice(index, 1);
        localStorage.setItem("notesList", JSON.stringify(notesList));
    }
}









