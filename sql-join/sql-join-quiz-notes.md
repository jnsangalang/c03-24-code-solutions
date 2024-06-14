# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?

foreign key is attribute data that is shared by more than one table.

- How do you join two SQL tables? (Provide at least two syntaxes.)
  using join keyword, followed by using keyword (attribute name)

select \*
from "products"
join "suppliers"
on "suppliers"."id" = "products"."supplierId"

- How do you temporarily rename columns or tables in a SQL statement?

with use of "as" keyword

- How do you create a one-to-many relationship between two tables?

when key of the child table is placed as a foreign key into another table.

- How do you create a many-to-many relationship between two tables?

create a new table to connect them

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
