# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?

they are a type of function that allows a code base to make use of external functionality, data store. Used to add state functionality to individual components, so state can persist between component calls.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

they have to declared at the top level of React function
must start with keyword Use, followed by uppercase letter
no conditionals
only in react component or another hook
don't call hooks in loops,conditions,nested functions, or try/catch/finally blocks

- What is the purpose of state in React?

holds data between different renders/function calls

- Why can't we just maintain state in a local variable?

between functions, local variables do not sync, when a function is called the variable is reset to its original state

- What two actions happen when you call a `state setter` function?

react will re render, and update the cache

- When does the local `state variable` get updated with the new value?

after the render

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
