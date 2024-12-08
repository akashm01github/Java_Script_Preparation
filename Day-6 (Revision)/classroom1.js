// String Revision:

let str1 = "akash";

console.log(str1);
console.log("String Length = ",str1.length);

console.log(str1[0]);


let myName  = "aparna";

// Make a String Uppercase

console.log(myName.toUpperCase());


// Lower case Method 
let myName2 = "AKASH";

console.log(myName2.toLowerCase());

// 
let trimString = "    Akash is a very good boy.       ";

console.log(trimString.trim());


// Slice Method 


let sliceString = "AkashMukherjee";

console.log("The Slice String is =  ",sliceString.slice(0,5));


// conacat string 

let strNo1 = "Akash";

let strNo2 = "Mukherjee";

console.log("After Concatination");
console.log(strNo1.concat(strNo2));


// Replace Method 

let strNo3 = "Hello World";

console.log(strNo3.replace("o" ,"x"));


// CharAt

let strNo4 = "Hello Akash";

console.log(strNo4.charAt(6));


// String Question 

let myAkash  = "AKASH";

console.log("After Slice");
let length = myAkash.length;
let newString = "";
for(let i = length-1; i >= 0; i--){
    newString += myAkash[i];
}

console.log(`The reverse of ${myAkash} is =  ${newString}`);

// Check for Palindrome

let checkPalindrom = "radar";
let reverseString = "";
for(let num = checkPalindrom.length-1; num >=0; num--){
    reverseString +=checkPalindrom[num];
}


if(checkPalindrom === reverseString){
    console.log("It's a Palindrom");
}

