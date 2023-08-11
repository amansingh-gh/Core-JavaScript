// forEach, map, filter, reduce and sort


// forEach

// Ex-1
const numbers = [4,5,8,9,10];
function myltiplyBy2(num, index){
    console.log(`Index is ${index} number is ${num}`);
}
numbers.forEach(myltiplyBy2)

// Ex-2
const num1= [1,2,3,4,5,6,7,8,9,10];
function forPrint(nu){
    console.log(`The number is ${nu*2}`)
}
num1.forEach(forPrint)

// Ex-3
const user=[
    {firstName: "Himanshu", age:20},
    {firstName: "Anono", age:21},
    {firstName: "Siyi", age:19}
]

user.forEach(function(user){
    console.log(`The user Fistname is : ${user.firstName} and their age is : ${user.age}`)
})

// forEach using arrow function
user.forEach((user, age)=>{
    console.log(user.firstName, user.age)
})


// map
// EX-1
const nums = [2, 3, 4, 5, 6, 7, 8, 20, 100];

const square = function (number1) {
    return number1 * number1;
}

const sqNum = nums.map(square);
console.log(sqNum);



// EX-2
const num2 = [10, 20, 30];
const mul = function (num2) {
    return num2 * num2;
}

const mulIS = num2.map(mul);
console.log(mulIS)



// const user=[
//     {firstName: "Himanshu", age:20},
//     {firstName: "Anono", age:21},
//     {firstName: "Siyi", age:19}
// ]


// const userNames= user.map((user)=>{
//     return user.firstName
// })

// console.log(userNames)





// Filter Method
const num5  = [1,2,3,4,5,6,7,8,9];
// const isEven = function(numm){
//     return numm%2===0;
// }
// const newArr = num5.filter(isEven);
// console.log(`Even number is ${newArr}`)



const newArr = num5.filter((numm)=>{
        return numm%2!==0;
});
console.log(`Odd numbers was ${newArr}`)


// Reduce Method

// EX-1 (Sum of all number from arr1)
const arr1 =[1,2,3,4,5,10];

const sum = arr1.reduce((one, two)=>{
        return one + two;
}, 100)

console.log(sum);

// Ex-2

const userCart  =[
    {productId: 1, productName: "Mobile", price: 20000},
    {productId: 2, productName: "Laptop", price: 80000}
]
const totalAmount = userCart.reduce((totalPrice, currenProduct)=>{
    return currenProduct.price + totalPrice
},0)

console.log(totalAmount)




// sort 
// Sort method sort number in the sence of string (ASCII)
// [4, 50] Js take the 4 and check the ascii and then it take next value that is 50 and pick 5 from 50 and check where it exist in ascii table

const nuuum  = [5,9,1,12,36,22,10];
console.log(nuuum.sort());
// console.log(newSort)


// This is the technique to sort the numbers in JS
const nuum1 = [5,9,1,12,36,22,10];
// if we want to sort in decreasing order then we write )( return b-a)
nuum1.sort((a,b)=>{
    return a-b;       // Ascending
    // return b-a;   // Descending
});
console.log(nuum1)



// Price high to low and low to high algo in JS
const products=[
    {productID: 1, productName: 'p1', price:500},
    {productID: 1, productName: 'p2', price:600},
    {productID: 1, productName: 'p3', price:800},
    {productID: 1, productName: 'p4', price:450},
    {productID: 1, productName: 'p5', price:900}
]

const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price
})

const HighToLow = products.slice(0).sort((a,b)=>{
    return b.price- a.price
})



console.log(products)
console.log(lowToHigh)
console.log(HighToLow)