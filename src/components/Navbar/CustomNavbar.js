import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import AppContext from "../../context/AppContext";
import { Image } from "react-bootstrap";

const CustomNavbar = () => {
  const { isDesktopOrLaptop } = useContext(AppContext);

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      sticky="top"
      style={{
        height: isDesktopOrLaptop ? 120 : "auto",
        padding: isDesktopOrLaptop ? 10 : 20,
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <Image src={require("../../assets/images/logo.webp")} style={{height: isDesktopOrLaptop ? 70 : 50}} />
        </Navbar.Brand>
        <Navbar.Toggle style={{border: "none"}} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="mx-3 poppins-bold" href="#link">Home Health</Nav.Link>
            <Nav.Link className="mx-3 poppins-bold" href="#link">Palliative</Nav.Link>
            <Nav.Link className="mx-3 poppins-bold" href="#link">Bridge Program</Nav.Link>
            <Nav.Link className="mx-3 poppins-bold" href="#link">Hospice</Nav.Link>
            <Nav.Link className="mx-3 poppins-bold" href="#link">Hospice Criteria</Nav.Link>
            <Nav.Link className="mx-3 poppins-bold" href="#link">Career</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
