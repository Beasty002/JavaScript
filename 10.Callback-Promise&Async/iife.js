//-------------IIFE(Immeidately Invoked Function Expression)

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success");
            console.log("data", dataId);
        }, 2000);
    })
}
(async function getAllData() {
    await getData(1);
    await getData(2);
})();
// by adding the bracket the functino gets automatically called and the function can't used again , it is one time use only