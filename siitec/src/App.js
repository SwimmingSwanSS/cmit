// src/App.js
import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Faculty from './components/faculty';
import Footer from './components/footer';
import NewsSection from './components/newssection'; // Add this import
import './App.css';
import Departments from './components/departments';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Departments />
        <NewsSection /> {/* Add the NewsSection component */}
        <Faculty />
      </main>
      <Footer />
    </div>
  );
}

export default App;