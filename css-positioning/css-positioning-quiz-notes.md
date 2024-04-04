# css-positioning-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the **default** value for the `position` property of HTML elements?

static

- How does setting `position: relative` on an element affect document flow?

can overlap over tother elements without interrupting normal document flow

- How does setting `position: relative` on an element affect where it appears on the page?

using top,bottom,right,left allows to change where it shows up on the page

- How does setting `position: absolute` on an element affect document flow?

it removes the element from the normal document flow, and sets itself onto another later separate from everything else

- How does setting `position: absolute` on an element affect where it appears on the page?

it appears above the document flow, in its own layer

- How do you constrain an absolutely positioned element to a containing block?

if no ancestor elements have position property defined, then all ancestor elements will be static, resulting in the absolutely positioned element will be contained in initial containing block

- What are the four box offset properties?

top,bottom,right,left

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
