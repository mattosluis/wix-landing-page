import './App.css';

import GlobalStyles from './global/styles';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
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
