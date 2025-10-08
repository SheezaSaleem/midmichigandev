import React from "react";
import { Col } from "react-bootstrap";

const CtaCard = () => {
  return (
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
        <p className="baloo2-bold mt-5 ctaMainCompText">Years Experiences</p>
      </div>
    </Col>
  );
};

export default CtaCard;
