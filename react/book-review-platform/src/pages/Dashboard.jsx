import React, { useEffect, useState } from "react";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";

const Dashboard = () => {

  let [currentPage, setCurrentPage] = useState(1);
  let [totalPage, setTotalPage] = useState(3);
  let [apiResponse, setApiResponse] = useState([]);
  
  useEffect(()=>{
    fetchData(currentPage)
  },[currentPage])

  useEffect(()=>{
    fetchData(1)
  },[])


  const fetchData = async (currentPage)=>{
    let response = await fetch(`http://localhost:8000/api/books?page=${currentPage}&limit=10`);
    let data = await response.json();
    setApiResponse(data.data);
    // console.log(data);
  }

  const handlePageChange = (pageNumber)=>{
    // if(pageNumber > 0 && pageNumber < totalPage){
      setCurrentPage(pageNumber)
      console.log(currentPage)
    // }
  }

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
                    {apiResponse.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.author}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card-footer">
                <button onClick={()=>{handlePageChange((currentPage-1))}}>Previous</button>
                <button onClick={()=>{handlePageChange((currentPage+1))}}>Next</button>
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
