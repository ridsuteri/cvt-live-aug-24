import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
function TopNavbar() {
  let {logout} = useContext(AuthContext)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Books Review Platform</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav className="mx-4 text-decoration-none">
              <Link to={"/dashboard"}>Dashboard</Link>
            </Nav>
            <Nav className="mx-4 text-decoration-none">
              <Link to={"/booklist"}>BookList</Link>
            </Nav>
            <Nav className="mx-4 text-decoration-none">
              <Link to={"/profile"}>Profile</Link>
            </Nav>
          </Nav>
          <Nav className="ms-auto" onClick={logout}>
            <i className="fa-solid fa-right-from-bracket"></i>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
