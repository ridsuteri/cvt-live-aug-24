import React, { useState } from "react";

const AddReview = () => {
  
  return (
    <div className="card">
      <div className="card-header">
        <h5>Add a Review</h5>
      </div>
      <div className="card-body">
        <form>
          {/* Review Text */}
          <div className="mb-3">
            <label htmlFor="review" className="form-label">
              Your Review
            </label>
            <textarea
              className="form-control"
              id="review"
              rows="4"
              onChange={(e) => {}}
              placeholder="Write your review here..."
              required
            ></textarea>
          </div>

          {/* Rating Input */}
          <div className="mb-3">
            <label htmlFor="rating" className="form-label">
              Rating (1 to 5)
            </label>
            <input
              type="number"
              className="form-control"
              id="rating"
              min="1"
              max="5"
              onChange={(e) => {}}
              placeholder="Enter a rating"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
