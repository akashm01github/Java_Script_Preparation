// ! Objects in JavaScrit
// ? Types of Objects Creation
// ** Singleton
// ** Objects Literals


// Todo: Objects.cretate

// ** Objects Literals

// **Symbol Declaration
let mySym = Symbol("Key1");

let jsUser = {
    userName : "Akash",
    "fullName": "Akash Mukherjee",
    [mySym]: "myKey1",
    age : 23,
    location: "Bardhaman",
    email: "akash.google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}


// console.log(jsUser.email);
// ! New Way to Access Objects
// console.log(jsUser["email"]);

// console.log(jsUser["fullName"]);

// console.log(typeof jsUser[mySym]);

// ! To Change Any Value
// jsUser.email = "akash.openai.com";

// ! Object Freze 
// Object.freeze(jsUser);
// jsUser.email = "akash.microsoft.com";
// console.log(jsUser);

// Todo: Using Function

// jsUser.greeting = function(){
//     console.log("Hello JS User...");
// }

// console.log(jsUser.greeting());

// jsUser.greetingTwo = function(){
//     console.log(`Hello JS User... ${this.userName}`);
// }

// console.log(jsUser.greetingTwo());


// ! Creating Objects Using Singleton

// let tinderUser = new Object();

// console.log(tinderUser);

// *! Nested Objects

// let regularUser = {
//     email: "bamun@google.com",
//     fullName: {
//         userfullName : "Akash Mukherjee",
//         age: 23
//     }
// }

// console.log(regularUser.fullName.userfullName);


// Todo: Merge Objects 

const obj1 = {
    1: "akash",
    2: "bamun"
}

const obj2 = {
    3: "john",
    4: "dadu"
}

const obj3 = {
    5: "Rocky",
    6: "Mango"
}

const finalObject = Object.assign({}, obj1, obj2, obj3);

console.log(finalObject);

// ! To Merge Same Task use Spread Operator
let anotherObjects = {...obj1, ...obj2, ...obj3};

console.log(anotherObjects);


