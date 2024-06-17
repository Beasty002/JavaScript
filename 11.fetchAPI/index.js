// ----------------------------------------------Fetch API(Application programming interface)
// it provides an interface for fetching (sending/receiving) resources
// it uses request and responce objects
// the fetch() method is used to fetch a resource(data).
const factPara = document.getElementById("fact");
const btn = document.getElementById("btn");
const URL = "https://cat-fact.herokuapp.com/facts"
const getFacts = async () => {
    console.log("getting data............")
    let response = await fetch(URL); //a promise is returned with fetch
    console.log(response); //JSON format
    let data = await response.json(); // converts the response body to a JavaScript object
    console.log(data[0].text)
    factPara.innerText = data[0].text;
}
btn.addEventListener("click", getFacts);


// using promise chain
// function getFacts() {
//     fetch(URL).then((response) => {
//         return response.json();
//     }).then((data) => {
//         factPara.innerText = data[0].text;

//     })
// }