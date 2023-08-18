// Value	State	Description
// 0	UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.


const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

// step 1
xhr.open("GET", URL)
// xhr.onreadystatechange = function () {
//     // console.log(xhr);
//     if (xhr.readyState === 4) {
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data)
//         console.log(typeof data)
//         console.log(typeof response)
//     }
// }
// 



// step - 2
xhr.onload = function () {
    const response = xhr.response;
    const data = JSON.parse(response)
    console.log(data)
}
xhr.send();