import { useContext } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import footerBorderImage from "../../assets/images/shapes/scratch-2-1.png";
import AppContext from "../../context/AppContext";
import "../../assets/css/footerStyles.css";

const Footer = () => {
  const { isDesktopOrLaptop } = useContext(AppContext);

  return (
    <div className="footerContainer">
      <Image src={footerBorderImage} className="footerImage" />
      <Container>
        <Row className="py-5">
          <Col lg={4} md={6} sm={12}>
            <h3 className="baloo2-semiBold text-light">About</h3>
            <p
              className="mb-5 footerAbout"
              style={{
                width: isDesktopOrLaptop ? "80%" : "100%",
              }}
            >
              Our goal each day is to ensure that our residents’ needs are not
              only met but exceeded. To make that happen, we are committed to
              providing an environment in which residents can enjoy a wide range
              of amenities that allow them to feel independent.
            </p>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <h3 className="baloo2-semiBold text-light">Services</h3>
            <ul className="text-light">
              <li className="p-2">Home Health</li>
              <li className="p-2">Palliative</li>
              <li className="p-2">Bridge Program</li>
              <li className="p-2">Hospice</li>
            </ul>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <h3 className="baloo2-semiBold text-light">Contacts</h3>
            <h5 className="poppins-semiBold text-light">
              Mid-Michigan Home, Health & Hospice{" "}
            </h5>
            <p className="text-white mt-5">
              <FaMapMarkerAlt className="footerIcon" />
              1321 South Linden Road Suite A Flint, MI 48532
            </p>
            <p className="text-white">
              <FaPhoneAlt className="footerIcon" />
              (877) 732-9528
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
