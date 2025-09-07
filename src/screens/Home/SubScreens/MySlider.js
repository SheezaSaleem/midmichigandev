import React, { useContext } from "react";
import { Button, Card, Carousel, Col, Image, Row } from "react-bootstrap";
import AppContext from "../../../context/AppContext";
import myborderImage from "../../../assets/images/shapes/slider-bg-curve-1-1.png";
// import myborderImage from "../../../assets/images/shapes/torn.png";
const MySlider = () => {
  const { isDesktopOrLaptop } = useContext(AppContext);

  return (
    <div style={{ position: "relative" }}>
      <Carousel
        controls={true}
        fade={true}
        indicators={false}
        style={{ position: "relative" }}
      >
        <Carousel.Item>
          <Image
            src={require("../../../assets/images/main-slider/main-slider-1-1.jpg")}
            style={{ height: isDesktopOrLaptop ? "auto" : 400 }}
          />
          {/* <Carousel.Caption style={{ width: "85%" }}></Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>

      <Row
        style={{
          position: "absolute",
          bottom: -100,
          right: 0,
          left: isDesktopOrLaptop ? 0 : 30,
          zIndex: 1,
          borderBottom: 100,
        }}
      >
        <Col lg={5} sm={0}></Col>
        <Col lg={7} sm={12}>
          <Card
            className="mr-1 border-0"
            style={{
              height: isDesktopOrLaptop ? "35vh" : "35vh",
              backgroundColor: "rgba(255, 255, 255, 1)",
            }}
          >
            <Card.Body
              style={{ position: "relative" }}
              className="d-flex flex-column justify-content-center align-items-start"
            >
              {isDesktopOrLaptop ? (
                <h1 className="poppins-bold" style={{ textAlign: "left" }}>
                  Home Health & Hospice Care
                </h1>
              ) : (
                <h4 className="poppins-bold" style={{ textAlign: "left" }}>
                  Home Health & Hospice Care
                </h4>
              )}
              <Card.Text
                style={{
                  textAlign: "left",
                  marginTop: isDesktopOrLaptop ? 30 : 10,
                  marginBottom: isDesktopOrLaptop ? 30 : 10,
                }}
              >
                We strive to empower the patient and family by providing them
                with the tools, information, and assistance they need to make
                informed decisions.
              </Card.Text>
              <Button
                style={{
                  width: isDesktopOrLaptop ? "30%" : "50%",
                  height: isDesktopOrLaptop ? 55 : 35,
                  borderRadius: 150,
                  backgroundColor: "#D6575A",
                  border: "none",
                }}
              >
                Let's Talk
              </Button>
              <Image
                src={myborderImage}
                style={{
                  height: "100%",
                  position: "absolute",
                  width: "100%",
                  left: 0,
                  bottom: -30,
                  zIndex: -10,
                }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default MySlider;
