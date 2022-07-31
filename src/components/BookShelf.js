import PropTypes from "prop-types";
import Book from "./Book";

const BookShelf = ({books, shelves, updateShelf}) => {
    return (
      <div className="bookshelf">
        { shelves.map((s) => (
          <div key={ s.id }>
            <h2 className="bookshelf-title">{ s.shelfDisplayName }</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                { books
                .filter((f) => f.shelf === s.shelfName)
                .map((book) => (
                  <li key={ book.id }>
                    <Book book={book} shelfValue={book.shelf} updateShelf={updateShelf} />
                  </li>
                )) }
              </ol>
            </div>
          </div>
        )) }
      </div>
    );
    }

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
};

export default BookShelf;