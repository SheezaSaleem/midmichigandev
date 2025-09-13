import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Image, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        <Navbar.Brand as={Link} to="/">
          <Image
            src={require("../../assets/images/logo.webp")}
            style={{ height: isDesktopOrLaptop ? 70 : 50 }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ border: "none" }}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} className="mx-3 poppins-bold" to="/homehealth">
              Home Health
            </Nav.Link>

            {/* <Nav.Link as={Link} className="mx-3 poppins-bold" to="#link"> */}

            <Nav.Link as={Link} className="mx-3 poppins-bold" to="/palliative">
              Palliative
            </Nav.Link>
            <Nav.Link as={Link} className="mx-3 poppins-bold" to="/bridge-program">
              Bridge Program
            </Nav.Link>
            <Nav.Link as={Link} className="mx-3 poppins-bold" to="/hospice">
              Hospice
            </Nav.Link>
            <Nav.Link as={Link} className="mx-3 poppins-bold" to="/hospice-criteria">
              Hospice Criteria
            </Nav.Link>
            <Nav.Link as={Link} className="mx-3 poppins-bold" to="#link">
              Career
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
