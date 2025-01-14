let heading  = document.querySelector("h2");

let startBtn  = document.querySelector(".start");

let stopBtn  = document.querySelector(".stop");
let int;
startBtn.addEventListener("click", function(){
    let count  = 0;
    int = setInterval(function(){
        heading.textContent = count;
        count++;
    }, 1000);
})

stopBtn.addEventListener("click", ()=>{
    clearInterval(int);
})