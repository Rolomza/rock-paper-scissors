const computerPlay = () => {
    let objects = ["rock", "paper", "scissors"]
    let randomObject = objects[Math.round(Math.random() * 2)]
    return randomObject
}

const playRound = (playerSelection, computerSelection) => {
    if((playerSelection === 'rock' && computerSelection === "scissors") || 
       (playerSelection === 'scissors' && computerSelection === "paper") ||
       (playerSelection === 'paper' && computerSelection === "rock")) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === computerSelection) {
        return 'Tie!'
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

const game = () => {
    console.log('You have 5 rounds to play! Come on!')
    let counter = 0
    while(counter < 5) {
        let playerSelection = prompt('Choose an object: (rock, paper, scissors): ').toLowerCase()
        let computerSelection = computerPlay()
        playRound(playerSelection, computerSelection)
        console.log(playRound(playerSelection, computerSelection))
        counter++
    }
    console.log('The game has finished.')
}

game()