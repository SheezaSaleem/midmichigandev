import { useContext } from "react";

import { Col, Container, Image, Row } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import AppContext from "../../../context/AppContext";
import footerBorderImage from "../../../assets/images/shapes/scratch-2-1.png";

const AppFooter = () => {
  const { isDesktopOrLaptop } = useContext(AppContext);

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#1B1D21",
        marginTop: 100,
      }}
    >
      <Image
        src={footerBorderImage}
        style={{
          height: "5%",
          position: "absolute",
          width: "100%",
          left: 0,
          top: -10,
          // backgroundRepeat:"repeat-x",
          margin: 0,
        }}
      />
      <Container>
        <Row className="py-5">
          <Col lg={4} md={6} sm={12}>
            <h3 className="baloo2-semiBold text-light">About</h3>
            <p
              className="mb-5"
              style={{
                letterSpacing: 1,
                color: "#93959E",
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
              <FaMapMarkerAlt
                style={{ marginRight: 10 }}
                color="#FFFFFF"
                size={24}
              />
              1321 South Linden Road Suite A Flint, MI 48532
            </p>
            <p className="text-white">
              <FaPhoneAlt
                style={{ marginRight: 10 }}
                color="#FFFFFF"
                size={24}
              />
              (877) 732-9528
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppFooter;
