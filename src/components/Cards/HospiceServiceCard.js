import React from "react";
import { Card, Col } from "react-bootstrap";

const HospiceServiceCard = ({ cardTitle, cardBgColor }) => {
  return (
    <Col md={3} sm={12}>
        <Card
          // style={{ paddingBottom: 30 }}
          className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
        >
          <Card.Body className={`text-center`}>
            <Card.Title className={`baloo2-bold`}>{cardTitle}</Card.Title>
          </Card.Body>
        </Card>
    </Col>
  );
};

export default HospiceServiceCard;
