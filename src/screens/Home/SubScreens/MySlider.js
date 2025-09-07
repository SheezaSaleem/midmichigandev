import React, { useContext } from "react";
import { Button, Card, Carousel, Col, Image, Row } from "react-bootstrap";
import AppContext from "../../../context/AppContext";

const MySlider = () => {
  const { isDesktopOrLaptop } = useContext(AppContext);

  return (
    <div>
      <Carousel controls={true} fade={true} indicators={false} style={{ position: "relative" }}>
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
          // position: "absolute",
          // bottom: isDesktopOrLaptop ? -200 : -60,
          // right: 0,
          // left: 0,
          // zIndex: 1,

          position: "absolute",
          bottom: isDesktopOrLaptop ? -200 : 200,
          // top: isDesktopOrLaptop ? 0 : 100,
          right: -1,
          left: isDesktopOrLaptop ? 0 : 30,
          zIndex: 1,
        }}
      >
        <Col lg={5} sm={0}></Col>
        <Col lg={7} sm={12}>
          <Card
            className="mr-1 shadow"
            style={{
              height: isDesktopOrLaptop ? "60vh" : "35vh",
              backgroundColor: "rgba(255, 255, 255, 1)",
              // zIndex: 1
            }}
          >
            <Card.Body className="d-flex flex-column justify-content-center align-items-start">
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
              <svg
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "center",
                  backgroundPositionY: "center",
                  backgroundSize: "cover",
                  width: isDesktopOrLaptop ? 900 : 362,
                  display: "block",
                  position: "absolute",
                  left: isDesktopOrLaptop ? -2 : -1,
                  bottom: isDesktopOrLaptop ? -130 : -70,
                  strokeWidth: 0.02,
                  stroke: "#000",
                }}
                viewBox="0 0 100 25"
                transform="rotate(180)"
              >
                <path
                  height={isDesktopOrLaptop ? 200 : 50}
                  width={"100%"}
                  fill="#D6575A"
                  opacity="0.3"
                  d="M0 30 V15 Q30 3 60 15 V30z"
                />
                <path
                  height={isDesktopOrLaptop ? 200 : 50}
                  width={"100%"}
                  fill="#fff"
                  d="M0 30 V12 Q30 17 55 12 T100 11 V30z"
                />
              </svg>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default MySlider;
