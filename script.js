const btn = document.querySelectorAll(".game")
const resetBtn = document.querySelector(".reset")

window.addEventListener("click", (event) => { 
    for(const obj in btn){
   if (btn[obj].id === event.target.id){
    btn[obj].disabled = true;
     btn[obj].innerText = gameBoard.click(event.target.id).tile, 
     gameBoard.winner()
  }}})   
 
const gameBoard = (function (){  

const declare = document.querySelector(".declare")
const p1Wins = "Player 1 Wins"  
const p2Wins = "Player 2 Wins" 
let tile = ""
let currentPlayer = "p1" 
let p1Tiles = []
let p2Tiles = []
let msg = "Player 2's Turn"

const player1 = () =>{
let score = 0
 msg = "Player 1's Turn"
tile = "X"
return {tile, score, msg}
} 

const player2 = () =>{
    let score = 0
     msg = "Player 2's Turn"
    tile = "O"
    return {tile, score, msg}
    }

const click = (event) =>{
if(currentPlayer === "p1"){
    currentPlayer = currentPlayer === "p1" ? "p2": "p1"
    p1Tiles.push(Number(event))
    declare.innerText = msg
    return player1()
}else
currentPlayer = currentPlayer === "p1" ? "p2": "p1"
p2Tiles.push(Number(event))
declare.innerText = msg
return player2()
}

const outcomes = {
    one: [1,2,3],
    two: [4,5,6],
    three: [7,8,9],
    four: [1,4,7],
    five: [2,5,8],
    six: [3,6,9],
    seven: [1,5,9],
    eight: [3,5,7],
   }  

const winner = () =>{
    for(const obj in outcomes){
    if(outcomes[obj].every((num) => p1Tiles.includes(num))){
    return declare.innerText = p1Wins, 
           btn.forEach((item) => item.disabled = true)
}else if(outcomes[obj].every((num) => p2Tiles.includes(num))){
    return declare.innerText = p2Wins,
     btn.forEach((item) => item.disabled = true)
    }
    }if(p1Tiles.length === 5){
        return declare.innerText = "It's a Draw!" 
    }}

    const reset =  () => {
        tile = ""
        currentPlayer = "p1" 
        p1Tiles = []
        p2Tiles = []
        msg = "Player 2's Turn"
      declare.innerText = "Player 1's Turn"
      btn.forEach((item) => item.innerText = "");
      btn.forEach((item) => item.disabled = false)
    }

return{click, winner, msg, reset} 
})() 

resetBtn.addEventListener("click", () => gameBoard.reset())