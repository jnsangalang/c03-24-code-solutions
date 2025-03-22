# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?

they are modules for interfacing with postresQL database. supports callbacks, async, connection pooling

- How do you tell `pg` which database to connect to?

in the connection string, its the last thing in the string, /dataBaseName

- How do you send SQL to PostgreSQL from your Express server?

with async functions

- How do you get the rows return from the SQL query?

the resulting object from the await query, has a row property.

- What must you always remember to put around your asynchronous route handlers? Why?

try block, in case it is unable to perform action

- What is a SQL Injection Attack and how do you avoid it in `pg`?

cyber attack that uses sql code to manipulate db and access info that was not intended to be displayed.
avoid it with using parameters instead of putting straight data into sql queries.

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
