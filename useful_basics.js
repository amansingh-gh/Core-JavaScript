// call, bind, apply, arrow function, short syntax

// methods - function inside object

// "user strict"
const person = {
    firstName: "Harshit",
    age: 20,
    about: function () {
        console.log(`User name is ${this.firstName} and their age is ${this.age}`)
    }
}
person.about()


function personInfo() {
    console.log(`User name is ${this.firstName} and their age is ${this.age}`)
}


const person1 = {
    firstName: "mohit",
    age: 22,
    about: personInfo
}

const person2 = {
    firstName: "mohan",
    age: 21,
    about: personInfo
}

const person3 = {
    firstName: "rohan",
    age: 19,
    about: personInfo
}
person1.about();
person2.about();
person3.about();




// Call
const prsn = {
    firstName: "Mihir",
    age: 23,
    about: function (favSong, favCar) {
        console.log(`User name is ${this.firstName} and their age is ${this.age}, ${favSong}, ${favCar}`)
    }
}
const prsn2 = {
    firstName: "Sonu",
    age: 28
}
prsn.about.call(prsn, 'Dijono', 'Ferrari');




// Apply - pass the arguments in array ['item1', 'item2]
prsn.about.call(prsn, ['Dijono', 'Ferrari']);




// bind - return a function
const func = prsn.about.bind(prsn, "hey", "me")
func()



// Don't mistake
const myFunc = prsn.about.bind(prsn);
myFunc();





// Arrow Function
const prsnn = {
    firstName: "Mihir",
    age: 23,
    about: () => {
        console.log(this.firstName, this.age)
    }
}

prsnn.about()   // 'this' is window object




// Short syntax of methods
const prsnn2 = {
    firstName: "Mihir",
    age: 23,
    about() {
        console.log(this.firstName, this.age)
    }
}