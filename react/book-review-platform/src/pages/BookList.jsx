import React from "react";
import TopNavbar from "../components/TopNavbar";
import BookCard from "../components/BookCard";
import bookList from "../data/bookList.json";
const BookList = () => {
  return (
    <div>
      <TopNavbar />
      <hr />
      <h1>BookList</h1>
      <div className="input-group mb-4">
        <input
          className="input-group-text ms-auto"
          placeholder="Search books"
          id="inputGroupSelect04"
        />
        <button className="btn btn-outline-secondary" type="button">
          Button
        </button>
      </div>
      <div className="row ">
        {bookList.map((book, index) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
