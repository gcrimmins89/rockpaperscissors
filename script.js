let player1 = ''
let player2 = ''
const player1tag = document.getElementById('player1')
const player2tag = document.getElementById('player2')
const p1heading = document.getElementById('p1')
const p2heading = document.getElementById('p2')
const win = document.getElementById('winner')


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
            win.textContent = "Player 1 Wins"
        } else if(player1tag.textContent === player2tag.textContent){
            win.textContent = "Draw"
        } else if(player1tag.textContent === "Paper" && player2tag.textContent === "Rock"){
            win.textContent = "Player 1 Wins"
        }
            else if(player1tag.textContent === "Scissors" && player2tag.textContent === "Paper"){
                win.textContent = "Player 1 Wins"
            } else {
                win.textContent = "Player 2 Wins"
            }
        }
