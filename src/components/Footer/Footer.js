import { useContext } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import footerBorderImage from "../../assets/images/shapes/scratch-2-1.png";
import AppContext from "../../context/AppContext";
import "../../assets/css/footerStyles.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-footer-1.png";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const { isDesktopOrLaptop } = useContext(AppContext);

  return (
    <div className="footerContainer">
      {isDesktopOrLaptop ? (
        <Image src={footerBorderImage} className="footerImage" alt="Mid Michigan footer wave image for design purpose" />
      ) : (
        ""
      )}
      <Container>
        <Row className="py-5">
          <Col
            lg={4}
            md={6}
            sm={12}
            className={isDesktopOrLaptop ? "" : "d-flex justify-content-center"}
          >
            <Link to={"/"}>
              <Image
                src={logo}
                className="footerLogoImage"
                alt="Mid Michigan Home Health & Hospice Logo"
              />
            </Link>
          </Col>

          <Col
            lg={2}
            md={6}
            sm={12}
            className={isDesktopOrLaptop ? "" : "text-center mt-3 mb-4"}
          >
            <h4 className="baloo2-bold text-light">Links</h4>
            <Link className="linkText" to={"/"}>
              Home
            </Link>
            <br />
            <Link className="linkText" to={"/hospice"}>
              Hospice
            </Link>
            <br />
            <Link className="linkText" to={"/palliative"}>
              Palliative
            </Link>
            <br />
            <Link className="linkText" to={"/care-team"}>
              Care Team
            </Link>
            <br />
            <Link className="linkText" to={"/career"}>
              Career
            </Link>
            <br />
            <Link className="linkText" to={"/contact-us"}>
              Contact Us
            </Link>
          </Col>

          <Col
            lg={4}
            md={6}
            sm={12}
            className={isDesktopOrLaptop ? "" : "text-center"}
          >
            <h4 className="baloo2-semiBold text-light">Contacts</h4>
            <p className="contactText mt-3">
              <FaMapMarkerAlt
                className="footerIcon"
                color="#d6575a"
                size={20}
              />
              1321 South Linden Road Suite A Flint, MI 48532
            </p>
            <p className="contactText">
              <FaPhoneAlt className="footerIcon" color="#d6575a" size={20} />
              (877) 732-9528
            </p>
            <div className="pb-5">
              <a
                className="linkText"
                target="_blank"
                aria-label="Mid Michigan Home Health & Hospice Facebook page link"
                href={
                  "https://www.facebook.com/MidMichiganHomeHealthandHospice"
                }
              >
                <FaFacebookF className="footerBrandIcon" size={20} />
              </a>
              <Link
                className="linkText px-4"
                target="_blank"
                aria-label="Mid Michigan Home Health & Hospice Instagram page link"
                to={
                  "https://www.instagram.com/midmichiganhomehealthhospice?igsh=NXZucmJuNnNmeTY="
                }
              >
                <AiFillInstagram className="footerBrandIcon" size={23} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
