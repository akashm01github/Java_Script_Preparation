// Change Element 

let divs  = document.querySelector("div");

// console.log(divs);

// Attribute 
// let val = divs.getAttribute("id");

// console.log(val);


//Attribute 

let attributeVal =  divs.getAttribute("name");

console.log(attributeVal);


// let para = document.querySelector("p");

// console.log(para.setAttribute("class","newClass"));


let myDiv  = document.querySelector("div");


myDiv.style.backgroundColor = "#1230AE";
// myDiv.style.backgroundColor = "#CB9DF0";

// myDiv.style.visibility = "hidden";



// Insert Element

// let btn = document.createElement("button");
// btn.innerText = "Click Me";
// console.log(btn);


let newDiv  = document.querySelector("div");


let  myHeading = document.createElement("h1");


myHeading.innerText = "Hello My name is Akash Mukherjee";

newDiv.prepend(myHeading);

// For Removing 

myHeading.remove();