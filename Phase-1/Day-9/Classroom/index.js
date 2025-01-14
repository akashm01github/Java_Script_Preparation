let myButton1 = document.querySelector("#btn1");


// myButton1.onclick = (evt)=>{
//     console.log("The Button Was Clicked."); 
//     console.log(evt.target);
// }


// EVENT LISTENERS

myButton1.addEventListener("click", (evt)=>{

    console.log("This is Handeler-1");

})

myButton1.addEventListener("click", (evt)=>{

    console.log("This is Handeler-2");

})


// HANDELER 3 
const hander3 = ()=>{
    console.log("Hey this is Handeler-3");
}


myButton1.addEventListener("click", hander3);


myButton1.addEventListener("click", (evt)=>{

    console.log("This is Handeler-4");

})



// REMOVE LISTENER

myButton1.removeEventListener("click",hander3);