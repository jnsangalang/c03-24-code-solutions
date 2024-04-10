const $light = document.querySelector('.light');

if (!$light) throw new Error('The $light query failed');

const $container = document.querySelector('.container');

if (!$container) throw new Error('The $container query failed');

let count = 0;

$light.addEventListener('click', () => {
  count++;
  console.log('count:', count);
  if (count % 2 === 0) {
    $light.classList.remove('light');
    $light.classList.add('light-on');
    $container.classList.add('container-on');
    $container.classList.remove('container');
  }
  if (count % 2 !== 0) {
    $light.classList.remove('light-on');
    $light.classList.add('light');
    $container.classList.add('container');
    $container.classList.remove('container-on');
  }
});
