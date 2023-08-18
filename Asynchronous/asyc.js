// Synchronous = happens at the same time. 
// Asynchronous = doesn't happen at the same time.
// JS is synchronous and single threaded.



// setTimeout
// Below lines is the example of async js
// console.log("Script started");

const id = setTimeout(() => {
    console.log("under set time out")
}, 100)
// if above line setTimeout set on 0 still execute after next queued lines

for (let i = 0; i < 100; i++) {
    console.log("....")
}
console.log("Script end")
console.log(id)



// setInterval
console.log("Script start")
setInterval(() => {
    console.log(Math.round(Math.random() * 10));
}, 1000)
// clearInterval();
console.log("Script end");


const body = document.body;
const button = document.querySelector("button");
const intervalID = setInterval(() => {
    const red = Math.round(Math.random() * 256);
    const green = Math.round(Math.random() * 256);
    const blue = Math.round(Math.random() * 256);
    const rgb = `rgb(${red}, ${green}, ${blue})`
    body.style.background = rgb;
    // console.log(rgb)
}, 1000)

button.addEventListener("click", () => {
    clearInterval(intervalID);
    button.textContent = body.style.background;
})



// understand callback
function myFunc1(callback) {
    console.log("Function is doing task 1");
    callback();
}
function myFunc2() {
    console.log("Function is doing task 2");
}

myFunc1(myFunc2);
// myFunc2();



// // Nested callback is called callback hell
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
setTimeout(() => {
    heading1.textContent = "Hey heading 1"
    heading1.style.color = "red"
    setTimeout(() => {
        heading2.textContent = "Heading 2"
        heading2.style.color = "blue"
    }, 1000)
}, 1000)



// callback using fucntion
function changeText(element, text, color, time) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = color;
        }
        else {
            console.log("Element not exist");
        }
    }, time)
}
changeText(heading1, "1st Line", "red", 1000);
changeText(heading2, "Hey this is 2nd text", "purple", 2000);