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
    },
].sort((a, b) => 0.5 - Math.random()); //https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj (more details about algorithm)

const cards = document.querySelector('.cards');

// helper varialbes
let newCard; // to hold the current clicked card

// --------------- main program ---------------
// insert cards in the page
window.addEventListener('DOMContentLoaded', () => {
    for (let card of cardsInfo) {
        cards.innerHTML += `
        <div class="card" data-state="${card.isSolved}" data-name="${card.name}">
            <div class="front">?</div>
            <div class="back">${card.name}</div>
        </div>`
    }
});

// add click to all cards
cards.addEventListener('click', (e) => {
    newCard = e.target.closest('.card');
    if (newCard) {
        newCard.classList.toggle('card-clicked');
    }
})

// --------------- functions ---------------

