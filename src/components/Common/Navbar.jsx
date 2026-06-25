import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Car, Shield, Compass, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Fleet', path: '/fleet' },
    { name: 'Finance & Insurance', path: '/finance' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Tourism', path: '/tourism' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-dark/80 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl shadow-black/40' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="group flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-display font-extrabold text-2xl tracking-widest text-white group-hover:text-gold transition-colors duration-300">
              GO CARS
            </span>
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse"></span>
          </div>
          <span className="text-[9px] tracking-[0.3em] text-slate-400 group-hover:text-white transition-colors duration-300 font-display -mt-0.5 uppercase">
            Rental & Finance
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-display text-sm font-medium tracking-wide transition-all duration-300 hover:text-gold relative py-1 ${
                    isActive ? 'text-gold font-semibold' : 'text-slate-300'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gold rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-dark hover:border-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.25)] font-display text-xs font-semibold tracking-wider transition-all duration-300 uppercase"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gold transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden w-full bg-slate-950/95 border-b border-white/5 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `font-display text-lg font-medium tracking-wide py-2 border-b border-white/5 ${
                      isActive ? 'text-gold' : 'text-slate-300'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 text-center rounded-lg bg-gold text-dark font-display font-bold tracking-wider hover:bg-gold-light transition-all duration-300 uppercase text-sm"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
