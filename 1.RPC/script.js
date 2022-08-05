//Déclarations des variables

let computerChoice;
let userChoice;

let userPoints = 0;
let computerPoints = 0;
let result;

const choices = document.querySelector('#choices');
const btn = choices.querySelectorAll('button');
const userDisplay = document.querySelector('#userDisplay');
const compDisplay = document.querySelector('#compDisplay');
const roundDisplay = document.querySelector('#roundDisplay');
const finalDisplay = document.querySelector('#finalDisplay');
const againCont = document.querySelector('#again');

//Sélection joueuer et ordi
btn.forEach((el) => {
    el.addEventListener('click', () => {
        userChoice = el.value;
        playRound(userChoice, computerChoice);
    }); 
}) 

function computerSelection() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];

    return choices[Math.floor(Math.random() * choices.length)];
}

// Round

function playRound(userChoice, computerChoice) {
    computerChoice = computerSelection(); 

    if (userChoice == computerChoice) {
        result = "tie";
        roundDisplay.textContent = `You both chose ${computerChoice.toLowerCase()}.`
        isGameOver();
     } else if ((userChoice == "ROCK" && computerChoice == "SCISSORS") || 
                (userChoice == "PAPER" && computerChoice == "ROCK") || 
                (userChoice == "SCISSORS" && computerChoice == "PAPER")) {
        result = "win"; 
        addPoints();
        roundDisplay.textContent = `You ${result} ! ${userChoice.toLowerCase()} beats ${computerChoice.toLowerCase()}.`
        isGameOver();
    } else if ((userChoice == "ROCK" && computerChoice == "PAPER") || 
               (userChoice == "PAPER" && computerChoice == "SCISSORS") || 
               (userChoice == "SCISSORS" && computerChoice == "ROCK" )) {
        result = "lose";
        addPoints();
        roundDisplay.textContent = `You ${result} ! ${computerChoice.toLowerCase()} beats ${userChoice.toLowerCase()}.`
        isGameOver();
    } 
}

// Suivi du score


function addPoints(){
    if(result === 'win') {
        userPoints += 1;
        userDisplay.textContent = userPoints;
    } else if(result === 'lose') {
        computerPoints += 1;
        compDisplay.textContent = computerPoints;
    }
}

//Fin de partie

function isGameOver(){
    if(userPoints >= 5 && userPoints > computerPoints){
        roundDisplay.textContent = "Game Over, You win :D ";
        tryAgain();
    } else if (computerPoints >= 5 && userPoints < computerPoints){
        roundDisplay.textContent = "Game Over, You Lose :( ";
        tryAgain();
    }
}

function tryAgain(){
    let againBtn = document.createElement('button');
    againBtn.textContent = "Try Again";
    againBtn.id = "againBtn";
    choices.style.visibility = "hidden";
    againCont.appendChild(againBtn);
    againBtn.addEventListener("click", () => {window.location.reload();})
}

