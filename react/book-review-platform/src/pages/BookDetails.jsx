import React from "react";
import { useParams } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import bookList from '../data/bookList.json'
const BookDetails = () => {
  const { bookId } = useParams();
  const currentBook = bookList.filter((book)=>book.id == bookId)
  return (
    <div>
      <TopNavbar />
      <hr />
      BookDetails for bookId: {bookId}
      <div>
        <h3>{currentBook[0].bookname}</h3>
        <h5>{currentBook[0].authorname}</h5>
      </div>
    </div>
  );
};

export default BookDetails;
