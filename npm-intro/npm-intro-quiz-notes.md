# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?

NPM is a node package manager, used to hold packages which contain modules , anyone can upload their packages or use others packages. NPM is a website, registry, CLI

- What is a package?

a package is a set of modules and code that solves one sub-problem and does it well. has a package.json, a directory, and one or more files

- What are some other popular package managers?

yarn, pnpm

- How can you create a `package.json` with `npm`?

npm init command will run through the creation of package.json by prompting you to answer questions in CLI

- What is a dependency and how do you add one to a package?

dependency is a library of tools and code that you can import into your project by npm install package name --save prod

- What happens when you add a dependency to a package with `npm`?

when a dependency is added to a package with npm, the files for that dependency are downloaded and placed in directory call node_modules. Then the package.json is updated under the packages key, where an object holds modules.

- What is a devDependency and how do you add one to a package?

modules only required during development; added with use of npm install --save prod dev flag

- How do you define and run `npm` scripts? Why are these useful?
  they are aliases for command line task you want to run over and over. makes it easy to automate repetitive tasks and simplify complex workflows.

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
