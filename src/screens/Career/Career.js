import React, { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import AppContext from "../../context/AppContext";
import MasterLayout from "../../layouts/MasterLayout";
import StaticHeader from "../../components/StaticHeader/StaticHeader";
import headerImage from "../../assets/images/background/page-header-living-1.jpg";

const Career = () => {
  const { isDesktopOrLaptop } = useContext(AppContext);

  return (
    <MasterLayout>
      <StaticHeader
        headerImage={headerImage}
        screenName={"Career"}
        altText={
          "Compassionate caregiver supporting happy senior woman in wheelchair at home"
        }
      />
      <Container className="careerContainer">
        <Row>
          <Col lg={12} sm={12}>
            <h5 className="my-3 baloo2-bold aboutus text-center">
              Career Opportunity
            </h5>
            <h1 className="my-4 baloo2-extraBold text-center">
              Build Career with Mid Michigan
            </h1>
            <p className="mb-5 careerPara">
              At <b style={{ color: "black" }}>Mid Michigan</b> we are looking
              for people to join our team who understand that our approach to
              patient care includes a team of talented, teachable, and valuable
              caregivers who embody the character qualities of PURPOSE, PASSION,
              AND PRESENCE. Our PURPOSE is to selflessly provide medical,
              emotional and spiritual care for our patients/families with
              expertise, compassion, and professionalism. Our PASSION is to
              empower our patients/families to live their best lives in the face
              of very trying circumstances. Our PRESENCE is to be consistent,
              calming and empathetic.
            </p>
          </Col>
        </Row>
      </Container>

      <div className="careerContainerImage">
        <div className="careerInnerContainer">
          {/* <h5 className="my-3 baloo2-bold jobHeading">Apply for Job</h5> */}
          <h1 className="mt-3 mb-5 baloo2-extraBold text-center">
            Apply for Mid Michigan Home, Health & Hospice
          </h1>

          {/* BEGIN CAREER PLUG EMBED CODE */}
          <iframe
            id="cpatsframe"
            src="https://mid-michigan-home-health-hospice.careerplug.com/?embed=1"
            width="100%"
            height={800}
            scrolling="yes"
            frameBorder={0}
            allowTransparency="true"
            style={{ position: "relative" }}
            key={"/career"}
          >
            Sorry, iframes are not supported.
          </iframe>
          {/* END CAREER PLUG EMBED CODE */}
        </div>
      </div>
    </MasterLayout>
  );
};

export default Career;
