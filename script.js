let moves = 0;
let level = "easy";
let seconds = 0;
let timer = null;

const movesDisplay = document.querySelector("#moves");
const timerDisplay = document.querySelector("#timer");
const grid = document.querySelector(".grid");

const restartBtn = document.querySelector("#restart");
const winScreen = document.querySelector("#winScreen");
const playAgainBtn = document.querySelector("#playAgain");

const startScreen = document.querySelector("#startScreen");
const startBtn = document.querySelector("#startBtn");
const winMessage = document.querySelector("#winMessage");
const bestTimeDisplay = document.querySelector("#bestTime");
const bestMovesDisplay = document.querySelector("#bestMoves");


const flipSound = new Audio("sounds/flip.mp3");
const matchSound = new Audio("sounds/match.mp3");
const winSound = new Audio("sounds/win.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");


flipSound.volume = 0.2;
matchSound.volume = 0.4;
winSound.volume = 0.15;
wrongSound.volume = 0.2;

startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    initGame();
});


function updateGrid() {

    if (window.innerWidth <= 600) {

        grid.style.gridTemplateColumns =
            "repeat(2, 100px)";

    } else {

        grid.style.gridTemplateColumns =
            "repeat(4, 120px)";
    }
}

const levels = {
    easy: ["🍎", "🌻", "🐶", "🍀"],

    medium: ["🍎", "🌻", "🐶", "🍀", "⚽", "🚗"],

    hard: ["🍎", "🌻", "🐶", "🍀", "⚽", "🚗", "🎧", "🎮"]
};

let gameCards = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function loadRecords() {

    const bestTime =
        localStorage.getItem(`${level}BestTime`);

    const bestMoves =
        localStorage.getItem(`${level}BestMoves`);

    if (bestTime) {

        bestTimeDisplay.textContent =
            `${bestTime}s`;

    } else {

        bestTimeDisplay.textContent = "--";
    }

    if (bestMoves) {

        bestMovesDisplay.textContent =
            bestMoves;

    } else {

        bestMovesDisplay.textContent = "--";
    }
}

function saveRecords() {

    const bestTimeKey =
        `${level}BestTime`;

    const bestMovesKey =
        `${level}BestMoves`;

    const bestTime =
        localStorage.getItem(bestTimeKey);

    const bestMoves =
        localStorage.getItem(bestMovesKey);

    if (!bestTime || seconds < bestTime) {

        localStorage.setItem(bestTimeKey, seconds);

        bestTimeDisplay.textContent =
            `${seconds}s`;
    }

    if (!bestMoves || moves < bestMoves) {

        localStorage.setItem(bestMovesKey, moves);

        bestMovesDisplay.textContent =
            moves;
    }
}

function startTimer() {
    clearInterval(timer);

    seconds = 0;

    timerDisplay.textContent = seconds;

    timer = setInterval(() => {

        seconds++;

        timerDisplay.textContent = seconds;
    }, 1000);
}

function initGame() {
    updateGrid();

    moves = 0;

    movesDisplay.textContent = moves;

    firstCard = null;
    secondCard = null;

    lockBoard = false;

    winScreen.classList.add("hidden");

    const selectedEmojis = levels[level];


    gameCards = shuffle([...selectedEmojis, ...selectedEmojis]);

    lockBoard = true;

    createBoard();

    updateGrid();
}

function createBoard() {
    grid.innerHTML = "";

    gameCards.forEach(emoji => {
        const card = document.createElement("button");
        card.classList.add("card");
        card.dataset.emoji = emoji;
        card.textContent = emoji;
        card.classList.add("flipped");

        card.addEventListener("click", handleClick);

        grid.appendChild(card);
    });

    setTimeout(() => {

        document.querySelectorAll(".card").forEach(card => {

            hide(card);


        });

        lockBoard = false;
        startTimer();

    }, 1500);
}

function handleClick(e) {
    const card = e.target;

    if (lockBoard) return;
    if (card === firstCard) return;
    if (card.classList.contains("matched")) return;

    reveal(card);

    if (!firstCard) {
        firstCard = card;

        flipSound.currentTime = 0;

        flipSound.play();

        card.textContent = card.dataset.emoji;

        card.classList.add("flipped");
        return;
    }

    secondCard = card;

    moves++;
    movesDisplay.textContent = moves;

    lockBoard = true;

    checkMatch();
}

function reveal(card) {
    card.textContent = card.dataset.emoji;
    card.classList.add("flipped");
}

function hide(card) {
    card.textContent = "❓";
    card.classList.remove("flipped");
}

function checkMatch() {
    const isMatch = firstCard.dataset.emoji === secondCard.dataset.emoji;

    if (isMatch) {

        firstCard.classList.add("match-pop");

        secondCard.classList.add("match-pop");

        setTimeout(() => {
            firstCard.classList.remove("match-pop");

            secondCard.classList.remove("match-pop");
        }, 400);

        matchSound.currentTime = 0;
        matchSound.play();

        firstCard.classList.add("matched");
        secondCard.classList.add("matched");

        resetTurn();
        checkWin();

    } else {
        wrongSound.currentTime = 0;

        wrongSound.play();

        firstCard.classList.add("wrong");

        secondCard.classList.add("wrong");

        setTimeout(() => {

            firstCard.classList.remove("wrong");
            secondCard.classList.remove("wrong");

            hide(firstCard);
            hide(secondCard);
            resetTurn();
        }, 800);
    }
}

function resetTurn() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

function checkWin() {
    const matchedCards = document.querySelectorAll(".card.matched");

    if (matchedCards.length === gameCards.length) {

        clearInterval(timer);

        winSound.currentTime = 0;

        winSound.play();

        saveRecords();

        setTimeout(() => {

            winMessage.textContent =
                `you completed the game in ${seconds} seconds with ${moves} moves!`;

            winScreen.classList.remove("hidden");

            lockBoard = true;

        }, 300);
    }
}

function restartGame() {
    initGame();
}

document.querySelectorAll(".level").forEach(btn => {

    if (btn.dataset.level === "easy") {
        btn.classList.add("active");
    }

    btn.addEventListener("click", () => {

        document.querySelectorAll(".level").forEach(b =>
            b.classList.remove("active")
        );

        btn.classList.add("active");

        level = btn.dataset.level;

        loadRecords();
    });
});

window.addEventListener("resize", updateGrid);

restartBtn.addEventListener("click", restartGame);
playAgainBtn.addEventListener("click", restartGame);
loadRecords();
