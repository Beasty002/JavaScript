const getTodos = async () => { //this becomes a asynchronous function and it always returns a promise
    const response = await fetch('luigis.json'); //the await allows us to stop other function to work in the async function unless the promise is resolved if one is resolved we move to another and so on
    //await is a keyword that allows us to wait for a promise to be resolved
    if (response.status !== 200) {
        throw new Error('cant fetch the data');
    }
    const data = await response.json(); //this is the data that we get from the json file
    return data //this is the data that we get from the json file

}
getTodos().then(data => {
    console.log(data)
}).catch(err => {
    console.log(err.message)
});