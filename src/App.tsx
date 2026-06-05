import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Careers from './pages/Careers';
import BookEvent from './pages/BookEvent';
import LoadingScreen from './components/LoadingScreen';
import FloatingElements from './components/FloatingElements';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <LoadingScreen />
        <FloatingElements />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/book/:categoryId/:eventId" element={<BookEvent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;