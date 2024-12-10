//Qs. Create a new button element. Give it a text “click me”, background color of red & text color
// of white.Insert the button as the first element inside the body tag.

//SELECTING THE ELEMENT 
// let myBody  = document.querySelector("body");


//CTEATE ELEMENT
// let addButton = document.createElement("button");

//ADDING INNERTEXT
// addButton.innerText = "Click Me";


// ADDING CSS 
// addButton.style.backgroundColor = "red";
// addButton.style.color = "White";
// addButton.style.width = "100px";
// addButton.style.height = "50px";
// addButton.style.borderRadius = "8px";
// addButton.style.fontSize = "1rem";


//ADDING ELEMENT ON THE BODY
// myBody.append(addButton)


// Q.2 Create a <p> tag in html, give it a class & some styling. 
// Now create a new class in CSS and try to append this class to the <p> element.

let myParagraph  = document.querySelector("p");

// myParagraph.setAttribute("class", "newClass");


// But this time we will use clasList Property in  JS 

myParagraph.classList.add("newClass");