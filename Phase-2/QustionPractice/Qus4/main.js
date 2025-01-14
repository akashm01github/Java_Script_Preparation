// ! Accessing All Documnet 
let myList  = document.querySelector(".mylist");

let h1 = document.querySelector("h1");

let input = document.querySelector("input");

let addBtn = document.querySelector(".add");

let removeBtn  = document.querySelector(".remove");

// ! ADD BUTTON
addBtn.addEventListener("click",()=>{
    if(input.value === ''){
        alert("Please Enter");
    }else{
        let newItem = document.createElement("li");
        newItem.textContent = input.value;
        myList.appendChild(newItem);
        input.value = "";
    }
    
})

// ! REMOVE BUTTON
removeBtn.addEventListener("click", ()=>{
    if(myList.lastElementChild){
        myList.removeChild(myList.lastElementChild);
    }
    else{
        h1.textContent = "No Item To Remove.";
        h1.style.color = "Red";
        h1.style.display = "block"
    }
})