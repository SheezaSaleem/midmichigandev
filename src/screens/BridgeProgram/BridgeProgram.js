import React from "react";
import StaticHeader from "../../components/StaticHeader/StaticHeader";
import MasterLayout from "../../layouts/MasterLayout";
import headerImage from "../../assets/images/background/bridgeProgramBg.webp";
import headerImageTwo from "../../assets/images/background/bridgeProgramTwo.webp";
import { Card, Col, Container, Row } from "react-bootstrap";
import LiaisonsCard from "../../components/Cards/LiaisonsCard";

const BridgeProgram = () => {
  return (
    <MasterLayout>
      <StaticHeader
        headerImage={headerImage}
        screenName={"Bridge Program"}
        altText={
          "Financial advisor discussing documents with elderly couple in an office. senior financial planning, elderly couple meeting advisor, retirement planning consultation, senior care programs"
        }
      />
      <Container>
        <Row>
          <Col sm={12}>
            <h1 className="baloo2-extraBold text-center my-5">
              What do patient liaisons do?
            </h1>
          </Col>
        </Row>
        <Row>
          <LiaisonsCard cardTitle={"Community Resources"} mdValue={4} />
          <LiaisonsCard cardTitle={"Overview of Services"} mdValue={4} />
          <LiaisonsCard cardTitle={"Advanced Care Planning"} mdValue={4} />
          <LiaisonsCard
            cardTitle={"Clinical Goals of Care Conversations"}
            mdValue={6}
          />
          <LiaisonsCard
            cardTitle={"Emotional Goals of Care Conversations"}
            mdValue={6}
          />
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
        aria-label="Elderly man looking out over a peaceful lake with mountains in the distance. retirement support and wellness program"
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
            <Card
              className="d-flex justify-content-center shadow mt-3 mb-5 serviceCardContainer"
              style={{ height: 290 }}
            >
              <Card.Body className="text-center redCardBgColor">
                <Card.Title className="baloo2-bold">
                  Symptoms Difficult to Manage
                </Card.Title>
                <Card.Text className="mt-3 mb-4">
                  <ul style={{ textAlign: "left" }}>
                    <li>Pain</li>
                    <li>Shortness of breath</li>
                    <li>Fatigue</li>
                    <li>Anxiety</li>
                    <li>Depression</li>
                    <li>Loss of appetite</li>
                    <li>Nausea</li>
                    <li>Constipation</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} sm={12}>
            <Card
              className="d-flex justify-content-center shadow mt-3 mb-5 serviceCardContainer"
              style={{ height: 290 }}
            >
              <Card.Body className="text-center blueCardBgColor">
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
            <Card
              className="d-flex justify-content-center shadow mt-3 mb-5 serviceCardContainer"
              style={{ height: 290 }}
            >
              <Card.Body className="text-center purpleCardBgColor">
                <Card.Title className="baloo2-bold">
                  Medically Fragile
                </Card.Title>
                <Card.Text className="mt-3 mb-4">
                  <ul style={{ textAlign: "left" }}>
                    <li>Frequent ER visits</li>
                    <li>Hospital admissions</li>
                    <li>Benefit vs. burden of treatment</li>
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
