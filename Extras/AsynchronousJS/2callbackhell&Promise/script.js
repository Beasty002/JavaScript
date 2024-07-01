
const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {

            const data = JSON.parse(request.responseText)
            callback(undefined, data);
        }
        else if (request.readyState === 4) {
            callback('could not fetch data', undefined);
        }
    })
    request.open('GET', resource)
    request.send();

}

getTodos('luigi.json', (err, data) => {
    console.log(data);
    getTodos('mario.json', (err, data) => {
        console.log(data);
        getTodos('shaun.json', (err, data) => {
            console.log(data);
        })
    })
})
// this becomes a hassle as the code increases it becomes hard to maintain


//---------------------------------------------using promises
//promise is either resolved or rejected(error)
const getSomething = () => {
    return new Promise((resolve, reject) => { //always return the promise 
        resolve("solved data");
        // reject("error");

    })
};
// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// })
// better way to do is the one below
getSomething().then((data) => {
    console.log(data); //.then block is only called if the promise is resolved
}).catch((data) => {
    console.log(data); //.catch block is only called if the promise is rejected
})