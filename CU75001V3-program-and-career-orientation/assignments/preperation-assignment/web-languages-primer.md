# Web Languages Primer

If you're visiting a specific country, like the Netherlands;
you are expected to know the language of that country, like Dutch.
Similarly, if you're visiting the web, you are expected to know the languages of the web.

The part of the internet used by the general public is called the **World Wide Web (WWW)**.
It allows users to access information and communicate with each other using web pages.
In other words: the web allows user to access content.

The information needs to be hosted somewhere, this is done on a server.
Secondly, the information needs to be displayed, this is done on a client.
A client can be anything, like a web browser, a mobile app, or a desktop application.
A highly used metaphore is a restaurant: the server is the kitchen, the client is the customer.
This is called: **the client-server architecture**.

The web knows three main languages. HTML, CSS, and JavaScript.
**HyperText Markup Language (HTML)** is used to create the structure of a web page.
**Cascading Style Sheets (CSS)** is used to style the web page.
**JavaScript** is used to make the web page interactive.

## HyperText Markup Language (HTML)

HTML is used to create the structure of a web page.
It defines the content, which style to use, and how to interact with the content.
The content is wrapped between tags, like `<p>` for a paragraph, or `<h1>` for a header.
Tags are used to define the structure of the content, the appearance and the behavior.
An element is a tag with its content and a closing tag, like `<p>Hello World</p>`.

Elements have attributes, like `id` or `class`, to change the behavior.
So `<p id="hello">Hello World</p>` has an id attribute with the value `hello`.
Tags can also be self-closing like: `<img src="image.jpg" alt="Image" />`,
and nested like: `<p>Hello <strong>World</strong></p>`.

An image element has two attributes: `src`, `alt`.
The `src` attribute is the location of the image, the `alt` attribute is the alternative text.
The alternative text is shown when the image is not loaded, or a screen reader is used.
The location can be a local file, or a URL to an image on the web.
For example: `<img src="image.jpg" alt="Image" />`
or `<img src="https://example.com/image.jpg" alt="Image" />`.

Anchor elements are used to create links to other pages or sites.
The `href` attribute is the location of the page or site.
The text between the opening and closing tag is the text of the link.
For example: `<a href="https://example.com">Clickable text</a>`.
The link can also be a local file, like: `<a href="page.html">Clickable text</a>`.
It is possible to open the link in a new tab by adding the `target="_blank"` attribute.
Which one could read as: The target of this link is a blank page.
A placeholder link can be made with: `<a href="#">Clickable text</a>`.
One could use images as links by wrapping an image element in an anchor element.

A bullet list, or unordered list, is created with the `<ul>` tag.
Each item in the list is created with the `<li>` tag.
A numbered list, or ordered list, is created by replacing `ul` with `ol` tag.

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

Components are nice, but there needs to be a general structure to the page.
The first step is to define the document type with `<!DOCTYPE html>`.
After that, the document is wrapped in an `html` tag.

```html
<!DOCTYPE html>

<html>
    <h1>Header</h1>
    <p>Paragraph</p>
</html>
```

There is more to it than this though, there are two more tags that are required.
The `head` tag is used to define information about the document.
This is generally not shown on the page, but used by the browser and search engines.
The `body` tag is used to define the content of the document.

```html
<!DOCTYPE html>

<html>
    <head>
        <title>Document title</title>
    </head>

    <body>
        <h1>Header</h1>
        <p>Paragraph</p>
    </body>
</html>
```

Just like every other language, indenting is important.
This makes the structure of the document more clear.
The key is to be consistent, and use the same amount of spaces or tabs.
How many spaces or tabs is up to you.

## Cascading Style Sheets (CSS)

CSS is used to style the web page. This includes the layout, colors, and fonts.
Things one might change include borders, padding and margins.
Padding is the space between the content and the border.
Margins are the space between the border and the surrounding elements.

A CSS rule consists of a selector and a declaration block.
Within the declaration block are declarations, which consists of a property/value pairs.
The block is wrapped in curly braces, and the property/value pairs are separated by a semicolon.

There are three ways to include CSS in a document.
In-line styles are added to an element with the `style` attribute.
In-document styles are added to the `head` tag with the `style` tag.
Separate stylesheets are added to the `head` tag with the `link` tag.
The latter is the recommended way to include CSS, since it seperates concerns (SoC).
It also allows reusing the same styles on multiple pages.
