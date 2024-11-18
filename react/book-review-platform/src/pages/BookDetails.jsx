import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import bookList from "../data/bookList.json";
import AddReview from "../components/AddReview";
import ReviewCard from "../components/ReviewCard";
import Footer from "../components/Footer";

const BookDetails = () => {
  const { bookId } = useParams();
  const currentBook = bookList.find((book) => book.id == bookId); 
  const [reviews, setReviews] = useState(currentBook.reviews || []); 

  if (!currentBook) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <TopNavbar />
      <div className="container mt-4">
        <h1 className="mb-4">Book Details</h1>
        <hr />

        {/* Book Information Section */}
        <div className="card mb-4">
          <div className="card-body">
            <h3>{currentBook.bookname}</h3>
            <h5 className="text-muted">By {currentBook.authorname}</h5>
            <p>
              <strong>Genre:</strong> {currentBook.genre || "N/A"}
            </p>
            <p>
              <strong>Published:</strong> {currentBook.published || "Unknown"}
            </p>
          </div>
        </div>

        {/* Existing Reviews Section */}
        <ReviewCard reviews={reviews}/>

        {/* Add New Review Section */}
        <AddReview />
        <Footer/>
      </div>
    </div>
  );
};

export default BookDetails;
