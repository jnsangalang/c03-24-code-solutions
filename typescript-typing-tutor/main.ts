// const $phrase = document.querySelector('.phrase');
// const $restart = document.querySelector('.restart');
// const $input = document.querySelector('.input');
// const $spanEl = document.querySelectorAll('span');

// if (!$phrase) throw new Error('The $phrase query failed');
// if (!$restart) throw new Error('The $restart query failed');
// if (!$input) throw new Error('The $input query failed');
// if (!$spanEl) throw new Error('The $spanEl query failed');

// let currentChar=0;

// $input.addEventListener('keydown', (event:KeyboardEvent) =>{
//   let errorCount = 0;
//     if((event).key === $spanEl[currentChar].textContent){
//       $spanEl[currentChar].classList.add('correct');
//       currentChar++;
//     }
//     else{
//       $spanEl[currentChar].classList.add('incorrect');
//       errorCount++;
//     }
//     if (errorCount === 0) {
//       alert('Done');
//     }
//   })
