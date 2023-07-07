//  for loop
for(let num1=0; num1<=10; num1++){
  console.log(num1)
}


// for in loop
const obj = {
  name : "Aman",
  LastName : "Singh",
  Roll : 57,
  Dept : 'BCA'
}
for(let a in obj){
  console.log(obj[a])
}

// for of loop
for(let a of "Aman"){
  console.log(a)
}


// while loop
let nums = prompt("Enter the number: ");
nums = Number.parseInt(nums);

let i=0;
while(i<nums){
  console.log(i);
  i++;
}

// do-while loop
let ii = 0;
do{
  console.log(ii)
  ii++;
}
  while(ii<100)