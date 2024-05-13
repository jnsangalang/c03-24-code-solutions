const $message = document.querySelector('.message');
if (!$message) throw new Error('The $message query failed');

function changeTitle(): void {
  if (!$message) throw new Error('The $title query failed');

  $message.textContent = 'Hello There';
}

setTimeout(changeTitle, 2000);
