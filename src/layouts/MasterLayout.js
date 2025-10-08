import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import CustomNavbar from "../components/Navbar/CustomNavbar";

import "../assets/css/style.css";
import "../assets/css/HomeStyles.css";
import "../assets/css/homeHealthStyles.css";
import "../assets/css/palliativeStyles.css";
import "../assets/css/footerStyles.css";
import "../assets/css/careerStyles.css";
import "../assets/css/careTeamStyles.css";
import "../assets/css/contactStyles.css";

const MasterLayout = ({ children }) => {
  return (
    <React.Fragment>
      <CustomNavbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default MasterLayout;
