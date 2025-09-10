import "./assets/css/fontStyles.css";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import NotFound from './screens/NotFound';
import HomeHealth from "./screens/HomeHealth/HomeHealth";
import BridgeProgram from "./screens/BridgeProgram/BridgeProgram";
import Hospice from "./screens/Hospice/Hospice";
import HospiceCriteria from "./screens/Hospice/HospiceCriteria";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/homehealth' element={ <HomeHealth /> } />
        <Route path='/bridge-program' element={ <BridgeProgram /> } />
        <Route path='/hospice' element={ <Hospice /> } />
        <Route path='/hospice-criteria' element={ <HospiceCriteria /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
