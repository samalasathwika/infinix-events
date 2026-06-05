import React, { useState } from 'react';
import { Menu, X, LogIn, UserPlus, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
            Infinix Events
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link hover:scale-105 transition-transform">Home</Link>
            <Link to="/events" className="nav-link hover:scale-105 transition-transform">Events</Link>
            <Link to="/gallery" className="nav-link hover:scale-105 transition-transform">Gallery</Link>
            <Link to="/careers" className="nav-link hover:scale-105 transition-transform">Careers</Link>
            <Link to="/about" className="nav-link hover:scale-105 transition-transform">About</Link>
            <Link to="/contact" className="nav-link hover:scale-105 transition-transform">Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors hover:scale-105 transition-transform">
              <LogIn size={20} />
              <span>Login</span>
            </Link>
            <Link to="/register" className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors hover:scale-105 transition-transform">
              <UserPlus size={20} />
              <span>Sign Up</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-purple-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg animate-fade-in-down">
            <div className="flex flex-col space-y-4 p-4">
              <Link to="/" className="mobile-nav-link">Home</Link>
              <Link to="/events" className="mobile-nav-link">Events</Link>
              <Link to="/gallery" className="mobile-nav-link">Gallery</Link>
              <Link to="/careers" className="mobile-nav-link">Careers</Link>
              <Link to="/about" className="mobile-nav-link">About</Link>
              <Link to="/contact" className="mobile-nav-link">Contact</Link>
              <hr className="border-gray-200" />
              <Link to="/login" className="mobile-nav-link flex items-center space-x-2">
                <LogIn size={20} />
                <span>Login</span>
              </Link>
              <Link to="/register" className="mobile-nav-link flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg">
                <UserPlus size={20} />
                <span>Sign Up</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}