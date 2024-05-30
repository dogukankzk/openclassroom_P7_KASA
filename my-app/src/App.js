import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AccommodationDetail from './pages/AccommodationDetail';
import NotFound from './pages/NotFound';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accommodation/:id" element={<AccommodationDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
