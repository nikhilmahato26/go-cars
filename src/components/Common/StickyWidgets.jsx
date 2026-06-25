import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StickyWidgets() {
  const primaryNumber = '9897958402';
  const whatsappText = 'Hi GO CARS, I am interested in attaching my car / renting a vehicle!';
  const whatsappLink = `https://wa.me/91${primaryNumber}?text=${encodeURIComponent(whatsappText)}`;
  const callLink = `tel:+91${primaryNumber}`;

  return (
    <>
      {/* Desktop Floating Actions */}
      <div className="fixed bottom-8 right-6 z-40 hidden md:flex flex-col gap-4">
        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.6)] hover:scale-110 active:scale-95 transition-all duration-300"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
          <span className="absolute right-16 scale-0 group-hover:scale-100 bg-emerald-950/90 text-white text-xs font-semibold px-4 py-2 rounded-lg border border-emerald-500/20 whitespace-nowrap shadow-xl transition-all duration-300 origin-right">
            WhatsApp Inquiry
          </span>
        </a>

        {/* Call Button */}
        <a
          href={callLink}
          className="group relative flex items-center justify-center w-14 h-14 bg-gold hover:bg-gold-light text-dark rounded-full shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.6)] hover:scale-110 active:scale-95 transition-all duration-300"
          title="Call Helpline"
        >
          <Phone className="w-6 h-6 fill-dark" />
          <span className="absolute right-16 scale-0 group-hover:scale-100 bg-slate-950/90 text-gold text-xs font-semibold px-4 py-2 rounded-lg border border-gold/20 whitespace-nowrap shadow-xl transition-all duration-300 origin-right">
            Call Support
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Inquiry Bar */}
      <div className="fixed bottom-0 left-0 w-full z-40 bg-slate-950/90 backdrop-blur-md border-t border-white/15 px-4 py-3 flex items-center gap-3 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
        <a
          href={callLink}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-display font-semibold text-xs tracking-wider transition-colors duration-200 uppercase"
        >
          <Phone size={14} /> Call Support
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-gold text-dark hover:bg-gold-light rounded-xl font-display font-bold text-xs tracking-wider transition-colors duration-200 uppercase"
        >
          <MessageSquare size={14} className="fill-dark" /> WhatsApp
        </a>
      </div>
    </>
  );
}
