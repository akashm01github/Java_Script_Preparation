// Array in JS

let marks  =  [82,95,78,59,76];

console.log(marks);

console.log(`The lenght of the given array is: ${marks.length} `);


let heros = ["Hanuman","Shaktiman","Hulk","Ironman","Thor"];


console.log(typeof(marks)); // Array is a type of Object.

// Array indices

let fruits = ["Mango", "Apple", "Orange"];

console.log(fruits);

console.log(fruits[0]); // Output : Mango

// We can chnage the array by using the idx value.
fruits[1] = "Lichi";

console.log(fruits); // ["Mango", "Lichi", "Orange"]


// Looping over an array

let studentsName = ["Akash", "Aparna", "Haradhan" , "Bishnupada"];

for(let i = 0; i<studentsName.length; i++){
    console.log("My Name is: ",studentsName[i]);
}

// using for of loop

for (const name of studentsName) {
    console.log(name.toLocaleUpperCase());
}



// Practice Question 
/* For a given array with marks of students -> [85, 97, 44, 37, 76, 601]
Find the average marks of the entire class. */

let studentMarks = [85, 97, 44, 37, 76, 601];

let sum = 0;

for(let i = 0; i<studentMarks.length; i++){
    sum = sum + studentMarks[i];
}
let average = sum/studentMarks.length;
console.log("The Avarage is: ",average);



// Practice Question 2

let itemPrice = [250,645,300,900,50];

let  i = 0;
for(let price of itemPrice){
    console.log(`Value of idx ${i} = ${price} `);
    let offer = price/10;
    itemPrice[i] = itemPrice[i] - offer;
    console.log(`Value after giving offer: ${itemPrice[i]}`);
    i++;
}

console.log(itemPrice);


// Array Method 
// push() - add at the end 

let foodItems = ["Apple", "Rice", "Meat"];
console.log("Original Food Items: ");
for(food of foodItems){
    console.log(food);
}

foodItems.push("Puchka");

console.log("After adding new Item in the list.");

for(food of foodItems){
    console.log(food);
}

// pop() method in javascript

let deletedItem = foodItems.pop();

console.log("Deleted Item is: ",deletedItem);


// toString() method in JavaScript

console.log(foodItems);

console.log(foodItems.toString());

//concat method in JS 
// Joins multiple array & return result.


let marvelHeros = ["Ironman","Thor","Captain America", "Haulk"];

let dcHeros = ["Superman", "Batman"];



let newHeros = marvelHeros.concat(dcHeros);

console.log(newHeros);


// unshift() Method in Java Script - add to start 

let myFrind = ["Aritra", "Abhik"];

let addFriend = myFrind.unshift("Koulik");

console.log(myFrind);

// shift()  method delete from start and return


let delFrd = myFrind.shift();
console.log("Deleted Item is: ",delFrd);


// slice() method in Javascript

// Return a Piece of the array 

let fruitsName  = ["Apple", "Mango", "Litchi","Aamrud","Orange"];

console.log(fruitsName);

console.log(fruitsName.slice(1,3));


// Splice Method

let myArr = [1,2,3,4,5,6];


myArr.splice(2,2,101,102);

console.log(myArr);


// Practice Question 

let companies  = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];


console.log(companies);

companies.shift();

companies.splice(1,1,"Ola");

companies.push("Amazon");
console.log(companies); 