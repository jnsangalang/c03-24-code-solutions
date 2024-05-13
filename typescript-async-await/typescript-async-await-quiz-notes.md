# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?

async is a type of function that returns a Promise; utilizes the await keyword to pause its execution and waits for a Promise to resolve before continuing.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?

async uses try/catch blocks instead of .then and .catch. Easier to read async/await codes

<!-- async functions get paused until a Promise is settled

with then(), Javascript will continue to execute the rest of the function, and JS won't execute then.() callback until promise settles. -->

- When do you use `async`?

when you want to create a function that returns a Promise

reduce the need for method chaining and nested callbacks. allows for improved readability of code.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)

in an async function, right before a function you want to pause until a Promise is resolved. does not return a promise if in a synchronous function

- How do you handle errors with `await`?

using try-catch blocks

- What do `try`, `catch` and `throw` do? When do you use them?

try is used to contain statements where exceptions can occur.
catch block contains statements that specify what to do if an exception is throw in the try block

throw an exception, new Error.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?

Promise will continue to run asynchronously, but no pause.

it'll return an unhandled Promise error; catch block will not be executed.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?

async/await, easier to write out.

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
