import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Cta = () => {
  return (
    <Container fluid className="pt-5 px-5 ctaContainer">
      <Row>
        <Col
          lg={3}
          sm={12}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="my-5 ctaMainComponent">
            <div className="ctaMainCompChild1"></div>
            <div className="baloo2-bold ctaMainCompChild2 ctaMainCompChild2TextColor1">
              25+
            </div>
            <p className="baloo2-bold mt-5 ctaMainCompText">
              Years Experiences
            </p>
          </div>
        </Col>

        <Col
          lg={3}
          sm={12}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="my-5 ctaMainComponent">
            <div className="ctaMainCompChild1"></div>
            <div className="baloo2-bold ctaMainCompChild2 ctaMainCompChild2TextColor2">
              700
            </div>
            <p className="baloo2-bold mt-5 ctaMainCompText">
              Great Volunteers
            </p>
          </div>
        </Col>

        <Col
          lg={3}
          sm={12}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="my-5 ctaMainComponent">
            <div className="ctaMainCompChild1"></div>
            <div className="baloo2-bold ctaMainCompChild2 ctaMainCompChild2TextColor3">
              20k+
            </div>
            <p className="baloo2-bold mt-5 ctaMainCompText">
              Satisfied Clients
            </p>
          </div>
        </Col>

        <Col
          lg={3}
          sm={12}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="my-5 ctaMainComponent">
            <div className="ctaMainCompChild1"></div>
            <div className="baloo2-bold ctaMainCompChild2 ctaMainCompChild2TextColor4">
              30+
            </div>
            <p className="baloo2-bold mt-5 ctaMainCompText">
              Awards Achieve
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cta;
