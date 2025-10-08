import React from "react";
import { Card, Col } from "react-bootstrap";

const LiaisonsCard = ({cardTitle, mdValue}) => {
  return (
    <Col md={mdValue} sm={12}>
    <Card
      className="specialtiesContainer"
      style={{
        borderRadius: 50,
        borderColor: "#d6575a",
        color: "black",
      }}
    >
      <Card.Body className="text-center">
        <Card.Title className="baloo2-medium">
          {cardTitle}
        </Card.Title>
      </Card.Body>
    </Card>
    </Col>
  );
};

export default LiaisonsCard;
