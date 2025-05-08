import React, { useState } from 'react';
import { Search, Menu, X, User, Home, Mail, Info } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-800 shadow-lg border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="bg-blue-500 text-white font-bold rounded p-1 mr-2">
                <span className="text-sm">PRO</span>
              </div>
              <span className="text-blue-500 text-xl font-bold tracking-tight">Company</span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center">
            {/* Navigation Links */}
            <div className="flex space-x-1 mr-6">
              <NavItem icon={<Home size={16} />} text="Home" active />
              <NavItem icon={<Mail size={16} />} text="Contact" />
              <NavItem icon={<Info size={16} />} text="About" />
            </div>

            {/* Search bar */}
            <div className="relative mx-4">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search size={16} className="text-slate-400" />
              </div>
              <input 
                type="text" 
                className="py-1.5 pl-10 pr-4 bg-slate-700 text-slate-200 placeholder-slate-400 rounded border border-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm w-48"
                placeholder="Search..." 
              />
            </div>
            
            {/* Login button */}
            <a 
              href="#" 
              className="flex items-center px-4 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded border border-blue-700 transition duration-150 ml-2"
            >
              <User size={16} className="mr-1.5" />
              Login
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-600"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} border-t border-slate-700 bg-slate-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="flex items-center  px-3 py-2 text-sm font-medium text-white bg-slate-700 rounded-md">
            <Home size={16} className="mr-2" />
            Home
          </a>
          <a href="#" className="flex items-center  px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md">
            <Mail size={16} className="mr-2" />
            Contact
          </a>
          <a href="#" className="flex items-center  px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md">
            <Info size={16} className="mr-2" />
            About
          </a>
          <a href="#" className="flex items-center mt-4 px-3 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">
            <User size={16} className="mr-2" />
            Login
          </a>
          <div className="relative px-3 py-2 mt-2">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={16} className="text-slate-400 ml-2" />
            </div>
            <input 
              type="text" 
              className="w-full py-1.5 pl-10 pr-4 text-sm bg-slate-700 text-slate-200 placeholder-slate-400 rounded border border-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Search..." 
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

// Helper component for nav items
const NavItem = ({ icon, text, active = false }) => {
  return (
    <a 
      href="#" 
      className={`flex items-center px-3 py-2 rounded text-sm font-medium transition duration-150 ${
        active 
          ? "bg-slate-700 text-white" 
          : "text-slate-300 hover:text-white hover:bg-slate-700"
      }`}
    >
      {icon && <span className="mr-1.5">{icon}</span>}
      {text}
    </a>
  );
};

export default Nav;