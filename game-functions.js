const computerPlay = () => {
    let objects = ["rock", "paper", "scissors"]
    let randomObject = objects[Math.round(Math.random() * 2)]
    return randomObject
}

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