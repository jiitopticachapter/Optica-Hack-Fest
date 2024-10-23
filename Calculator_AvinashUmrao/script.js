let memory = 0;
let timerInterval;
let elapsedSeconds = 0;

document.addEventListener('DOMContentLoaded', (event) => {
    startTimer();
    setupButtons();
});

function setupButtons() {
    const buttons = document.querySelectorAll('.btn');
    const screen = document.querySelector('.screen');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('btn-equal')) {
                calculate(screen);
            } else if (this.classList.contains('btn-clear')) {
                screen.value = '';
            } else {
                screen.value += this.dataset.num;
            }
        });
    });
}

function calculate(screen) {
    try {
        screen.value = eval(screen.value);
    } catch {
        alert('Invalid calculation');
    }
}

function toggleTheme() {
    document.body.classList.toggle('night-mode');
}

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    elapsedSeconds++;
    const hours = String(Math.floor(elapsedSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((elapsedSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(elapsedSeconds % 60).padStart(2, '0');
    
    document.getElementById('timer').textContent = `${hours}:${minutes}:${seconds}`;
}
