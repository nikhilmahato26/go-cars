import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  Compass, MapPin, Calendar, Clock, Bus, CheckCircle2, Star, AlertCircle, X,
  BadgePercent, Navigation, Map
} from 'lucide-react';
import { tourPackages, busRoutes } from '../data/tourismData';

export default function Tourism() {
  const [selectedTour, setSelectedTour] = useState(null);
  const [successMsg, setSuccessMsg] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleBookingSubmit = (data) => {
    console.log('Tourism Booking Submitted:', data);
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
      setSelectedTour(null);
      reset();
    }, 4000);
  };

  return (
    <div className="w-full min-h-screen bg-dark pt-32 pb-24 px-6 relative">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-left mb-16">
          <span className="text-xs font-display font-bold text-gold uppercase tracking-widest">Tourism & Travels</span>
          <h1 className="text-4xl sm:text-5xl font-display font-black mt-2 text-white">
            Tourism Services
          </h1>
          <p className="text-sm text-slate-400 mt-3 max-w-2xl leading-relaxed">
            Discover breathtaking destinations across India with our custom-crafted holiday packages. Book luxury hotel stays or secure daily air-conditioned bus connections from Firozabad.
          </p>
        </div>

        {/* 1. Holiday Packages Grid */}
        <div className="mb-24">
          <div className="text-left mb-10 border-b border-white/5 pb-4">
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white">Holiday Packages</h2>
            <p className="text-xs text-slate-500 mt-1">Handpicked itineraries for families, couples, and adventurers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tourPackages.map((pack) => (
              <div 
                key={pack.id} 
                className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img src={pack.image} alt={pack.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {pack.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="bg-gold text-dark text-[8px] font-bold px-2 py-1 rounded uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 text-left">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{pack.duration}</span>
                    <h3 className="text-lg font-display font-extrabold text-white mt-1 leading-tight">{pack.title}</h3>
                    
                    <div className="flex items-center gap-1.5 mt-2.5 text-xs text-slate-400">
                      <MapPin size={12} className="text-gold flex-shrink-0" />
                      <span className="truncate">{pack.route}</span>
                    </div>

                    <div className="flex flex-col gap-1.5 mt-4 pt-4 border-t border-white/5">
                      {pack.highlights.slice(0, 3).map((high, i) => (
                        <div key={i} className="flex items-center gap-2 text-[10px] text-slate-400">
                          <CheckCircle2 size={11} className="text-emerald-400" />
                          <span>{high}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="flex items-baseline gap-2 mb-4 text-left">
                    <span className="text-slate-500 text-[10px] line-through">{pack.originalPrice}</span>
                    <span className="text-emerald-400 font-display font-extrabold text-lg">{pack.price}</span>
                    <span className="text-[9px] text-slate-500 font-medium">/ person</span>
                  </div>

                  <button
                    onClick={() => setSelectedTour(pack)}
                    className="w-full py-3 bg-gold hover:bg-gold-light text-dark font-display font-bold text-xs rounded-xl uppercase tracking-wider transition-colors text-center"
                  >
                    Book Holiday Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Daily Bus Services Table */}
        <div className="mb-24">
          <div className="text-left mb-10 border-b border-white/5 pb-4">
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white">Daily Bus Services</h2>
            <p className="text-xs text-slate-500 mt-1">Premium air-conditioned connections with high frequency from Firozabad.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {busRoutes.map((route) => (
              <div 
                key={route.id} 
                className="glass-panel p-6 rounded-2xl flex flex-col justify-between text-left border border-white/5 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-[150px] h-[150px] rounded-full bg-blue-500/5 blur-[60px] pointer-events-none"></div>
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-slate-300 text-xs font-semibold uppercase tracking-wider">
                      <Bus size={14} className="text-gold" /> {route.from} to {route.to}
                    </div>
                    <span className="font-display font-extrabold text-base text-gold">₹{route.price}</span>
                  </div>

                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-2">Bus Type</span>
                  <p className="text-xs text-slate-300 font-semibold mb-4 leading-relaxed">{route.type}</p>

                  <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4 text-xs">
                    <div>
                      <span className="block text-[9px] text-slate-500 uppercase font-semibold">Available Timings</span>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {route.timings.map((time, idx) => (
                          <span key={idx} className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-slate-300">
                            {time}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block text-[9px] text-slate-500 uppercase font-semibold">Travel Time</span>
                      <span className="block text-slate-300 font-bold mt-1.5">{route.duration}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/919897958402?text=Hi%20GO%20CARS,%20I%20want%20to%20book%20bus%20seats%20for%20route%20${encodeURIComponent(route.from + ' to ' + route.to)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-6 py-3.5 bg-white/5 border border-white/10 hover:border-gold hover:bg-gold hover:text-dark rounded-xl font-display font-semibold text-xs tracking-wider transition-all duration-300 uppercase text-center flex items-center justify-center gap-1.5"
                >
                  Book Tickets via WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Holiday / Bus Booking Modal */}
        {selectedTour && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="glass-panel w-full max-w-xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
              <button
                onClick={() => { setSelectedTour(null); setSuccessMsg(false); }}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              {successMsg ? (
                <div className="p-8 text-center flex flex-col items-center justify-center min-h-[400px]">
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Booking Inquiry Logged!</h3>
                  <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
                    We have successfully logged your tour request for {selectedTour.title}. A travel advisor will contact you within 2 hours with customized hotels, transportation plans, and final pricing.
                  </p>
                </div>
              ) : (
                <div className="p-8 text-left">
                  <span className="text-[10px] font-bold text-gold uppercase tracking-wider">Holiday Booking Planner</span>
                  <h3 className="text-2xl font-display font-black text-white mt-1">Book {selectedTour.title}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{selectedTour.duration} | {selectedTour.route}</p>

                  <form onSubmit={handleSubmit(handleBookingSubmit)} className="flex flex-col gap-4 mt-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Name</label>
                        <input
                          type="text"
                          {...register('name', { required: 'Name is required' })}
                          className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                          placeholder="John Doe"
                        />
                        {errors.name && <span className="text-[10px] text-rose-500 mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.name.message}</span>}
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Phone</label>
                        <input
                          type="tel"
                          {...register('phone', { 
                            required: 'Phone required',
                            pattern: { value: /^[0-9]{10}$/, message: '10-digit number required' }
                          })}
                          className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                          placeholder="9876543210"
                        />
                        {errors.phone && <span className="text-[10px] text-rose-500 mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.phone.message}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Travel Date</label>
                        <input
                          type="date"
                          {...register('travelDate', { required: 'Required' })}
                          className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">No. of Travelers</label>
                        <input
                          type="number"
                          min="1"
                          {...register('travelers', { required: 'Required' })}
                          className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                          placeholder="2"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Hotel Category / Special Demands</label>
                      <textarea
                        rows="3"
                        {...register('message')}
                        className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold resize-none"
                        placeholder="e.g., 3-Star hotel, budget packages, flight bookings needed"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-4 py-4 bg-gold hover:bg-gold-light text-dark font-display font-extrabold tracking-wider text-xs rounded-xl uppercase transition-colors"
                    >
                      Submit Travel Booking
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
