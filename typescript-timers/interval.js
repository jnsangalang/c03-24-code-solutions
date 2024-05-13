'use strict';
const $countdownDisplay = document.querySelector('.countdown-display');
if (!$countdownDisplay) throw new Error('The $countdownDisplay query failed');
let counter = 4;
const earthCountdown = setInterval(function () {
  if (!$countdownDisplay) throw new Error('The $countdownDisplay query failed');
  $countdownDisplay.textContent = counter.toString();
  counter--;
  if (counter === -1) {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(earthCountdown);
  }
}, 1000);
