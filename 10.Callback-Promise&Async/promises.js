//----------------------------------------Promises
// promise is for "eventual" completion of task . It is an object in JS .
// it is a solutiin to callback hell
// syntax :- let promise = new Promise((resolve,reject) =>{....})
// resolve and reject are the function with 2 handler
// a js promise object can be :
// pending: the result is undefined
// resolved: the result is a value(fullfilled)         resolve(reuslt);
// rejected: teh result is an error object              reject(error);

// promise has state rejected pending and success


let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    // resolve("success")
    reject("Sorry");
})
console.log(promise);
// promise are normally created by APi and we normally only handle it



function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`data is ${dataId}`);
            resolve("success");

        }, 9000
        );
    })
}
getData(5)
