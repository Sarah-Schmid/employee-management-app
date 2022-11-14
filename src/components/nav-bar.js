import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../index.css";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link className="nav-link" to="/">
          <img
            className="max-w-[50%]"
            src="https://www.veryicon.com/download/png/healthcate-medical/basic-linear-icon-library/user-staff?s=256"
          ></img>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/employees">
              Employees
            </Link>
            <Link className="nav-link" to="/schedule">
              Schedule
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
