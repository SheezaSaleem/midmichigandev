import React, { useContext } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaCircleCheck } from "react-icons/fa6";
import AppContext from "../../../context/AppContext";

const AboutUs = () => {
  const { isDesktopOrLaptop } = useContext(AppContext);

  return (
    <Container className="py-5 aboutContainer">
      <Row>
        <Col lg={6} sm={12}>
          <h5 className="my-3 baloo2-bold aboutus">About Us</h5>
          <h1
            style={{ width: isDesktopOrLaptop ? "75%" : "100%" }}
            className="my-4 baloo2-extraBold"
          >
            Best Home Care Center with Love
          </h1>
          <p
            className="mb-5 aboutPara"
            style={{
              width: isDesktopOrLaptop ? "80%" : "100%",
            }}
          >
            Our goal each day is to ensure that our residents’ needs are not
            only met but exceeded. To make that happen, we are committed to
            providing an environment in which residents can enjoy a wide range
            of amenities that allow them to feel independent.
          </p>

          <Row style={{ width: isDesktopOrLaptop ? "90%" : "100%" }}>
            <Col md={6} sm={12}>
              <h6>
                <FaCircleCheck className="aboutListIcon" />
                In-House Theater
              </h6>
            </Col>
            <Col md={6} sm={12}>
              <h6>
                <FaCircleCheck className="aboutListIcon" />
                On-Site Physician Services
              </h6>
            </Col>
          </Row>
          <Row style={{ width: isDesktopOrLaptop ? "90%" : "100%" }}>
            <Col md={6} sm={12}>
              <h6>
                <FaCircleCheck className="aboutListIcon" />
                Medication Management
              </h6>
            </Col>
            <Col md={6} sm={12}>
              <h6>
                <FaCircleCheck className="aboutListIcon" />
                Convenient One-Story
              </h6>
            </Col>
          </Row>
        </Col>
        <Col lg={6} sm={12} className="aboutBgImage">
          <Image
            src={require("../../../assets/images/resources/about-3-1.jpg")}
            style={{ borderRadius: 10 }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
