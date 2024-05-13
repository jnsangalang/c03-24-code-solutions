# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:
  - What does `Array.forEach` do?

executes a provided function once for each array element

- What should the callback function do?

use each element in the array as an argument, and returns values undefined

- What is `Array.forEach` useful for?

when you want to do something to each element of an array, and it's an array you don't want to change

- `Array.map`:
  - What does `Array.map` do?

creates a new array populated with results of calling a provided function on every element in the calling array

- What should the callback function return?

a new array and elements of arrays are the result of callback function

- What is `Array.map` useful for?

to perform function on array to return a new array with new elements based on what function the original elements are passed through

- `Array.find`:
  - What does `Array.find` do?

it returns the first element in the provided array that satisfies the testing function.

- What should the callback function return?

returns a truthy value

- What is `Array.find` useful for?

useful for when looking for a specific element based on a condition.

- `Array.filter`:
  - What does `Array.filter` do?

creates a shallow copy(if original or copy is altered, it can alter the other) of a portion of given array, filtered down to the elements that meet the criteria implemented by the function

- What should the callback function return?

returns truthy value, for the elements kept in the array, and falsy otherwise

- What is `Array.filter` useful for?

useful to filter through an array, when you're looking for elements that meet a certain criteria

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
