import "../../assets/css/HomeStyles.css";
import MasterLayout from "../../layouts/MasterLayout";
import AboutUs from "./SubScreens/AboutUs";
import Cta from "./SubScreens/Cta";
import EducationalProgram from "./SubScreens/EducationalProgram";
import MySlider from "./SubScreens/MySlider";
import Services from "./SubScreens/Services";
import Testimonials from "./SubScreens/Testimonials";

const Home = () => {
  return (
    <MasterLayout>
      <MySlider />
      <Services />
      <AboutUs />
      <EducationalProgram />
      <Cta />
      <Testimonials />
    </MasterLayout>
  );
};

export default Home;
