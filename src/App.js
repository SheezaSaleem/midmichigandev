import "./assets/css/fontStyles.css";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import NotFound from './screens/NotFound';
import HomeHealth from "./screens/HomeHealth/HomeHealth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/homehealth' element={ <HomeHealth /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
