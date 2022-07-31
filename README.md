# MyReads: A Book Tracking App

## Project Overview
In the MyReads project (React App), I have created a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library.

## Installation And Launch Instructions
1. run `npm i` to install dependencies.
2. run `npm start` to launch the app.
3. If you want to deploy the app, run `npm run build`.

## Project Folder
```
├── README.md - This file.
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.css
    ├── App.js
    ├── BooksAPI.js
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    │   components
    │   ├── Book.js
    │   ├── BookShelf.js
    │   └── SearchBooks.js
    │   
    ├── index.css
    └── index.js
```

## Technologies
HTML, CSS, JavaScript and React (JavaScript library).

## Considerations
- The focus of this project is on writing functional React code.
- good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Author
Mahmoud Ahmed