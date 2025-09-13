import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import { Card, Col, Row } from "react-bootstrap";
import backgroundImage from "../../../assets/images/background/hospiceBg.webp";

const PalliativeServices = () => {
  const { isDesktopOrLaptop } = useContext(AppContext);

  return (
    <div className="">
      <h5 className="baloo2-extraBold text-center shortHeading">
        Palliative Services
      </h5>
      <h1 className="baloo2-extraBold text-center">We Specialize In</h1>

      <div
        className="py-5 px-5 testimonialsImage"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Row>
          <Col lg={4} sm={12}>
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
                  100% Covered by Medicare
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} sm={12}>
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
                  Continue to seek Curative treatment
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} sm={12}>
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
                  Ability to Speak to a Nurse 24/7
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={4} sm={12}>
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
                  Customized Care Team
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} sm={12}>
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
                  Primary Care Physician Involved
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} sm={12}>
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
                  Pain Management
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={6} sm={12}>
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
                  Additional Medical Expense Coverage
                </Card.Title>
                <Card.Text className="poppins-regular" style={{ fontSize: 15 }}>
                  (Covers some supplies like dressing changes and pillboxes)
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} sm={12}>
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
                  Additional Nurse Practitioner or Physician Support
                </Card.Title>
                <Card.Text className="poppins-regular" style={{ fontSize: 15 }}>
                  (Consults by a palliative nurse practitioner, deductible and
                  copay may apply)
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PalliativeServices;
