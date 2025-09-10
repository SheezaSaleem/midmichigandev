import React from "react";
import StaticHeader from "../../components/StaticHeader/StaticHeader";
import MasterLayout from "../../layouts/MasterLayout";
import headerImage from "../../assets/images/background/bridgeProgramBg.webp";
import headerImageTwo from "../../assets/images/background/bridgeProgramTwo.webp";
import { Card, Col, Container, Row } from "react-bootstrap";

const BridgeProgram = () => {
  return (
    <MasterLayout>
      <StaticHeader headerImage={headerImage} screenName={"Bridge Program"} />
      <Container>
        <Row>
          <Col sm={12}>
            <h1 className="baloo2-extraBold text-center mt-5">
              What do patient liaisons do?
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={12}>
            <Card className="d-flex justify-content-center align-items-center shadow mt-5 border-0">
              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold">
                  Overview of Services
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card className="d-flex justify-content-center align-items-center shadow mt-5 border-0">
              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold">
                  Clinical Goals of Care Conversations
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card className="d-flex justify-content-center align-items-center shadow mt-5 border-0">
              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold">
                  Emotional Goals of Care Conversations
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card className="d-flex justify-content-center align-items-center shadow mt-5 border-0">
              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold">
                  Advanced Care Planning
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card className="d-flex justify-content-center align-items-center shadow mt-5 border-0">
              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold">
                  Community Resources
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div
        style={{
          backgroundImage: `url(${headerImageTwo})`,
          marginTop: 50,
          height: "50vh",
          width: "100%",

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            height: "50vh",
            width: "100%",
          }}
        >
          <h1 className="baloo2-extraBold text-center text-light">
            Meet with one of our patient liaisons to bridge the gap in your
            health care.
          </h1>
        </div>
      </div>

      {/* WHO CAN BENEFIT US SECTION */}
      <h1 className="baloo2-extraBold text-center mt-5">Who can benefit?</h1>
      <Container>
        <Row>
          <Col lg={4} sm={12}>
            <Card className="d-flex justify-content-center shadow mt-5 serviceCardContainer">
              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold">
                  Life Limiting Illnesses
                </Card.Title>
                <Card.Text className="mt-3 mb-4">
                  <ul style={{ textAlign: "left" }}>
                    <li>Cancer</li>
                    <li>CHF</li>
                    <li>COPD</li>
                    <li>Kidney Failure</li>
                    <li>Liver Failure</li>
                    <li>Dementia</li>
                    <li>Alzheimer's</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} sm={12}>
            <Card className="d-flex justify-content-center shadow mt-5 serviceCardContainer">
              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold">
                  Symptoms Difficult to Manage
                </Card.Title>
                <Card.Text className="mt-3 mb-4">
                  <ul style={{ textAlign: "left" }}>
                    <li>Cancer</li>
                    <li>CHF</li>
                    <li>COPD</li>
                    <li>Kidney Failure</li>
                    <li>Liver Failure</li>
                    <li>Dementia</li>
                    <li>Alzheimer's</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} sm={12}>
            <Card className="d-flex justify-content-center shadow mt-5 serviceCardContainer">
              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold">
                  Medically Fragile
                </Card.Title>
                <Card.Text className="mt-3 mb-4">
                  <ul style={{ textAlign: "left" }}>
                    <li>Cancer</li>
                    <li>CHF</li>
                    <li>COPD</li>
                    <li>Kidney Failure</li>
                    <li>Liver Failure</li>
                    <li>Dementia</li>
                    <li>Alzheimer's</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* WHO CAN BENEFIT US SECTION END*/}
    </MasterLayout>
  );
};

export default BridgeProgram;
