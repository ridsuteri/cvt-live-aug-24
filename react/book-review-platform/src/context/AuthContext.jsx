import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  let existingData = localStorage.getItem("loggedInUser");
  let [loggedInUser, setIsLoggedInUser] = useState(
    existingData ? { username: existingData } : {}
  );

  const login = (username) => {
    console.log("user logged in !!!");
    setIsLoggedInUser({ username });
    localStorage.setItem("loggedInUser", username);
    navigate("/");
  };

  const logout = () => {
    console.log("user logged out !!!");
    setIsLoggedInUser({});
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
