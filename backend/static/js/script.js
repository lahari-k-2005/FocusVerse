let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const distractionMessage = document.getElementById("distractionmessage");
const quoteBox = document.getElementById("quoteBox");
const bgMusic = document.getElementById("bgMusic");

const quotes = [
    "🌿 Stay calm and keep going...",
    "✨ One step at a time!",
    "💪 You’re doing great!",
    "🚀 Focus fuels success!",
    "🔥 Don’t stop now!"
];

function updateDisplay() {
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function startButton() {
    if (isRunning) return;

    isRunning = true;
    timer = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                isRunning = false;
                alert("⏰ Time's up! Great job! Take a short break.");
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        updateDisplay();
    }, 1000);
}

function stopButton() {
    clearInterval(timer);
    isRunning = false;
}

function resetButton() {
    clearInterval(timer);
    isRunning = false;
    minutes = 25;
    seconds = 0;
    updateDisplay();
    distractionMessage.innerHTML = "";
    quoteBox.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}

function gotdistracted() {
    distractionMessage.innerHTML = "🚨 Distraction Detected! Take a breath and refocus ✨";
}

function toggleMusic() {
    if (bgMusic.paused) {
        bgMusic.play();
    } else {
        bgMusic.pause();
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}