const fetchData = fetch("mario.json"); //this returns a promise
fetchData.then((response) => { //in fetch the promise is only rejected if we have some kind of  network error or else it is not rejected we still get response and catch block is not executed insted we can see error in status of response object
    //if the url is wrong we get status 404
    console.log("resolved :", response) //in response we cant see the data here we only get the response object
    return response.json(); // this also returns a promise
}).then((data) => {
    console.log("resolved :", data) //here we get the data
}).catch(err => {
    console.log("rejected :", err)
})

