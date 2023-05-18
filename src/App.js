import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import LoginPage from './pages/loginPage';
import Card from './components/Card';
import Carousel from './components/Carousel';
import Registration from './pages/RegistrationPage';
import HomePage from './pages/HomePage';
import {Routes, Route} from 'react-router-dom';

export function App() {
  return (
    
  <>
  <h1>Motorcycles</h1>
  <NavBar/>
  <Carousel/>
  <Card/>

  <Routes>
    <Route path="/" element = {<HomePage/>} />
    <Route path="/loginPage" element = {<LoginPage/>} />
    <Route path="/RegistrationPage" element = {<Registration/>} />
  </Routes>

  </>

  );
}

export default App;
