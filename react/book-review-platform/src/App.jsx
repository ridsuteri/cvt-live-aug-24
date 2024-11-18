import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import BookList from "./pages/BookList";
import BookDetails from "./pages/BookDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/booklist" element={<BookList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookdetails/:bookId" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
