// CLASSROOM-3 
// JavaScript-এ this সংক্ষেপে:
// গ্লোবাল কন্টেক্সট: this = window
// সাধারণ ফাংশন: this = window
// মেথড: this = object
// মেথডের ভিতরে ফাংশন (ES5): this = window
// মেথডের ভিতরে ফাংশন (ES6): this = parent object
// কনস্ট্রাক্টর ফাংশন: this = new blank object
// ইভেন্ট লিসেনার: this = element (যার উপর ইভেন্ট লেগেছে)।


//গ্লোবাল কন্টেক্সট
// console.log(this);


//সাধারণ ফাংশন

// function abcd(){
//     console.log(this);
// }

// abcd();

// মেথড:
// let student  = {
//     play: function(){
//         console.log(this.schoolName);
//         function childFunc(){
//             console.log(this);
//         }
//         childFunc();
//     },
//     age: 23,
//     stdName : "Akash Mukherjee",
//     rollNumber: 8,
//     schoolName: "Chhotobainan High School"

// }

// student.play();

// মেথডের ভিতরে ফাংশন (ES6): this = parent object

// let obj3  = {
//     saymyName: function(){
//         const child = ()=>{
//             console.log(this);
//         }
//         child();
//     },
//     myName : "Akash MUkherjee",
//     age:23
// }
// obj3.saymyName();

// কনস্ট্রাক্টর ফাংশন: this = new blank object

// function add(){
//     console.log(this);
// }

// let ans = new add();


// let button  = document.querySelector("button");

// button.addEventListener("click", function(){
//     console.log(this);
// })

// let obj  = {
//     stdName: "Akash Mukherjee",
//     age: 23,
//     country: "India"
// }


// function abcd(a,b,c){
//     console.log(this,a,b,c);
// }

// // abcd.call(obj);
// // abcd.apply(obj,[1,2,3]);

// let ans  = abcd.bind(obj);
// ans();


// let student1 = {
//     fullName: "Akash Mukherjee",
//     age: 23,
//     country: "India",
//     printDetails: function(){
//         console.log(this.fullName);
//     }

// }

// student1.printDetails();

// let student2 = {
//     fullName: "John Dee",
//     age: 27,
//     country: "USA"
// }


// student1.printDetails.call(student2);


