import React, { useState } from "react";
import "../../assets/css/HomeStyles.css";
import MasterLayout from "../../layouts/MasterLayout";
import MySlider from "./SubScreens/MySlider";
import CustomNavbar from "../../components/Navbar/CustomNavbar";
import Services from "./SubScreens/Services";
import AboutUs from "./SubScreens/AboutUs";
import Cta from "./SubScreens/Cta";
import Testimonials from "./SubScreens/Testimonials";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <MasterLayout>
      <MySlider />
      <Services />
      <AboutUs />
      <Cta />
      <Testimonials />
    </MasterLayout>
  );
};

export default Home;
