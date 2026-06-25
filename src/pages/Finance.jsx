import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { 
  Percent, Calculator, ShieldCheck, Heart, Home, Briefcase, User, 
  GraduationCap, Building, Car, Shield, FileCheck, CheckCircle2, Info, AlertCircle
} from 'lucide-react';
import { financeServices } from '../data/financeData';

// Map icon names to Lucide icon components
const iconMap = {
  Car: Car,
  Shield: Shield,
  ShieldCheck: ShieldCheck,
  Heart: Heart,
  FileCheck: FileCheck,
  Home: Home,
  Briefcase: Briefcase,
  User: User,
  GraduationCap: GraduationCap,
  Building: Building
};

export default function Finance() {
  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(1000000); // 10 Lakhs
  const [interestRate, setInterestRate] = useState(8.5); // 8.5%
  const [tenure, setTenure] = useState(5); // 5 Years
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  // Application Form State
  const [selectedService, setSelectedService] = useState('car-finance');
  const [applySuccess, setApplySuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // Recalculate EMI
  useEffect(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    
    // EMI Formula: [P x r x (1+r)^n] / [(1+r)^n - 1]
    const emiCalc = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    
    if (isFinite(emiCalc)) {
      setEmi(Math.round(emiCalc));
      const totalPay = Math.round(emiCalc * n);
      setTotalPayment(totalPay);
      setTotalInterest(Math.round(totalPay - P));
    }
  }, [loanAmount, interestRate, tenure]);

  const onSubmitApplication = (data) => {
    console.log('Loan/Insurance Application Submitted:', data);
    setApplySuccess(true);
    setTimeout(() => {
      setApplySuccess(false);
      reset();
    }, 4000);
  };

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="w-full min-h-screen bg-dark pt-32 pb-24 px-6 relative">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-left mb-16">
          <span className="text-xs font-display font-bold text-gold uppercase tracking-widest">Financial Portal</span>
          <h1 className="text-4xl sm:text-5xl font-display font-black mt-2 text-white">
            Finance & Services
          </h1>
          <p className="text-sm text-slate-400 mt-3 max-w-2xl leading-relaxed">
            Get instant car finance assistance, customized property/business mortgage credits, or secure comprehensive insurance policies with our industry-leading lending panel.
          </p>
        </div>

        {/* 1. Interactive EMI Calculator */}
        <div className="glass-panel rounded-3xl p-8 md:p-12 shadow-2xl mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-gold to-emerald-500"></div>
          
          {/* Sliders (Left) */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-left">
            <div>
              <span className="text-xs font-display font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <Calculator size={14} /> Real-Time EMI Planner
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">Estimate Your Monthly Outflow</h2>
            </div>

            {/* Slider 1: Loan Amount */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-bold uppercase tracking-wider">Loan Amount</span>
                <span className="font-display font-bold text-gold text-sm">{formatCurrency(loanAmount)}</span>
              </div>
              <input
                type="range"
                min="100000"
                max="5000000"
                step="50000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-1 bg-white/10 accent-gold rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                <span>₹1 Lakh</span>
                <span>₹25 Lakhs</span>
                <span>₹50 Lakhs</span>
              </div>
            </div>

            {/* Slider 2: Interest Rate */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-bold uppercase tracking-wider">Interest Rate (p.a.)</span>
                <span className="font-display font-bold text-gold text-sm">{interestRate}%</span>
              </div>
              <input
                type="range"
                min="6"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-1 bg-white/10 accent-gold rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                <span>6% p.a.</span>
                <span>13% p.a.</span>
                <span>20% p.a.</span>
              </div>
            </div>

            {/* Slider 3: Tenure */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-bold uppercase tracking-wider">Loan Tenure</span>
                <span className="font-display font-bold text-gold text-sm">{tenure} Years ({tenure * 12} Mos)</span>
              </div>
              <input
                type="range"
                min="1"
                max="7"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-1 bg-white/10 accent-gold rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                <span>1 Year</span>
                <span>4 Years</span>
                <span>7 Years</span>
              </div>
            </div>
          </div>

          {/* Outputs Panel (Right) */}
          <div className="lg:col-span-5 bg-slate-950/60 border border-white/5 rounded-2xl p-8 flex flex-col justify-between text-left">
            <div>
              <h3 className="font-display text-xs font-bold tracking-wider text-slate-500 uppercase border-b border-white/5 pb-4">
                Estimated Repayment Summary
              </h3>

              <div className="flex flex-col gap-6 mt-6">
                <div>
                  <span className="block text-xs text-slate-500 mb-1">Monthly Loan EMI</span>
                  <span className="font-display font-black text-3xl text-emerald-400">
                    {formatCurrency(emi)}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                  <div>
                    <span className="block text-xs text-slate-500 mb-0.5">Principal Amount</span>
                    <span className="block text-sm font-semibold text-white">{formatCurrency(loanAmount)}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 mb-0.5">Total Interest Payable</span>
                    <span className="block text-sm font-semibold text-gold">{formatCurrency(totalInterest)}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <span className="block text-xs text-slate-500 mb-0.5">Total Amount Payable</span>
                  <span className="block text-base font-bold text-white">{formatCurrency(totalPayment)}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                const element = document.getElementById('finance-apply-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full mt-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-dark font-display font-extrabold tracking-wider text-xs rounded-xl uppercase transition-colors text-center"
            >
              Apply For Loan Now
            </button>
          </div>
        </div>

        {/* 2. Premium Services Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-xs font-display font-bold text-gold uppercase tracking-widest">Our Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold mt-2 text-white">
              Insurance & Loan Brokerage
            </h2>
            <div className="h-[2px] w-20 bg-gold mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {financeServices.map((service) => {
              const IconComponent = iconMap[service.iconName] || Shield;
              return (
                <div 
                  key={service.id} 
                  className="glass-panel glass-panel-hover rounded-2xl p-8 text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="p-3.5 bg-gold/10 border border-gold/20 text-gold rounded-xl">
                        <IconComponent size={22} />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                        service.category === 'Insurance' 
                          ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' 
                          : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                      }`}>
                        {service.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-extrabold text-white mb-2">{service.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">{service.description}</p>
                    
                    {/* Key features */}
                    <div className="flex flex-col gap-2 pt-4 border-t border-white/5">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                          <CheckCircle2 size={13} className="text-gold flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedService(service.id);
                      const element = document.getElementById('finance-apply-section');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full mt-8 py-3.5 bg-white/5 border border-white/10 hover:border-gold hover:bg-gold hover:text-dark rounded-xl font-display font-semibold text-xs tracking-wider transition-all duration-300 uppercase text-center"
                  >
                    Send Inquiry
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Inquiry/Application Form */}
        <div id="finance-apply-section" className="glass-panel rounded-3xl p-8 md:p-12 max-w-3xl mx-auto shadow-2xl relative overflow-hidden text-left">
          <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>

          {applySuccess ? (
            <div className="py-12 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">Application Submitted!</h3>
              <p className="text-sm text-slate-400 max-w-sm leading-relaxed mx-auto">
                Your loan/insurance application has been received successfully. Our finance officer will check your profile eligibility and get back to you with terms in 2-3 business hours.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <span className="text-xs font-display font-bold text-gold uppercase tracking-wider">Fast-track Approval</span>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1">Apply Online</h2>
                <p className="text-xs text-slate-400 mt-2">
                  Complete the quick questionnaire below. Our executive will follow up with loan quotes.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmitApplication)} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Full Name</label>
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
                        pattern: { value: /^[0-9]{10}$/, message: 'Valid 10-digit number required' }
                      })}
                      className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                      placeholder="9876543210"
                    />
                    {errors.phone && <span className="text-[10px] text-rose-500 mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.phone.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Preferred Service</label>
                    <select
                      value={selectedService}
                      {...register('service')}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                    >
                      {financeServices.map((service) => (
                        <option key={service.id} value={service.id} className="bg-slate-950 text-white">
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Required Amount (INR)</label>
                    <input
                      type="text"
                      {...register('amount', { required: 'Required' })}
                      className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                      placeholder="e.g., ₹5,00,000"
                    />
                    {errors.amount && <span className="text-[10px] text-rose-500 mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.amount.message}</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Your Message / Co-applicant Details</label>
                  <textarea
                    rows="3"
                    {...register('message')}
                    className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold resize-none"
                    placeholder="Provide additional requirements, employer type, or details about the vehicle."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-4 bg-gold hover:bg-gold-light text-dark font-display font-extrabold tracking-wider text-xs rounded-xl uppercase transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
