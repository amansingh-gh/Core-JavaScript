// find method

const myArray = ["Hello", "Cat", "Dog", "Lion"];

function isLength(string) {
    return string.length === 3;
}

const ans1 = myArray.find((string) => {
    return string.length === 3;
});
console.log(ans1)



const user = [
    { userID: 1, userName: "Quin" },
    { userID: 2, userName: "Haits" },
    { userID: 3, userName: "Aasm" },
    { userID: 4, userName: "Mihir" },
];

const aa = user.find((rom) => rom.userID === 1);
console.log(aa);



// every Method
const numbers = [2, 4, 6, 8, 10];
const checkEven = numbers.every((numbers) => {
    return numbers % 2 === 0;
})
console.log(checkEven)





// Check everyproduct price is less then 1000;
const products = [
    { productID: 1, productName: 'p1', price: 500 },
    { productID: 1, productName: 'p2', price: 600 },
    { productID: 1, productName: 'p3', price: 800 },
    { productID: 1, productName: 'p4', price: 450 },
    { productID: 1, productName: 'p5', price: 900 }
]

const checkPrice = products.every((pri) => {
    return pri.price < 1000;
})
console.log(checkPrice);

const checkPrice2 = products.every((products) => products.price < 500);
console.log(checkPrice2)



// some method
const num = [3, 5, 8, 9];
// if any number is satisfy then it returns true
const ans = num.some((nums) => nums % 2 === 0)
console.log(ans)



const pros = [
    { productID: 1, productName: 'p1', price: 500 },
    { productID: 1, productName: 'p2', price: 600 },
    { productID: 1, productName: 'p3', price: 800 },
    { productID: 1, productName: 'p4', price: 450 },
    { productID: 1, productName: 'p5', price: 900 }
]

const checkPriceHike = pros.some((prodd) => prodd.price >= 900);
console.log(checkPriceHike)


// Fill method   (value, start, end)
const newArr = new Array(10).fill(-1)
console.log(newArr)



const createArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
createArr.fill(-999, 0, 5);
console.log(createArr)


// splice method  (start, delete, insert)
const newItem = ['item1', 'item2', 'item3'];
const newwItem = newItem.splice(0, 3)
console.log(newItem)
console.log(newwItem)
