# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

to debug things, ensure the output of certain code is what we expect/want.

- What is the purpose of events and event handling?

they are fired to notify code of changes that may affect code execution.

- Are all possible parameters required to use a JavaScript method or function?

- What method of element objects lets you set up a function to be called when a specific type of event occurs?

addEventListener()

- What is a callback function?

a function passed into another function as an argument, which is invoked inside the outer function to complete action or a routine

- What object is passed into an event listener callback when the event fires?

an event object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

it's a property of an event object that refers to the element that triggered the event.

use event.target.tagName = variable

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```

the first one passes the function definition as an argument.
the second one calls the function being passed as an argument.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
