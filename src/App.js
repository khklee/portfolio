import React from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <About></About>
        <Project></Project>
        <Contact></Contact>
        <Resume></Resume>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
