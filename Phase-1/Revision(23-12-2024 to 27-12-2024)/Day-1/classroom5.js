// let parent = document.querySelector("#parent");


// parent.addEventListener("click",function(details){

//     if(details.target.id === "play"){
//         console.log("Play Song");
//     }
//     else if(details.target.id === "pause"){
//         console.log("Pause Song");
//     }
// })


// HIGHER ORDER FUNCTION
// For each method is a Higher Order Function 


// TRY-CATCH BLOCK 

// function divide(a,b){
//     try{
//         if(b == 0){
//             throw Error("Some thing Missing");
//         }
//         console.log(a/b);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// divide(12,0);

//events
const myevent  = new Event("chacha");

document.querySelector("button").addEventListener("chacha",function(){
    alert("Chacha Event Started...");
})

document.querySelector("button").dispatchEvent(myevent);

