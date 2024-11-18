import React, { useState } from "react";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";

const Dashboard = () => {
  const [currentPageUsers, setCurrentPageUsers] = useState(1);
  const [currentPageReviews, setCurrentPageReviews] = useState(1);

  // Dummy data
  const users = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
  }));

  const reviews = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    bookTitle: `Book Title ${i + 1}`,
    reviewer: `User ${i + 1}`,
    review: `This is a sample review for Book ${i + 1}.`,
  }));

  const itemsPerPage = 5;

  // Pagination handlers
  const paginate = (items, page) => {
    const startIndex = (page - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  };

  const handlePageChange = (type, page) => {
    if (type === "users") setCurrentPageUsers(page);
    else if (type === "reviews") setCurrentPageReviews(page);
  };

  // Paginated data
  const paginatedUsers = paginate(users, currentPageUsers);
  const paginatedReviews = paginate(reviews, currentPageReviews);

  return (
    <div>
      <TopNavbar />
      <div className="container mt-4">
        <h1 className="mb-4">Dashboard</h1>

        <div className="row">
          {/* Users Section */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header">
                <h5>Users</h5>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedUsers.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card-footer">
                <nav>
                  <ul className="pagination justify-content-center mb-0">
                    {Array.from(
                      { length: Math.ceil(users.length / itemsPerPage) },
                      (_, i) => (
                        <li
                          className={`page-item ${
                            i + 1 === currentPageUsers ? "active" : ""
                          }`}
                          key={i}
                        >
                          <button
                            className="page-link"
                            onClick={() => handlePageChange("users", i + 1)}
                          >
                            {i + 1}
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          {/* Book Reviews Section */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header">
                <h5>Book Reviews</h5>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Book Title</th>
                      <th>Reviewer</th>
                      <th>Review</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedReviews.map((review) => (
                      <tr key={review.id}>
                        <td>{review.id}</td>
                        <td>{review.bookTitle}</td>
                        <td>{review.reviewer}</td>
                        <td>{review.review}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card-footer">
                <nav>
                  <ul className="pagination justify-content-center mb-0">
                    {Array.from(
                      { length: Math.ceil(reviews.length / itemsPerPage) },
                      (_, i) => (
                        <li
                          className={`page-item ${
                            i + 1 === currentPageReviews ? "active" : ""
                          }`}
                          key={i}
                        >
                          <button
                            className="page-link"
                            onClick={() => handlePageChange("reviews", i + 1)}
                          >
                            {i + 1}
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;
