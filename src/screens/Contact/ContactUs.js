import React, { useContext } from "react";
import MasterLayout from "../../layouts/MasterLayout";
import StaticHeader from "../../components/StaticHeader/StaticHeader";
import headerImage from "../../assets/images/main-slider/main-slider-5-2.jpg";
import { Card, Col, Container, Row } from "react-bootstrap";
import AppContext from "../../context/AppContext";
import { IoHome } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { MdOutlineFax } from "react-icons/md";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

const ContactUs = () => {
  const { isDesktopOrLaptop } = useContext(AppContext);
  const position = { lat: 53.54992, lng: 10.00678 };

  return (
    <MasterLayout>
      <StaticHeader screenName={"Contact Us"} headerImage={headerImage} />

      <Container style={{ maxWidth: 1200 }}>
        <div className="mt-5 text-center">
          <h3 className="baloo2-extraBold mb-3">Get in Touch</h3>
        </div>
        <Row className="pb-5 mb-5">
          <Col lg={4} sm={12} style={{ position: "relative" }}>
            <Card
              className="shadow palliativeBenefitsCard"
              style={{ paddingLeft: 30, paddingRight: 30 }}
            >
              <div className="mt-5 mb-4 serviceRotateConainer">
                <div className="servicesChild1 redCardBgColor"></div>
                <div className="servicesChild2 redCardColor">
                  <LuMapPin size={40} color="white" />
                </div>
              </div>

              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold mb-3">Address</Card.Title>
                <p>1020 Professional Drive, Flint, MI 48532</p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} sm={12} style={{ position: "relative" }}>
            <Card
              className="shadow palliativeBenefitsCard"
              style={{ paddingBottom: 25, paddingLeft: 30, paddingRight: 30 }}
            >
              <div className="mt-5 mb-4 serviceRotateConainer">
                <div className="servicesChild1 yellowCardBgColor"></div>
                <div className="servicesChild2 yellowCardColor">
                  <FiPhone size={35} color="white" />
                </div>
              </div>

              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold mb-3">
                  Phone Number
                </Card.Title>
                <p>(877) 732-9528</p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} sm={12} style={{ position: "relative" }}>
            <Card
              className="shadow palliativeBenefitsCard"
              style={{ paddingBottom: 25, paddingLeft: 30, paddingRight: 30 }}
            >
              <div className="mt-5 mb-4 serviceRotateConainer">
                <div className="servicesChild1 blueCardBgColor"></div>
                <div className="servicesChild2 blueCardColor">
                  <MdOutlineFax size={40} color="white" />
                </div>
              </div>

              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold mb-3">Fax Number</Card.Title>
                <p>(810) 732-9548</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div className="contact-one">
        <Container>
          <div className="block-title text-center">
            <h3 className="baloo2-extraBold mb-5">Contact Us</h3>
          </div>
          <form action="" className="contact-one__form">
            <Row>
              <Col md={6}>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  value={""}
                  placeholder="First Name"
                  autoComplete="off"
                  required
                  aria-label="First Name"
                />
              </Col>
              <Col md={6}>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  value={""}
                  placeholder="Last Name"
                  autoComplete="off"
                  required
                  aria-label="Last Name"
                />
              </Col>
              <Col md={6}>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={""}
                  placeholder="Phone Number"
                  autoComplete="off"
                  required
                  aria-label="Phone Number"
                />
              </Col>
              <Col md={6}>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={""}
                  placeholder="Email"
                  autoComplete="off"
                  required
                  aria-label="Email Address"
                />
              </Col>
              <Col md={12}>
                <textarea
                  name="message"
                  id="message"
                  value={""}
                  placeholder="Message"
                  defaultValue={""}
                  autoComplete="off"
                  required
                  aria-label="Your message"
                />
              </Col>
              <Col md={12} className="text-center">
                <button type="submit" className="thm-btn contact-one__btn">
                  Send Message
                </button>
              </Col>
            </Row>
          </form>
        </Container>
      </div>

      {/* <Container style={{ maxWidth: 1200 }}>
        <div className="mt-5 text-center">
          <h3 className="baloo2-extraBold mb-3">Our Location</h3>
        </div>

        <APIProvider apiKey={"YOUR API KEY HERE"}>
          <Map defaultCenter={position} defaultZoom={10} mapId="DEMO_MAP_ID">
            <AdvancedMarker position={position} />
          </Map>
        </APIProvider>
      </Container> */}
    </MasterLayout>
  );
};

export default ContactUs;
