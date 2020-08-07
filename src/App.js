import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Info from './components/Info';
import Interests from './components/Interests';
import Contact from './components/Contact';
import NavMenu from './components/NavMenu';

const App = () => {
  return (
    <div className="App">
      <NavMenu />
      <Info />
      <AboutMe />
      <Interests />
      <Contact />
    </div>
  );
};

export default App;
