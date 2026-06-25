import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Calculator, Percent, Sparkles } from 'lucide-react';
import { fleetData } from '../../data/fleetData';
import { Link } from 'react-router-dom';

export default function IncomeCalculator() {
  const [selectedCarId, setSelectedCarId] = useState(fleetData[0].id);
  const [tenure, setTenure] = useState(36); // in months
  const [monthlyIncome, setMonthlyIncome] = useState(fleetData[0].monthlyIncome);
  const [annualIncome, setAnnualIncome] = useState(fleetData[0].monthlyIncome * 12);
  const [totalIncome, setTotalIncome] = useState(fleetData[0].monthlyIncome * 36);

  const selectedCar = fleetData.find(car => car.id === selectedCarId) || fleetData[0];

  useEffect(() => {
    const baseIncome = selectedCar.monthlyIncome;
    setMonthlyIncome(baseIncome);
    setAnnualIncome(baseIncome * 12);
    setTotalIncome(baseIncome * tenure);
  }, [selectedCarId, tenure, selectedCar]);

  // Format numbers to INR locale
  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="w-full max-w-5xl mx-auto glass-panel rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Side Inputs */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-4">
              <Percent size={12} /> High Yield Investment
            </div>
            <h3 className="text-3xl font-display font-extrabold text-white leading-tight">
              Calculate Your Vehicle's <br />
              <span className="text-gold-gradient">Earning Potential</span>
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Select your vehicle and attachment tenure to view your guaranteed monthly and annual returns.
            </p>
          </div>

          {/* Car Grid Selector */}
          <div className="flex flex-col gap-3">
            <label className="text-xs font-display font-bold tracking-wider text-slate-400 uppercase">
              Select Vehicle Model
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {fleetData.map((car) => (
                <button
                  key={car.id}
                  onClick={() => setSelectedCarId(car.id)}
                  className={`py-3 px-2 text-center rounded-xl font-display font-medium text-xs tracking-wide border transition-all duration-300 ${
                    selectedCarId === car.id
                      ? 'bg-gold border-gold text-dark shadow-[0_0_15px_rgba(212,175,55,0.25)] scale-105'
                      : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10 hover:border-white/10'
                  }`}
                >
                  <span className="block truncate font-semibold">{car.name.replace('Maruti Suzuki ', '').replace('Tata ', '').replace('Hyundai ', '').replace('Mahindra ', '')}</span>
                  <span className={`block text-[10px] mt-1 ${selectedCarId === car.id ? 'text-dark/80 font-bold' : 'text-emerald-400'}`}>
                    ₹{car.monthlyIncome / 1000}K/Mo
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Tenure Slider */}
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-display font-bold tracking-wider text-slate-400 uppercase">
                Attachment Duration
              </label>
              <span className="font-display font-bold text-gold text-sm">
                {tenure} Months ({tenure / 12} Years)
              </span>
            </div>
            <input
              type="range"
              min="12"
              max="60"
              step="12"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full h-1 bg-white/10 accent-gold rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-medium text-slate-500 px-1">
              <span>12 Months (1 Year)</span>
              <span>24 Months</span>
              <span>36 Months</span>
              <span>48 Months</span>
              <span>60 Months (5 Years)</span>
            </div>
          </div>
        </div>

        {/* Right Side Returns View */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-slate-950/60 border border-white/5 rounded-2xl p-8 relative overflow-hidden">
          
          <div className="flex flex-col gap-6">
            <h4 className="font-display text-xs font-bold tracking-wider text-slate-400 uppercase flex items-center gap-1.5 border-b border-white/5 pb-4">
              <Calculator size={14} className="text-gold" /> Estimated Guaranteed Returns
            </h4>

            {/* Selected Car Specs Preview */}
            <div className="flex items-center gap-4 bg-white/5 p-3.5 rounded-xl border border-white/5">
              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                className="w-20 h-12 object-cover rounded-lg bg-slate-900 border border-white/10"
              />
              <div>
                <span className="block text-xs text-slate-500 font-medium">{selectedCar.type}</span>
                <span className="block text-sm font-display font-bold text-white leading-tight">{selectedCar.name}</span>
              </div>
            </div>

            {/* Income Display Grid */}
            <div className="flex flex-col gap-4">
              <div>
                <span className="block text-xs text-slate-500 mb-1">Guaranteed Monthly Rental</span>
                <span className="font-display font-extrabold text-2xl text-emerald-400">
                  {formatCurrency(monthlyIncome)}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/5">
                <div>
                  <span className="block text-xs text-slate-500 mb-1">Annual Returns</span>
                  <span className="font-display font-bold text-lg text-white">
                    {formatCurrency(annualIncome)}
                  </span>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 mb-1">Total Lease Returns</span>
                  <span className="font-display font-bold text-lg text-gold">
                    {formatCurrency(totalIncome)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              to="/contact"
              className="w-full py-4 text-center rounded-xl bg-gold text-dark font-display font-bold tracking-wider hover:bg-gold-light hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 uppercase text-xs flex items-center justify-center gap-2 group"
            >
              <Sparkles size={14} className="group-hover:rotate-12 transition-transform duration-300" />
              Attach My Vehicle
            </Link>
            <span className="block text-center text-[10px] text-slate-500">
              *T&C Apply. Income figures are fixed based on contract signing.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
