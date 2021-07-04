import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";

interface Props {}

export const NavHeader = (props: Props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Address Book</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Contacts</Nav.Link>
          <Nav.Link href="/contactForm/newContact">Add Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
