//-------------------------------------call back hell
// nested callbacks stacked below one another forming a pyramid structure

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        })
    });
})
// this gets complicated even in simpler form , but in real life programming we have to do same for longer line of code and this becomes a bighassle and creates 'Callback hell'
