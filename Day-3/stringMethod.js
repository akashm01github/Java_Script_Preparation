// String Methods
let str = "Frontend Developer.";

let newStr = str.toLocaleLowerCase();


console.log(str);
console.log(newStr);

let myStr = "Akash";

console.log(myStr.replace("A" , "Fo"));


console.log(myStr.charAt(0));


let userName  = prompt("Enter the Email: ");
let addThis = "@";
let generatedUsername = addThis.concat(userName);
console.log(`${generatedUsername}${userName.length}`);
