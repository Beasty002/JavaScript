let p = new Promise((resolve, reject) => { //takes two parametre one is the resolve and other is reject
    let a = 1 + 2;
    if (a == 2) {
        resolve('It was a success')
    }
    else {
        reject("it failed")
    }
})


p.then((message) => {  //this is exeuted if 'p' is resolved i.e promuse is fullfilled and resolve(argument) is passed to the parameter of then
    console.log(message);
}).catch((message) => { //this is executed if 'p' is rejected i.e promise is not fullfilled and reject(argument) is passed tot the parameter of catch
    console.log(message)
})

let userLeft = false;
let userWachingMeme = true;

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({ name: 'User Left', message: ':(' })  //we can pass multiple value as parameter either using object or array
        }
        else if (userWachingMeme) {
            reject({ name: 'Watching meme ,', message: 'meme > tutorial' })
        }
        else {
            resolve('Its all good')
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log(`Success : ${message}`)
}).catch((error) => {
    console.log(error.name + " " + error.message)
});










const recordVideo1 = new Promise((resolve, reject) => {
    resolve('Video 1 recorded');
})
const recordVideo2 = new Promise((resolve, reject) => {
    resolve('Video 2 recorded');
})
const recordVideo3 = new Promise((resolve, reject) => {
    reject('Video 3 not recorded');
})


Promise.all([
    recordVideo1,
    recordVideo2,
    recordVideo3,
]).then((messages) => {  //all the resolve message of the promise is sent in a single array and messsages here holds  it
    console.log(messages);
}).catch((error) => [
    console.log(error) //if all message are not resolved it will only execute error even if one is reject
])