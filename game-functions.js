const buttons = document.querySelectorAll('.btn')

const playRound = (e) => {
    let computerSelection = computerPlay()
    let playerSelection = e.target.id;
    if((playerSelection === 'rock' && computerSelection === "scissors") || 
       (playerSelection === 'scissors' && computerSelection === "paper") ||
       (playerSelection === 'paper' && computerSelection === "rock")) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`) 
    } else if (playerSelection === computerSelection) {
        console.log('Tie!')
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
    }
}

const computerPlay = () => {
    let objects = ["rock", "paper", "scissors"]
    let randomObject = objects[Math.round(Math.random() * 2)]
    return randomObject
}

buttons.forEach(btn => btn.addEventListener('click', playRound));