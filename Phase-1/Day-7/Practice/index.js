let heading = document.querySelector("h2");

let result = heading.innerText = heading.innerText + " From Apna College Student.";

console.dir(result);


let myBoxes = document.querySelectorAll(".box");
let idx = 0;

for(val of myBoxes){
    val.innerText = `New Unique Text-${idx}`
    idx++;
}


