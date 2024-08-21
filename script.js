const gameBoard = (function (){
const p1Wins = "Player 1 Wins"
const p2Wins = "Player 2 Wins"
let tileX = "X"
let tileO = "O"
let currentPlayer = "p1"
let p1Tiles = []
let p2Tiles = []


const player1 = () =>{
let score = 0
let msg = "Player 2's turn"
return {tileX, score, msg}
}

const player2 = () =>{
    let score = 0
    let msg = "Player 1's turn"
    return {tileO, score, msg}
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
    eight: [3,5,7]
   }

const winner = () =>{

}

return{player1, player2, click}
})()

const displayController = (function () {
   


})()

console.log(gameBoard.click())

