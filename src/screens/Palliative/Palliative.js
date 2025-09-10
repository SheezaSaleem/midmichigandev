import React from "react";
import MasterLayout from "../../layouts/MasterLayout";
import StaticHeader from "../../components/StaticHeader/StaticHeader";
import Subscription from "./SubScreens/Subscription";

const Palliative = () => {
  return (
    <MasterLayout>
      <StaticHeader screenName={'Palliative Care'} />
      <Subscription />
    </MasterLayout>
  );
};

export default Palliative;
