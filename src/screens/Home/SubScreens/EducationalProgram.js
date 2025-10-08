import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const EducationalProgram = () => {
  return (
    <Container className="pb-3 mb-5">
      <h1 className="baloo2-extraBold text-center mt-5">
        Our Educational Program
      </h1>
      <Row>
        <Col lg={4} sm={12}>
          <Card className="shadow mt-5 serviceCardContainer">
            <Card.Body className="text-center redCardBgColor">
              <Card.Text className="mt-3 mb-4">
                <ul style={{ textAlign: "left", fontSize: 17 }}>
                  <li>CPR Training </li>
                  <li>Blood Borne Pathogens</li>
                  <li>Transfer Training </li>
                  <li>Medication Management</li>
                  <li>Living With Diabetes</li>
                  <li>Seasonal Depression</li>
                  <li>Incontinence Role for Control</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} sm={12}>
          <Card className="shadow mt-5 serviceCardContainer">
            <Card.Body className="text-center purpleCardBgColor">
              <Card.Text className="mt-3 mb-4">
                <ul style={{ textAlign: "left", fontSize: 17 }}>
                  <li>Unsteady Gait/Balance</li>

                  <li>End of Life/Advanced Directives </li>

                  <li>Fall Prevention</li>

                  <li>Nutrition/Hydration</li>

                  <li>Virtual Dementia</li>

                  <li>Living with COPD</li>

                  <li>Living with CHF </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} sm={12}>
          <Card
            // style={{ height: "30vh" }}
            className="shadow mt-5 serviceCardContainer"
          >
            <Card.Body className="text-center blueCardBgColor">
              <Card.Text className="mt-3 mb-4">
                <ul style={{ textAlign: "left", fontSize: 17 }}>
                  <li>Heart Health</li>

                  <li>Senior Bullying </li>

                  <li>Grief Support Groups</li>

                  <li>Mind Path Care Centers</li>

                  <li className="pb-4">
                    <b>
                      LIFE ENRICHMENT ACTIVITIES <br /> AVAILABLE ON REQUEST
                    </b>
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EducationalProgram;
