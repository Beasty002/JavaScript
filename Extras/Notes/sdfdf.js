const notesContainer = document.querySelector(".notes-container");
const addBtn = document.querySelector("button");
showNotes();

function showNotes() {
    let notesList = localStorage.getItem("notesList");
    if (notesList === null) {
        notesList = [];
    } else {
        notesList = JSON.parse(notesList);
    }

    let containerData = "";
    notesList.forEach((element, index) => {
        containerData += `<p data-index="${index}" contenteditable="true" class="input-box"> ${element.para}<img src="./images/delete.png" alt="Delete Note"></p>`;
    });
    notesContainer.innerHTML = containerData;

    update();
}

addBtn.addEventListener("click", () => {
    let notesList = localStorage.getItem("notesList");
    if (notesList === null) {
        notesList = [];
    } else {
        notesList = JSON.parse(notesList);
    }

    notesList.push({ para: "" });
    localStorage.setItem("notesList", JSON.stringify(notesList));
    showNotes();
});

function update() {
    let notes = document.querySelectorAll(".input-box");
    notes.forEach(note => {
        note.onkeyup = function () {
            let index = this.getAttribute("data-index");
            saveNoteContent(index, this.textContent);
        };
    });
}

function saveNoteContent(index, content) {
    let notesList = localStorage.getItem("notesList");
    if (notesList === null) {
        notesList = [];
    } else {
        notesList = JSON.parse(notesList);
    }

    notesList[index].para = content;
    localStorage.setItem("notesList", JSON.stringify(notesList));
}

notesContainer.addEventListener("click", e => {
    if (e.target.tagName === "IMG") {
        let parentParagraph = e.target.parentElement;
        let index = parentParagraph.getAttribute("data-index");
        removeNoteContent(index);
        parentParagraph.remove();
    }
});

function removeNoteContent(index) {
    let notesList = localStorage.getItem("notesList");
    if (notesList === null) {
        notesList = [];
    } else {
        notesList = JSON.parse(notesList);
    }

    notesList.splice(index, 1);
    localStorage.setItem("notesList", JSON.stringify(notesList));
    showNotes();
}
