//---------------------------------- Async Await
//async function always returns a promise
// await pauses the executino of its surrounding async function until the promise is settled

async function hello() {  //async is a keyword
    console.log("hello")
}


function api(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data = ", data);
            resolve(200);
        }, 2000)
    })
}

async function getWeatherData() {
    await api(1); //1st
    await api(2); //2nd
}
getWeatherData();







//----------------------------------------
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success");
            console.log("data", dataId);
        }, 2000);
    })
}
async function getAllData() {
    await getData(1);
    await getData(2);
}
getAllData();