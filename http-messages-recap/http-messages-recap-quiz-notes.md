# http-messages-recap-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a client?

client is a service requester, does not share any of its resources. initiates communication session with server

- What is a server?

provides a function or service to clients, shares its resources when client requests it

- Which HTTP method does a browser issue to a web server when you visit a URL?

get

- What is on the first line of an HTTP **request** message?

HTTP method (GET POST HEAD etc), HTTP request target, and HTTP (defines structure of remaining message)

- What is on the first line of an HTTP **response** message?

URL/ or absolute path of protocol, port, and domain; a status code (indicates success or failure); and a status text(textual description of status code)

- What are HTTP headers?

let the client and server pass additional information with an HTTP request or response. http header consists of its case-insensitive name followed by colon, then value.

- Is a body required for a valid HTTP message?

No, not all requests/responses require a body

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
