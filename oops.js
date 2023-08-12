const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = Object.create(obj1);
obj2.key3 = "value3";

console.log(obj2)
// console.log(obj2.__proto__)


// Object Creation

const userMethods = {
    about: function () {
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18: function () {
        return this.age >= 18;
    },
    sing: function () {
        return 'toon na na na la la ';
    }
}


function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(createUser.prototype);// {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
createUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function () {
    return this.age >= 18;
};
createUser.prototype.sing = function () {
    return "la la la la ";
};


const user11 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user22 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user33 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1.firstName);
console.log(user1.is18());


function hello() {
    console.log("Hey this is under the function")
}
console.log(hello.name)  // it returns function name

console.log(hello.prototype)   // only functions provides prototype property.

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function () {
    return "Hey i am sing";
}
console.log(hello.prototype);
console.log(hello.prototype.sing());



// new keyword
// 1) empty object this = {}
//2) return this  (when using this keyword we don't have to write return. [bcz js automatically return at the end])
//3) Object.create(create.usreCreate)   -> link makes it self



// Constructor function
function CreateUser(firstName, age) {
    this.firstName = firstName;
    this.age = age;
}
CreateUser.prototype.about = function () {
    console.log(this.firstName, this.age);
}

const usr1 = new CreateUser("harsh", 20);
console.log(usr1)
// console.log(usr1.about())

for (let key in usr1) {
    console.log(key);
}


// hasOwnProperty checks and gives boolean value (when it is present in own property)
for (let i in usr1) {
    if (usr1.hasOwnProperty(i)) {
        console.log(i)
    }
}



let numbers = new Array(1, 2, 3);
console.log(Array.prototype);
console.log(numbers)






// class keyword

class CreateUser {
    constructor(firstName, lastName, email, age, address) {
        console.log("constructor called")
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about() {
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18() {
        return this.age >= 18;
    }
    sing() {
        return "la la la la ";
    }
}
const user1 = new CreateUser('harshit', 'thakur', 'harshit@gmail.com', 10, "my address 11")
const user2 = new CreateUser('ma', 'lu', 'ma@gmail.com', 22, "my address 12")
const user3 = new CreateUser('paul', 'thka', 'paul@gmail.com', 18, "my address 13")

console.log(user1.is18())
console.log(user2.is18())
console.log(user3.is18())


// Below animal class
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
    isTooSmall() {
        return this.age <= 1;
    }
}
const Animal1 = new Animal('Tom', 1)
console.log(Animal1);
console.log(Animal1.eat());
console.log(Animal1.isTooSmall());

class Cat extends Animal {

}

const tommy = new Cat('Meow', 2);
console.log(tommy)
console.log(tommy.isTooSmall())


class Dog extends Animal {
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }
    run() {
        return `${this.name} is running at speed of ${this.speed}`
    }
    eat() {
        return `Modified eat is ${this.name} is eating`;
    }
}

const newDoggo = new Dog('Doggo', 3, 3.45);
// console.log(newDoggo);
console.log(newDoggo.run())
console.log(newDoggo.eat())




//  getter and setters

class person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName,
            this.lastName = lastName,
            this.age = age;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new person("Mihir", "Sharma", 33);
// console.log(person1.fullName);
// console.log(person1.lastName);
// console.log(person1.setName("Sam", "sabun"));
// console.log(person1.firstName);
// console.log(person1.lastName);
console.log(person1.fullName) = "Tommy Hills"
// console.log(person12)