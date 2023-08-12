// Iterable - string and array are iterable
// Objects are not iterable
const name1 = "Sam Flix";
for(let i of name1){
  console.log(i);
}

const items = ['item1', 'item2', 'item3', 'item4', 'item5'];
for(let i of items){
    console.log(i);
}

// set - Unique items only (no duplicated allowed)
// No index based access
// Ordered not guranteed
const num  =new Set([1,2,3,3,4,5]);
console.log(num);

// Below a given array and i have to find the unique numbers from that array. 
// It gives new array(doesn't affect old array)
const givenArray = [1,2,3,4,4,4,5,8,9,9,10,10,12];
const newGivenArray = new Set(givenArray);
console.log(newGivenArray)

let length = 0;
for(let len of newGivenArray ){
  length++
}
console.log(length)

// map object
// key value pairs

const person = new Map();
person.set('firstName','harshit');
person.set('lastName','singh')
person.set('nickname', 'jones');
person.set(20,"twenty")
console.log(person)

console.log(person.get(20))
console.log(person.keys())

for(let keys of person.keys()){
  console.log(keys, typeof keys)
}


const user11 = new Map([['firstName','Aman'], ['age',20]]);
console.log(user11)


const perosn1={
  id:1,
  firstName:"A"
}

const userInfo = new Map();
userInfo.set(perosn1,{age:22, gender:"Male"})

console.log(userInfo)

console.log(perosn1.id);
console.log(userInfo.get(perosn1).age)


// clone useing Object.assign

const obj = {
  key1: "Value1",
  key2: "Value2"
}

// console.log(obj)
// for(let key in obj){
//   console.log(key)
// }

// const obj2 = obj;  // both stores same address

// 
// const obj2 = {...obj}
const obj2 = Object.assign({}, obj)
obj.key3="value3",
obj.key4="value4"


// console.log(obj)


// optional chaining
const user = {
  firstName:"Sam",
  address:{hosuNumber:1234}
}

console.log(user?.firstName)
console.log(user?.address?.hosuNumber)