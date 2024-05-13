# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

reference to the element where the event occurs, where delegation occurs

- Why is it possible to listen for events on one element that actually happen its descendent elements?

event bubbling, if it happens to child, the parent picks up on it

- What DOM element property tells you what type of element it is?

event.target.tagName

- What does the `element.closest()` method take as its argument and what does it return?

it takes a string with a selector, returns closest ancestor element that matches that string

- How can you remove an element from the DOM?

element.remove()

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?

give a condition event.target.tagname

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
