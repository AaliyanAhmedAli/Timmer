// Get the elements we need
const clock = document.getElementById('clock');
const alarmTimeInput = document.getElementById('alarm-time');
const stopButton = document.getElementById('stop-button');
const alarmSound = document.getElementById('alarm-sound');

let alarmTime;
let alarmInterval;

// Update the clock every second
setInterval(() => {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
  // Check if it's time for the alarm to go off
  if (alarmTime && now >= alarmTime) {
    startAlarm();
  }
}, 1000);

// Set the alarm time
function setAlarm() {
  const timeParts = alarmTimeInput.value.split(':');
  alarmTime = new Date();
  alarmTime.setHours(timeParts[0]);
  alarmTime.setMinutes(timeParts[1]);
  alarmTime.setSeconds(0);
  alarmTime.setMilliseconds(0);
  // Update the UI
  alarmTimeInput.disabled = true;
  stopButton.style.display = 'block';
}

// Start the alarm
function startAlarm() {
  // Play the sound
  alarmSound.play();
  // Flash the screen
  document.body.classList.add('alarm');
  // Set the interval to keep flashing the screen
  alarmInterval = setInterval(() => {
    document.body.classList.toggle('alarm');
  }, 500);
}

// Stop the alarm
function stopAlarm() {
  // Stop the sound
  alarmSound.pause();
  alarmSound.currentTime = 0;
  // Stop flashing the screen
  clearInterval(alarmInterval);
  document.body.classList.remove('alarm');
  // Update the UI
  alarmTimeInput.disabled = false;
  stopButton.style.display = 'none';
}

