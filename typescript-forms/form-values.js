'use strict';
const $contactForm = document.querySelector('#contact-form');
if (!$contactForm) throw new Error('The $contactForm query failed');
$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements;
  const obj = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('Object:', obj);
  $contactForm.reset();
});
