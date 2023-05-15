
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './composents/Navigation';
import Home from './pages/Home';
import Livres from './pages/Livres';
import Contact from './pages/Contact';

import './App.css'; // Chemin vers le fichier CSS principal




const App = () => {
  return (
    <Router>
      <div>
        {/* Barre de navigation */}
        <Navigation />

        {/* Contenu de la page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livres" element={<Livres />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

