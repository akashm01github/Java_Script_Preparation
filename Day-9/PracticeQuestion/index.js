let myButton  = document.querySelector("button");

let myBody = document.querySelector("body");


let currMode = "light";


myButton.addEventListener("click", ()=>{
    if(currMode=="light"){
        currMode = "dark";
        myBody.classList.add("dark");
        myBody.classList.remove("light");
    }
    else{
        currMode = "light";
        myBody.classList.add("light");
        myBody.classList.remove("dark");
    }
    console.log(currMode);
});













