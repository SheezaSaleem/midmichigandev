import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import hospiceImg from "../../../assets/images/resources/hospice.webp";
import volunteerImg from "../../../assets/images/resources/volunteer.webp";

const Cta = () => {
  return (
    <Container fluid className="pt-5 px-5 ctaContainer">
      <Row>
        <Col
          lg={6}
          sm={12}
          className="d-flex justify-content-center align-items-center"
        >
          <Card style={{ width: "40rem" }} className="border-0">
            <Card.Img
              variant="top"
              src={hospiceImg}
              alt="Close-up of elderly hands, fingers interlocked, symbolizing aging and care"
            />
            <Card.Body>
              <h1 className="text-center baloo2-bold" style={{ fontSize: 30 }}>
                {" "}
                Is it time for hospice?
              </h1>
              <Card.Text className="text-center">
                Discussing Hospice early in the disease process gives patients
                and families time to make important health care decisions
                regarding their wishes for end of life care.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col
          lg={6}
          sm={12}
          className="d-flex justify-content-center align-items-center"
        >
          <Card style={{ width: "40rem" }} className="border-0">
            <Card.Img
              variant="top"
              src={volunteerImg}
              alt="A physician suggesting a therapy session, consultation, or volunteer visit"
            />
            <Card.Body>
              <h1 className="text-center baloo2-bold" style={{ fontSize: 30 }}>
                Volunteer
              </h1>
              <Card.Text className="text-center">
                Every volunteer at Mid-Michigan Homecare & Hospice has a
                powerful impact on every patient’s life. They bring comfort to
                family members and loved ones who may be going through difficult
                times.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cta;
