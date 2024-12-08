// Array Class

let  arr = [85,97,83,89,92,95,80,91];

let result = arr.filter((val)=>{
    return val >= 90;
})


console.log(result);


// Create an array 1 to n

// let n = prompt("Enter the Number: ");

// let newArr = [];

// for(let i = 1; i<=n; i++){
//     newArr[i-1] = i
// }

// console.log(newArr);


let sumArr = [10,20,30,50,80];


let sumofArray = sumArr.reduce((pre, cur)=>{
    return pre+cur;
})


console.log(`Sum of Aall element = ${sumofArray}`);


// Product 


let productArr = [1,2,3,4];  


let productResult = productArr.reduce((pre, cur)=>{
    return pre*cur;
})


console.log(`Factorial of Aall element = ${productResult}`);