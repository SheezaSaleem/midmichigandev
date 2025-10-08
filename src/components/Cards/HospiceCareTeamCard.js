import React, { useContext } from "react";
import { Card, Col } from "react-bootstrap";
import { FaUserNurse } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import teamImage from "../../assets/images/team/team-1-1.jpg";
import AppContext from "../../context/AppContext";

const HospiceCareTeamCard = ({ cardTitle, description, teamImage }) => {
  const { isDesktopOrLaptop } = useContext(AppContext);

  return (
    <Col
      lg={4}
      sm={12}
      className="d-flex justify-content-center align-items-center"
    >
      <div
        className="team-one__single"
        style={{ width: isDesktopOrLaptop ? "90%" : "100%" }}
      >
        <div className="team-one__image">
          {/* <img src=`url(${teamImage})` alt="" /> */}
          <img src={teamImage} alt="" />
        </div>
        <div className="team-one__content">
          <div
            className="team-one__content-inner"
            style={{ height: isDesktopOrLaptop ? 220 : 250 }}
          >
            <h5 className="poppins-medium">{cardTitle}</h5>
            <p>{description}</p>
          </div>
          <img
            src={require("../../assets/images/shapes/team-curv-1-1.png")}
            alt=""
            style={{
              width: isDesktopOrLaptop ? 322 : 286,
              position: "absolute",
              bottom: -10,
              // backgroundColor: "red",
            }}
          />
        </div>
      </div>
    </Col>
    // <Col lg={4} sm={12} className="">
    //   <Card
    //     style={{ height: "50vh" }}
    //     className="d-flex justify-content-center align-items-center shadow mt-5 serviceCardContainer"
    //   >
    //     <div className="mt-5 mb-4 serviceRotateConainer">
    //       <div className={`servicesChild1 ${bgCardColor}`}></div>
    //       <div
    //         className={`d-flex justify-content-center align-items-center servicesChild2 ${cardColor}`}
    //       >
    //         {Icon}
    //       </div>
    //     </div>

    //     <Card.Body className="text-center">
    //       <Card.Title className="baloo2-bold">{cardTitle}</Card.Title>
    //       <Card.Text
    //         className="mt-3 mb-4 serviceParaText"
    //         style={{ fontSize: 13 }}
    //       >
    //         {description}
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    // </Col>
  );
};

export default HospiceCareTeamCard;
