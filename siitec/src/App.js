// src/App.js
import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Programs from './components/program';
import Faculty from './components/faculty';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Programs />
        <Faculty />
      </main>
      <Footer />
    </div>
  );
}

export default App;