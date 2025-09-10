import React, { useContext } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import missionImage from "../../../assets/images/resources/about-1-2.png";
import AppContext from "../../../context/AppContext";

const OurMission = () => {
  const { isDesktopOrLaptop } = useContext(AppContext);

  return (
    <Container className="py-5 missionContainer">
      <Row>
        <Col lg={6} sm={12} className="missionImage">
          <Image src={missionImage} className="missionImg" />
        </Col>
        <Col lg={6} sm={12}>
          <h1
            style={{ width: isDesktopOrLaptop ? "75%" : "100%" }}
            className="my-4 baloo2-extraBold"
          >
            Our Mission <br />
            <span className="baloo2-medium">We’ll Take Care of Your Problems Carefully</span>
          </h1>
          <p
            className="mb-5 missionPara"
            style={{
              width: isDesktopOrLaptop ? "80%" : "100%",
            }}
          >
            Our mission is to provide the elderly, those with disabilities,
            injury or illness the option to remain at home safely. Regardless of
            the level of care needed, our trained staff are guided by a
            tradition of providing quality personal care, customer service and
            business excellence. We are here to offer you a caring hand to
            assist you with ALL of your home care needs.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default OurMission;
