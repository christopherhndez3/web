// src/App.jsx
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ContactForm from './components/contactForms';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <ContactForm/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
