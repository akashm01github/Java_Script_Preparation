// let heading = document.querySelector("h2");

// let result = heading.innerText = heading.innerText + " From Apna College Student.";

// console.dir(result);


let myBoxes = document.querySelectorAll(".box");
let idx = 0;

for(val of myBoxes){
    val.innerText = `New Unique Text-${idx}`
    idx++;
}

// myBoxes[0].innerText = "JavaScript";   
// myBoxes[1].innerText = "Node JS";   
// myBoxes[2].innerText = "React";   

