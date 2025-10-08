import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import subscribe1 from "../../../assets/images/shapes/subscribe-dot-1-1.png";
import subscribe2 from "../../../assets/images/shapes/subscribe-dot-1-2.png";

const Subscription = () => {
  return (
    <Container>
      <Card className="palliativeInnerContainer">
        <Image src={subscribe1} className="subscribe1" alt="Upper dot image for design purpose" />
        <Image src={subscribe2} className="subscribe2" alt="Down dot image for design purpose" />
        <Row className="scubscribePara">
          <Col lg={4} sm={12}>
            <h4 className="baloo2-bold">
              Want Quality Palliative <br /> Solution?{" "}
            </h4>
          </Col>
          <Col
            lg={5}
            sm={12}
            style={{
              margiTop: 30,
            }}
          >
            <h6>
              Palliative care may be right for you if you are experiencing pain,
              facing complex medical decisions or dealing with serious illness.
            </h6>
          </Col>
          <Col lg={3} sm={12} className="d-flex">
            <Button
              className="ms-auto"
              style={{
                width: 180,
                height: 60,
                borderRadius: 50,
                backgroundColor: "#d6575a",
                border: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              href="tel:877-732-9528"
              >
              Let's Talk
            </Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Subscription;
