
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

// Variable to control the timer
let timer;
let hr = 0;
let min = 0;
let sec = 0;
let isTimerRunning = false; // Track if the timer is currently running

startBtn.addEventListener('click', function () {
    if (!isTimerRunning) { // Check if the timer is not already running
        timer = setInterval(stopWatch, 1000); // Update every second
        isTimerRunning = true;
        startBtn.disabled = true; // Disable the start button
    }
});

stopBtn.addEventListener('click', function () {
    clearInterval(timer);
    isTimerRunning = false;
    startBtn.disabled = false; // Re-enable the start button
});

resetBtn.addEventListener('click', function () {
    clearInterval(timer); // Clear timer interval
    isTimerRunning = false;
    startBtn.disabled = false; // Re-enable the start button
    hr = 0;
    min = 0;
    sec = 0;
    updateDisplay(); // Update display to show 00:00:00
});

function stopWatch() {
    sec++;

    if (sec == 60) {
        min++;
        sec = 0;
    }

    if (min == 60) {
        hr++;
        min = 0;
    }

    updateDisplay(); // Update the display with the new time
}

function updateDisplay() {
    let hrString = hr.toString().padStart(2, '0');
    let minString = min.toString().padStart(2, '0');
    let secString = sec.toString().padStart(2, '0');

    document.getElementById('hr').innerHTML = hrString;
    document.getElementById('min').innerHTML = minString;
    document.getElementById('sec').innerHTML = secString;
}
