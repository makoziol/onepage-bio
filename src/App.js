import React from 'react';
import './App.css';
import Menu from './components/Menu';
import AboutMe from './components/AboutMe';
import Image from './components/Image';
import Interests from './components/Interests';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Menu />
      <Image />
      <AboutMe />
      <Interests />
      <Contact />
    </div>
  );
}

export default App;
