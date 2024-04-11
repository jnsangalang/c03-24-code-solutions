'use strict';
const $phrase = document.querySelector('.phrase');
const $restart = document.querySelector('.restart');
const $input = document.querySelector('.input');
const $spanEl = document.querySelectorAll('span');
if (!$phrase) throw new Error('The $phrase query failed');
if (!$restart) throw new Error('The $restart query failed');
if (!$input) throw new Error('The $input query failed');
if (!$spanEl) throw new Error('The $spanEl query failed');
console.log('span:', $spanEl);
let currentChar = 0;
document.addEventListener('keydown', (event) => {
  if (event.key === $spanEl[currentChar].textContent) {
    $spanEl[currentChar].classList.add('correct');
    currentChar++;
  } else {
    $spanEl[currentChar].classList.add('incorrect');
  }
});
