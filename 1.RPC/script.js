/* 

1. Définir les trois options : rock, paper, scissors
2. Définir qui gagne contre qui
3. Demander le choix de l'utilisateur
4. Tirer au hasard le choix de l'ordinateur
5. Inscrire le résultat du combat 
6. Compter les points

*/

let userChoice = prompt("Rock, Paper or Scissors ?").toUpperCase();

function computerPlay() {
    let choices = ["ROCK", "PAPER", "SCISSORS"]
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

let randomChoice = computerPlay(); 

function playRound(userChoice, randomChoice) {
    if (userChoice == randomChoice) {
        return  "It's a Tie ! Try again"; 
    } else if (userChoice == "ROCK") {
        if (randomChoice == "PAPER") {
            return "You Lose ! Paper beats rock";
        } else {
            return "You Win ! Rock beats Scissors";
        } 
    } else if (userChoice == "PAPER") {
        if (randomChoice == "SCISSORS") {
            return "You Lose ! Scissors beat Paper";
        } else {
            return "You Win ! Paper beats rock";
        } 
    } else if (userChoice == "SCISSORS") {
        if (randomChoice == "ROCK") {
            return "You Lose ! Rock beats Scissors";
        } else {
            return "You Win ! Scissors beat Paper";
        } 
    } else {
        return "Oops! Something's wrong";
    }
}


console.log(userChoice);
console.log(randomChoice);
console.log(playRound(userChoice, randomChoice)); 