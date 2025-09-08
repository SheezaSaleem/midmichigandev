import React, { useContext } from "react";
import backgroundImage from "../../../assets/images/background/testimonials-1-bg-1-1.jpg";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import AppContext from "../../../context/AppContext";
import myborderImage from "../../../assets/images/shapes/slider-bg-curve-1-1.png";

const Testimonials = () => {
  const { isDesktopOrLaptop } = useContext(AppContext);

  return (
    <div>
      <div
        className="py-5 px-5"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "right",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          position: "relative",
        }}
      >
        <Row>
          <Col lg={6} sm={12}>
            <Card
              className="border-0"
              style={{
                height: isDesktopOrLaptop ? "45vh" : "45vh",
                backgroundColor: "rgba(255, 255, 255, 1)",
              }}
            >
              <Card.Body
                style={{
                  position: "relative",
                  width: isDesktopOrLaptop ? "95%" : "",
                }}
                className="px-5 pt-5 d-flex flex-column justify-content-center align-items-start"
              >
                {isDesktopOrLaptop ? (
                  <h1 className="baloo2-bold">
                    What Our Clients Say About Mid Michigan?
                  </h1>
                ) : (
                  <h4 className="baloo2-bold">
                    What Our Clients Say About Mid Michigan?
                  </h4>
                )}
                <Card.Text className="my-3">
                  <i>
                    "Thank you for your support during these trying times! We
                    are comforted knowing she is now at peace"
                  </i>
                </Card.Text>
                <h5
                  className="mt-3 mb-4 baloo2-bold ms-auto"
                  style={{ color: "#D6575A" }}
                >
                  A Satisfied Family
                </h5>
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
          <Col lg={6} sm={0}></Col>
        </Row>
      </div>
    </div>
  );
};

export default Testimonials;
