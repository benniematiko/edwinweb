import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Works from './pages/works/Works';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Grain Texture Overlay */}
        <div className="grain-overlay"></div>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;