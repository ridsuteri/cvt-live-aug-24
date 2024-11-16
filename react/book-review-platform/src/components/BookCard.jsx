import React from "react";
import {Link} from 'react-router-dom'
const BookCard = ({book}) => {
  return (
    <div className="row col-md-4">
      <div className="card text-center">
        <div class="card-header">{book.authorname}</div>
        <div class="card-body">
          <h5 class="card-title">{book.bookname}</h5>
          <Link to={`/bookdetails/${book.id}`}>Book Details</Link>
        </div>
        <div class="card-footer text-body-secondary">{book.ratings}</div>
    </div>
    </div>
  );
};

export default BookCard;
