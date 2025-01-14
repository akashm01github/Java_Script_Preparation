// Important Array Method in JS


// Map Method in JS

let nums = [67,25,85];

nums.map((val)=>{
    console.log(val);
})

let myNums = [1,2,3,4,5];

let myNum = myNums.map((i)=>{
    return i*i;
})

console.log(myNum);


// filter method in Js

let checkArr = [1,2,3,4,5,6,7,8,9,10];

let evenNumber = checkArr.filter((item)=>{
    return item%2 == 0;
})

console.log(evenNumber);


// Reduce Method in Java Script
console.log("Usign Reduce Method");
let myNewarray = [10,12,30,4];

const output = myNewarray.reduce((pre, curr)=>{

    return pre > curr ? pre : curr;

})

console.log(output);

let hello = [1,2,3,4];

let myResuly = hello.reduce((pre,curr)=>{
    return pre + curr;
})

console.log("The Sum = ",myResuly);