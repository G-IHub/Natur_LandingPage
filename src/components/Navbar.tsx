import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/90 backdrop-blur-md h-[80px]">
      <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-center h-full">
        <div className="logo relative w-[180px] h-full flex items-center">
          <Link to="/" className="absolute top-1/2 -translate-y-1/2 left-0">
            <img
              src={logo}
              alt="G-Natures"
              className="h-[200px] w-auto max-w-none"
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
        <button className="px-6 py-3 rounded-full font-semibold text-[0.95rem] bg-primary text-white shadow-[0_4px_15px_rgba(21,186,36,0.3)] hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(21,186,36,0.4)] transition-all duration-300 cursor-pointer">
          <a href="https://wa.me/2349059575287?text=Hi%2C%20I'd%20like%20to%20check%20my%20symptoms">Get Started</a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
