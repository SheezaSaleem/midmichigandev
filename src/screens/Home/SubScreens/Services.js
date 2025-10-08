import { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import AppContext from "../../../context/AppContext";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { FaClinicMedical, FaHospitalUser, FaStethoscope } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Services = () => {
  const { isDesktopOrLaptop } = useContext(AppContext);

  // function HeaderView() {
  //   const location = useLocation();
  //   console.log("path name: " + location.pathname);
  // }

  return (
    <Container>
      <h1
        className="baloo2-extraBold text-center"
        style={{ marginTop: isDesktopOrLaptop ? 170 : 220 }}
      >
        Everyone Deserves Our <br /> Best Services
      </h1>
      <Row className="mt-3 mb-5">
        <Col lg={3} sm={12}>
          <Card className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer">
            <div className="mt-5 mb-4 serviceRotateConainer">
              <div className="d-flex justify-content-center align-items-center servicesChild1 redCardBgColor"></div>
              <div className="d-flex justify-content-center align-items-center servicesChild2 redCardColor">
                <FaStethoscope size={40} color="white" />
              </div>
            </div>
            <Card.Body className="text-center">
              <Card.Title
                className="baloo2-bold cardTitleUnderline"
                as={Link}
                to={"/hospice"}
              >
                Hospice
              </Card.Title>
              <Card.Text className="mt-3 mb-4 serviceParaText">
                Hospice is a compassionate, patient-centered approach to medical
                care and support for patients and families facing end-of-life
                issues.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} sm={12}>
          <Card className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer">
            <div className="mt-5 mb-4 serviceRotateConainer">
              <div className="servicesChild1 yellowCardBgColor"></div>
              <div className="d-flex justify-content-center align-items-center servicesChild2 yellowCardColor">
                <FaClinicMedical size={40} color="white" />
              </div>
            </div>

            <Card.Body className="text-center">
              <Card.Title
                className="baloo2-bold cardTitleUnderline"
                as={Link}
                to={"/homehealth"}
              >
                Home Health
              </Card.Title>
              <Card.Text className="mt-3 mb-4 serviceParaText">
                Providing the elderly, those with disabilities, injury or
                illness the option to remain at home safely. We are here to
                offer you a caring hand at home.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} sm={12}>
          <Card className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer">
            <div className="mt-5 mb-4 serviceRotateConainer">
              <div className="d-flex justify-content-center align-items-center servicesChild1 blueCardBgColor"></div>
              <div className="d-flex justify-content-center align-items-center servicesChild2 blueCardColor">
                <FaHandHoldingMedical size={40} color="white" />
              </div>
            </div>

            <Card.Body className="text-center">
              <Card.Title
                className="baloo2-bold cardTitleUnderline"
                as={Link}
                to={"/palliative"}
              >
                Palliative
              </Card.Title>
              <Card.Text className="mt-3 mb-4 serviceParaText">
                Palliative helps you gain the strength to carry on and helps you
                take more control over your care by improving your understanding
                of the choices for treatment available.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} sm={12}>
          <Card className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer">
            <div className="mt-5 mb-4 serviceRotateConainer">
              <div className="d-flex justify-content-center align-items-center servicesChild1 purpleCardBgColor"></div>
              <div className="d-flex justify-content-center align-items-center servicesChild2 purpleCardColor">
                <FaHospitalUser size={40} color="white" />
              </div>
            </div>
            <Card.Body className="text-center">
              <Card.Title
                className="baloo2-bold cardTitleUnderline"
                as={Link}
                to={"/bridge-program"}
              >
                Bridge Program
              </Card.Title>
              <Card.Text className="mt-3 mb-4 serviceParaText">
                The Bridge Program is a patient centered resource that mainly
                focuses on bridging the gap between home health and hospice
                care.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* <Col lg={12} sm={12}>
          <div className="pot">
            <Image
              src={require("../../../assets/images/dark-logo-1-1.png")}
              width={300}
              height={300}
            />
          </div>
        </Col> */}
      </Row>
    </Container>
  );
};

export default Services;
