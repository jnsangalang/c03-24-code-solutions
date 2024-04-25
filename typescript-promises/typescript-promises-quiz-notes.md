# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises?

a data structure used in programming to manage and process events in an asynchronous, non-blocking way

- What are the three states a Promise can be in?

pending-initial state
fulfilled-with resolved issue, operation completed successfully
rejected-with a reason of rejection, operation failed

- How do you handle the fulfillment of a Promise?

a callback function, if result returned is successful, will call one of two parameters, this case the resolve(); then itll return a value showing successful execution

.then() schedules function to be called when promise fulfilled

- How do you handle the rejection of a Promise?

a callback function, if result returned failed, will call one of two parameters, this case the rejection(); then itll return a value showing failed execution

.catch() schedules function to be called when promise rejected

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
