import React from "react";
import MasterLayout from "../../layouts/MasterLayout";
import StaticHeader from "../../components/StaticHeader/StaticHeader";
import headerImage from "../../assets/images/main-slider/main-slider-3-1.jpg";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import HospiceCareTeamCard from "../../components/Cards/HospiceCareTeamCard";
import { FaUserNurse } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import teamImage1 from "../../assets/images/team/team-1-1.jpg";
import teamImage2 from "../../assets/images/team/team-1-2.jpg";
import teamImage3 from "../../assets/images/team/team-1-3.jpg";

const CareTeam = () => {
  return (
    <MasterLayout>
      <StaticHeader headerImage={headerImage} screenName={"Care Team"} altText={"Caregiver assisting senior woman in wheelchair during a walk in the park"} />
      {/* <h1 className="baloo2-extraBold text-center mt-5">
        Our Hospice Care Team
      </h1> */}
      <Container className="mt-5" style={{ backgroundColor: "#fefefe" }}>
        <Row className="mt-5 mb-5 high-gutter">
          <HospiceCareTeamCard
            cardTitle={"Family Physician"}
            description={
              "The family physician is responsible for approving and overseeing the patient’s plan of care."
            }
            teamImage={teamImage1}
          />

          <HospiceCareTeamCard
            cardTitle={"Therapists"}
            description={
              "Massage and Music therapists will be utilized as needed to improve the patient’s quality of life."
            }
            teamImage={teamImage2}
          />

          <HospiceCareTeamCard
            cardTitle={"Volunteers"}
            description={
              "The volunteers provide companionship, emotional support and offer help in many different ways."
            }
            teamImage={teamImage3}
          />

          <HospiceCareTeamCard
            cardTitle={"Hospice Medical Director"}
            description={
              "The Hospice Medical Director is a physician who specializes in hospice and palliative care. They may also serve as the patient’s family physician if needed."
            }
            teamImage={teamImage1}
          />

          <HospiceCareTeamCard
            cardTitle={"Registered Nurse"}
            description={
              "The hospice RN serves as the patient’s case manager. The nurse is responsible for the patient’s physical comfort and makingrecommendations to the family physician regarding pain."
            }
            teamImage={teamImage2}
          />

          <HospiceCareTeamCard
            cardTitle={"Certified Nursing Assistant"}
            description={
              "The CNA, working under the supervision of the hospice RN, is responsible for providing assistance with the patient’spersonal care."
            }
            teamImage={teamImage3}
          />

          <HospiceCareTeamCard
            cardTitle={"Social Worker"}
            description={
              "The hospice Social Worker is responsible for the overall support of the patient and family. They can assist with financial planning and advance directives as well as emotional support and counseling."
            }
            teamImage={teamImage1}
          />

          <HospiceCareTeamCard
            cardTitle={"Hospice Chaplain"}
            description={
              "The hospice Chaplain is responsible for providing spiritual support to all patients and family members requesting such support."
            }
            teamImage={teamImage2}
          />

          <HospiceCareTeamCard
            cardTitle={"Grief Support"}
            description={
              "Lifetime Comprehensive Bereavement Services are offered to family members as well as community members dealing with loss."
            }
            teamImage={teamImage3}
          />

          <HospiceCareTeamCard
            cardTitle={"community Liaison"}
            // description={
            //   "Lifetime Comprehensive Bereavement Services are offered to family members as well as community members dealing with loss."
            // }
            teamImage={teamImage3}
          />
        </Row>
      </Container>
    </MasterLayout>
  );
};

export default CareTeam;
