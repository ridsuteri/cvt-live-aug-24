import React from "react";

const ReviewCard = ({ reviews }) => {
  return (
    <div className="card mb-4">
      <div className="card-header">
        <h5>Reviews</h5>
      </div>
      <div className="card-body">
        {reviews.length > 0 ? (
          <ul className="list-group">
            {reviews.map((review) => (
              <li key={review.id} className="list-group-item">
                  <p>{review.content}</p>
                  <p>
                    <strong>Rating:</strong> {review.rating}/5
                  </p>
                  <small className="text-muted">- {review.reviewer}</small>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">No reviews added yet.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
