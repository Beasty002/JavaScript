function makeRequest(loc) {
    return new Promise((resolve, reject) => {
        console.log("Making request to " + loc);
        if (loc === 'Google') {
            console.log("Howdy")
            resolve("Google says hi");

        }

        else {
            reject("We don't talk anymore");
        }

    })
}


function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response');
        resolve("Extra info " + response);
    })
}

// makeRequest('Google').then((response) => {
//     console.log("Response recieved");
//     return processRequest(response);  //in a chained promise , a promise should always be returned
// }).then((response => {
//     console.log("Task completed")
// })).catch((error) => {
//     console.log(error)
// })


// ---------------------------------with async await can does as


(async function doWork() {
    try {
        const response = await makeRequest('Google');
        console.log("response recieved");
        const processResponse = await processRequest(response);
        console.log(processResponse)
    }
    catch (err) {
        console.log(err);
    }


})();