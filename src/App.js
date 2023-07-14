import './App.css';
import NavBarGestor from './components/NavBar/NavBarGestor';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LeftBar from './components/LeftBar/LeftBar';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <NavBarGestor/>
      <LeftBar/>
      <Routes>
        <Route exact path = '/' element = {<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
