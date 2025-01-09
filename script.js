let player1 = ''
let player2 = ''
const player1tag = document.getElementById('player1')
const player2tag = document.getElementById('player2')
const p1heading = document.getElementById('p1')
const p2heading = document.getElementById('p2')
const win = document.getElementById('winner')

function getNames(){
    player1Name = prompt('What is player 1 name?')
    player2Name = prompt('What is player 2 name')
    p1.textContent = player1Name
    p2.textContent = player2Name
}

getNames()

function game(){
    player1 = Math.floor(Math.random() * 3)
    if(player1 === 0){
        player1tag.textContent = 'Rock'
    } else if(player1 === 1){
        player1tag.textContent = 'Paper'
    } else {
        player1tag.textContent = 'Scissors'
    }
        player2 = Math.floor(Math.random() * 3)
        if(player2 === 0){
            player2tag.textContent = 'Rock'
        } else if(player2 === 1){
            player2tag.textContent = 'Paper'
        } else {
            player2tag.textContent = 'Scissors'
        }
        if(player1tag.textContent === "Rock" && player2tag.textContent === "Scissors"){
            win.textContent = `${player1Name} wins`
        } else if(player1tag.textContent === player2tag.textContent){
            win.textContent = "The game is a draw"
        } else if(player1tag.textContent === "Paper" && player2tag.textContent === "Rock"){
            win.textContent = `${player1Name} wins`
        }
            else if(player1tag.textContent === "Scissors" && player2tag.textContent === "Paper"){
                win.textContent = `${player1Name} wins`
            } else {
                win.textContent = `${player2Name} wins`
            }
        }
