// if we have promise fullfilled then we use promise.then((res) => {.......})
// if we have promise rejected then we use promise.catch((err) => {.......})

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        // resolve("succeess");
        reject("I am the error");
    });
};

let promise = getPromise();
promise.then(() => {
    console.log("promise fullfilled");
});
promise.catch((err) => {
    console.log("there is an error", err)
})