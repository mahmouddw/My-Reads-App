import PropTypes from "prop-types";

const Book = ({book, shelfValue, updateShelf}) => {
    return (
        <div className="book">
            <div className="book-top">
            <div
                className="book-cover"
                style={{
                width: 128,
                height: 188,
                backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ""})`,
                }}
            ></div>
            <div className="book-shelf-changer">
                <select onChange={(e) => updateShelf(book, e)} value={shelfValue}>
                {shelfValue === "none" ? (
                <option disabled>
                Add to...
                </option>
                ) : (
                <option value="none" disabled>
                Move to...
                </option>
                )}
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors ? book.authors : ""}</div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired,
  };

export default Book;