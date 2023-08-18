
// setTimeout  & Promise  ->  callback  queue

// // Microtask queue have first priroty then callback queue

// Promises (Future Value)
// in resolve and reject position we can pass anything like array or object
// The 'then' method returns a new Promise , which allows for method chaining

const bucket1 = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

const firedRicePromise = new Promise((resolve, reject) => {
    if (bucket1.includes("vegetables") && bucket1.includes("salt") && bucket1.includes("rice")) {
        resolve("Fried Rice");

    } else {
        reject("Something missing from bucket");
    }
})

produce




// Type -1 consume (how to consume)
firedRicePromise.then((resolveData) => {
    // When your promise reslove
    console.log("Let's Eat", resolveData);
},
    (rejectData) => {
        // When your promise reject
        console.log(rejectData);
    })

// Type-2 consume (how to consume)
firedRicePromise.then((myFriedRice) => {
    console.log(myFriedRice);
}).catch((error) => {
    console.log(error)
})




// function returning promise
const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

function ricePromise() {
    return new Promise((resolve, reject) => {
        if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
            resolve("Fried Rice");
        }
        else {
            reject("Something missing from bucket");
        }
    })
}

ricePromise().then((myFriedRice) => {
    console.log(myFriedRice);
}).catch((error) => {
    console.log(error)
})






// promise & setTimeout
function myPromise() {
    return new Promise((resolve, reject) => {
        const value = false;
        setTimeout(() => {
            if (value) {
                resolve();
            }
            else {
                reject()
            }

        }, 1000)
    })
}

myPromise().then(() => {
    console.log("Resolved")
}).catch(() => {
    console.log("Rejected")
})






// Promise.resolve
// Promise chaining

// Note:: 
// then -> always returns promise object
// catch ->



// Promise  resolved
const myPromise1 = Promise.resolve(5)
myPromise.then((value) => {
    console.log(value)
})




// Promise chaining
function myPromise() {
    return new Promise((resolve, reject) => {
        resolve("foo");
    })
}

myPromise()
    .then((value) => {
        console.log(value);
        value += "bar";
        return value
    })
    .then((value) => {
        console.log(value);
        value += "baaz";
        return value;
    })
    .then(value => {
        console.log(value);
    })




const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");

function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.textContent = text;
                element.style.color = color;
                resolve();
            }
            else {
                reject()
            }
        }, time)
    })

}

const returnedPromise = changeText(heading1, "hey", 'red', 1000)
returnedPromise.then(() => {
    return changeText(heading2, "two", 'purple', 1000)
}).then(() => changeText(heading3, "three", 'blue', 1000))
    .then(() => changeText(heading4, "four", 'royalblue', 1000))
    .then(() => changeText(heading5, "five", 'royalblue', 1000))
    .then(() => changeText(heading6, "six", 'royalblue', 1000))
    .then(() => changeText(heading7, "seven", 'royalblue', 1000))
    .then(() => changeText(heading8, "eight", 'royalblue', 1000))