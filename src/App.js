import "./assets/css/fontStyles.css";
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './screens/Home/Home';
import NotFound from './screens/NotFound';
import Career from "./screens/Career/Career";
import Hospice from "./screens/Hospice/Hospice";
import CareTeam from "./screens/CareTeam/CareTeam";
import HomeHealth from "./screens/HomeHealth/HomeHealth";
import Palliative from "./screens/Palliative/Palliative";
import BridgeProgram from "./screens/BridgeProgram/BridgeProgram";
import HospiceCriteria from "./screens/Hospice/HospiceCriteria";
import ContactUs from "./screens/Contact/ContactUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/homehealth' element={ <HomeHealth /> } />
        <Route path='/bridge-program' element={ <BridgeProgram /> } />
        <Route path='/hospice' element={ <Hospice /> } />
        <Route path='/hospice-criteria' element={ <HospiceCriteria /> } />
        <Route path='/palliative' element={ <Palliative /> } />
        <Route path='/career' element={ <Career /> } />
        <Route path='/care-team' element={ <CareTeam /> } />
        <Route path='/contact-us' element={ <ContactUs /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
