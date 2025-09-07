import React, { useState } from "react";
import CustomNavbar from "../components/Navbar/CustomNavbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MasterLayout = ({ children }) => {
  return (
    <React.Fragment>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default MasterLayout;
