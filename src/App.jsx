import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import StickyWidgets from './components/Common/StickyWidgets';
import Home from './pages/Home';
import Fleet from './pages/Fleet';
import Finance from './pages/Finance';
import Marketplace from './pages/Marketplace';
import Tourism from './pages/Tourism';
import Contact from './pages/Contact';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-dark text-slate-300">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/tourism" element={<Tourism />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <StickyWidgets />
      </div>
    </Router>
  );
}
