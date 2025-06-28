// 1) Counters logs 1 to 5 every second then stops
let count = 1;
const countInterval = setInterval(() => {
  console.log(count);
  if (count === 5) {
    clearInterval(countInterval);
  }
  count++;
}, 1000);

// 2) Log message every 2 seconds, stop after 10 seconds
const messageInterval = setInterval(() => {
  console.log("This message appears every 2 seconds");
}, 2000);
setTimeout(() => {
  clearInterval(messageInterval);
  console.log("Stopped logging message.");
}, 10000);

// 3) Change background color every 3 seconds, stop after 5 changes
const colors = ["red", "green", "blue", "yellow", "purple"];
let colorIndex = 0;
const bgInterval = setInterval(() => {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex++;
  if (colorIndex >= 5) {
    clearInterval(bgInterval);
  }
}, 3000);

// 4) Display current time every second, stop after 15 seconds
let timeCount = 0;
const timeInterval = setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleTimeString());
  timeCount++;
  if (timeCount >= 15) {
    clearInterval(timeInterval);
  }
}, 1000);

// 5) Simple timer counting up to 10 seconds
let timer = 0;
const timerInterval = setInterval(() => {
  timer++;
  console.log(`Timer: ${timer} seconds`);
  if (timer >= 10) {
    clearInterval(timerInterval);
    console.log("Timer stopped.");
  }
}, 1000);
