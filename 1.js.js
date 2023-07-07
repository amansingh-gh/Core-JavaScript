
// Basics
console.log("Hello Floks")

function addthreenums(a,b,c){
  return a+b+c;
}
let c = addthreenums(10,20,30);
console.log(c);

//  var let const
var a = 50;
var a = 90;

let ab = 88;
  // ab = "Sam Sabun";
console.log(ab);

const ac = 50;
const acb = 100;

// Here we initialized let in block scope
let abc = "Singh";
console.log(abc)
{
  let abc = 678;
console.log(abc)
}

const prof = "Aman";
// const aman;   this throws an error,, we have to initialized the value also.
// prof = "Singh"   
// const prof = "Singh";  Here we cannot redeclared and initialized const.


// Primitive datatypes  - 7 datatypes
//  N N S S B B U
// N - Number
// N - Null
// S - Symbol
// S - String
// B - BigInt  //BigInt("67890")
// B - Boolean
// U - Undefined

// To find which type of datatype we use [ console.log(typeof d) ]
let d = true;
console.log(typeof d)
// Object - Non Primitive Datatypes
const item = {
  name : "Aman",
  branch : "BCA"
}
console.log(item["name","branch"])