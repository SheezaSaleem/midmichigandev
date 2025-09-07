import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { FaCircleCheck } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: "rgba(214, 87, 90, 0.1)" }} className="pb-5 d-flex align-items-row">
      <Row>
        <Col
          lg={6}
          sm={12}
          style={{
            paddingLeft: 100,
            // paddingRight: 100,
          }}
        >
          <h1 style={{ marginTop: 180, textAlign: "left" }} className="mb-5">
            Best Home Care Center with Love
          </h1>
          <p className="mb-5" style={{ textAlign: "left", color: "#93959E" }}>
            Our goal each day is to ensure that our residents’ needs are not
            only met but exceeded. To make that happen, we are committed to
            providing an environment in which residents can enjoy a wide range
            of amenities that allow them to feel independent.
          </p>

          <div className="d-flex justify-content-row">
            <ul style={{ listStyle: "none" }}>
              <li style={{ color: "#2D2929" }}>
                <FaCircleCheck
                  color="rgba(214, 87, 90, 0.5)"
                  style={{ marginRight: 10 }}
                />
                In-House Theater
              </li>
              <li style={{ color: "#2D2929" }}>
                <FaCircleCheck
                  color="rgba(214, 87, 90, 0.5)"
                  style={{ marginRight: 10 }}
                />
                On-Site Physician Services
              </li>
            </ul>
            <ul style={{ listStyle: "none" }}>
              <li style={{ color: "#2D2929" }}>
                <FaCircleCheck
                  color="rgba(214, 87, 90, 0.5)"
                  style={{ marginRight: 10 }}
                />
                Medication Management
              </li>
              <li style={{ color: "#2D2929" }}>
                <FaCircleCheck
                  color="rgba(214, 87, 90, 0.5)"
                  style={{ marginRight: 10 }}
                />
                Convenient One-Story Design
              </li>
            </ul>
          </div>
        </Col>
        <Col lg={6} sm={12}></Col>
      </Row>

      <Row>
        <Col lg={6} sm={12} style={{
            marginTop: 180}}>
        <Image src={require('../../assets/images/resources/about-3-1.jpg')} />
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
