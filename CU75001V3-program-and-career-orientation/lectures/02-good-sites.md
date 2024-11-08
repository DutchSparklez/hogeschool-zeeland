# Lecture 2: Good Sites

The second lecture covers the essence of code style
and styling though Cascading Style Sheets.
There is a little coverage on usability.

## Code for the Maintainer

Writing code is a big part of the job we're learning.
However, the coder is generally not the one that end up using it.
Often, maintaining code or programs is done by others.
These maintainers should be treathed with respect.
Keep everything nice and organized.

Naming things is the hardest part of job.
In terms of files, one convention one might follow is:
no capitals, no special characters, a file extension and meaning.
Like: `profile.html`.

## Web functionality

The `index.html` file is a reserved file for websites.
It acts as the homepage of the website and is loaded first.
When you load `https://google.com/`, the index page is loaded.

Within files, semantic tags and sections are used for SEO.
This is Search Engine Optimization.
Dividing your page using the `<header>`, `<main>`, `<nav>`, `<article>`,
`<footer>` helps browsers and search engines to understand the content.

Usability is important. It is also hard.
How usable something is depends on who is using it.
![The website from the Yale School of Art](https://www.art.yale.edu/),
is an example of usability being determined by the end user.
This website is amde by art students for art students.
Therefore, it is styled and used a certain way.

## Styling

Cascading Style Sheets (CSS) is a technology used to style webpages.
A selector select elements on the page based on a given criteria.
The decleration contains the rules that apply to those elements.
The rules are made up of key-value pairs. A property is set to a value.
A rule end with a semicolon.

```css
/*
    SELECTOR:     h3
    DECLERATION:  { color: yellow; }
    RULE:         color: yellow;
    PROPERTY:     color
    VALUE:        yellow
*/

h3 {
    color: yellow;
}
```

Selectors can get elements by their tag name, like `h1` or `body`.
They can be css-classes like `.example` and `.nav-link`.
They can be the ID of an element like `#grade-field`.
And they can be more complicated by using concepts like *combinators*,
*pseudo-classes*, *pseudo-elements* and *attributes*.

There are three ways to include styling in your website.
Inline styling uses the style-attribute to style an element.
Internal styling puts all the style in a single place in the HTML-file.
External styling puts all the style in a seperate CSS file.
Using a different files make sure you don't have to repeat code.
This is confirm the DRY-principle (Don't Repeat Yourself).