import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-100 bg-white/90 backdrop-blur-md h-20">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center h-full font-[Inter]">
        <div className="logo relative w-45 h-full flex items-center">
          <Link to="/" className="absolute top-1/2 -translate-y-1/2 left-0">
            <img
              src={logo}
              alt="G-Natures"
              className="w-30 md:w-40 max-w-none"
            />
          </Link>
        </div>
        <div className="hidden lg:flex gap-10 font-medium text-text-muted">
          <a href="#about" className="hover:text-primary transition-colors">
            About Us
          </a>
          <a href="#how" className="hover:text-primary transition-colors">
            How it works
          </a>
          <a href="#faq" className="hover:text-primary transition-colors">
            FAQ
          </a>
        </div>
        <button className="py-2 px-6 md:py-3 rounded-full font-semibold text-xs md:text-sm bg-primary text-white shadow-[0_4px_15px_rgba(21,186,36,0.3)] hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(21,186,36,0.4)] transition-all duration-300 cursor-pointer">
          <a href="https://wa.me/2349059575287?text=Hi%2C%20I'd%20like%20to%20check%20my%20symptoms">Get Started</a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
