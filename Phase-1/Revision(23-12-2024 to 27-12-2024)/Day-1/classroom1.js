// types = premitive dt || reference dt

//12,12.4, akash , a, null, undefined 

// () {} []  this is reference data type

var a = [1,2,3,4,5,6];

var b = a;


var arr = [12,23,445,56,67];

var copyArr = [...arr];

let arr = ["Bardhaman","Arambagh","Kolkata","Chennai"];

arr.forEach(function akash(val,idx,arr){
    console.log(val,idx,arr);
})

// Function 
// es5 and es6
// es5 - function statement, function expressions, anonymous function 

// es6 - fat arrow  function
// a) Basics Fat Function 

// b) Fat Arrrow with one parameter 

// c) Fat Arrow  with implicit return 

// function chickenRecipe(){
//     for(let i=10; i>=1; i--){
//         console.log(`The Index is : ${i}`);
//     }
// }
// chickenRecipe();


let dateOfBirth = 29;

let enterDate = prompt("Enter Your Date");


function happyBirthDay(){
    console.log("Happy Birthday Akash");
}

if(Number(enterDate) === dateOfBirth ){
    happyBirthDay();
}
else{
    console.log("This is not Your Birtday");
    console.log(`You Entered ${enterDate}`);
}

// Parameters and Arguments in JavaScript 

function myFunction(val){
    console.log(`The value is ${val} and after adding 12 =  ${12+val}`);
}

myFunction(85);


//prep of Interview

// function statement

function hello(){
    // function statement
}

// Function Expression 

let akash  = function (){
    
}

// Anonymouse Function 
// function(){
//     // Anonymouse
// }


// FAT ARROW
var a = ()=>{

}


// fat arrow with one parameter

var c = (val)=>{

}

c(12);


// Fat Arrow  with implicit return 
let g = ()=> "akash";

let f = g();

function funAkash(){
    return 12;
}


console.log(funAkash());
// let ans = funAkash();

function abcd(){

}
