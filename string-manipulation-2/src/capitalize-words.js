'use strict';
/* exported capitalizeWords */
function capitalizeWords(string) {
  const separated = string.toLowerCase().split(' ');
  for (let i = 0; i < separated.length; i++) {
    separated[i] =
      separated[i].charAt(0).toUpperCase() + separated[i].substring(1);
  }
  return separated.join(' ');
}
console.log(capitalizeWords('Add string manipulation practice.'));
