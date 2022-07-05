let choices = ['ROCK', 'PAPER', 'SCISSORS'];

let userChoice;
let computerChoice; 

let userPoints = 0;
let computerPoints = 0;

let result; 

function playRound(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        result = "tie";
        sendMessage(result);
     } else if ((userChoice == "ROCK" && computerChoice == "SCISSORS") || 
                (userChoice == "PAPER" && computerChoice == "ROCK") || 
                (userChoice == "SCISSORS" && computerChoice == "PAPER")) {
        result = "win"; 
        userPoints++;
        sendMessage(result);
    } else if ((userChoice == "ROCK" && computerChoice == "PAPER") || 
               (userChoice == "PAPER" && computerChoice == "SCISSORS") || 
               (userChoice == "SCISSORS" && computerChoice == "ROCK" )) {
        result = "lose";
        computerPoints++;
        sendMessage(result);
    } else if (!choices.includes(userChoice)) {
        alert(`Oops, something went wrong. ${userChoice} is not a valid entry`); 
    };   
}

function sendMessage(result){
    if (result === "tie") {
        console.log(`You both chose ${computerChoice.toLowerCase()}. Score is ${userPoints} to ${computerPoints}. Try again`);
    } else {
        console.log(`You ${result} ! ${userChoice.toLowerCase()} beats ${computerChoice.toLowerCase()}. Score is ${userPoints} to ${computerPoints}.`);    
    } 
}

function playGame(){
    for (i = 0; i < 5; i++) {
        userChoice = prompt('Rock, Paper or Scissors ?').toUpperCase();
        computerChoice = choices[Math.floor(Math.random() * choices.length)];
        console.log(`Round ${i} of 5 :`)
        playRound(userChoice, computerChoice);
    }; 
}


console.log(playGame());


