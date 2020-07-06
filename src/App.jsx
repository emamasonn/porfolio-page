import React from 'react';
import './App.css'
import Presentation from './components/Presentation';
import About from './components/About';
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Presentation />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
