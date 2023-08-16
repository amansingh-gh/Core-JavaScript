// Events =  the system produces (or "fires") a signal of some kind when an event occurs, and provides a mechanism by which an action can be automatically taken

// onClick
// 1.  onclick="console.log('you click')
// 2. 
// const btn = document.querySelector(".btn-headline")
// console.dir(btn)
// btn.onClick = function () {
//     console.log("You clicked me")
// }

// 3. method = addEventListner
// const btn = document.querySelector(".btn-headline")
// method 1
// function clickMe(){
//     console.log("you clicked");
// }
// method 2
// btn.addEventListener("click", function () {
//     console.log("Hey you clicked, returned by eventListner defined function ")
// })

// method 3
// btn.addEventListener("click", () => {
//     console.log("This click is returned by arrow function")

// })


// this keyword
const btn = document.querySelector(".btn-headline");
btn.addEventListener("click", () => {
    console.log("This click is returned by arrow function")
    console.log("Value of this")
    console.log(this)
})
