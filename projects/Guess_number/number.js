const randomNumber = (parseInt(Math.random() *100 +1))

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guesSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworhigh = document.querySelector('.loworhigh')
const startOver = document.querySelector('.resultParas')



const p = document.createElement('p');

let prevGuess = []
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
       const guess = parseInt(userInput.value)
       console.log(guess)
       validateGuess(guess)

    })
}

function validateGuess(guess){

    if(isNaN(guess)){
        alert('Please enter a valid number')
    }

}

function checkGuess(guess){

}

function displayGuess(guess){

}

function    displayMessage(message){

}

function endGame(){

}

function newGame(){

}

