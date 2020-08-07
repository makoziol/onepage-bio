import './App.css';
import AboutMe from './components/AboutMe';
import Image from './components/Image';
import Interests from './components/Interests';
import Contact from './components/Contact';
import NavMenu from './components/NavMenu';

const App = () => {
  return (
    <div className="App">
      <NavMenu />
      <Image />
      <AboutMe />
      <Interests />
      <Contact />
    </div>
  );
};

export default App;
