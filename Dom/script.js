// // getElementId selector
// const mainHeading = (document.getElementById("main-heading"))
// // console.log(mainHeading)
// // mainHeading.style.color="red"

// // query selector-> only gives only first matched class
// const header = document.querySelector(".header")
// console.log(header)

// // query selectorAll -> gives nodeList of all same class item
// const navItem = document.querySelectorAll(".nav-item")
// console.log(navItem)


// // Now changing something
// const newMainHeading = document.getElementById("main-heading");
// console.log(newMainHeading.textContent);
// // newMainHeading.textContent = "This is new Text Changed by console"
// console.log(newMainHeading.textContent);


// // changing the font color
// const newColor = document.querySelector(".section-todo h2");
// newColor.style.color = "red";
// // changing the background color
// newColor.style.backgroundColor = "royalblue"



// // get and set attribute
// const link = document.querySelector("a");
// console.log(link.getAttribute("href").slice(1))


// const link2 = document.querySelector(".form-todo input")
// console.log(link2.getAttribute("type"))


// console.log(link2.setAttribute("placeholder" , "Input something new"))
// console.log(link2.getAttribute("placeholder"))





// get multiple elements using getElemets by using class name -> getElementByClassName

// const navItems = document.getElementsByClassName("nav-item"); 
// // upper line returns HTML collection -we cannot use forEach loop in HTML collection
// console.log(navItems[0], navItems[1])


// // get multiple elements items using querySelectorAll
// const qAll = document.querySelectorAll(".nav-item")
// console.log(qAll[1])
// upper line returns node list






// const logoo = document.getElementsByTagName("h1")
// logoo.style.color = "royalblue"


// Iterate Elements
const navItems = document.getElementsByTagName("a");

// for loop
// for(let i=0; i<navItems.length; i++){
//     const navItemss = navItems[i];
//     navItemss.style.backgroundColor = "blue"
//     navItemss.style.color ="red"
// }

// for of loop
for(let navItm of navItems){
    navItm.style.color="royalblue";
}
