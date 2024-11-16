import React from "react";
import TopNavbar from "../components/TopNavbar";
import BookCard from "../components/BookCard";
import bookList from "../data/bookList.json";
const BookList = () => {
  return (
    <div>
      <TopNavbar />
      <hr />
      {bookList.map((book, index) => (
        <div className="container">
            <BookCard key={book.id} book={book} />
          </div>
      ))}
    </div>
  );
};

export default BookList;
