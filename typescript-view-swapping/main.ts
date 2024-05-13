const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

if (!$tabContainer) throw new Error('The $tabContainer query failed');
if (!$tab) throw new Error('The $tab query failed');
if (!$view) throw new Error('The $view query failed');

$tabContainer.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLDivElement;
  if ($eventTarget.matches('.tab')) {
    for (let i = 0; i < $tab.length; i++) {
      if ($eventTarget === $tab[i]) {
        $tab[i].classList.add('active');
      } else {
        $tab[i].classList.remove('active');
      }
    }
  }
  if ($eventTarget.matches('.tab')) {
    const dataView = $eventTarget.getAttribute('data-view');

    for (let i = 0; i < $view.length; i++) {
      if (dataView !== $view[i].getAttribute('data-view')) {
        $view[i].classList.add('hidden');
      } else {
        $view[i].classList.add('view');
      }
    }
  }
});
