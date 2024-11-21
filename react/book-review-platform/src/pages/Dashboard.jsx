import React, { useEffect, useState, useCallback, useMemo } from "react";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";

const Dashboard = () => {
  let [currentPage, setCurrentPage] = useState(1);
  let [totalPage, setTotalPage] = useState(3);
  let [apiResponse, setApiResponse] = useState([]);

  const fetchData = useCallback(async (page) => {
    try {
      const response = await fetch(`http://localhost:8000/api/books?page=${page}&limit=10`);
      const data = await response.json();
      setApiResponse(data.data);
      setTotalPage(data.totalPages || 3);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, fetchData]);

  const handlePageChange = useCallback(
    (pageNumber) => {
      if (pageNumber >= 1 && pageNumber <= totalPage) {
        setCurrentPage(pageNumber);
      }
    },
    [totalPage]
  );

  const formattedApiResponse = useMemo(() => {
    return apiResponse.map((user) => ({
      ...user,
      fullName: `${user.title} (${user.author})`, 
    }));
  }, [apiResponse]);

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
                    {formattedApiResponse.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.fullName}</td>
                        <td>{user.author}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="btn btn-primary"
                >
                  Previous
                </button>
                <span>
                  Page {currentPage} of {totalPage}
                </span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPage}
                  className="btn btn-primary"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
