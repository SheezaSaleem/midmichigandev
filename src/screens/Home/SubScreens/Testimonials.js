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
        className="py-5 px-5 testimonialsImage"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Row>
          <Col lg={6} sm={12}>
            <Card className="border-0 testimonialCard">
              <Card.Body
                style={{
                  width: isDesktopOrLaptop ? "95%" : "",
                }}
                className="px-5 pt-5 flex-column testimonialCardBody"
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
                <Card.Text className="my-4">
                  {isDesktopOrLaptop ? (
                    <h5>
                      <i>
                        "Thank you for your support during these trying times!
                        We are comforted knowing she is now at peace"
                      </i>
                    </h5>
                  ) : (
                    <h6>
                      <i>
                        "Thank you for your support during these trying times!
                        We are comforted knowing she is now at peace"
                      </i>
                    </h6>
                  )}
                </Card.Text>
                <h5 className="mt-3 mb-4 baloo2-bold ms-auto testimonialText">
                  A Satisfied Family
                </h5>

                <Image src={myborderImage} className="testimonialBorderImage" />
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
