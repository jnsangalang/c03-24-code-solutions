# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

&& is used when two expressions/values have to be true/truthy to execute an action

|| just requires one of the expressions or value to be truthy/true to execute and action

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

it allows expressions/values to be read left to right, whether if they are truthy or falsy, if truthy for ||, does not read the following; if truthy for && goes on to next to see of truthy

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

it checks to see if left-most expression is null, if its null it goes through and executes expression to the right of ??.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

it presents an condition, then expresstion to execute if condition to follow if it is truthy : expression to execute if condition is falsy.

- What is the `?.` (optional chaining) operator? When would you use it?

it checks an objects properties, if the object's property that's being accessed is undefined or null, the expression evaluates to undefined instead of an error

- What is `...` (spread) syntax? How do you use it with arrays and objects?

it's used when all elements from an object or array need to be included in an new array or object, or should be applied one by one in a function call's argument list

- What data types can be spread into an array? Into an object?
  only iterable values can be spread in arrays

all primitives can be spread into objects

- How does spread syntax differ from rest syntax?

spread syntax expands an array into its elements, rest syntax collects multiple elements and condenses them into a single element

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
