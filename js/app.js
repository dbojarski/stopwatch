const timeElement = document.getElementById('Stopwatch-time');
const functionStartElement = document.getElementById('Stopwatch-start');
const functionStopElement = document.getElementById('Stopwatch-stop');
const functionResetElement = document.getElementById('Stopwatch-reset');
let countingInterval;
let seconds = 0;
let milliseconds = 0;

functionStartElement.addEventListener('click', () => {
    if(countingInterval) {
        return;
    }

    countingInterval = setInterval(() => {
        if(milliseconds === 99) {
            seconds++;
            milliseconds = 0;
        } else {
            milliseconds++;
        }

        setTimerValue(seconds, milliseconds);
    }, 10);
});

functionStopElement.addEventListener('click', () => stopTimer());

functionResetElement.addEventListener('click', () => {
    seconds = 0;
    milliseconds = 0;

    stopTimer();
    setTimerValue(0, 0);
});

function stopTimer() {
    clearInterval(countingInterval);
    countingInterval = null;
}

function setTimerValue(seconds, milliseconds) {
    const secondsValue = seconds > 9 ? seconds : `0${seconds}`;
    const millisecondsValue = milliseconds > 9 ? milliseconds : `0${milliseconds}`;

    timeElement.innerText = `${secondsValue}:${millisecondsValue}`;
}