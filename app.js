// --------------- global variables ---------------
//arry of objects for all cards and sort it ramndomly
const cardsInfo = [
    {
        name: "😉",
        isSolved: false
    },
    {
        name: "😘",
        isSolved: false
    },
    {
        name: "🥰",
        isSolved: false
    },
    {
        name: "😁",
        isSolved: false
    },
    {
        name: "😀",
        isSolved: false
    },
    {
        name: "😂",
        isSolved: false
    },
    {
        name: "😉",
        isSolved: false
    },
    {
        name: "😘",
        isSolved: false
    },
    {
        name: "🥰",
        isSolved: false
    },
    {
        name: "😁",
        isSolved: false
    },
    {
        name: "😀",
        isSolved: false
    },
    {
        name: "😂",
        isSolved: false
    }
].sort((a, b) => 0.5 - Math.random()); //https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj (more details about algorithm)

// cards area
const cards = document.querySelector('.cards');

// score value
const gameOverMessage = document.querySelector('.game-over');
const score = document.querySelector('[data-id="score"]');
const finalScore = document.querySelector('.final-score');
const cancelBtn = document.querySelector('.no-btn');

// helper varialbes
let newCard; // to hold the current clicked card
let currentCards = []; // to hold the value of two chosen cards in a row
let solvedCards = 0; // to check if the game is finished or not

// --------------- main program ---------------
// insert cards in the page
window.addEventListener('DOMContentLoaded', () => {
    for (let i in cardsInfo) {
        // making the body of every card with just the index of the array so no one can cheat
        cards.innerHTML += `
        <div class="card" data-id="${i}">
            <div class="front">?</div>
            <div class="back">don't cheat</div>
        </div>`
    }
});

// add click to all cards
cards.addEventListener('click', (e) => {
    newCard = e.target.closest('.card');
    // check if we clicked on card and if the card is solved or not
    if (newCard && !cardsInfo[newCard.dataset.id].isSolved) {
        chooseCard(newCard);
    }
})

// cnaceling the game over menu on the page
cancelBtn.addEventListener('click', ()=>{
    gameOverMessage.classList.remove('show-game-over');
})

// --------------- functions ---------------
// to flip card and show it's content
function showCard(card){
    card.querySelector('.back').textContent = cardsInfo[card.dataset.id].name;
    card.classList.add('card-clicked');
}

// to reflip the card and hide it's content
function hideCard(card) {
    card.classList.remove('card-clicked');
    card.querySelector('.back').textContent = '';
}

// start the game
function chooseCard(card) {
    const cardPosition = card.dataset.id;
    showCard(card);
    // preventing the player from pressing the same card twice
    if (card === currentCards[0]) return 0;
    currentCards.push(card);
    if (currentCards.length === 2) checkForMatch();
}

// check for matching in two cards
function checkForMatch() {
    // hold the cards info so we can modify it later with less code
    const firstCard = cardsInfo[currentCards[0].dataset.id];
    const secondCard = cardsInfo[currentCards[1].dataset.id];
    // keep the cards as it is and chnage it's state to not be touched any more
    if (firstCard.name === secondCard.name) {
        firstCard.isSolved = true;
        secondCard.isSolved = true;
        solvedCards ++;
    }
    else {
        // hide the card again to replay it (we can't just use array elements in setTimeout Function directly so we use it in forEach method and the total time is 2 secnods)
        currentCards.forEach((card)=> {
            setTimeout(()=> {
                hideCard(card);
            }, 1000)
        });
    }
    score.textContent ++; // increase the score
    finalScore.textContent = score.textContent;
    currentCards = []; // empty the array so we can use it again
    gameOver();
}

// chreck if the game is over
function gameOver() {
    if (solvedCards >= cardsInfo.length/2) gameOverMessage.classList.add('show-game-over');
}