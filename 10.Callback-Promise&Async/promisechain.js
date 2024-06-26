function async1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");

        }, 4000)
    })
}
function async2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");

        }, 4000)
    })
}
console.log("fetching data1.........");
async1().then((res) => {
    setTimeout(() => {
        console.log("fetching data2................")
        let p2 = async2().then((res) => { })
    }, 1000);
})




//------------------------PREVIOUS CALLBACK HELLPROBLEM CAN BE WRITTEN AS

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 1000);
    })
}
getData("The")
    .then((res) => {
        return getData("Beasty");
    })
    .then((res) => {
        console.log(res)
    })