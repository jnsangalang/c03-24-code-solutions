function handleFocus(event: Event): void {
  console.log('focus event was fired');

  const eventTarget = event.target as HTMLInputElement;
  console.log('Event target name:', eventTarget.name);
}

function handleBlur(event: Event): void {
  console.log('Blur event was fired');
  const eventTarget = event.target as HTMLInputElement;
  console.log('Event target name:', eventTarget.name);
}

function handleInput(event: Event): void {
  const eventTarget = event.target as HTMLInputElement;
  console.log('Event target name:', eventTarget.name);
  console.log('Event target value:', eventTarget.value);
}

const $userName = document.querySelector('#user-name');
const $userEmail = document.querySelector('#user-email');
const $userMessage = document.querySelector('#user-message');

if (!$userName) throw new Error('The $userName query failed');
if (!$userEmail) throw new Error('The $userEmail query failed');
if (!$userMessage) throw new Error('The $userMessage query failed');

$userName.addEventListener('focus', handleFocus);
$userEmail.addEventListener('focus', handleFocus);
$userMessage.addEventListener('focus', handleFocus);

$userName.addEventListener('blur', handleBlur);
$userEmail.addEventListener('blur', handleBlur);
$userMessage.addEventListener('blur', handleBlur);

$userName.addEventListener('input', handleInput);
$userEmail.addEventListener('input', handleInput);
$userMessage.addEventListener('input', handleInput);
