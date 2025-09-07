import logo from './logo.svg';
import "./assets/css/fontStyles.css";
import "./assets/css/HomeStyles.css";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import AboutUs from './screens/AboutUs';
import NotFound from './screens/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <AboutUs /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
