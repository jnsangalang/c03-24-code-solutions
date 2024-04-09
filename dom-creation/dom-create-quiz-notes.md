# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?

no, it creates a new element but does not add it to the document. have to append or insert.

- How do you add an element as a child to another element?

using parent.appendChild()

- What do you pass as the arguments to the `element.setAttribute()` method?

it takes 2 parameters, an attribute and its value

- What steps do you need to take in order to insert a new element into the page?

use createElement() then append() to add it tot the list of elements you want to include it in

- What is the `textContent` property of an element object for?

it sets or returns text content of specified node, and all its descendants

- Name two ways to set the `class` attribute of a DOM element.

className()
setAttribute()
getElementById.ClassList.add()/remove()

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?

easier to reuse the function later on when there is more stuff added to document. easier to test the function

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
