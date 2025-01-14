
console.log("Akash");
console.log("Akash");
console.log("Akash");


// For Loop in JS

// Print 1 to 10

for(let i=1; i<=10;i++){
    console.log("Akash Mukherjee");
}

console.log("Loop End.");


// Print sum of 1 to n 

let n = prompt("Enter the Number: ");

let sum = 0;
console.log("The N Is: ",n);
for(let num = 1; num<=n; num++){
    
    sum = num + sum;
    
}
console.log("The Sum of 1 to N is: ",sum);



for(let i = 1; i<=10; i++){
    console.log("i = ",i);
}


// ****************************************

// While Loop in Java Script

let i = 1;

while (i<=5) {
    console.log("i = ",i)
    i++;
}



// ***********************************************
// Do While Loops


let number  = 20;
do {
    console.log("Do While Loop");
    i++;
} while (number<=10);



// For of Loop in JS

let str = "Javascript";
let count = 0;
for(let i of str){
    console.log("i = ",i);
    count++;
}
console.log("The Total Alphabet is: ",count);




// For-in Loop

let student  = {
    std_name: "Akash Mukherjee",
    age:23,
    cgpa:7.65,
    isPass:true
};

for(let i in student){
    console.log("Key = ",i," & Value = ",student[i]);
}


// Practice Question 

// Question 1
// Print all even number 0 to 100

for(let num = 0; num<=100; num++){
    if(num%2==0){
        console.log("The number is: ",num);
    }
}


let guessNumber = prompt("Enter the Number: ");

let gameNumber = 20;

while(guessNumber !=gameNumber){
    guessNumber = prompt("Try Again: ");
}
console.log("Congratulation..The Number is Correct");