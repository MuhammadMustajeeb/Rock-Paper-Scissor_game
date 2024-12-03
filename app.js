//Start Counting
let userScore = 0;
let compScore = 0;

//All Resources
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorecheck = document.querySelector("#user-score");
const compScorecheck = document.querySelector("#comp-score");

//For userchoice
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

//For compChoice
const forCompchoice = ()=> {
    const options = ["rock" , "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

//For drawGame
const drawGame = ()=> {
    msg.innerText = "Game was Draw. Play Again!";
    msg.style.backgroundColor = "#081b31";
};

//Now PlayGame
const playGame = (userChoice)=> {
    
    //For compChoice
    const compChoice = forCompchoice();

    //playingGame
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper"? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor"? false : true;
        } else {
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

//For showWinning
const showWinner = (userWin, userChoice, compChoice)=> {
    if (userWin) {
        userScore++;
        userScorecheck.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorecheck.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
