console.log("hello world")
    //first parameter is always the URL
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
        console.log(res) //firs we get some properties related to the api call  here we dont see the data , in order to see the data we need to convert it to .json format
        return res.json();
    }).then((data) => {
        console.log(data) // here we get all the data
    })
    const data = {
        title: "this is title",
        body: "this is post body",
        userId: 2
    }


    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data), // this will convert the data into json format
        headers: {
            "Content-type": "application/json"

        }


    }).then(res => res.json()).then(data => console.log(data))