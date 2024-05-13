const $hot = document.querySelector('.hot-button');

const $clicked = document.querySelector('.click-count');

if (!$hot) throw new Error('The $hot query failed');

let click = 0;

function hotClick(): void {
  click++;
  if (!$hot || !$clicked) {
    throw new Error('The $hot or $clicked query failed');
  }

  $clicked.textContent = `Clicked ${click}`;

  let temp;

  if (click < 4) {
    temp = 'cold';
  } else if (click < 7) {
    temp = 'cool';
  } else if (click < 10) {
    temp = 'tepid';
  } else if (click < 13) {
    temp = 'warm';
  } else if (click < 16) {
    temp = 'hot';
  } else {
    temp = 'nuclear';
  }
  $hot.className = `hot-button ${temp}`;
}

$hot.addEventListener('click', hotClick);
