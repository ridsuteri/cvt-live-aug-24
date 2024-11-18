import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import users from "../data/users.json";
import { AuthContext } from "../context/AuthContext";
const Login = () => {
  let location = useLocation();
  // console.log(location.state)
  let {login} = useContext(AuthContext)

  let [loginDetails, setLoginDetails] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let matchingUser = users.filter(
      (user) =>
        user.username == loginDetails.username &&
        user.password == loginDetails.password
    );
    if (matchingUser.length != 0) {
      console.log(loginDetails.username)
      login(loginDetails.username)
    } else {
      alert("invalid username/password");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow" style={{ width: "400px" }}>
        <div className="card-body">
          <h3 className="text-center mb-4">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="username"
                id="email"
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder="Enter your password"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
          <p className="text-center mt-3">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
