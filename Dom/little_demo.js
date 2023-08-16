const mainBtn = document.querySelector("button")
// console.log(mainBtn)
const body = document.body;

function randomColorGenerator() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red},${green},${blue})`
    return randomColor;
}

const currentColor = document.querySelector(".current-color")
mainBtn.addEventListener("click", () => {
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
})



// keypress event
// const body = document.body;
body.addEventListener("keypress", (keypress) => {
    console.log(keypress.key)
})

// mosue hover event
const bbtn = document.querySelector("button");
bbtn.addEventListener("mouseover", () => {
    bbtn.style.color = "red"
    console.log("Mouse hovered")

})


bbtn.addEventListener("mouseleave", () => {
    bbtn.style.color = "blue";
    console.log("Mouse leave")
})