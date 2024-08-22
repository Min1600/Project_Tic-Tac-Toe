/*const btn = document.querySelectorAll("button")

window.addEventListener("click", (event) => {
    gameBoard.click() 
    for(const obj in btn){
   if (btn[obj].id === event.target.id){
     btn[obj].innerText = gameBoard.click().tile
  }}})    
const div = document.querySelector("h2")*/
const gameBoard = (function (){ 
const p1Wins = "Player 1 Wins"  
const p2Wins = "Player 2 Wins"
let tile = ""
let currentPlayer = "p1"
let p1Tiles = []
let p2Tiles = []

const player1 = () =>{
let score = 0
let msg = "Player 2's turn"
tile = "X"
return {tile, score, msg}
}

const player2 = () =>{
    let score = 0
    let msg = "Player 1's turn"
    tile = "O"
    return {tile, score, msg}
    }

const click = (num) =>{
if(currentPlayer === "p1"){
    currentPlayer = currentPlayer === "p1" ? "p2": "p1"
    p1Tiles.push(num)
    console.log(p1Tiles)
    return player1()
}else
currentPlayer = currentPlayer === "p1" ? "p2": "p1"
p2Tiles.push(num)
console.log(p2Tiles)
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
     console.log(p1Wins)
}else if(outcomes[obj].every((num) => p2Tiles.includes(num))){
    console.log(p2Wins)
    }else if (p1Tiles.length === 5){
        console.log("It's a Draw!")
    }else{
        return ""
    }}}

return{click, winner}
})()

const displayController = (function () {
   


})()





console.log(gameBoard.click(1), gameBoard.winner())
console.log(gameBoard.click(5), gameBoard.winner())
console.log(gameBoard.click(2), gameBoard.winner())
console.log(gameBoard.click(9), gameBoard.winner())
console.log(gameBoard.click(3), gameBoard.winner())








