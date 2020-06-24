let gameChoices = ['rock', 'paper', 'scissors']

let rock = {
    img: 'https://www.kindpng.com/picc/m/248-2486440_chronic-kidney-stones-monster-sticker-cartoon-rock-clipart.png'
}
let paper = {
    img: 'https://lh3.googleusercontent.com/proxy/sI7TJ9d7W0Hq6j8EVBYPgOQh3jqfyNr2AS4RCZgK6PyI8L68R_CbGTZZ3_GC48tzpx1Z6r9TwlFldYSrXglpjthcxj9Jd3U'
}
let scissors = {
    img: 'https://thumbs.dreamstime.com/b/angry-scissors-cartoon-vector-illustration-49122109.jpg'
}

function drawGame() {
    let playerElem = document.getElementById('player-img')
    let computerElem = document.getElementById('computer-img')

    playerElem.src = rock.img
    computerElem.src = scissors.img
}
function play(choice) {
    if (choice == 'rock') {
        let rockElem = document.getElementById('player-img')
        rockElem.src = rock.img
        let cChoice = computerChoice()
        if (cChoice == 'paper') {
            alert('YOU LOSE!')
        } else if (cChoice == 'scissors') {
            alert('YOU WIN!')
        } else { alert('DRAW') }
    }
    else if (choice == 'paper') {
        let paperElem = document.getElementById('player-img')
        paperElem.src = paper.img
        let cChoice = computerChoice()
        if (cChoice == 'scissors') {
            alert('YOU LOSE!')
        } else if (cChoice == 'rock') {
            alert('YOU WIN!')
        } else { alert('DRAW') }
    }
    else {
        let scissorsElem = document.getElementById('player-img')
        scissorsElem.src = scissors.img
        let cChoice = computerChoice()
        if (cChoice == 'rock') {
            alert('YOU LOSE!')
        } else if (cChoice == 'paper') {
            alert('YOU WIN!')
        } else { alert('DRAW') }
    }
}

function computerChoice() {
    let choiceIndex = Math.floor(Math.random() * gameChoices.length)

    if (choiceIndex == 0) {
        let rockElem = document.getElementById('computer-img')
        rockElem.src = rock.img
        return gameChoices[choiceIndex]
    }
    else if (choiceIndex == 1) {
        let paperElem = document.getElementById('computer-img')
        paperElem.src = paper.img
        return gameChoices[choiceIndex]
    }
    else {
        let scissorsElem = document.getElementById('computer-img')
        scissorsElem.src = scissors.img
        return gameChoices[choiceIndex]
    }
}

drawGame()