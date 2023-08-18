
const URL = "https://jsonplaceholder.typicode.com/posts/1";
const xhr = new XMLHttpRequest();

xhr.open("GET", URL)
xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.response);
        console.log(data)
    }
    else {
        console.log("Something is wrong")
    }
}

xhr.onerror = () => {
    console.log("Network Error")
}


xhr.send();