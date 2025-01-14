// Functions & Methods 

// Syntax

// Function Defination

function functionName () {
    console.log("Hi, My name is Akash Mukherjee.");
    console.log("I am a Frontend Developer :) ");
}

// Function call

functionName();
functionName();
functionName();
functionName();

// Function with Parameter

function akashFunction(msg) {   //  parameter
    console.log(msg);
}

akashFunction("I love JS"); // Argument 

// Sum of a 2 number Function

function mySum (n1,n2){
    console.log("The Sum of Two Number is: ", n1 + n2);
}

mySum(10,20);


// Function With Return Statement 
function multipleTwoNumber (num1,num2){
    multi = num1 * num2;
    return multi;
}

let val  = multipleTwoNumber(3,3);
console.log(val);

// Arrow Function 


// Sum of Two Number:

let arrowSum = (a,b)=>{
    console.log("Arrow Sum = ",a+b);
}

arrowSum(10,20);

// Multiplicatio of two number

let multiArrow  = (x,y)=>{
    console.log("Multiplication of the Two Number is: = ", x*y);
}

multiArrow(12,2);

let printHello = ()=> console.log("Printing Hello..");


// Check Vowel from the String

// let myStr =  "Akash enjoys learning and coding every day.";




function vowelCount(userInput){
    let count = 0;
    for(let i = 0; i<userInput.length; i++){
        if(userInput[i] ==  "a" || userInput[i] == "e" || userInput[i] == "i" || userInput[i] == "o" || userInput[i] == "u"){
            count++;
        }
        
    }
    return count;
}

 
let  result = vowelCount("Akash enjoys learning and coding every day.");
console.log("Totla Vowel Present = ",result);


// Using Arrrow Finction 

let vowelCount2 = (userInput2)=>{
    let count = 0;
    for(let i = 0; i<userInput2.length; i++){
        if(userInput2[i] ==  "a" || userInput2[i] == "e" || userInput2[i] == "i" || userInput2[i] == "o" || userInput2[i] == "u"){
            count++;
        }
        
    }
    return count;
}

let  result2 = vowelCount("hello");
console.log("Totla Vowel Present =",result2);

// forEach() Method in JS


let arr = ["Bardhaman","Arambagh","Kolkata","Chennai"];

arr.forEach(function akash(val,idx,arr){
    console.log(val,idx,arr);
})

console.log("Using Arrow Function");
// Using Arrow Function 
arr.forEach((i)=>{
    console.log(i);
})

// For a given array of numbers, print the square of each value using the forEach loop.
let myArr = [2,3,4,5,6,7];

myArr.forEach((num)=>{
    console.log(`The Square of ${num} is ${num*num}`);
})


