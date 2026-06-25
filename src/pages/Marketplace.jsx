import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  Car, ShoppingBag, ShieldCheck, Tag, RefreshCw, BadgePercent, CheckCircle2, 
  HelpCircle, ChevronRight, AlertCircle, Calendar, Sparkles
} from 'lucide-react';

const mockUsedCars = [
  {
    id: 'used-creta',
    name: 'Hyundai Creta SX (O) Turbo',
    year: 2022,
    km: '24,000 km',
    fuel: 'Petrol',
    transmission: 'Automatic (DCT)',
    price: '₹14,85,000',
    owners: '1st Owner',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=600',
    tag: 'Certified Used'
  },
  {
    id: 'used-xuv700',
    name: 'Mahindra XUV700 AX7 L',
    year: 2023,
    km: '18,500 km',
    fuel: 'Diesel',
    transmission: 'Automatic',
    price: '₹21,50,000',
    owners: '1st Owner',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600',
    tag: 'Trending'
  },
  {
    id: 'used-city',
    name: 'Honda City ZX CVT',
    year: 2021,
    km: '32,000 km',
    fuel: 'Petrol',
    transmission: 'Automatic',
    price: '₹11,25,000',
    owners: '1st Owner',
    image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=600',
    tag: 'Certified Used'
  },
  {
    id: 'used-thar',
    name: 'Mahindra Thar LX 4WD',
    year: 2022,
    km: '12,000 km',
    fuel: 'Diesel',
    transmission: 'Manual',
    price: '₹13,95,000',
    owners: '1st Owner',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600',
    tag: 'Verified'
  }
];

