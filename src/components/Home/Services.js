import { useContext } from "react";
import Container from "react-bootstrap/Container";
import AppContext from "../../context/AppContext";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { FaClinicMedical, FaHospitalUser, FaStethoscope } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { GiRialtoBridge } from "react-icons/gi";

const Services = () => {
  const { isDesktopOrLaptop } = useContext(AppContext);

  return (
    <div className="container">
      <h1 style={{ marginTop: 350 }}>Everyone Deserves Our Best Services</h1>
      <Row className="mt-5 mb-5">
        <Col lg={3} sm={12}>
          <Card
            className="d-flex justify-content-center align-items-center shadow border-0"
            style={{ width: "100%" }}
          >
            <div className="mt-5 mb-4" style={{ position: "relative" }}>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 10,
                  backgroundColor: "rgba(255, 94, 94, 0.4)",
                  transform: "rotate(15deg)",
                  alignItems: "center",
                  position: "relative",
                }}
              ></div>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 10,
                  backgroundColor: "#FF5E5E",
                  transform: "none",
                  position: "absolute",
                  top: 1,
                }}
              >
                <FaClinicMedical size={40} color="white" />
              </div>
            </div>
            <Card.Body>
              <Card.Title className="poppins-bold">Home Health</Card.Title>
              <Card.Text className="mt-3 mb-4" style={{ fontSize: 15 }}>
                Providing the elderly, those with disabilities, injury or
                illness the option to remain at home safely. We are here to
                offer you a caring hand at home.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} sm={12}>
          <Card
            className="d-flex justify-content-center align-items-center shadow border-0"
            style={{ width: "100%" }}
          >
            <div className="mt-5 mb-4" style={{ position: "relative" }}>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 10,
                  backgroundColor: "rgba(249, 183, 63, 0.4)",
                  transform: "rotate(15deg)",
                  alignItems: "center",
                  position: "relative",
                }}
              ></div>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 10,
                  backgroundColor: "#F9B73F",
                  transform: "none",
                  position: "absolute",
                  top: 1,
                }}
              >
                <FaHandHoldingMedical size={40} color="white" />
              </div>
            </div>
            <Card.Body>
              <Card.Title className="poppins-bold">Palliative</Card.Title>
              <Card.Text className="mt-3 mb-4" style={{ fontSize: 15 }}>
                Palliative helps you gain the strength to carry on and helps you
                take more control over your care by improving your understanding
                of the choices for treatment available.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} sm={12}>
          <Card
            className="d-flex justify-content-center align-items-center shadow border-0"
            style={{ width: "100%" }}
          >
            <div className="mt-5 mb-4" style={{ position: "relative" }}>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 10,
                  backgroundColor: "rgba(97, 119, 255, 0.4)",
                  transform: "rotate(15deg)",
                  alignItems: "center",
                  position: "relative",
                }}
              ></div>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 10,
                  backgroundColor: "#6177FF",
                  transform: "none",
                  position: "absolute",
                  top: 1,
                }}
              >
                <FaHospitalUser size={40} color="white" />
              </div>
            </div>
            <Card.Body>
              <Card.Title className="poppins-bold">Bridge Program</Card.Title>
              <Card.Text className="mt-3 mb-4" style={{ fontSize: 15 }}>
                The Bridge Program is a patient centered resource that mainly focuses
                on bridging the gap between home health and hospice care.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} sm={12}>
          <Card
            className="d-flex justify-content-center align-items-center shadow border-0"
            style={{ width: "100%" }}
          >
            <div className="mt-5 mb-4" style={{ position: "relative" }}>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 10,
                  backgroundColor: "rgba(180, 64, 255, 0.4)",
                  transform: "rotate(15deg)",
                  alignItems: "center",
                  position: "relative",
                }}
              ></div>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 10,
                  backgroundColor: "#B440FF",
                  transform: "none",
                  position: "absolute",
                  top: 1,
                }}
              >
                <FaStethoscope  size={40} color="white" />
              </div>
            </div>
            <Card.Body>
              <Card.Title className="poppins-bold">Hospice</Card.Title>
              <Card.Text className="mt-3 mb-4" style={{fontSize: 15}}>
                Hospice is a compassionate, patient-centered approach to medical
                care and support for patients and families facing end-of-life
                issues.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
