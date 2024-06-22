const notesContainer = document.querySelector(".notes-container");
const addBtn = document.querySelector("button");
function showNotes() {
    let notes = document.querySelectorAll(".input-box");
    let notesList = localStorage.getItem("notesList");
    if (notesList == null) {
        notesList = [];
    }
    else {
        notesList = JSON.parse(notesList);
    }
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
})

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
});


function updateText() {
    console.log("i am called")
    let notes = document.querySelectorAll(".input-box");
    notes.forEach((element, index) => {
        element.addEventListener("keyup", () => {
            updateStorage(index, element.value)
            console.log(element.textContent)
        })
    })
}
function updateStorage(index, content) { }







// const notesContainer = document.querySelector(".notes-container");
// const addBtn = document.querySelector("button");
// showNotes();

// function showNotes() {
//     let notesList = localStorage.getItem("notesList");
//     if (notesList === null) {
//         notesList = [];
//     } else {
//         notesList = JSON.parse(notesList);
//     }
//     let containerData = "";
//     notesList.forEach((element, index) => {
//         containerData += `<p class="input-box" contenteditable="true"> ${element.para}<img src="./images/delete.png" alt="Delete"></p>`;
//     });
//     notesContainer.innerHTML = containerData;
//     addKeyUpListeners();
// }

// function addKeyUpListeners() {
//     const notes = document.querySelectorAll(".input-box");
//     notes.forEach((note, index) => {
//         note.addEventListener("keyup", () => {
//             updateNoteInLocalStorage(index, note.textContent);
//         });
//     });
// }

// function updateNoteInLocalStorage(index, content) {
//     let notesList = localStorage.getItem("notesList");
//     if (notesList === null) {
//         notesList = [];
//     } else {
//         notesList = JSON.parse(notesList);
//     }

//     if (notesList[index]) {
//         notesList[index].para = content;
//     } else {
//         notesList.push({ para: content });
//     }
//     localStorage.setItem("notesList", JSON.stringify(notesList));
// }

// addBtn.addEventListener("click", () => {
//     let inputBox = document.createElement("p");
//     let img = document.createElement("img");
//     img.src = "./images/delete.png";
//     img.alt = "Delete";
//     inputBox.setAttribute("contenteditable", "true");
//     inputBox.classList.add("input-box");
//     inputBox.appendChild(img);
//     notesContainer.appendChild(inputBox);

//     // Add keyup event listener to the new paragraph
//     inputBox.addEventListener("keyup", () => {
//         updateNoteInLocalStorage(Array.from(notesContainer.children).indexOf(inputBox), inputBox.textContent);
//     });
// });

// notesContainer.addEventListener("click", (e) => {
//     if (e.target.tagName === "IMG") {
//         const parent = e.target.parentElement;
//         const index = Array.from(notesContainer.children).indexOf(parent);
//         parent.remove();
//         removeFromLocalStorage(index);
//     }
// });

// function removeFromLocalStorage(index) {
//     let notesList = localStorage.getItem("notesList");
//     if (notesList !== null) {
//         notesList = JSON.parse(notesList);
//         notesList.splice(index, 1);  // Use splice to remove the item
//         localStorage.setItem("notesList", JSON.stringify(notesList));
//     }
// }
