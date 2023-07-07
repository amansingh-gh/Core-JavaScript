// Function
function avg(x,y){
  console.log("Done");
  return (x+y)/2;
}
let c = avg(13,13);
console.log(c)

// Arrow function
let multiply = (p, q , r) =>{
  return p*q*r;
}
let mul = multiply(2,4,5);
console.log(mul);


let marks = {
  man : 12,
  pan : 18,
  qan : 20,
  agn : 50
}
for(let i=0; i<Object.keys(marks).length; i++){
console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}
// Her Object.keys gives keys of an object and it returns an array
// for in loop
for(let key in marks){
  console.log("The marks of " + key + " are " + marks[key])
}


// loops with if-else
let valid_key = 50;
let i;
while(valid_key!=i){
  i = prompt("Enter a number: ")
  if(valid_key!=i){
  console.log("Invalid Input")
  }
}
console.log("You entered valid number")