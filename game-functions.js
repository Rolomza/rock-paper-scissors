let playerSelection = prompt('Choose an object: (rock, paper, scissors): ').toLowerCase()


const computerPlay = () => {
    let objects = ["rock", "paper", "scissors"]
    let randomObject = objects[Math.round(Math.random() * 2)]
    return randomObject
}

let computerSelection = computerPlay()

const playRound = (playerSelection, computerSelection) => {
    if(playerSelection === 'rock' && computerSelection === "scissors") {
        return 'You win! Rock beats scissors.'
    } else if (playerSelection === 'rock' && computerSelection === "paper") {
        return 'You lose! Paper beats rock.'
    } else if (playerSelection === 'rock' && computerSelection === "rock") {
        return 'Tie!'
    } else if (playerSelection === 'scissors' && computerSelection === "rock") {
        return 'You lose! Rock beats scissors.'
    } else if (playerSelection === 'scissors' && computerSelection === "paper") {
        return 'You win! Scissors beats paper.'
    } else if (playerSelection === 'scissors' && computerSelection === "scissors") {
        return 'Tie!'
    } else if (playerSelection === 'paper' && computerSelection === "rock") {
        return 'You win! Paper beats rock.'
    } else if (playerSelection === 'paper' && computerSelection === "scissors") {
        return 'You lose! Scissors beats paper.'
    } else if (playerSelection === 'paper' && computerSelection === "paper") {
        return 'Tie!'
    }
}

console.log(playRound(playerSelection, computerSelection))