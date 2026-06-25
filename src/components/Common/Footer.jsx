import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10 px-6 relative overflow-hidden">
      {/* Absolute Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-gold/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/5 relative z-10">
        {/* Company Info */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-2xl tracking-widest text-white">
                GO CARS
              </span>
              <span className="h-2 w-2 rounded-full bg-gold"></span>
            </div>
            <span className="text-[10px] tracking-[0.3em] text-slate-400 font-display -mt-0.5 uppercase">
              Rental & Finance Services
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            Firozabad's premium multi-utility automotive portal. Elevating standard car attachments, self-drive rentals, loan brokerage, and personalized tour packages into a luxury service experience.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-gold hover:text-dark hover:-translate-y-1 transition-all duration-300">
              <Facebook size={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-gold hover:text-dark hover:-translate-y-1 transition-all duration-300">
              <Instagram size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-gold hover:text-dark hover:-translate-y-1 transition-all duration-300">
              <Twitter size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-sm font-semibold tracking-widest text-white uppercase mb-6 relative">
            Quick Links
            <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-gold"></span>
          </h4>
          <ul className="flex flex-col gap-3.5">
            <li>
              <Link to="/" onClick={handleScrollToTop} className="text-slate-400 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-1 group">
                Home <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            </li>
            <li>
              <Link to="/fleet" onClick={handleScrollToTop} className="text-slate-400 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-1 group">
                Browse Fleet <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            </li>
            <li>
              <Link to="/finance" onClick={handleScrollToTop} className="text-slate-400 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-1 group">
                Finance Options <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            </li>
            <li>
              <Link to="/marketplace" onClick={handleScrollToTop} className="text-slate-400 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-1 group">
                Car Marketplace <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            </li>
            <li>
              <Link to="/tourism" onClick={handleScrollToTop} className="text-slate-400 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-1 group">
                Tourism & Tours <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Services & Offerings */}
        <div>
          <h4 className="font-display text-sm font-semibold tracking-widest text-white uppercase mb-6 relative">
            Our Offerings
            <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-gold"></span>
          </h4>
          <ul className="flex flex-col gap-3.5 text-sm text-slate-400">
            <li className="hover:text-gold transition-colors duration-200 cursor-pointer">Vehicle Attachment (Earn Fixed Income)</li>
            <li className="hover:text-gold transition-colors duration-200 cursor-pointer">Luxury Self-Drive Bookings</li>
            <li className="hover:text-gold transition-colors duration-200 cursor-pointer">Comprehensive Vehicle Insurance</li>
            <li className="hover:text-gold transition-colors duration-200 cursor-pointer">Commercial / Personal Loans</li>
            <li className="hover:text-gold transition-colors duration-200 cursor-pointer">Daily Bus Services (Agra, Delhi)</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-display text-sm font-semibold tracking-widest text-white uppercase mb-6 relative">
            Head Office
            <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-gold"></span>
          </h4>
          <ul className="flex flex-col gap-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" />
              <span>
                Lambardar Market, Ambedkar Nagar,<br />
                Near Kakrau Kothi, Bamba Road,<br />
                Firozabad – 283203
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-gold flex-shrink-0" />
              <div className="flex flex-col">
                <a href="tel:+919897958402" className="hover:text-gold transition-colors">9897958402</a>
                <a href="tel:+919997292800" className="hover:text-gold transition-colors text-xs text-slate-500">Alt: 9997292800</a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-gold flex-shrink-0" />
              <a href="mailto:info@gocarsfinance.com" className="hover:text-gold transition-colors">info@gocars.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10 text-xs text-slate-500">
        <p>© {currentYear} GO CARS. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Partner Agreement</a>
          <a href="#" className="hover:text-gold transition-colors">Self-Drive Policy</a>
        </div>
      </div>
    </footer>
  );
}
