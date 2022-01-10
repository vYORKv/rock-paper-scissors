let compScore = 0;
let playerScore = 0;

// Randomly generates computer choice
function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

// Takes player input from button and returns it for playOnce function
function playerPlay(playerInput) {
    return playerInput;
}

// Playthrough pitting player against computer and updates scores based on results
function playGame(playerInput) {
    let pi = playerInput
    let pc = playerPlay(pi);
    let cc = computerPlay();
    
    if ((pc == "Rock" && cc == "Paper") || (pc == "Paper" && cc == "Scissors") || (pc == "Scissors" && cc == "Rock"))
     {
         compScore++;
         cscore.textContent = `Computer Score: ${compScore}`;
         alert(`You chose: ${pc} and Computer chose: ${cc}`);
     }
     else if ((pc == "Rock" && cc == "Scissors") || (pc == "Scissors" && cc == "Paper") || (pc == "Paper" && cc == "Rock"))
     {
         playerScore++;
         pscore.textContent = `Your Score: ${playerScore}`;
         alert(`You chose: ${pc} and Computer chose: ${cc}`);
     }
     else if (pc == cc)
     {
         alert(`You chose: ${pc} and Computer chose: ${cc}`);
     }
    endGame();
}

// Ends the game when either player or computer reaches 5 points
function endGame() {
    if (playerScore == 5) {
        alert("Congratulations! You win! Press okay to play again!");
        playerScore = 0;
        compScore = 0;
        pscore.textContent = `Your Score: ${playerScore}`;
        cscore.textContent = `Computer Score: ${compScore}`;
    }
     else if (compScore == 5) {
        alert("Oh no! You lose! Press okay to play again!");
        playerScore = 0;
        compScore = 0;
        pscore.textContent = `Your Score: ${playerScore}`;
        cscore.textContent = `Computer Score: ${compScore}`;
     }
     else {
         return;
     }
}

//JS-CSS/HTML Script
const Rockbtn = document.querySelector("#Rock");
const Paperbtn = document.querySelector("#Paper");
const Scissorsbtn = document.querySelector("#Scissors");
const pscore = document.querySelector("#pscore");
const cscore = document.querySelector("#cscore");
const body = document.body;
const h1 = document.createElement("h1");

h1.textContent = "Rock Paper Scissors! First to 5 wins!";
body.insertBefore(h1, Rockbtn);


Rockbtn.addEventListener("click", () => {
    playGame("Rock");
})
Paperbtn.addEventListener("click", () => {
    playGame("Paper");
})
Scissorsbtn.addEventListener("click", () => {
    playGame("Scissors");
})