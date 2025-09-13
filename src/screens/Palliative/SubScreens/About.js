import React, { useContext } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { FaCircleCheck } from "react-icons/fa6";
import AppContext from "../../../context/AppContext";
import aboutImage from "../../../assets/images/resources/about-2-1.png";
import dot1 from "../../../assets/images/shapes/about-2-dot-1.png";
import dot2 from "../../../assets/images/shapes/about-2-dot-2.png";

const About = () => {
  const { isDesktopOrLaptop } = useContext(AppContext);

  return (
    <Container className="py-5 palliativeAboutContainer">
      <Row>
        <Col lg={6} sm={12}>
          <h5 className="my-3 baloo2-bold palliativeAboutUs">
            About Palliative
          </h5>
          <h1
            style={{ width: isDesktopOrLaptop ? "75%" : "100%" }}
            className="my-4 baloo2-extraBold"
          >
            Best Palliative Care Center with Love
          </h1>
          <p
            className="mb-5 palliativeAboutPara"
            style={{
              width: isDesktopOrLaptop ? "80%" : "100%",
            }}
          >
            Palliative care is about improving quality of life. It is
            collaborative healthcare to treat people suffering from many serious
            disease types and chronic illnesses including cancer, congestive
            heart failure (CH F), chronic obstructive pulmonary disease (COPD),
            dementia, Alzheimer's, Parkinson's, kidney failure, amyotrophic
            lateral sclerosis (ALS) and many more.
            <br />
            <br />
            Focusing on the symptoms of both the disease and the treatment,
            palliative care helps with a wide range of issues including pain,
            anxiety, depression, fatigue, shortness of breath, nausea, loss of
            appetite, constipation, and difficulty sleeping. It also helps you
            gain the strength to carry on with daily life, improves your ability
            to tolerate medical treatments and helps you take more control over
            your care by improving your understanding of the choices for
            treatment available.
          </p>
        </Col>
        {/* <Col lg={6} sm={12} style={{ position: "relative" }}>
          <Image
            src={dot1}
            className="dot1Img"
          />
          <Image
            src={dot2}
            className="dot2Img"
          />
          <Image
            src={aboutImage1}
            className="aboutImg"
            style={{
              height: isDesktopOrLaptop ? "auto" : 378,
              width: isDesktopOrLaptop ? "auto" : 378,
              objectFit: "contain"
            }}
          />
          <div
            className="aboutImgContent shadow-lg"
            style={{ bottom: isDesktopOrLaptop ? 30 : -130, right: 10 }}
          >
            <p>
              We will continuously modify your care plan to meet your changing
              needs and consult with you about key aspects of your illness
              including symptoms and their relief, functional changes,
              psychological concerns, social issues, disease progression and
              prognosis.
            </p>
          </div>
        </Col> */}

        {/* <Col
          lg={6}
          sm={12}
          style={{ position: "relative" }}
          // className="bg-primary"
        >
          <Image
            src={dot1}
            style={{ position: "absolute", right: 0, top: 0 }}
          />
          <Image
            src={dot2}
            style={{ position: "absolute", left: 0, bottom: 0 }}
          />
          <Image
            src={aboutImage}
            style={{
              position: "absolute",
              height: isDesktopOrLaptop ? "auto" : "auto",
              width: isDesktopOrLaptop ? "auto" : "auto",
              objectFit: "contain",
            }}
          />
          <Card
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              height: isDesktopOrLaptop ? 280 : 200,
              width: isDesktopOrLaptop ? 380 : 300,
              // backgroundColor: "yellow",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 30,
              paddingRight: 30,
              // paddingTop: 20,
              // paddingBottom: 20
            }}
          >
            <p>
              We will continuously modify your care plan to meet your changing
              needs and consult with you about key aspects of your illness
              including symptoms and their relief, functional changes,
              psychological concerns, social issues, disease progression and
              prognosis.
            </p>
          </Card>
        </Col> */}

        <Col lg={6} sm={12}>
          <div className="aboutImgContainer">
            <Image
              src={require("../../../assets/images/shapes/about-2-dot-1.png")}
              className="dot1Img"
              alt
            />
            <Image
              src={require("../../../assets/images/shapes/about-2-dot-2.png")}
              className="dot2Img"
              alt
            />
            <Image
              src={require("../../../assets/images/resources/about-2-1.png")}
              alt
              className="aboutImg"
            />
            <div className="aboutImgContent shadow">
              <p>
                We will continuously modify your care plan to meet your changing
                needs and consult with you about key aspects of your illness
                including symptoms and their relief, functional changes,
                psychological concerns, social issues, disease progression and
                prognosis.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
