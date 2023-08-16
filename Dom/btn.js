// const firstBtn = document.querySelector("#one");
// firstBtn.addEventListener("click", function () {
//     console.log("you clicked")
// })



// // arrow function => retuns window onject
// //  function => returns this txt
// const allBtn = document.querySelectorAll(".my-button button");
// // for of loop
// for (let btns of allBtn) {
//     btns.addEventListener("click", function () {
//         // console.log("You clicked")
//         console.dir(this)
//     })
// }



// // traditional for loop
// for (let i = 0; i < allBtn.length; i++) {
//     allBtn[i].addEventListener("click", function () {
//         // console.log("You clicked")
//         console.dir(this)
//     })
// }


// // forEach loop
// allBtn.forEach(function (button) {
//     button.addEventListener("click", function () {
//         console.log("You clicked")
//         console.dir(this)
//     }
//     )
// })




// // event object
// const allBtnn = document.querySelectorAll(".my-button button");
// for (let bttns of allBtnn) {
//     bttns.addEventListener("click", (e) => {
//         console.log(e.currentTarget)
//     })
// }



// const cgColor = document.querySelectorAll(".my-button button");
// cgColor.forEach(btns =>{
//     btns.addEventListener("click", (e)=>{
//         e.target.style.color="red";
//         e.target.style.backgroundColor = "black"
//     })
// })


// const cngeAll = document.querySelectorAll('.my-button button');
// cngeAll.forEach(btnss =>{
//     btnss.addEventListener("click", (a)=>{
//         a.target.style.color= "red"
//         a.target.style.backgroundColor = "royalblue"
//     })
// })






// Demo project -> By clicking button then listen something
