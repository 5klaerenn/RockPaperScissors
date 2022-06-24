/* 

1. Définir les trois options : rock, paper, scissors
2. Définir qui gagne contre qui
3. Demander le choix de l'utilisateur
4. Tirer au hasard le choix de l'ordinateur
5. Inscrire le résultat du combat 
6. Compter les points

*/

let choices = ["rock", "paper", "scissors"]

function computerPlay() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice
}


console.log(computerPlay())