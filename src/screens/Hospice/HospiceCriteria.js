import { FaUserNurse } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import headerImage from "../../assets/images/background/hospiceCriteria.webp";
import hospiceCriteriaTwo from "../../assets/images/background/hospiceCriteriaTwo.webp";
import hospiceCriteriaThree from "../../assets/images/background/hospiceCriteriaThree.webp";
import hospiceCriteriaFour from "../../assets/images/background/hospiceCriteriaFour.webp";

import StaticHeader from "../../components/StaticHeader/StaticHeader";
import MasterLayout from "../../layouts/MasterLayout";

import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

const HospiceCriteria = () => {
  return (
    <MasterLayout>
      <StaticHeader headerImage={headerImage} screenName={"Hospice Criteria"} />
      <Container>
        <h1 className="baloo2-extraBold text-center mt-5">
          If any of these sound familiar, it may be appropriate to consider
          Hospice care
        </h1>
        <Row>
          <Col lg={4} sm={12}>
            <Card
              style={{ height: "60vh" }}
              className="d-flex justify-content-center shadow mt-5 serviceCardContainer"
            >
              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold">
                  Hospice Benefit Qualifiers
                </Card.Title>
                <Card.Text className="mt-3 mb-4">
                  <ul style={{ textAlign: "left" }}>
                    <li>Curative treatment ending or no longer desired</li>
                    <li>Frequent trips to the ER or recent hospitalizations</li>
                    <li>Weight loss or decrease in appetite</li>
                    <li>Increase in weakness or fallse</li>
                    <li>More help required with activities of daily living</li>
                    <li>
                      Worsened shortness of breath ot need for oxygen most/all
                      of the time
                    </li>
                    <li>
                      Multiple changes and adjustments to medication because of
                      ineffectiveness or an increase in the number of
                      medications required to control symptoms's
                    </li>
                    <li>Not progressing in therapies</li>
                    <li>Change in DNR status</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} sm={12}>
            <Card
              style={{ height: "60vh" }}
              className="d-flex justify-content-center shadow mt-5 serviceCardContainer"
            >
              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold">
                  Quality of Life Concerns
                </Card.Title>
                <Card.Text className="mt-3 mb-4">
                  <ul style={{ textAlign: "left" }}>
                    <li>Loss of functional abilities</li>
                    <li>Reduced activity tolerance</li>
                    <li>
                      Weight loss, difficulty swallowing, refusing food,
                      decrease appetite
                    </li>
                    <li>Dehydration and changes in renal function</li>
                    <li>Increasing frailty</li>
                    <li>Increase sleep</li>
                    <li>Withdrawal/depression</li>
                    <li>Diminished cognitive abilities</li>
                    <li>Bowel and bladder incontinence</li>
                    <li>Loss of speaking ability</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} sm={12}>
            <Card
              style={{ height: "60vh" }}
              className="d-flex justify-content-center shadow mt-5 serviceCardContainer"
            >
              <Card.Body className="text-center">
                <Card.Title className="baloo2-bold">
                  Struggle to Manage Chronic Conditions
                </Card.Title>
                <Card.Text className="mt-3 mb-4">
                  <ul style={{ textAlign: "left" }}>
                    <li>Loss of functional abilities</li>
                    <li>Reduced activity tolerance</li>
                    <li>
                      Weight loss, difficulty swallowing, refusing food,
                      decrease appetite
                    </li>
                    <li>Dehydration and changes in renal function</li>
                    <li>Increasing frailty</li>
                    <li>Increase sleep</li>
                    <li>Withdrawal/depression</li>
                    <li>Diminished cognitive abilities</li>
                    <li>Bowel and bladder incontinence</li>
                    <li>Loss of speaking ability</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="d-flex justify-content-center align-items-center">
          <Button
            style={{
              backgroundColor: "rgba(214, 87, 90, 1)",
              borderRadius: 100,
              alignSelf: "center",
            }}
            variant="outline-light"
            className="mt-5 p-3 text-center"
          >
            I am considering hospice
          </Button>
        </div>

        <h3 className="baloo2-extraBold  mt-5">
          When is an ALS patient eligible for hospice care?
        </h3>
        <p>
          Patients are considered to be hospice-eligible for amyotrophic lateral
          sclerosis (ALS, or Lou Gehrig’s disease) if they meet the following
          guidelines:
        </p>

        <ul style={{ textAlign: "left" }}>
          <li>
            BOTH rapid progression of ALS and decreased ability to breath on
            one’s own or
          </li>
          <li>
            BOTH rapid progression of ALS and critical nutritional impairment
            with a decision not to receive artificial feeding or
          </li>
          <li>
            BOTH rapid progression of ALS and life-threatening complications
            such as:
            <ul style={{ textAlign: "left" }}>
              <li>Recurrent aspiration pneumonia</li>
              <li>
                Pressure sores/impaired skin integrity, multiple, stage 3-4,
                particularly if infected
              </li>
              <li>Upper urinary tract infection</li>
              <li>Sepsis</li>
              <li>Fever that continues after antibiotics</li>
            </ul>
          </li>
          <p style={{ color: "rgba(214, 87, 90, 1)" }}>
            <i>
              Patients with neurological diseases may be eligible for hospice
              when they experience the following signs or symptoms: STROKE,
              PARKINSON’S, MULTIPLE SCLEROSIS
            </i>
          </p>
          <li>
            Severely compromised breathing, marked by inability to clear
            respiratory secretions, persistent cough, or recurring aspiration
            pneumonia
          </li>
          <li>Increased shortness of breath, even at rest or on oxygen</li>
          <li>
            Inability to swallow liquids or soft food without choking or
            coughing; progression to a mainly pureed diet
          </li>
          <li>Spends most of the time in the same room, chair or bed</li>
          <li>Barely intelligible speech</li>
          <li>Continued weight loss</li>
          <li>Inability to manage most activities of daily living</li>
        </ul>
        {/* ONCOLOGY */}

        <h3 className="baloo2-extraBold" style={{ marginTop: 100 }}>
          Oncology
        </h3>
        <p>Typically, these patients:</p>

        <ul style={{ textAlign: "left" }}>
          <li>Are unable to carry on normal activity or do normal work</li>
          <li>
            Are unable to move or ambulate; spend more than 50% of their time in
            a bed, chair or a single room
          </li>
          <li>Exhibit evidence of significant disease</li>
          <li>Are able to provide only limited self-care</li>
          <li>Have reduced nutritional intake</li>
          <p style={{ color: "rgba(214, 87, 90, 1)" }}>
            <i>Other indicators and symptoms:</i>
          </p>

          <li>Patient refusing dialysis or stopping dialysis</li>

          <li>
            25%–30% of patients on dialysis who are declining with other
            comorbid disease, such as cancers, end-stage heart disease,
            end-stage lung disease
          </li>
          <li>Weight loss</li>
          <li>Functional decline</li>
          <li>Cognitive decline</li>
          <li>Social withdrawal</li>
          <li>Uncontrolled pain</li>
          <li>Frequent nausea</li>
        </ul>
        {/* ONCOLOGY */}

        {/* RENAL DISEASE */}
        <h3 className="baloo2-extraBold" style={{ marginTop: 100 }}>
          End-Stage Renal Disease
        </h3>
        <p style={{ color: "rgba(214, 87, 90, 1)" }}>
          <i>Common indicators of end-stage renal disease:</i>
        </p>

        <ul style={{ textAlign: "left" }}>
          <li>
            Confusion, decreased level of consciousness, uncontrolled nausea and
            vomiting, generalized itching of the skin, restlessness, "restless
            legs"
          </li>
          <li>Decreased urine output: urine output {"<400"} cc/24 hrs</li>
          <li>
            uncontrolled hyperkalemia: persistent serum potassium {">7.0"}
          </li>
          <li>Uremic pericarditis</li>
          <li>Hepatorenal syndrome</li>
          <li>uncontrolled fluid overload</li>
          <p style={{ color: "rgba(214, 87, 90, 1)" }}>
            <i>Other indicators and symptoms:</i>
          </p>

          <li>Patient refusing dialysis or stopping dialysis</li>

          <li>
            25%–30% of patients on dialysis who are declining with other
            comorbid disease, such as cancers, end-stage heart disease,
            end-stage lung disease
          </li>
          <li>Weight loss</li>
          <li>Functional decline</li>
          <li>Cognitive decline</li>
          <li>Social withdrawal</li>
          <li>Uncontrolled pain</li>
          <li>Frequent nausea</li>
          <li>Increasing weakness</li>
          <li>Low blood pressure caused by position changes</li>
          <li>Dehydration</li>
          <li>Decreasing muscle mass</li>
          <li>Impaired immune function</li>
          <li>Increase in infections</li>
          <li>Decrease in sympathetic response to stressors</li>
        </ul>
        {/* RENAL DISEASE */}

        {/* COPD Patients */}
        <Row>
          <h3 className="baloo2-extraBold" style={{ marginTop: 100 }}>
            COPD Patients
          </h3>
          <Col lg={6} sm={12}>
            <p className="poppins-regular">Hospice Benefit Qualifiers</p>
            <ul style={{ textAlign: "left" }}>
              <li>Shortness of breath at rest</li>
              <li>Dependent on supplemental oxygen</li>
              <li>Fatigue</li>
              <li>Diminished exercise capacity</li>
              <li>Less ability to function normally</li>
              <li>Symptomatic at rest</li>
              <li>Mostly bed-bound</li>
              <li>Not a candidate for further medical intervention</li>
              <p className="poppins-regular mt-3">
                <i>
                  If any of the above sound familiar, it may be appropriate to
                  consider Hospice care
                </i>
              </p>
            </ul>
          </Col>
          <Col lg={6} sm={12}>
            <Image
              style={{ width: "90%" }}
              src={hospiceCriteriaTwo}
              className="img fluid"
            />
            <p className="poppins-regular mt-3">
              COPD is the 3rd leading cause of death by disease in the United
              States. More than 16.4 million people have been diagnosed with
              COPD.” - American Lung Association 2021
            </p>
          </Col>
        </Row>
        {/* COPD Patients */}
        {/* HEART FAILURE Patients */}
        <Row style={{ marginTop: 100 }}>
          <Col lg={6} sm={12}>
            <Image
              style={{ width: "90%" }}
              src={hospiceCriteriaThree}
              className="img fluid"
            />
            <p className="poppins-regular mt-3">
              Almost six million Americans have heart failure and more than
              870,000 people are diagnosed with heart failure each year.”
              Cleveland Clinic “Heart failure is the leading cause of
              hospitalization in people older than 65.” Cleveland Clinic
            </p>
          </Col>
          <Col lg={6} sm={12}>
            <h3 className="baloo2-extraBold">Heart Failure Patients</h3>
            <p className="poppins-regular">Hospice Benefit Qualifiers</p>
            <ul style={{ textAlign: "left" }}>
              <li>Angina (chest pain)</li>
              <li>Fatigue</li>
              <li>Diminished exercise capacity</li>
              <li>Shortness of breath</li>
              <li>Less ability to function normally</li>
              <li>Symptomatic at rest</li>
              <li>Edema</li>
              <li>Mostly bed-bound</li>
              <li>Heart medication no longer effective</li>
              <li>Not a candidate for further medical intervention</li>
              <p className="poppins-regular mt-3">
                <i>
                  If any of the above sound familiar, it may be appropriate to
                  consider Hospice care
                </i>
              </p>
            </ul>
          </Col>
        </Row>
        {/* HEART FAILURE Patients */}
        {/* Dementia Patients */}
        <Row>
          <h3 className="baloo2-extraBold" style={{ marginTop: 100 }}>
            Dementia Patients
          </h3>
          <Col lg={6} sm={12}>
            <p className="poppins-regular">Hospice Benefit Qualifiers</p>
            <ul style={{ textAlign: "left" }}>
              <li>
                Dependence on others for assistance with activities of daily
                living
              </li>
              <li>Inability to walk without assistance</li>
              <li>Speaking only a few words and phrases</li>
              <li>Continuous anxiety and stress</li>
              <li>Falls</li>
              <li>Multiple hospitalizations and/or ER trips</li>
              <li>Infections</li>
              <li>Eating problems</li>
              <li>Incontinence</li>
              <p className="poppins-regular mt-3">
                <i>
                  If any of the above sound familiar, it may be appropriate to
                  consider Hospice care.
                </i>
              </p>
            </ul>
          </Col>
          <Col lg={6} sm={12}>
            <Image
              style={{ width: "40%" }}
              src={hospiceCriteriaFour}
              className="img fluid"
            />
            <p className="poppins-regular mt-3">
              Dementia is a leading cause of death in the United States, but is
              underrecognized as a terminal illness - NEJM 2009
            </p>
          </Col>
        </Row>
        {/* Dementia Patients */}
      </Container>
    </MasterLayout>
  );
};

export default HospiceCriteria;
