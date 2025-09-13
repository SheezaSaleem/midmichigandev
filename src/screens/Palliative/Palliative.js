import React from "react";
import MasterLayout from "../../layouts/MasterLayout";
import StaticHeader from "../../components/StaticHeader/StaticHeader";
import Subscription from "./SubScreens/Subscription";
import headerImage from "../../assets/images/main-slider/main-slider-4-1.jpg";
import About from "./SubScreens/About";
import OurTeam from "./SubScreens/OurTeam";
import PalliativeServices from "./SubScreens/PalliativeServices";
import PalliativeBenefits from "./SubScreens/PalliativeBenefits";
import ServiceArea from "./SubScreens/ServiceArea";

const Palliative = () => {
  return (
    <MasterLayout>
      <StaticHeader screenName={'Palliative Care'} headerImage={headerImage} />
      <Subscription />
      <About />
      <OurTeam />
      <PalliativeServices />
      <PalliativeBenefits />
      <ServiceArea />
    </MasterLayout>
  );
};

export default Palliative;
