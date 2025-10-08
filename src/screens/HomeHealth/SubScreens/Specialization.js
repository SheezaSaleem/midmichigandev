import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import { Card, Col, Container, Row } from "react-bootstrap";

const Specialization = () => {
  const { isDesktopOrLaptop } = useContext(AppContext);

  return (
    <Container className="pb-5">
      {/* <h5 className="baloo2-extraBold text-center shortHeading">Services</h5> */}
      <h1 className="baloo2-extraBold text-center shortHeading pb-3">We Specialize In</h1>

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
              <Card.Title className="baloo2-bold">CHF/COPD Management</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={12}>
          <Card
            className="specialtiesContainer"
            style={{ borderRadius: 50, backgroundColor: "#d6575a", color: 'white' }}
          >
            <Card.Body className="text-center">
              <Card.Title className="baloo2-bold">Diabetes</Card.Title>
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
    </Container>
  );
};

export default Specialization;
