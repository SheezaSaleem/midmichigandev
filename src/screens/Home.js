import React, { useState } from "react";
import MasterLayout from "../layouts/MasterLayout";
import MySlider from "../components/Home/MySlider";
import CustomNavbar from "../components/Navbar/CustomNavbar";
import Services from "../components/Home/Services";
import AboutUs from "../components/Home/AboutUs";

const Home = () => {
  return (
    <MasterLayout>
      <CustomNavbar />
      <MySlider />
      <Services />
      <AboutUs />
    </MasterLayout>
  );
};

export default Home;