export default function Marketplace() {
  const [activeTab, setActiveTab] = useState('buy');
  const [formSuccess, setFormSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleFormSubmit = (data) => {
    console.log('Marketplace Form Submitted:', data);
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      reset();
    }, 4000);
  };

  return (
    <div className="w-full min-h-screen bg-dark pt-32 pb-24 px-6 relative">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-left mb-12">
          <span className="text-xs font-display font-bold text-gold uppercase tracking-widest">Car Marketplace</span>
          <h1 className="text-4xl sm:text-5xl font-display font-black mt-2 text-white">
            Buy, Sell & Exchange
          </h1>
          <p className="text-sm text-slate-400 mt-3 max-w-2xl leading-relaxed">
            Firozabad's premium marketplace. Buy verified pre-owned cars, sell your current vehicle at best valuation, or exchange with finance assistance.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12 pb-4 border-b border-white/5">
          <button
            onClick={() => { setActiveTab('buy'); setFormSuccess(false); }}
            className={`py-3.5 px-4 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === 'buy'
                ? 'bg-gold text-dark shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                : 'bg-white/5 border border-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            <ShoppingBag size={14} /> Buy Cars
          </button>
          <button
            onClick={() => { setActiveTab('sell'); setFormSuccess(false); }}
            className={`py-3.5 px-4 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === 'sell'
                ? 'bg-gold text-dark shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                : 'bg-white/5 border border-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            <Tag size={14} /> Sell Your Car
          </button>
          <button
            onClick={() => { setActiveTab('exchange'); setFormSuccess(false); }}
            className={`py-3.5 px-4 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === 'exchange'
                ? 'bg-gold text-dark shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                : 'bg-white/5 border border-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            <RefreshCw size={14} /> Exchange Cars
          </button>
          <button
            onClick={() => { setActiveTab('finance'); setFormSuccess(false); }}
            className={`py-3.5 px-4 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === 'finance'
                ? 'bg-gold text-dark shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                : 'bg-white/5 border border-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            <BadgePercent size={14} /> Finance Help
          </button>
        </div>

        {/* Tab Contents */}
        {activeTab === 'buy' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockUsedCars.map((car) => (
              <div key={car.id} className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="relative h-52 overflow-hidden bg-slate-900">
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-gold text-dark font-display font-extrabold text-[9px] px-2.5 py-1.5 rounded-md uppercase tracking-wider">
                      {car.tag}
                    </div>
                  </div>
                  <div className="p-6 text-left">
                    <span className="text-[10px] text-gold font-bold tracking-widest uppercase">{car.year} Model</span>
                    <h3 className="text-lg font-display font-extrabold text-white mt-1 leading-tight">{car.name}</h3>
                    
                    <div className="grid grid-cols-3 gap-3 my-5 border-y border-white/5 py-3 text-[11px] text-slate-400">
                      <div>
                        <span className="block text-[9px] text-slate-500 uppercase font-semibold">Driven</span>
                        <span className="block text-slate-300 mt-0.5">{car.km}</span>
                      </div>
                      <div>
                        <span className="block text-[9px] text-slate-500 uppercase font-semibold">Fuel</span>
                        <span className="block text-slate-300 mt-0.5">{car.fuel}</span>
                      </div>
                      <div>
                        <span className="block text-[9px] text-slate-500 uppercase font-semibold">Transmission</span>
                        <span className="block text-slate-300 mt-0.5 truncate">{car.transmission}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <span className="block text-[9px] text-slate-500 uppercase font-semibold">Buy Price</span>
                        <span className="font-display font-bold text-lg text-emerald-400">{car.price}</span>
                      </div>
                      <span className="text-xs text-slate-500 font-semibold">{car.owners}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <a
                    href={`https://wa.me/919897958402?text=Hi%20GO%20CARS,%20I%20am%20interested%20in%20buying%20${encodeURIComponent(car.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center py-3.5 bg-white/5 border border-white/10 hover:border-gold hover:bg-gold hover:text-dark rounded-xl font-display font-semibold text-xs tracking-wider transition-all duration-300 uppercase text-center"
                  >
                    Inquire Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'sell' && (
          <div className="glass-panel rounded-3xl p-8 md:p-12 max-w-3xl mx-auto text-left relative overflow-hidden shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>

            {formSuccess ? (
              <div className="py-16 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Details Submitted!</h3>
                <p className="text-sm text-slate-400 max-w-sm leading-relaxed mx-auto">
                  Thank you for submitting your car details. Our evaluation team will contact you shortly to schedule a physical inspection and provide the best marketplace valuation.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <span className="text-xs font-display font-bold text-gold uppercase tracking-wider">Free Evaluation</span>
                  <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1">Sell Your Car</h2>
                  <p className="text-xs text-slate-400 mt-2">
                    Enter your vehicle specifications below. We guarantee a transparent, market-leading offer.
                  </p>
                </div>

                <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Make & Model</label>
                      <input
                        type="text"
                        {...register('makeModel', { required: 'Model is required' })}
                        className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                        placeholder="e.g., Maruti Dzire VXI"
                      />
                      {errors.makeModel && <span className="text-[10px] text-rose-500 mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.makeModel.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Model Year</label>
                      <input
                        type="number"
                        {...register('year', { required: 'Year is required' })}
                        className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                        placeholder="e.g., 2020"
                      />
                      {errors.year && <span className="text-[10px] text-rose-500 mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.year.message}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Kilometers Driven</label>
                      <input
                        type="text"
                        {...register('kms', { required: 'KMs required' })}
                        className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                        placeholder="e.g., 45,000 km"
                      />
                      {errors.kms && <span className="text-[10px] text-rose-500 mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.kms.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Fuel Type</label>
                      <select
                        {...register('fuel')}
                        className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                      >
                        <option value="petrol">Petrol</option>
                        <option value="diesel">Diesel</option>
                        <option value="cng">CNG</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Expected Price (INR)</label>
                      <input
                        type="text"
                        {...register('expectedPrice', { required: 'Required' })}
                        className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                        placeholder="e.g., ₹5,50,000"
                      />
                      {errors.expectedPrice && <span className="text-[10px] text-rose-500 mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.expectedPrice.message}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2 border-t border-white/5 pt-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Owner Name</label>
                      <input
                        type="text"
                        {...register('ownerName', { required: 'Name is required' })}
                        className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                        placeholder="John Doe"
                      />
                      {errors.ownerName && <span className="text-[10px] text-rose-500 mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.ownerName.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Phone Number</label>
                      <input
                        type="tel"
                        {...register('phone', { 
                          required: 'Required',
                          pattern: { value: /^[0-9]{10}$/, message: '10-digit number required' }
                        })}
                        className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                        placeholder="9876543210"
                      />
                      {errors.phone && <span className="text-[10px] text-rose-500 mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.phone.message}</span>}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-4 bg-gold hover:bg-gold-light text-dark font-display font-extrabold tracking-wider text-xs rounded-xl uppercase transition-colors"
                  >
                    Submit Vehicle For Evaluation
                  </button>
                </form>
              </>
            )}
          </div>
        )}

        {activeTab === 'exchange' && (
          <div className="glass-panel rounded-3xl p-8 md:p-12 max-w-3xl mx-auto text-left relative overflow-hidden shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>

            {formSuccess ? (
              <div className="py-16 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Exchange Request Submitted!</h3>
                <p className="text-sm text-slate-400 max-w-sm leading-relaxed mx-auto">
                  Your exchange inquiry has been logged. Our used-car evaluators will visit you to inspect your current vehicle and finalize terms for your new selected car.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <span className="text-xs font-display font-bold text-gold uppercase tracking-wider">Upgrade Your Ride</span>
                  <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1">Exchange Your Car</h2>
                  <p className="text-xs text-slate-400 mt-2">
                    Enter details of your current vehicle and specify the car you wish to buy or upgrade to.
                  </p>
                </div>

                <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-5">
                  {/* Current Car Section */}
                  <h4 className="text-[10px] text-gold font-bold uppercase tracking-widest border-b border-white/5 pb-2">Your Current Vehicle</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Make & Model</label>
                      <input
                        type="text"
                        {...register('currModel', { required: 'Required' })}
                        className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                        placeholder="e.g., Hyundai i20"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Model Year</label>
                      <input
                        type="number"
                        {...register('currYear', { required: 'Required' })}
                        className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                        placeholder="e.g., 2018"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Kilometers Driven</label>
                      <input
                        type="text"
                        {...register('currKms', { required: 'Required' })}
                        className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                        placeholder="e.g., 60,000 km"
                      />
                    </div>
                  </div>

                  {/* Target Upgrade Car Section */}
                  <h4 className="text-[10px] text-gold font-bold uppercase tracking-widest border-b border-white/5 pb-2 mt-4">Upgrade Requirements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Target Vehicle Category / Model</label>
                      <input
                        type="text"
                        {...register('targetModel', { required: 'Required' })}
                        className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                        placeholder="e.g., SUV / Mahindra Thar"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Prefer Buy Budget</label>
                      <input
                        type="text"
                        {...register('budget', { required: 'Required' })}
                        className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                        placeholder="e.g., Under ₹15 Lakhs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2 border-t border-white/5 pt-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        {...register('name', { required: 'Required' })}
                        className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Phone Number</label>
                      <input
                        type="tel"
                        {...register('phone', { required: 'Required' })}
                        className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                        placeholder="9876543210"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-4 bg-gold hover:bg-gold-light text-dark font-display font-extrabold tracking-wider text-xs rounded-xl uppercase transition-colors"
                  >
                    Submit Exchange Application
                  </button>
                </form>
              </>
            )}
          </div>
        )}

        {activeTab === 'finance' && (
          <div className="glass-panel rounded-3xl p-8 md:p-12 text-left relative overflow-hidden shadow-xl max-w-4xl mx-auto">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-6 justify-center">
                <span className="text-xs font-display font-bold text-gold uppercase tracking-wider flex items-center gap-1">
                  <Sparkles size={14} className="text-gold" /> Auto Finance Assistance
                </span>
                <h2 className="text-3xl font-display font-extrabold text-white leading-tight">
                  Seamless Financing For Your Used Car Purchase
                </h2>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We don't just find you a car; we secure the loan for it too. Our internal finance desk works directly with top public & private sector lenders to guarantee high loan-to-value limits and quick disbursals.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 size={15} className="text-gold flex-shrink-0" />
                    <span>Up to 85% Loan on Used Car Valuation</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 size={15} className="text-gold flex-shrink-0" />
                    <span>Flexible Tenure from 1 to 5 Years</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 size={15} className="text-gold flex-shrink-0" />
                    <span>Hassle-Free RTO Transfers & Paperwork</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/60 border border-white/5 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                  <h4 className="font-display text-sm font-bold text-white border-b border-white/5 pb-3">Check Loan Eligibility</h4>
                  <ul className="flex flex-col gap-4 mt-6 text-xs text-slate-400">
                    <li className="flex justify-between">
                      <span>CIBIL Score Requirement</span>
                      <span className="text-white font-bold">720+ Preferred</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Interest Rates Starting</span>
                      <span className="text-emerald-400 font-bold">9.5% p.a.</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Documentation Needed</span>
                      <span className="text-white font-semibold">PAN, Aadhar, 6m Bank Statement</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-2.5">
                  <a
                    href="https://wa.me/919897958402?text=Hi%20GO%20CARS,%20I%20need%20loan%20assistance%20for%20buying%20a%20car."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-dark font-display font-extrabold tracking-wider text-xs rounded-xl uppercase transition-colors text-center"
                  >
                    Consult Finance Manager
                  </a>
                  <span className="block text-center text-[10px] text-slate-500">
                    *Approval is at sole discretion of lending banking partners.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
