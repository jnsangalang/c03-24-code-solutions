'use strict';
/* exported ransomCase */
function ransomCase(string) {
  const newstr = string.toLowerCase().split('');
  for (let i = 1; i < string.length; i += 2) {
    newstr[i] = newstr[i].toUpperCase();
  }
  return newstr.join('');
}
console.log(ransomCase('WaldO'));
