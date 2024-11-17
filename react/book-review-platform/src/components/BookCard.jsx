import React from "react";
import {Link} from 'react-router-dom'
const BookCard = ({book}) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card text-center">
        <div className="card-header">{book.authorname}</div>
        <div className="card-body">
          <h5 className="card-title">{book.bookname}</h5>
          <Link to={`/bookdetails/${book.id}`}>Book Details</Link>
        </div>
        <div className="card-footer text-body-secondary">{book.ratings}</div>
    </div>
    </div>
  );
};

export default BookCard;
