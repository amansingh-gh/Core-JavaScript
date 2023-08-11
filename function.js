// Function Declaration

function singSong(){
    console.log("Life not easier");
}

singSong();

function sum(a,b){
    // return 8+2;
    return a+b;
}

const ss = sum(1,2);
console.log(ss);


function isEven(num1){
    if (num1%2==0){
        return true;
    }
    else{
        return false;
    }
    

}

console.log(isEven(8));



function findIndex(array, target){
    for(let i=0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
     return -1;
}

const myArray = [1,2,3,4,5,6,7,8,9];
const target = 7;

console.log(findIndex(myArray, target));



// Function Expression

const squareNum = function(num1){
    return num1*num1;
}
console.log(squareNum(5));

function squareNum(num2){
    return num2*num2;
}


// Arrow Function

const isEven = (num1)=>{
    if (num1%2==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(8));



const squareNum =(num1)=> num1*num1;

console.log(squareNum(5));


// Hoisting 
// Only works on function declaration
function checkHost(a,b){
    return a+b;
} 
console.log(checkHost(5,10));

// Object Destructuring

const person={
    firstName : "Aman",
    lastName : "Singh"
}

function printDetails({firstName, lastName}){
    console.log(firstName);
    console.log(lastName);
}

printDetails(person);


// Function returning function

function myFunc(){
    function hello(){
        return "hello";
    }
    return hello;
}
const ans = myFunc();

console.log(ans());

function func1(){
    function func2(){
        return "Hey i'm under func2";
    }
    return func2;
}

const func_store = func1();
console.log(func_store());