import React, { useContext } from "react";
import borderImage from "../../assets/images/page-header-curv-1-1.png";

import { MdKeyboardArrowRight } from "react-icons/md";
import { Image } from "react-bootstrap";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

const StaticHeader = ({ screenName, headerImage }) => {
  const { isDesktopOrLaptop } = useContext(AppContext);

  return (
    <div
      className="staticHeaderImage"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="headingContainer">
        <h1 className="baloo2-extraBold">{screenName}</h1>
        <ul className="headingList">
          <li>
            <Link to="/" className="liHome">
              Home
            </Link>
          </li>
          <MdKeyboardArrowRight size={20} />
          <li className="liScreenName">{screenName}</li>
        </ul>
      </div>
      {isDesktopOrLaptop ? (
        <Image className="staticHeaderBorderImage" src={borderImage} />
      ) : (
        ""
      )}
    </div>
  );
};

export default StaticHeader;
