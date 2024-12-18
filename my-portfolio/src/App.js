import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Snowfall from './components/Snowfall';
import './App.css';

function App() {
  return (
    <div className="App">
      <Snowfall />
      <Header />
      <main>
        <About />
        <Projects />
        <Articles />
        <Contact />
      </main>
    </div>
  );
}

export default App;