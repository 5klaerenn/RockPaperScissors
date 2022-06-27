/* 

1. Définir les trois options : rock, paper, scissors
2. Définir qui gagne contre qui
3. Demander le choix de l'utilisateur
4. Tirer au hasard le choix de l'ordinateur
5. Inscrire le résultat du combat 
6. Compter les points

*/

let userChoice = userSelection()
let randomChoice = computerPlay();

let userPoints = 0;
let computerPoints = 0;

let result = ""; 

function userSelection(){
    let userChoice = prompt("Rock, Paper or Scissors ?").toUpperCase();
    return userChoice;
}

function computerPlay() {
    let choices = ["ROCK", "PAPER", "SCISSORS"]
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playTie(userChoice, randomChoice) {
    if (userChoice == randomChoice) {
        userPoints = userPoints;
        computerPoints = computerPoints;
        result = "It's a Tie ! Try again." ;
    }  
}

function playerWin(userChoice, randomChoice) {
    if ((userChoice == "ROCK" && randomChoice == "SCISSORS") || (userChoice == "PAPER" && randomChoice == "ROCK") || (userChoice == "SCISSORS" && randomChoice == "PAPER") ) {
        userPoints++;
        computerPoints--;
        result = `You Win ! ${userChoice} beats ${randomChoice}. The score is now You ${userPoints} - Computer ${computerPoints}`;
    }
}

function playerLose(userChoice, randomChoice) {
    if ((userChoice == "ROCK" && randomChoice == "PAPER") || (userChoice == "PAPER" && randomChoice == "SCISSORS") || (userChoice == "SCISSORS" && randomChoice == "ROCK" )) {
        userPoints--;
        computerPoints++;
        result = `You Lose ! ${randomChoice} beat ${userChoice}. The score is now You ${userPoints} - Computer ${computerPoints}`;
    }  
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        userSelection();
        computerPlay();
        playTie(userChoice, randomChoice);
        playerWin(userChoice, randomChoice);
        playerLose(userChoice, randomChoice); 
        console.log(result); 
    } return result;
}

/* function playRound(userChoice, randomChoice) {
    if (userChoice == "ROCK") {
        if (randomChoice == "PAPER") {
            userPoints--;
            computerPoints++;
            return "You Lose ! Paper beats rock";
        } else {
            userPoints++;
            computerPoints--;
            return "You Win ! Rock beats Scissors";
        } 
    } else if (userChoice == "PAPER") {
        if (randomChoice == "SCISSORS") {
            userPoints--;
            computerPoints++;
            return "You Lose ! Scissors beat Paper";
        } else {
            return "You Win ! Paper beats rock";
        } 
    } else if (userChoice == "SCISSORS") {
        if (randomChoice == "ROCK") {
            userPoints--;
            computerPoints++;
            return "You Lose ! Rock beats Scissors";
        } else {
            userPoints++;
            computerPoints--;
            return "You Win ! Scissors beat Paper";
        } 
    } else {
        return "Oops! Something's wrong";
    }
} */




console.log(userChoice);
console.log(randomChoice);

console.log(playGame(userChoice, randomChoice)); 
console.log(userPoints);
console.log(computerPoints);