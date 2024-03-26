import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
// import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      {/* <Experience />
      <Contact /> */}
    </div>
  );
};

export default App;
