let compScore = 0;
let playerScore = 0;

//Randomly generates computer choice
function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

//Takes player input from button and returns it for playOnce function
function playerPlay(playerInput) {
    // let playerInput = prompt("Please enter a selection:").trim().toLowerCase();
    return playerInput;
}

//Single playthrough pitting player against computer
function playOnce(playerInput) {
    let pi = playerInput
    let pc = playerPlay(pi);
    let cc = computerPlay();
    if ((pc == "rock" && cc == "paper") || (pc == "paper" && cc == "scissors") || (pc == "scissors" && cc == "rock"))
     {
         alert(`You chose: ${pc} and Computer chose: ${cc}`);
         compScore++;
         cscore.textContent = `Computer Score: ${compScore}`;
     }
     else if ((pc == "rock" && cc == "scissors") || (pc == "scissors" && cc == "paper") || (pc == "paper" && cc == "rock"))
     {
         alert(`You chose: ${pc} and Computer chose: ${cc}`);
         playerScore++;
         pscore.textContent = `Your Score: ${playerScore}`;
     }
     else if (pc == cc)
     {
         alert(`You chose: ${pc} and Computer chose: ${cc}`);
     }
}

/* function updateScores() {
    return 
} */

//Function that loops the game five times and outputs winner based on final score
/* function game() {
    for (let i = 0; i <= 4; i++) {
        playOnce();
    }
    if (playerScore < compScore)
     {
        console.log(`The final score is ${playerScore}-${compScore}. You lose the match!`);
     }
     else if (playerScore > compScore)
     {
        console.log(`The final score is ${playerScore}-${compScore}. You win the match!`);
     }
     else
     {
        console.log(`The final score is ${playerScore}-${compScore}. The match results in a tie!`);
     }
} */

/* function outputEven() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0)
        {
            console.log(i);
        }
    }
} */

//JS-CSS Script
const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");
const pscore = document.querySelector("#pscore");
const cscore = document.querySelector("#cscore");


rockbtn.addEventListener("click", () => {
    playOnce("rock");
})
paperbtn.addEventListener("click", () => {
    playOnce("paper");
})
scissorsbtn.addEventListener("click", () => {
    playOnce("scissors");
})
/* const scores = document.createElement("h1");
scores.textContent = `Score: You - ${playerScore}  Computer - ${compScore}`;
scoresdiv.appendChild(scores); */