const name = document.getElementById("name");
const age = document.getElementById("age");
const tableB = document.querySelector("tbody");

function showData() {
    var peopleList;
    peopleList = localStorage.getItem("peopleList");
    if (peopleList === null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(peopleList);
    }

    let data = "";
    peopleList.forEach(function (element, index) {
        data += "<tr>";
        data += "<td>" + element.name + "</td>";
        data += "<td>" + element.age + "</td>";
        data += "</tr>";
    });
    tableB.innerHTML = data;
}

window.onload = showData;

function add() {
    var peopleList;
    peopleList = localStorage.getItem("peopleList");
    if (peopleList === null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(peopleList);
    }
    peopleList.push({
        name: name.value,
        age: age.value,
    });

    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
    name.value = "";
    age.value = "";
}