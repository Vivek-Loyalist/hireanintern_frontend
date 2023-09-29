import logo from './logo.svg';
import './App.css';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <div className="App">

      <HeaderComp />
      <LandingPage />
      <FooterComp />
      

    </div>

  );
}

export default App;
