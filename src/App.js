import "./App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./components/BookShelf";
import SearchBooks from "./components/SearchBooks";

function App() {

const [books, setBooks] = useState([]);

useEffect(() => {
  const getBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res)
  }

  getBooks()
}, [])

const handleChange = (book, e) => {
  const shelf = e.target.value;

  const isExist = books.filter((f) => f.id === book.id);
  
  if (isExist.length > 0)
  {
    setBooks(books.map(b => {
      if (b.id === book.id) {
        b.shelf = shelf;
      }
      return b;
    }));
  }
  else {
    book.shelf = shelf;
    setBooks([...books, book]);
  }

  const updateBooks = async () => {
    const res = await BooksAPI.update(book, shelf);
    return res;
  };
  updateBooks()
}

const shelves = [
{ id: "1", shelfName: "currentlyReading", shelfDisplayName: "Currently Reading" },
{ id: "2", shelfName: "wantToRead", shelfDisplayName: "Want To Read" },
{ id: "3", shelfName: "read", shelfDisplayName: "Read" }
];

  return (
    <Routes>
      <Route exact path="/" element={
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf books={books} shelves={shelves} updateShelf={handleChange} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
      } />
      <Route path="/search" element={
        <SearchBooks books={books} updateShelf={handleChange} />
      } />
    </Routes>
  );
}

export default App;