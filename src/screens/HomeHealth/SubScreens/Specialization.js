import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import { Card, Col, Row } from "react-bootstrap";

const Specialization = () => {
  const { isDesktopOrLaptop } = useContext(AppContext);

  return (
    <div className="container">
      <h5 className="baloo2-extraBold text-center shortHeading">Services</h5>
      <h1 className="baloo2-extraBold text-center">We Specialize In</h1>

      <Row>
        <Col lg={3} sm={12}>
          <Card
            className="specialtiesContainer"
            style={{ borderRadius: 50, backgroundColor: "#d6575a", color: 'white' }}
          >
            <Card.Body className="text-center">
              <Card.Title className="baloo2-bold">Multiple Trauma</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={12}>
          <Card
            className="specialtiesContainer"
            style={{ borderRadius: 50, backgroundColor: "#d6575a", color: 'white' }}
          >
            <Card.Body className="text-center">
              <Card.Title className="baloo2-bold">Spinal Cord Injuries</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={12}>
          <Card
            className="specialtiesContainer"
            style={{ borderRadius: 50, backgroundColor: "#d6575a", color: 'white' }}
          >
            <Card.Body className="text-center">
              <Card.Title className="baloo2-bold">Brain Injuries</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={12}>
          <Card
            className="specialtiesContainer"
            style={{ borderRadius: 50, backgroundColor: "#d6575a", color: 'white' }}
          >
            <Card.Body className="text-center">
              <Card.Title className="baloo2-bold">Wound Care</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Specialization;
