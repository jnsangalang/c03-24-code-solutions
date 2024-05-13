# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

it is the element that triggered the event

- What is the effect of setting an element to `display: none`?

completely removed from layout, doesn't take up any space on page

- What does the `element.matches()` method take as an argument and what does it return?

takes in an css selector (element name/class) and returns true if the element matches the selector, false if not

- How can you retrieve the value of an element's attribute?

getAttribute() method

- At what steps of the solution would it be helpful to log things to the console?

for functions, expressions, conditionals where we expect a certain outcome, we can log them into console to check if it is accurate

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?

use the a tag to create hyperlinks connected to one another when certain tabs are clicked.

- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?

set a global variable representing the nodelist, and incrementing it within the add event listener while the nodelist at the variable does not equal the current tab element.

could use of

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
