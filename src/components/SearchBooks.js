import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Book from "./Book"
import * as BooksAPI from "../BooksAPI";

const SearchBooks = ({books, updateShelf}) => {

  const[query, setQuery] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);

  const updateQuery = (q) => {
    setQuery(q.trimLeft());
}

useEffect(() => {
  
    if (query === "") {
      setSearchBooks([])
    } else {

    const searchCall = async (query) => {
    await BooksAPI.search(query)
    .then(data => {
        if (data.error) {
          setSearchBooks([]);
        } else {
          setSearchBooks(data);
        }
      })
    }

    searchCall(query);
  }

}, [query])

const findShelf = (book) => {
  for (let i=0; i<books.length; i++) {
    if (books[i].id === book.id) {
      return books[i].shelf;
    }
  }
  return "none";
}

  return (
    <div className="search-books">
          <div className="search-books-bar">
            <Link to="/"
              className="close-search"
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query} onChange={(event) => updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
            {
                searchBooks.map((book) => (
              <li key={book.id}>
                <Book book={book} shelfValue={findShelf(book)} updateShelf={updateShelf} />
              </li>
              ))
            }
            </ol>
          </div>
    </div>
  )
}

SearchBooks.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default SearchBooks;