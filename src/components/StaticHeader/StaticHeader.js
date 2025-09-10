import React, { useContext } from "react";
import borderImage from "../../assets/images/page-header-curv-1-1.png";
import headerImage from "../../assets/images/background/page-header-about-1.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Image } from "react-bootstrap";
import AppContext from "../../context/AppContext";

const StaticHeader = ({ screenName }) => {
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
            <a href="/" className="liHome">
              Home
            </a>
          </li>
          <MdKeyboardArrowRight size={20} />
          <li className="liScreenName">Home Health</li>
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
