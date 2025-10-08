import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import {
  Image,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Dropdown,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const CustomNavbar = () => {
  const { isDesktopOrLaptop } = useContext(AppContext);
  const [underlineColor, setUnderlineColor] = useState("#fff");

  const underlineColorChange = () => {
    setUnderlineColor("#d6575a");
  };

  return (
    <Navbar
      expand="lg"
      // className="bg-body-tertiary"
      // sticky="top"
      style={{
        height: isDesktopOrLaptop ? 180 : "auto",
        padding: isDesktopOrLaptop ? 10 : 20,
      }}
    >
      <Container
        style={{
          width: isDesktopOrLaptop ? 1200 : "auto",
        }}
      >
        <Navbar.Brand as={Link} to="/">
          <Image
            src={require("../../assets/images/logo.webp")}
            style={{ height: isDesktopOrLaptop ? 120 : 80 }}
            alt="Mid Michigan Home Health & Hospice Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ height: 90, alignItems: "end" }}
        >
          <Nav className="me-auto">
            <div className="navLinks">
              <Nav.Link className="mx-1 poppins-medium" as={Link} to="/">
                Home
              </Nav.Link>
            </div>

            <NavDropdown
              title="Hospice"
              id="basic-nav-dropdown"
              className="mx-1 poppins-medium navLinks"
            >
              <NavDropdown.Item
                as={Link}
                className="bg-body-tertiary poppins-medium"
                to="/hospice"
              >
                Hospice
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                className="bg-body-tertiary poppins-medium"
                to="/hospice-criteria"
              >
                Hospice Criteria
              </NavDropdown.Item>
            </NavDropdown>

            <div className="navLinks">
              <Nav.Link
                as={Link}
                className="mx-1 poppins-medium"
                to="/homehealth"
              >
                Home Health
              </Nav.Link>
            </div>

            <div className="navLinks">
              <Nav.Link
                as={Link}
                className="mx-1 poppins-medium"
                to="/palliative"
              >
                Palliative
              </Nav.Link>
            </div>

            <div className="navLinks">
              <Nav.Link
                as={Link}
                className="mx-1 poppins-medium"
                to="/bridge-program"
              >
                Bridge Program
              </Nav.Link>
            </div>

            <div className="navLinks">
              <Nav.Link
                as={Link}
                className="mx-1 poppins-medium"
                to="/care-team"
              >
                Care Team
              </Nav.Link>
            </div>

            <div className="navLinks">
              <Nav.Link as={Link} className="mx-1 poppins-medium" to="/career">
                Career
              </Nav.Link>
            </div>

            <div className="navLinks">
              <Nav.Link
                as={Link}
                className="mx-1 poppins-medium"
                to="/contact-us"
              >
                Contact Us
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>

        {/* <Navbar.Collapse style={{ height: 150, alignItems: "end" }}>
          <Nav className="navbar">
            <ul>
              <li>
                <Nav.Link as={Link} className="poppins-medium" to="/">
                  Home
                </Nav.Link>
              </li>

              <li>
                <NavDropdown
                  title="Hospice"
                  id="basic-nav-dropdown"
                  className="poppins-medium"
                >
                  <NavDropdown.Item
                    as={Link}
                    className="poppins-medium"
                    to="/hospice"
                  >
                    Hospice
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={Link}
                    className="poppins-medium"
                    to="/hospice-criteria"
                  >
                    Hospice Criteria
                  </NavDropdown.Item>
                </NavDropdown>
              </li>

              <li>
                <Nav.Link
                  as={Link}
                  className="poppins-medium"
                  to="/homehealth"
                >
                  Home Health
                </Nav.Link>
              </li>

              <li>
                <Nav.Link
                  as={Link}
                  className="poppins-medium"
                  to="/palliative"
                >
                  Palliative
                </Nav.Link>
              </li>

              <li>
                <Nav.Link
                  as={Link}
                  className="poppins-medium"
                  to="/bridge-program"
                >
                  Bridge Program
                </Nav.Link>
              </li>

              <li>
                <Nav.Link
                  as={Link}
                  className="poppins-medium"
                  to="/care-team"
                >
                  Care Team
                </Nav.Link>
              </li>

              <li>
                <Nav.Link
                  as={Link}
                  className="poppins-medium"
                  to="/career"
                >
                  Career
                </Nav.Link>
              </li>

              <li>
                <Nav.Link
                  as={Link}
                  className="poppins-medium"
                  to="/contact-us"
                >
                  Contact Us
                </Nav.Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse> */}

        {/* <Navbar.Collapse style={{ height: 150, alignItems: "end" }}>
          <Nav className="navbar">
            <ul>
              <li>
                <NavLink className="mx-1 poppins-medium" to="/">
                  Home
                </NavLink>
              </li>

              <li>
                <Dropdown style={{bottom: 5}}>
                  <Dropdown.Toggle className="border-0 bg-transparent text-dark poppins-medium">
                    Hospice
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item as={NavLink} to={"/hospice"}>Hopsice</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to={"/hospice-criteria"}>
                      Hospice Criteria
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li>
                <NavLink className="mx-1 poppins-medium" to="/homehealth">
                  Home Health
                </NavLink>
              </li>

              <li>
                <NavLink className="mx-1 poppins-medium" to="/palliative">
                  Palliative
                </NavLink>
              </li>

              <li>
                <NavLink className="mx-1 poppins-medium" to="/bridge-program">
                  Bridge Program
                </NavLink>
              </li>

              <li>
                <NavLink className="mx-1 poppins-medium" to="/care-team">
                  Care Team
                </NavLink>
              </li>

              <li>
                <NavLink className="mx-1 poppins-medium" to="/career">
                  Career
                </NavLink>
              </li>

              <li>
                <NavLink className="mx-1 poppins-medium" to="/contact-us">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse> */}

        {/* <nav className="navbar" style={{ height: 90, alignItems: "end" }}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/hospice">Hospice</NavLink>
            </li>
            <li>
              <NavLink to="/palliative">Palliative</NavLink>
            </li>
            <li>
              <NavLink to="/career">Career</NavLink>
            </li>
          </ul>
        </nav> */}
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
