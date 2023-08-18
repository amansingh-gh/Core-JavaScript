const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            }
            else {
                reject("Something went wrong")
            }
        }

        xhr.onerror = function () {
            reject(new Error("Network weak"))
        }

        xhr.send();
    })
}

// const x = sendRequest('GET', URL);
// console.log(x)

sendRequest('GET', URL).then(response => {
    const data = JSON.parse(response);
    // console.log(data)
    return data;
})

    .then(data => {
        console.log(data)
    })