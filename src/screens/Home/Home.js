import React, { useState } from "react";
import MasterLayout from "../../layouts/MasterLayout";
import MySlider from "./SubScreens/MySlider";
import CustomNavbar from "../../components/Navbar/CustomNavbar";
import Services from "./SubScreens/Services";
import AboutUs from "./SubScreens/AboutUs";
import AppFooter from "./SubScreens/AppFooter";


const Home = () => {
  return (
    <MasterLayout>
      <CustomNavbar />
      <MySlider />
      <Services />
      <AboutUs />
      <AppFooter />
    </MasterLayout>
  );
};

export default Home;
