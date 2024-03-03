import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function NavBar(){
  return (
    <>
      <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Education">Education</Nav.Link>
            <Nav.Link as={Link} to="/WorkProject">Work&Project</Nav.Link>
            <Nav.Link as={Link} to="/Skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/GetInTouch">GetInTouch</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}