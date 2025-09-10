import { FaUserNurse } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import headerImage from "../../assets/images/background/hospiceBg.webp";
import headerImageTwo from "../../assets/images/background/hospiceBgTwo.webp";
import headerImageThree from "../../assets/images/background/hospiceBgThree.webp";
import StaticHeader from "../../components/StaticHeader/StaticHeader";
import MasterLayout from "../../layouts/MasterLayout";

import { Card, Col, Container, Row } from "react-bootstrap";

const Hospice = () => {
  return (
    <MasterLayout>
      <StaticHeader headerImage={headerImage} screenName={"Hospice"} />
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

      <div
        style={{
          backgroundImage: `url(${headerImageTwo})`,
          marginTop: 50,
          // height: "100vh",
          width: "100%",

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="p-5"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            // height: "100vh",
            width: "100%",
          }}
        >
          <h1 className="baloo2-extraBold text-center text-light mt-5">
            Our Services
          </h1>
          <Container>
            <Row>
              <Col md={3} sm={12}>
                <Card
                  style={{ height: "15vh" }}
                  className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
                >
                  <Card.Body className="text-center">
                    <Card.Title className="baloo2-bold">
                      24/7 personalized care
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} sm={12}>
                <Card
                  style={{ height: "15vh" }}
                  className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
                >
                  <Card.Body className="text-center">
                    <Card.Title className="baloo2-bold">
                      Continuity of care from home health to hospice
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} sm={12}>
                <Card
                  style={{ height: "15vh" }}
                  className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
                >
                  <Card.Body className="text-center">
                    <Card.Title className="baloo2-bold">
                      Comprehensive medical care
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} sm={12}>
                <Card
                  style={{ height: "15vh" }}
                  className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
                >
                  <Card.Body className="text-center">
                    <Card.Title className="baloo2-bold">
                      Medications related to hospice diagnosis
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} sm={12}>
                <Card
                  style={{ height: "15vh" }}
                  className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
                >
                  <Card.Body className="text-center">
                    <Card.Title className="baloo2-bold">
                      Medical supplies and equipment that promotes dignity
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} sm={12}>
                <Card
                  style={{ height: "15vh" }}
                  className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
                >
                  <Card.Body className="text-center">
                    <Card.Title className="baloo2-bold">
                      Assistance with personal care and activities
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} sm={12}>
                <Card
                  style={{ height: "15vh" }}
                  className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
                >
                  <Card.Body className="text-center">
                    <Card.Title className="baloo2-bold">
                      Emotional and spiritual support for the patient and family
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} sm={12}>
                <Card
                  style={{ height: "15vh" }}
                  className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
                >
                  <Card.Body className="text-center">
                    <Card.Title className="baloo2-bold">
                      Coordination of community resources
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} sm={12}>
                <Card
                  style={{ height: "15vh" }}
                  className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
                >
                  <Card.Body className="text-center">
                    <Card.Title className="baloo2-bold">
                      Legacy and special memories program
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} sm={12}>
                <Card
                  style={{ height: "15vh" }}
                  className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
                >
                  <Card.Body className="text-center">
                    <Card.Title className="baloo2-bold">
                      Volunteers that provide companionship
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} sm={12}>
                <Card
                  style={{ height: "15vh" }}
                  className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
                >
                  <Card.Body className="text-center">
                    <Card.Title className="baloo2-bold">
                      Social Worker and nurses on staff with 15+ years
                      experience
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} sm={12}>
                <Card
                  style={{ height: "15vh" }}
                  className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
                >
                  <Card.Body className="text-center">
                    <Card.Title className="baloo2-bold">
                      Lifetime bereavement services for family and friends
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} sm={12}>
                <Card
                  style={{ height: "15vh" }}
                  className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
                >
                  <Card.Body className="text-center">
                    <Card.Title className="baloo2-bold">
                      Diet, massage, art, music and pet therapies
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} sm={12}>
                <Card
                  style={{ height: "15vh" }}
                  className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
                >
                  <Card.Body className="text-center">
                    <Card.Title className="baloo2-bold">
                      Collaboration with veteran programs
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} sm={12}>
                <Card
                  style={{ height: "15vh" }}
                  className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
                >
                  <Card.Body className="text-center">
                    <Card.Title className="baloo2-bold">
                      Education for the family and caregivers
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* WHO CAN BENEFIT US SECTION */}
      <h1 className="baloo2-extraBold text-center mt-5">
        Our Hospice Care Team
      </h1>
      <Container>
        <Row className="mt-5 mb-5">
          <Col lg={3} sm={12}>
            <Card
              style={{ height: "50vh" }}
              className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
            >
              <div className="mt-5 mb-4 serviceRotateConainer">
                <div className="servicesChild1 redCardBgColor"></div>
                <div className="d-flex justify-content-center align-items-center servicesChild2 redCardColor">
                  <FaUserDoctor size={40} color="white" />
                </div>
              </div>

              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold">
                  Family Physician
                </Card.Title>
                <Card.Text className="mt-3 mb-4 serviceParaText">
                  The family physician is responsible for approving and
                  overseeing the patient’s plan of care.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} sm={12}>
            <Card
              style={{ height: "50vh" }}
              className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
            >
              <div className="mt-5 mb-4 serviceRotateConainer">
                <div className="d-flex justify-content-center align-items-center servicesChild1 yellowCardBgColor"></div>
                <div className="d-flex justify-content-center align-items-center servicesChild2 yellowCardColor">
                  <FaUserDoctor size={40} color="white" />
                </div>
              </div>

              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold">
                  Hospice Medical Director
                </Card.Title>
                <Card.Text className="mt-3 mb-4 serviceParaText">
                  The Hospice Medical Director is a physician who specializes in
                  hospice and palliative care. They may also serve as the
                  patient’s family physician if needed.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} sm={12}>
            <Card
              style={{ height: "50vh" }}
              className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
            >
              <div className="mt-5 mb-4 serviceRotateConainer">
                <div className="d-flex justify-content-center align-items-center servicesChild1 blueCardBgColor"></div>
                <div className="d-flex justify-content-center align-items-center servicesChild2 blueCardColor">
                  <FaUserNurse size={40} color="white" />
                </div>
              </div>
              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold">
                  Registered Nurse
                </Card.Title>
                <Card.Text className="mt-3 mb-4 serviceParaText">
                  The hospice RN serves as the patient’s case manager. The nurse
                  is responsible for the patient’s physical comfort and making
                  recommendations to the family physician regarding pain and
                  symptom management.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} sm={12}>
            <Card
              style={{ height: "50vh" }}
              className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
            >
              <div className="mt-5 mb-4 serviceRotateConainer">
                <div className="d-flex justify-content-center align-items-center servicesChild1 purpleCardBgColor"></div>
                <div className="d-flex justify-content-center align-items-center servicesChild2 purpleCardColor">
                  <FaUserNurse size={40} color="white" />
                </div>
              </div>
              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold">
                  Certified Nursing Assistant
                </Card.Title>
                <Card.Text className="mt-3 mb-4 serviceParaText">
                  The CNA, working under the supervision of the hospice RN, is
                  responsible for providing assistance with the patient’s
                  personal care.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} sm={12}>
            <Card
              style={{ height: "50vh" }}
              className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
            >
              <div className="mt-5 mb-4 serviceRotateConainer">
                <div className="servicesChild1 redCardBgColor"></div>
                <div className="d-flex justify-content-center align-items-center servicesChild2 redCardColor">
                  <FaUserDoctor size={40} color="white" />
                </div>
              </div>

              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold">Social Worker</Card.Title>
                <Card.Text className="mt-3 mb-4 serviceParaText">
                  The hospice Social Worker is responsible for the overall
                  support of the patient and family. They can assist with
                  financial planning and advance directives as well as emotional
                  support and counseling.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} sm={12}>
            <Card
              style={{ height: "50vh" }}
              className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
            >
              <div className="mt-5 mb-4 serviceRotateConainer">
                <div className="d-flex justify-content-center align-items-center servicesChild1 yellowCardBgColor"></div>
                <div className="d-flex justify-content-center align-items-center servicesChild2 yellowCardColor">
                  <FaUserDoctor size={40} color="white" />
                </div>
              </div>

              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold">Dietician</Card.Title>
                <Card.Text className="mt-3 mb-4 serviceParaText">
                  The hospice Dietitian will be consulted as needed to improve
                  the patient’s nutritional status.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} sm={12}>
            <Card
              style={{ height: "50vh" }}
              className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
            >
              <div className="mt-5 mb-4 serviceRotateConainer">
                <div className="d-flex justify-content-center align-items-center servicesChild1 blueCardBgColor"></div>
                <div className="d-flex justify-content-center align-items-center servicesChild2 blueCardColor">
                  <FaUserDoctor size={40} color="white" />
                </div>
              </div>
              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold">Therapists</Card.Title>
                <Card.Text className="mt-3 mb-4 serviceParaText">
                  Massage and Music therapists will be utilized as needed to
                  improve the patient’s quality of life.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} sm={12}>
            <Card
              style={{ height: "50vh" }}
              className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
            >
              <div className="mt-5 mb-4 serviceRotateConainer">
                <div className="d-flex justify-content-center align-items-center servicesChild1 purpleCardBgColor"></div>
                <div className="d-flex justify-content-center align-items-center servicesChild2 purpleCardColor">
                  <FaUserNurse size={40} color="white" />
                </div>
              </div>
              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold">
                  Hospice Chaplain
                </Card.Title>
                <Card.Text className="mt-3 mb-4 serviceParaText">
                  The hospice Chaplain is responsible for providing spiritual
                  support to all patients and family members requesting such
                  support.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} sm={12}>
            <Card
              style={{ height: "50vh" }}
              className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
            >
              <div className="mt-5 mb-4 serviceRotateConainer">
                <div className="d-flex justify-content-center align-items-center servicesChild1 purpleCardBgColor"></div>
                <div className="d-flex justify-content-center align-items-center servicesChild2 purpleCardColor">
                  <FaUserNurse size={40} color="white" />
                </div>
              </div>
              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold">Volunteers</Card.Title>
                <Card.Text className="mt-3 mb-4 serviceParaText">
                  The volunteers provide companionship, emotional support and
                  offer help in many different ways.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} sm={12}>
            <Card
              style={{ height: "50vh" }}
              className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
            >
              <div className="mt-5 mb-4 serviceRotateConainer">
                <div className="d-flex justify-content-center align-items-center servicesChild1 purpleCardBgColor"></div>
                <div className="d-flex justify-content-center align-items-center servicesChild2 purpleCardColor">
                  <FaUserNurse size={40} color="white" />
                </div>
              </div>
              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold">Grief Support</Card.Title>
                <Card.Text className="mt-3 mb-4 serviceParaText">
                  Lifetime Comprehensive Bereavement Services are offered to
                  family members as well as community members dealing with loss.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <div
        style={{
          backgroundImage: `url(${headerImageThree})`,
          marginTop: 50,
          height: "50vh",
          width: "100%",

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
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
      <Container>
        <h1 className="baloo2-extraBold text-center text-dark mt-5">Volunteer</h1>
        <p className="poppins-regular mt-5">
          Become a volunteer and make a difference. Are you someone who is
          compassionate, caring, and friendly? Do you genuinely love helping
          people in need? Every volunteer at Mid-Michigan Homecare & Hospice has
          a powerful impact on every patient’s life. They also bring comfort to
          family members and loved one who may be going through difficult times.
        </p>
        <h1 className="baloo2-extraBold text-center text-dark mt-5">
          Do I Need Special Skills?{" "}
        </h1>
        <p className="poppins-regular mt-5">
          You do not need special skills or training to become a volunteer. The
          most important thing is that you have love and understanding to bring
          our patients. Being able to listen and provide a helping hand to
          people from all difference backgrounds and life-experiences will make
          you a great volunteer. It’s important to remember that you will be an
          environment where people are experiencing some of the hardest times of
          their lives. Be prepared to assist with fear and loss. It’s also very
          important to keep patients’ personal information private. It’s not an
          easy task, but it’s extremely rewarding.
        </p>
        <h1 className="baloo2-extraBold text-center text-dark mt-5">
          What Will I Be Doing?
        </h1>
        <p className="poppins-regular mt-5">
          Volunteers are an important part of our hospice team. Everything from
          making phone calls to patients and families, making blankets, sending
          cards, playing music, to just being a friendly visitor. Any way you
          can help will make a difference. Click below to apply or email us to
          inquire more.
        </p>
      </Container>

      {/* WHO CAN BENEFIT US SECTION END*/}
    </MasterLayout>
  );
};

export default Hospice;
