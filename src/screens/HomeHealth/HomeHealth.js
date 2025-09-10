import React from 'react'
import MasterLayout from '../../layouts/MasterLayout';
import StaticHeader from '../../components/StaticHeader/StaticHeader';
import OurMission from './SubScreens/OurMission';
import HealthCare from './SubScreens/HealthCare';
import Specialization from './SubScreens/Specialization';

const HomeHealth = () => {
  return (
    <MasterLayout>
      <StaticHeader screenName={'Home Health'} />
      <OurMission />
      <HealthCare />
      <Specialization />
    </MasterLayout>
  );
};

export default HomeHealth