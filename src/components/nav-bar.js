import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../index.css";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="flex justify-between">
        <Link className="nav-link" to="/home">
          <img
            className="max-w-[30%]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlXgNnj_MXqYXGTa1jNTMHrGufNsFAInOzBQ&usqp=CAU"
          ></img>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="flex justify-end" id="basic-navbar-nav">
          <Nav className="justify-end">
            <Link className="nav-link" to="/home">
              Home
            </Link>
            <Link className="nav-link" to="/employees">
              Employees
            </Link>
            <Link className="nav-link" to="/calendar">
              Time Off Calendar
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
