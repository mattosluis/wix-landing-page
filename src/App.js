import './App.css';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import GlobalStyles from './global/styles';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'linear',
      delay: 150,
    });
  }, []);

  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
