const $openModal = document.querySelector('.open-modal');
const $dismissModal = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');

if (!$openModal) throw new Error('The $openModal query failed');
if (!$dismissModal) throw new Error('The $dismissModal query failed');
if (!$dialog) throw new Error('The $dialog query failed');

$openModal.addEventListener('click', () => {
  $dialog.showModal();
});

$dismissModal.addEventListener('click', () => {
  $dialog.close();
});
