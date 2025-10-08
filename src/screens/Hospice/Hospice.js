import { useContext } from "react";
import { FaUserNurse } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import headerImage from "../../assets/images/background/page-header-team-1.jpg";
import headerImageTwo from "../../assets/images/background/hospiceBgTwo.webp";
import headerImageThree from "../../assets/images/background/hospiceBgThree.webp";
import StaticHeader from "../../components/StaticHeader/StaticHeader";
import MasterLayout from "../../layouts/MasterLayout";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";
import HospiceServiceCard from "../../components/Cards/HospiceServiceCard";
import AppContext from "../../context/AppContext";
import HospiceCareTeamCard from "../../components/Cards/HospiceCareTeamCard";

const Hospice = () => {
  const { isDesktopOrLaptop } = useContext(AppContext);

  return (
    <MasterLayout>
      <StaticHeader
        headerImage={headerImage}
        screenName={"Hospice"}
        altText="Smiling female volunteer playing chess with senior man in bright living room"
      />
      <Container>
        <Row>
          <Col sm={12}>
            <h1 className="baloo2-extraBold text-center mt-5">About Hospice</h1>
            <p className="poppins-regular">
              Hospice is about life! Living each day to its fullest - even in
              the face of a life limiting illness or accident. Hospice is a
              compassionate, patient-centered approach to medical care and
              support for patients and families facing end-of-life issues. It is
              a philosophy of care rather than a place. It’s meeting a patient
              wherever they call home- be it in their family home, long-term
              care facility, assisted living facility or in a hospital setting.
              Our mission here at Mid-Michigan is to empower patients and family
              by maintaining dignity, optimizing quality of life and by
              providing the physical, emotional and spiritual care required to
              live comfortably. Our ongoing support is provided to patients and
              their loved ones for as long as it is needed.
            </p>
            <p className="poppins-regular">
              We believe that hospice care should be available to any and all
              qualifying persons. Currently however,{" "}
              <b>
                <i>
                  only 1 in 3 people eligible for hospice services receive it
                </i>
              </b>{" "}
              - even though these services are fully covered by medicare,
              medicaid and most commercial insurance plans. Insurances we accept
              include Blue Cross Blue Shield, HAP, Blue Care Network Advantage,
              Humana, Medicare and Medicare + Advantage. These services include
              medical supplies, equipment related to the patient’s hospice
              diagnosis and all medications. Thanks to our generous donors, we
              are able to provide care to all persons regardless of their
              ability to pay.
            </p>
          </Col>
        </Row>
      </Container>

      {/* <div
        style={{
          backgroundImage: `url(${headerImageTwo})`,
          marginTop: 50,
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="p-5"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            width: "100%",
            marginTop: 50,
          }}
        > */}
      <h1 className="baloo2-extraBold text-center mt-5">Our Services</h1>
      <Container>
        <Row>
          {/* <HospiceServiceCard cardTitle={"24/7 personalized care"} />
          <HospiceServiceCard cardTitle={"Comprehensive medical care"} /> */}
          <Col md={3} sm={12}>
            <Card
              // style={{ paddingBottom: 30 }}
              className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
            >
              <Card.Body className={`text-center`}>
                <Card.Title className={`baloo2-bold`}>
                  24/7 personalized <br /> care
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12}>
            <Card
              // style={{ paddingBottom: 30 }}
              className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
            >
              <Card.Body className={`text-center`}>
                <Card.Title className={`baloo2-bold`}>
                  Comprehensive medical <br /> care
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <HospiceServiceCard
            cardTitle={"Coordination of community resources"}
          />
          <HospiceServiceCard
            cardTitle={"Legacy and special memories program"}
          />
          <HospiceServiceCard
            cardTitle={"Collaboration with veteran programs"}
          />
          <HospiceServiceCard
            cardTitle={"Volunteers that provide companionship"}
          />
          <HospiceServiceCard
            cardTitle={"Education for the family and caregivers"}
          />
          <HospiceServiceCard
            cardTitle={"Medications related to hospice diagnosis"}
          />
          <HospiceServiceCard
            cardTitle={"Diet, massage, art, music and pet therapies"}
          />
          <HospiceServiceCard
            cardTitle={"Assistance with personal care and activities"}
          />
          <HospiceServiceCard
            cardTitle={"Continuity of care from home health to hospice"}
          />
          <HospiceServiceCard
            cardTitle={"Highly experienced social workers and nurses"}
          />
          <HospiceServiceCard
            cardTitle={"Medical supplies and equipment that promotes dignity"}
          />
          <HospiceServiceCard
            cardTitle={"Lifetime bereavement services for family and friends"}
          />
          <HospiceServiceCard
            cardTitle={
              "Emotional and spiritual support for the patient and family"
            }
          />
        </Row>
      </Container>
      {/* </div>
      </div> */}

      <div
        style={{
          backgroundImage: `url(${headerImageThree})`,
          marginTop: 50,
          height: "50vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        aria-label="Close-up of caregiver holding elderly person’s hands for support and comfort"
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            height: "50vh",
            width: "100%",
          }}
        >
          <h1 className="baloo2-extraBold text-center text-light">
            We offer 24/7 care: medication changes, supplies, physician and
            nurse availability.
          </h1>
        </div>
      </div>

      <Container className="py-5 aboutContainer">
        <Row>
          <Col lg={6} sm={12}>
            {/* <h5 className="my-3 baloo2-bold aboutus">FAQ</h5> */}
            <h1
              style={{ width: isDesktopOrLaptop ? "75%" : "100%" }}
              className="my-4 baloo2-extraBold"
            >
              Frequently Asked Questions
            </h1>
            <p
              className="mb-5 aboutPara"
              style={{
                width: isDesktopOrLaptop ? "80%" : "100%",
              }}
            >
              Our goal each day is to ensure that our residents’ needs are not
              only met but exceeded. To make that happen, we are committed to
              providing an environment in which residents can enjoy a wide range
              of amenities that allow them to feel independent.
            </p>
          </Col>
          <Col lg={6} sm={12} className="aboutBgImage">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="baloo2-bold">
                  Volunteer
                </Accordion.Header>
                <Accordion.Body>
                  Become a volunteer and make a difference. Are you someone who
                  is compassionate, caring, and friendly? Do you genuinely love
                  helping people in need? Every volunteer at Mid-Michigan
                  Homecare & Hospice has a powerful impact on every patient’s
                  life. They also bring comfort to family members and loved one
                  who may be going through difficult times.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className="baloo2-bold">
                  Do I Need Special Skills?
                </Accordion.Header>
                <Accordion.Body>
                  You do not need special skills or training to become a
                  volunteer. The most important thing is that you have love and
                  understanding to bring our patients. Being able to listen and
                  provide a helping hand to people from all difference
                  backgrounds and life-experiences will make you a great
                  volunteer. It’s important to remember that you will be an
                  environment where people are experiencing some of the hardest
                  times of their lives. Be prepared to assist with fear and
                  loss. It’s also very important to keep patients’ personal
                  information private. It’s not an easy task, but it’s extremely
                  rewarding.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className="baloo2-bold">
                  What Will I Be Doing?
                </Accordion.Header>
                <Accordion.Body>
                  Volunteers are an important part of our hospice team.
                  Everything from making phone calls to patients and families,
                  making blankets, sending cards, playing music, to just being a
                  friendly visitor. Any way you can help will make a difference.
                  Click below to apply or email us to inquire more.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </MasterLayout>
  );
};

export default Hospice;
