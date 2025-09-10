import React, { useContext } from "react";
import { Button, Card, Carousel, Col, Image, Row } from "react-bootstrap";
import AppContext from "../../../context/AppContext";
import myborderImage from "../../../assets/images/shapes/slider-bg-curve-1-1.png";

const MySlider = () => {
  const { isDesktopOrLaptop } = useContext(AppContext);

  return (
    <div className="sliderContainer">
      <Carousel
        controls={true}
        fade={true}
        indicators={false}
        className="carousalContainer"
      >
        <Carousel.Item>
          <Image
            src={require("../../../assets/images/main-slider/main-slider-1-1.jpg")}
            style={{ height: isDesktopOrLaptop ? "auto" : 400 }}
          />
        </Carousel.Item>
      </Carousel>

      <Row
        className="sliderCardContainer"
        style={{ left: isDesktopOrLaptop ? 0 : 30 }}
      >
        <Col lg={5} sm={0}></Col>
        <Col lg={7} sm={12}>
          <Card
            className="mr-1 border-0 sliderCard"
            style={{
              height: isDesktopOrLaptop ? "35vh" : "35vh",
            }}
          >
            <Card.Body
              className="px-5 pt-5 d-flex flex-column justify-content-center align-items-start sliderCardBody"
              style={{
                width: isDesktopOrLaptop ? "75%" : "",
              }}
            >
              {isDesktopOrLaptop ? (
                <h1 className="baloo2-bold">
                  Finding the Best Senior Care Services
                </h1>
              ) : (
                <h4 className="baloo2-bold">
                  Finding the Best Senior Care Services
                </h4>
              )}
              <Card.Text className="mb-3">
                We strive to empower the patient and family by providing them
                with the tools, information, and assistance they need to make
                informed decisions.
              </Card.Text>
              <Button
                style={{
                  width: isDesktopOrLaptop ? "30%" : "50%",
                  height: isDesktopOrLaptop ? 55 : 35,
                  borderRadius: 150,
                  backgroundColor: "#d6575a",
                  border: "none",
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                href="tel:877-732-9528"
              >
                Let's Talk
              </Button>

              <Image className="sliderBorderImage" src={myborderImage} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default MySlider;
