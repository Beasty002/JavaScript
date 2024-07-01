
const getTodos = (resource, callback) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {

                const data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if (request.readyState === 4) {
                reject("error getting request")
            }
        })
        request.open('GET', resource)
        request.send();
    })
}
getTodos('luigi.json').then((data) => { //the "data" inside then is the one value returned by resolve
    console.log("promise 1 resolved : ", data);
    return getTodos('mario.json'); // this returns a promse for whole code from 19-22 and the then in 22 gets the data
}).then((data) => {
    console.log("promise 2 resolved : ", data);
    return getTodos('shaun.json') //dont forget to use return
}).then((data) => {
    console.log("promise 3 resolved : ", data);
}).catch(err => {
    console.log("i am error");
    console.log(err);
})




