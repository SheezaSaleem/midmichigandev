import React, { useContext } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import AppContext from "../../../context/AppContext";
import healthCareImage from "../../../assets/images/resources/faq-1-1.png";

const HealthCare = () => {
  const { isDesktopOrLaptop } = useContext(AppContext);

  return (
    <div className="pt-5 px-5 healthCareContainer">
      <Row>
        <Col lg={6} sm={6} className="healthCareTextCont">
          {"\u2B24"} Do you need a helping hand with at home medical care? Do
          you or someone you love need home health care while recovering from or
          living with an illness?
          <br />
          {"\u2B24"} It isn’t always easy for us to take care of our loved ones
          ourselves while balancing our busy schedules.
          <br />
          {"\u2B24"} Home Health Care providers are certified experts in health
          care. Our team is made up of experienced practitioners including
          nurses and physical therapists to help with your medical care needs.
          <br />
          {"\u2B24"} The home health care provider will travel to the patient’s
          home to provide the medical care they need based on their doctor’s
          orders. You can trust that your loved ones are in good hands.
          <br />
          {"\u2B24"} Choosing home health care services will allow them to
          receive the same level of care that they would in a hospital. You will
          be able to breathe easy knowing they are safe and well taken care of
          in their own home. We want to help your loved ones get better.
          <br />
          {"\u2B24"} Our homecare service allows patients to maintain their
          independence and continue to live with the quality of life that they
          are used to.
          <br />
          {/* <Button
            className="ms-auto"
            style={{
              width: isDesktopOrLaptop ? "30%" : "50%",
              height: isDesktopOrLaptop ? 55 : 35,
              borderRadius: 150,
              backgroundColor: "#d6575a",
              border: "none",
              marginTop: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            href="tel:877-732-9528"
          >
            Call Now
          </Button> */}
        </Col>
        <Col lg={1} sm={1} />
        <Col lg={5} sm={5}>
          <Image
            src={healthCareImage}
            className=""
            style={{
              height: isDesktopOrLaptop ? 500 : 300,
              width: isDesktopOrLaptop ? 500 : 300,
              objectFit: "contain",
            }}
            alt="Elderly man in a wheelchair with nurse behind him, smiling and enjoying time together"
          />
        </Col>
      </Row>
    </div>
  );
};

export default HealthCare;
