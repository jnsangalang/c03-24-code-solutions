# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?

when it is created and first inserted into the DOM

- What is a React Effect?

a way to synchronize components with an external system.

- When should you use an Effect and when should you not use an Effect?

if the component is using a value that could change

- When do Effects run?

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
