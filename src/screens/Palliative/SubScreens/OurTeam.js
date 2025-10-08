import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import physianImg from "../../../assets/images/team/team-service-1-8.jpg";
import nurseImg from "../../../assets/images/team/team-service-1-4.jpg";
import volunteerImg from "../../../assets/images/team/team-service-1-7.jpg";

const OurTeam = () => {
  return (
    <Container>
      <h1 className="baloo2-extraBold text-center teamShortHeading">
        Our Team
      </h1>
      <p className="baloo2-medium text-center">
        Our collaborative team includes all who specialize in pain and symptom
        management. <br /> They provide support and education to patients and
        families as well as coordination of medical care.
      </p>
      <Row className="pb-5">
        <Col lg={4} sm={12}>
          <Card style={{ width: "24rem" }} className="mt-5">
            <Card.Img
              variant="top"
              src={physianImg}
              alt="Male trained physician measuring senior man's blood pressure in clinic"
            />
            <Card.Body>
              <Card.Title className="baloo2-bold text-center">
                Highly Trained Physicians
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} sm={12} className="mt-5">
          <Card style={{ width: "24rem" }}>
            <Card.Img
              variant="top"
              src={nurseImg}
              alt="Smiling rrgistered & licensed nurse standing beside happy elderly man in wheelchair"
            />
            <Card.Body>
              <Card.Title className="baloo2-bold text-center">
                Registered & Licensed Nurses
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} sm={12} className="mt-5">
          <Card style={{ width: "24rem" }}>
            <Card.Img
              variant="top"
              src={volunteerImg}
              alt="Senior woman and young female volunteer ( social worker ) smiling together"
            />
            <Card.Body>
              <Card.Title className="baloo2-bold text-center">
                Volunteers & Social Workers
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OurTeam;
