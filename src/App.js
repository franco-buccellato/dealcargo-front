import './App.css';
import NavBarGestor from './components/NavBar/NavBarGestor';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LeftBar from './components/LeftBar/LeftBar';
import LandingPage from './components/LandingPage/LandingPage';
import Maps from './components/Maps/Maps';


function App() {
  return (
    <BrowserRouter>
      <NavBarGestor/>
      <LeftBar/>
      <Routes>
        <Route exact path = '/' element = {<LandingPage/>}/>
      </Routes>
      <Maps/>
    </BrowserRouter>
  );
}

export default App;
