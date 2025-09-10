import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import CustomNavbar from "../components/Navbar/CustomNavbar";

import "../assets/css/style.css";
import "../assets/css/homeHealthStyles.css";

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
