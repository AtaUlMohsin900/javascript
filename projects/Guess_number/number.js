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
    }else if(guess < 1){
        alert('Please enter a number more then 1')
    }else if(guess > 100){
        alert('Please enter a number less then 100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Randum number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Your Guess is correct`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`You loss try again`)

    }else if(guess > randomNumber){
        displayMessage(`You loss try again`)


}

function displayGuess(guess){

}

function    displayMessage(message){

}

function endGame(){

}

function newGame(){

}

