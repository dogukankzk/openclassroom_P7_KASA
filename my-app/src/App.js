import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AccommodationDetail from './pages/AccommodationDetail/AccommodationDetail';
import NotFound from './pages/NotFound/NotFound';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodation/:id" element={<AccommodationDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
     
        </div>
    </Router>
  );
};

export default App;
