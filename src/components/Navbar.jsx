import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full max-w-7xl mx-auto px-6 py-4 relative">
      <div className="flex items-center justify-between w-full">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <h1 className="text-xl font-bold text-blue-600">BrandKu</h1>
        </Link>
        
        {/* Hamburger Icon for Mobile / Zoomed Viewports */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          type="button"
          className="md:hidden text-slate-600 hover:text-blue-600 focus:outline-none p-2 cursor-pointer transition-colors"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6 fill-none stroke-current" viewBox="0 0 24 24">
            {isOpen ? (
              // X icon when menu is open
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger icon when menu is closed
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-600">
          <Link to="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
          <Link to="/fitur" className="hover:text-blue-600 transition-colors">Fitur</Link>
          <Link to="#" className="hover:text-blue-600 transition-colors">Harga</Link>
        </nav>
      </div>

      {/* Mobile / Zoomed Navigation Dropdown */}
      {isOpen && (
        <nav className="md:hidden mt-4 flex flex-col space-y-2 px-3 py-4 bg-white border border-slate-100 rounded-xl shadow-lg absolute left-6 right-6 z-50 transition-all">
          <Link 
            to="/" 
            className="hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors text-sm font-medium text-slate-600"
            onClick={() => setIsOpen(false)}
          >
            Beranda
          </Link>
          <Link 
            to="/fitur" 
            className="hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors text-sm font-medium text-slate-600"
            onClick={() => setIsOpen(false)}
          >
            Fitur
          </Link>
          <Link 
            to="#" 
            className="hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors text-sm font-medium text-slate-600"
            onClick={() => setIsOpen(false)}
          >
            Harga
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
