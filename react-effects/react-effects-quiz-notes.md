# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?

when it is created/rendered for the first time and inserted into the DOM

- What is a React Effect?

makes async calls, a way to synchronize components with an external system (things not in React)

- When should you use an Effect and when should you not use an Effect?

if the component is using a value that could change; async functions,

- When do Effects run?
  always runs after the first render

run anytime when dependency array changed

by default, it Effect will run after every time the component renders. delays code from running until render is reflected

- What function is used to declare an Effect?

useEffect()

- What are Effect dependencies and how do you declare them?

they are things that will trigger useEffect to run if there is a change to their state, they are the end of useEffect code block, within brackets []

- Why would you want to clean up from an Effect?

avoid memory leaks

- How do you clean up from an Effect?

return statement

- When does the cleanup function run?

when a component unmounts it runs the clean up function, and before each re render

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
