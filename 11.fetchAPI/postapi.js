let url = "https://reqres.in/api/users";
// fetch(url).then(res => res.json()).then(data => console.log(data))
//     .catch(error => console.log("error"));

// syntax = fetch(URL,[options])

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'User 1'
    })
}).then(res => {
    return res.json();
}).then(data => console.log(data))