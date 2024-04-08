# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

helps with debugging, and ensuring the output is what you are expecting out of the code

- What is a "model"?

a system of equations including an objective function and a set of constraints

- Which "document" is being referred to in the phrase Document Object Model?

the structure of the page

- What is the word "object" referring to in the phrase Document Object Model?

objects are things we use to manipulate the page

- What is a DOM Tree?

the hierarchal structure of an html document

- Give two examples of `document` methods that retrieve a single element from the DOM.

getElementById(id)
getElementByClassNamee(className)

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.

querySelectorAll()

- Why might you want to assign the return value of a DOM query to a variable?

it allows ease upon interface when querying the DOM. if return value is stored in a variable, accessing the element again does not need another search

- What `console` method allows you to inspect the properties of a DOM element object?

console.dir(elem)

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?

it can improve webpage's load time, content gets loaded first

- What does `document.querySelector()` take as its argument and what does it return?

the argument is a selector, 'p' '.class'
it returns the first Element within the document that matches the selector

- What does `document.querySelectorAll()` take as its argument and what does it return?

the parameter is a selector/
document.querySelectorAll() returns multiple elements, those of which match the selector provided

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
