'use strict';
const $click = document.querySelector('.click-button');
if (!$click) throw new Error('The $click query failed');
function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
$click.addEventListener('click', handleClick);
const $hover = document.querySelector('.hover-button');
if (!$hover) throw new Error('The $hover query failed');
function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
$hover.addEventListener('mouseover', handleMouseover);
const $dbl = document.querySelector('.double-click-button');
if (!$dbl) throw new Error('The $dbl query failed');
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
$dbl.addEventListener('dblclick', handleDoubleClick);
