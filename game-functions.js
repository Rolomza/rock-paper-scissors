const buttons = document.querySelectorAll('.btn')
const score = document.querySelector('.score')
const playerPoint = document.querySelector('#player > p')
const computerPoint = document.querySelector('#computer > p')


const playRound = (e) => {
    let computerSelection = computerPlay()
    let playerSelection = e.target.id;
    
    if((playerSelection === 'rock' && computerSelection === "scissors") || 
       (playerSelection === 'scissors' && computerSelection === "paper") ||
       (playerSelection === 'paper' && computerSelection === "rock")) {
        score.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
        playerPoint.textContent = Number(playerPoint.textContent) + 1
    } else if (playerSelection === computerSelection) {
        score.textContent = 'Tie!'
    } else {
        score.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
        computerPoint.textContent = Number(computerPoint.textContent) + 1
    }
    let playerCount = Number(playerPoint.textContent)
    let computerCount = Number(computerPoint.textContent)
    
    endGame(playerCount, computerCount)
   
}

const computerPlay = () => {
    let objects = ["rock", "paper", "scissors"]
    let randomObject = objects[Math.round(Math.random() * 2)]
    return randomObject
}

const endGame = (totalPlayer, totalComputer) => {
    console.log(totalPlayer, totalComputer)
    if (totalPlayer === 5 || totalComputer === 5) {
        alert('El juego ha terminado, presione F5 para volver a iniciar')
    }
}

buttons.forEach(btn => btn.addEventListener('click', playRound));