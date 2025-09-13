import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaChalkboardTeacher } from "react-icons/fa";
import {
  FaUserDoctor,
  FaPersonDotsFromLine,
  FaHandshake,
  FaPeopleCarryBox,
  FaHandHoldingMedical,
} from "react-icons/fa6";
import { RiBarChartBoxAiFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";

const PalliativeBenefits = () => {
  return (
    <Container>
      <h1 className="baloo2-extraBold text-center palliativeBenefitsContainer">
        Palliative Benefits
      </h1>
      <Container>
        <Row className="mb-5">
          <Col lg={3} sm={12}>
            <Card className="shadow palliativeBenefitsCard">
              <div className="mt-5 mb-4 serviceRotateConainer">
                <div className="servicesChild1 redCardBgColor"></div>
                <div className="servicesChild2 redCardColor">
                  <IoHome size={35} color="white" />
                </div>
              </div>

              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold mb-3">
                  Treatment at home - wherever home may be
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} sm={12}>
            <Card className="shadow palliativeBenefitsCard">
              <div className="mt-5 mb-4 serviceRotateConainer">
                <div className="servicesChild1 yellowCardBgColor"></div>
                <div className="servicesChild2 yellowCardColor">
                  <FaPersonDotsFromLine size={40} color="white" />
                </div>
              </div>

              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold mb-3">
                  Discomfort and symptom management
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} sm={12}>
            <Card className="shadow palliativeBenefitsCard">
              <div className="mt-5 mb-4 serviceRotateConainer">
                <div className="servicesChild1 purpleCardBgColor"></div>
                <div className="servicesChild2 purpleCardColor">
                  <FaHandshake size={43} color="white" />
                </div>
              </div>

              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold mb-3">
                  Spiritual and emotional support
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} sm={12}>
            <Card className="shadow palliativeBenefitsCard">
              <div className="mt-5 mb-4 serviceRotateConainer">
                <div className="servicesChild1 blueCardBgColor"></div>
                <div className="servicesChild2 blueCardColor">
                  <FaPeopleCarryBox size={40} color="white" />
                </div>
              </div>

              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold mb-3">
                  Coordination of home health care services
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} sm={12}>
            <Card className="shadow palliativeBenefitsCard">
              <div className="mt-5 mb-4 serviceRotateConainer">
                <div className="servicesChild1 redCardBgColor"></div>
                <div className="servicesChild2 redCardColor">
                  <FaChalkboardTeacher size={40} color="white" />
                </div>
              </div>

              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold mb-3">
                  Patient and family education and support
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} sm={12}>
            <Card className="shadow palliativeBenefitsCard">
              <div className="mt-5 mb-4 serviceRotateConainer">
                <div className="servicesChild1 yellowCardBgColor"></div>
                <div className="servicesChild2 yellowCardColor">
                  <RiBarChartBoxAiFill size={40} color="white" />
                </div>
              </div>

              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold mb-3">
                  Review of benefits and burdens of treatment
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} sm={12}>
            <Card className="shadow palliativeBenefitsCard">
              <div className="mt-5 mb-4 serviceRotateConainer">
                <div className="servicesChild1 purpleCardBgColor"></div>
                <div className="servicesChild2 purpleCardColor">
                  <FaHandHoldingMedical size={40} color="white" />
                </div>
              </div>

              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold mb-3">
                  Developing advanced healthcare directives
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default PalliativeBenefits;
