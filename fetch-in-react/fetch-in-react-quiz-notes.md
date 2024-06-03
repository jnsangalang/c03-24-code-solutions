# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What browser function can be used to make HTTP requests to a server in React?

fetch(URL name)

- What two things need to be done to properly handle HTTP request errors? Why?

try catch block, in order to catch the errors when the try block fails.
to ensure the response is ok, if !response.ok then it will cut the code from there

- How can `useEffect` be used to load data for a component?

running an async function, that fetches from a url inside useEffect

- How do you use `useEffect` to load component data just once when the component mounts?

put an empty dependency array

- How do you use `useEffect` to load component data every time the data key changes?

put the changing data variable name, within the dependency array

- In a large-scale production app, what are some better alternatives for loading and managing backend data?

React Query, Vercel SWR

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
