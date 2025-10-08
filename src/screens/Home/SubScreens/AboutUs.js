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
          {/* <h5 className="my-3 baloo2-bold aboutus">About Us</h5> */}
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
            Our PASSION is to empower our patients/families to live their best
            lives in the face of very trying circumstances. Our PRESENCE is to
            be consistent, calming and empathetic. Our PURPOSE is to selflessly
            provide medical, emotional and spiritual care for our
            patients/families with expertise, compassion, and professionalism.
          </p>

          <Row style={{ width: isDesktopOrLaptop ? "90%" : "100%" }}>
            <Col md={6} sm={12}>
              <h6>
                <FaCircleCheck className="aboutListIcon" />
                Patients First Priority
              </h6>
            </Col>
            <Col md={6} sm={12}>
              <h6>
                <FaCircleCheck className="aboutListIcon" />
                Team-Driven Care
              </h6>
            </Col>
          </Row>
          <Row style={{ width: isDesktopOrLaptop ? "90%" : "100%" }}>
            <Col md={6} sm={12}>
              <h6>
                <FaCircleCheck className="aboutListIcon" />
                Growth & Education
              </h6>
            </Col>
            <Col md={6} sm={12}>
              <h6>
                <FaCircleCheck className="aboutListIcon" />
                Comprehensive Benefits
              </h6>
            </Col>
          </Row>
        </Col>
        <Col lg={6} sm={12} className="aboutBgImage d-flex justify-content-center align-items-center">
          <Image
            src={require("../../../assets/images/resources/about-3-1.jpg")}
            style={{ borderRadius: 10 }}
            alt="A female doctor or healthcare professional smiling and speaking with an older male patient "
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
