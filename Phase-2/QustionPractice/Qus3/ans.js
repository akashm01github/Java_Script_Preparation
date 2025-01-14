let button  = document.querySelector("button");

let myInput = document.querySelectorAll("input");



let myMessage = document.querySelector(".my_message");


button.addEventListener("click", function(event){
    // !To prevent Refresh 
    event.preventDefault();

    // Todo: Doing Validation Task

    for(let i = 0 ; i<myInput.length; i++){
        if(myInput[i].value === ''){
            myMessage.textContent = 'Error';
            break;
        }
    }
    
})