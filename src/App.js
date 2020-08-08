import React, { useEffect, useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Info from './components/Info';
import Interests from './components/Interests';
import Contact from './components/Contact';
import NavMenu from './components/NavMenu';
import _ from 'lodash';

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = _.debounce(() => setWidth(window.innerWidth), 100);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="App">
      <NavMenu {...{ width }} />
      <Info />
      <AboutMe {...{ width }} />
      <Interests {...{ width }} />
      <Contact {...{ width }} />
    </div>
  );
};

export default App;
