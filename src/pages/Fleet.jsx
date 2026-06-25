import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Fuel, ShieldCheck, Check, Sparkles, Filter, ChevronRight, Info, AlertCircle, X,
  BadgeAlert, Gauge, User, UserCheck
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { fleetData } from '../data/fleetData';

export default function Fleet() {
  const [filter, setFilter] = useState('All');
  const [selectedCar, setSelectedCar] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // Extract categories
  const categories = ['All', 'Hatchback', 'Compact SUV', 'SUV 4x4', 'Premium SUV', 'MUV'];

  // Filter logic
  const filteredFleet = filter === 'All' 
    ? fleetData 
    : fleetData.filter(car => car.type.includes(filter) || (filter === 'SUV 4x4' && car.type === 'SUV 4x4') || (filter === 'Premium SUV' && car.type === 'Premium SUV'));

  const onSubmitBooking = (data) => {
    console.log('Booking Inquiry Submitted:', data);
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedCar(null);
      reset();
    }, 4000);
  };

  return (
    <div className="w-full min-h-screen bg-dark pt-32 pb-24 px-6 relative">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-left mb-12">
          <span className="text-xs font-display font-bold text-gold uppercase tracking-widest">Premium Collection</span>
          <h1 className="text-4xl sm:text-5xl font-display font-black mt-2 text-white">
            Explore Our Fleet
          </h1>
          <p className="text-sm text-slate-400 mt-3 max-w-2xl leading-relaxed">
            Select from Firozabad's premium fleet of self-drive rental cars. Attach your vehicle to start earning or book a self-drive adventure with competitive daily and monthly terms.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 mb-12 pb-4 border-b border-white/5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full font-display font-semibold text-xs tracking-wider transition-all duration-300 ${
                filter === cat
                  ? 'bg-gold text-dark border-gold shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                  : 'bg-white/5 border border-white/5 text-slate-300 hover:bg-white/10 hover:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleet.map((car) => (
            <div 
              key={car.id} 
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Header */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-500 text-dark px-3 py-1.5 rounded-lg font-display font-extrabold text-[10px] tracking-wider uppercase">
                    Attachment Earning: ₹{car.monthlyIncome.toLocaleString('en-IN')}/Mo
                  </div>
                </div>

                {/* Car Details */}
                <div className="p-6 text-left">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">{car.type}</span>
                      <h3 className="text-xl font-display font-black text-white mt-0.5 leading-tight">{car.name}</h3>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="block text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Self Drive Rate</span>
                      <span className="block font-display font-bold text-base text-gold mt-0.5">₹{car.dailyRent.toLocaleString('en-IN')}/Day</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mt-3 leading-relaxed line-clamp-2">{car.description}</p>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-3 gap-4 mt-6 border-y border-white/5 py-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[9px] text-slate-500 uppercase font-semibold">Fuel</span>
                      <span className="text-xs text-slate-300 font-medium">{car.specs.fuel}</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[9px] text-slate-500 uppercase font-semibold">Transmission</span>
                      <span className="text-xs text-slate-300 font-medium truncate">{car.specs.transmission}</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[9px] text-slate-500 uppercase font-semibold">Seats</span>
                      <span className="text-xs text-slate-300 font-medium">{car.specs.seats}</span>
                    </div>
                  </div>

                  {/* Key Features Checkmarks */}
                  <div className="mt-4 flex flex-col gap-1.5">
                    {car.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-400">
                        <Check size={12} className="text-gold" />
                        <span className="text-[11px] font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex gap-3">
                <button
                  onClick={() => setSelectedCar(car)}
                  className="flex-1 py-3.5 bg-gold text-dark hover:bg-gold-light rounded-xl font-display font-extrabold text-xs tracking-wider transition-all duration-300 uppercase text-center"
                >
                  Book Self-Drive
                </button>
                <a
                  href={`https://wa.me/919897958402?text=Hi%20GO%20CARS,%20I%20want%20to%20attach%20my%20${encodeURIComponent(car.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 bg-white/5 border border-white/10 hover:border-gold hover:text-gold rounded-xl flex items-center justify-center transition-all duration-300"
                  title="Attach On WhatsApp"
                >
                  Attach
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Booking Modal */}
      {selectedCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="glass-panel w-full max-w-xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
            
            <button
              onClick={() => { setSelectedCar(null); setBookingSuccess(false); }}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {bookingSuccess ? (
              <div className="p-8 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Inquiry Submitted!</h3>
                <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
                  Thank you for your interest in renting a self-drive {selectedCar.name}. Our fleet representative will contact you on your phone number within 1 hour to finalize your booking details.
                </p>
              </div>
            ) : (
              <div className="p-8 text-left">
                <span className="text-[10px] font-bold text-gold uppercase tracking-wider">Self Drive Rental</span>
                <h3 className="text-2xl font-display font-black text-white mt-1">Book {selectedCar.name}</h3>
                
                {/* Rates Grid */}
                <div className="flex gap-6 mt-4 p-3 bg-white/5 border border-white/5 rounded-xl text-xs">
                  <div>
                    <span className="block text-slate-500 font-medium">Daily Rental Rate</span>
                    <span className="block font-display font-bold text-gold text-sm mt-0.5">₹{selectedCar.dailyRent.toLocaleString('en-IN')}/Day</span>
                  </div>
                  <div className="border-l border-white/10 pl-6">
                    <span className="block text-slate-500 font-medium">Security Deposit</span>
                    <span className="block font-display font-bold text-white text-sm mt-0.5">₹5,000 (Refundable)</span>
                  </div>
                </div>

                {/* Booking Form */}
                <form onSubmit={handleSubmit(onSubmitBooking)} className="flex flex-col gap-4 mt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-[10px] text-rose-500 mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.name.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Phone Number</label>
                      <input
                        type="tel"
                        {...register('phone', { 
                          required: 'Phone is required',
                          pattern: { value: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit number' }
                        })}
                        className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                        placeholder="9876543210"
                      />
                      {errors.phone && <span className="text-[10px] text-rose-500 mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.phone.message}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Start Date</label>
                      <input
                        type="date"
                        {...register('startDate', { required: 'Required' })}
                        className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                      />
                      {errors.startDate && <span className="text-[10px] text-rose-500 mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.startDate.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">End Date</label>
                      <input
                        type="date"
                        {...register('endDate', { required: 'Required' })}
                        className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                      />
                      {errors.endDate && <span className="text-[10px] text-rose-500 mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.endDate.message}</span>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Special Requests / Message</label>
                    <textarea
                      rows="3"
                      {...register('message')}
                      className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold resize-none"
                      placeholder="e.g., Baby seat, roof carrier, airport pickup"
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="w-full py-4 bg-gold hover:bg-gold-light text-dark font-display font-extrabold tracking-wider text-xs rounded-xl uppercase transition-colors"
                    >
                      Submit Booking Inquiry
                    </button>
                    <span className="block text-center text-[10px] text-slate-500 mt-2">
                      *By submitting, you agree to our 21+ self-drive policy & refundable security deposit.
                    </span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
