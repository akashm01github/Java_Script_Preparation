let boxes  = document.querySelectorAll(".box");

let resetButton  = document.querySelector("#reset_btn");    


let messageContainer = document.querySelector(".msg_container");

let winnigMessage  = document.querySelector("#msg");    

// TURN MANAGEMENT 
let turn0 = true; 


// WINNING PATTERN 
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box Was Clicked");
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0= true;
        }
        box.disabled = true;

        checkWinner();
    })
})

// SHOW WINNER
const showWinner = (winner)=>{
    console.log(winner);
    winnigMessage.innerText = `Winner is ${winner}`;
    messageContainer.classList.remove("hide");
}


// CHECK WINNNER

let checkWinner = ()=>{
    for(let pattern of winPatterns){
        let posi1Val = boxes[pattern[0]].innerText;
        let posi2Val = boxes[pattern[1]].innerText;
        let posi3Val = boxes[pattern[2]].innerText;

        if(posi1Val != "" && posi2Val != "" && posi3Val != ""){
            if(posi1Val == posi2Val && posi2Val == posi3Val){
                console.log("Winner is = ",posi1Val);
                showWinner(posi1Val);
            }
        }
    }
}