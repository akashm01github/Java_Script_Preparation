const choices = document.querySelectorAll(".my_choice");

let messagePara = document.querySelector("#msg");


let myScore = document.querySelector("#user_score");

let computerSc = document.querySelector("#computer_score");




let userScore = 0;

let computerScore = 0;



let computerChoise = () => {
    let option = ["rock", "paper", "scissors"];

    let idx = Math.floor(Math.random() * 3);

    return option[idx];
}

let drawGame = () => {
    console.log("Draw Game");
    messagePara.innerText = "Draw Game play Again";
    messagePara.style.backgroundColor = "black";
}

// SHOW WINNER

let showWinner = (userWin,userInput,compChoise)=>{
    if(userWin){
        userScore++;
        myScore.innerText = userScore;


        console.log("User Win 😊");
        messagePara.innerText = `You Win ${userInput} beats ${compChoise}`;
        messagePara.style.backgroundColor = "green";

        
    }
    else{
        computerScore++;
        computerSc.innerText = computerScore;


        console.log("Computer Win 🤖");
        messagePara.innerText = `Computer Win ${compChoise} beats ${userInput}`;
        messagePara.style.backgroundColor = "red";
        
    }
}

// PLAY GAME
let playGame = (userInput) => {
    console.log("The User = ", userInput);

    let compChoise = computerChoise();

    console.log("The Computer = ", compChoise);

    if (userInput === compChoise) {
        drawGame();
    } else {
        let userWin = true;
        if (userInput === "rock") {
            // scissors, paper
            userWin = compChoise === "paper" ? false : true;
        } else if (userInput === "paper") {
            // rock, scissors
            userWin = compChoise === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoise === "rock" ? false : true;
        }
        showWinner(userWin,userInput,compChoise);
    }
}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})


