import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import BookList from "./pages/BookList";
import BookDetails from "./pages/BookDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* protected routes, need to have logged in inorder to access */}
          <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/booklist" element={<PrivateRoute><BookList /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /> </PrivateRoute>} />
          <Route path="/bookdetails/:bookId" element={<PrivateRoute><BookDetails /></PrivateRoute>} />
        </Routes>
    </div>
  );
}

export default App;
