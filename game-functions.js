const computerPlay = () => {
    let objects = ["rock", "paper", "scissors"]
    let randomObject = objects[Math.round(Math.random() * 2)]
    return randomObject
}