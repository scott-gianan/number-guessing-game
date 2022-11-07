const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const button = document.querySelector('button');

let randomNumber = Math.round(Math.random()*100);

let userGuess = [];
let guessCount = 0;



const guess = () => {
    guessCount++;
    //console.log(guessCount);
    let submittedGuess = Number.parseInt(guessField.value, 10);
    if(guessField.value===''){
        userGuess.push(0);
    } else {
        userGuess.push(submittedGuess);
        // console.log(submittedGuess);
        // console.log(typeof submittedGuess);
    }
    //clears the input field after the 'Submit guess' button is clicked
    guessField.value='';
    guesses.textContent = `Previous guesses: ${userGuess.join(', ')}`
    checkGuess();
}

const checkGuess = () => {
    let lastUserGuess = userGuess[userGuess.length-1];
    //console.log(lastUserGuess);

    if(randomNumber === lastUserGuess){
        guessSubmit.disabled=true;
        guessField.disabled=true;
        lastResult.textContent = `Congratulations! You got it right!`;
        lowOrHi.textContent = '';
        lastResult.classList.remove('gameOver');
        lastResult.classList.add('lastResultCorrect');
        button.removeAttribute('hidden');
    } else {
        if(lastUserGuess < randomNumber){
            lastResult.textContent = `Wrong`;
            lastResult.classList.add('gameOver');
            lowOrHi.textContent = `Last guess was too low.`
        } else if (lastUserGuess > randomNumber){
            lastResult.textContent = `Wrong`;
            lastResult.classList.add('gameOver');
            lowOrHi.textContent = `Last guess was too High.`
        }
        setTimeout(() => {
            gameOver();
        }, 100);
    }
}

const gameOver = () => {
    if(guessCount===10){
        guessSubmit.disabled=true;
        guessField.disabled=true;
        lastResult.textContent = `!!! GAME OVER !!!`;
        lastResult.classList.add('gameOver');
        button.removeAttribute('hidden');
    }
}

guessSubmit.addEventListener('click', guess)