let timer;
let totalSeconds = 0;

const minMSB = document.getElementById('minMSB');
const minLSB = document.getElementById('minLSB');
const secMSB = document.getElementById('secMSB');
const secLSB = document.getElementById('secLSB');

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

function getTimeFromInputs() {
  const minutes = parseInt(minMSB.value + minLSB.value) || 0;
  const seconds = parseInt(secMSB.value + secLSB.value) || 0;
  return minutes * 60 + seconds;
}

function updateInputsFromTotalSeconds() {
  let mins = Math.floor(totalSeconds / 60);
  let secs = totalSeconds % 60;

  minMSB.value = Math.floor(mins / 10);
  minLSB.value = mins % 10;
  secMSB.value = Math.floor(secs / 10);
  secLSB.value = secs % 10;
}

function startTimer() {
  totalSeconds = getTimeFromInputs();

  if (totalSeconds <= 0) {
    alert("Please enter a valid time.");
    return;
  }

  startBtn.disabled = true;
  stopBtn.disabled = false;

  timer = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(timer);
      alert("Time's up!");
      startBtn.disabled = false;
      stopBtn.disabled = true;
    } else {
      totalSeconds--;
      updateInputsFromTotalSeconds();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function resetTimer() {
  clearInterval(timer);
  totalSeconds = 0;
  minMSB.value = 0;
  minLSB.value = 0;
  secMSB.value = 0;
  secLSB.value = 0;
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
