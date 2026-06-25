import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  TrendingUp, CheckCircle2, ShieldCheck, Clock, Wrench, Droplet, Users, 
  ArrowRight, Shield, Award, ShieldAlert, Sparkles, ChevronDown, ChevronUp, Star,
  Compass, BadgePercent, HelpCircle, Car
} from 'lucide-react';
import { fleetData } from '../data/fleetData';
import { faqData } from '../data/faqData';
import IncomeCalculator from '../components/Home/IncomeCalculator';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);

  // Stagger animation container config
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.25 } }
  };

  const partnerBenefits = [
    { title: 'Fixed Monthly Rental', desc: 'Earn a steady, guaranteed monthly cash flow regardless of vehicle utilization.', icon: TrendingUp },
    { title: 'Company Handles Maintenance', desc: 'Routine servicing, tyre repairs, washing, and oil changes are completely on us.', icon: Wrench },
    { title: 'Driver Management', desc: 'We verify, train, hire, and manage professional drivers, saving you the hassle.', icon: Users },
    { title: 'Fuel Management', desc: 'Fuel costs are managed through client agreements and customer-pay models.', icon: Droplet },
    { title: 'Easy Documentation', desc: 'Transparent legal contracts, easy onboarding, and stress-free documentation.', icon: ShieldCheck },
    { title: 'On-Time Payments', desc: 'Receive payments directly to your bank account on or before the 5th of every month.', icon: Clock },
    { title: 'Trusted Service', desc: 'Firozabad\'s absolute leading vehicle placement and mobility services firm.', icon: Award },
    { title: 'Professional Team', desc: 'Experienced operations staff managing your car\'s safety and upkeep.', icon: Shield }
  ];

  const attachmentSteps = [
    { step: '01', title: 'Upload Vehicle Details', desc: 'Provide registration number, car specifications, and current odometer reading.' },
    { step: '02', title: 'Inspection & Verification', desc: 'Our technical team performs a quick diagnostic inspection of your car.' },
    { step: '03', title: 'Agreement Execution', desc: 'Sign a transparent, legally-binding contract outlining monthly payouts.' },
    { step: '04', title: 'Monthly Earnings Begin', desc: 'Your car is deployed and your guaranteed monthly lease gets activated.' }
  ];

  const testimonials = [
    { name: 'Rajesh Verma', role: 'Thar Owner', comment: 'Attaching my Thar with GO CARS was the best decision. I receive ₹45,000 credit every month on the dot, and they maintain the car like it\'s their own.', rating: 5, type: 'Owner' },
    { name: 'Amit Sharma', role: 'Corporate Rental client', comment: 'We rented 3 self-drive cars for a family road tour. Excellent engines, squeaky clean interiors, and straightforward pickup policies. Highly recommended!', rating: 5, type: 'Renter' },
    { name: 'Dr. Vivek Bansal', role: 'Finance Customer', comment: 'GO CARS arranged an attractive car loan for my new SUV at 8.6% interest within 36 hours. The documentation was completely paperless and smooth.', rating: 5, type: 'Finance Client' }
  ];

  return (
    <div className="w-full bg-dark">
      {/* 1. Cinematic Hero Section */}
      <section className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Parallax Image Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-[0.4] scale-105"
          style={{ backgroundImage: `url('/hero-bg.png')` }}
        />
        {/* Overlay Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-dark/60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10">
          {/* Hero Main Content */}
          <div className="lg:col-span-8 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold tracking-wider uppercase mb-6 w-fit"
            >
              <Sparkles size={12} className="animate-spin-slow" /> Luxury Fleet & Financial Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight"
            >
              Attach Your Car & Earn <br />
              <span className="text-gold-gradient">Fixed Monthly Income</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-300 mt-6 max-w-xl font-light"
            >
              Your Car. Your Income. <span className="text-gold font-medium">Our Responsibility.</span> <br />
              Secure up to ₹50,000/month with India's most trusted automotive attachment partner.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8"
            >
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl bg-gold text-dark font-display font-bold text-sm tracking-wider hover:bg-gold-light hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 uppercase text-center"
              >
                Attach My Car
              </Link>
              <Link
                to="/fleet"
                className="px-8 py-4 rounded-xl border border-white/20 hover:border-gold hover:text-gold backdrop-blur-md bg-white/5 font-display font-bold text-sm tracking-wider transition-all duration-300 uppercase text-center"
              >
                Rent a Car
              </Link>
            </motion.div>

            {/* Hero Statistics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 border-t border-white/10 pt-8"
            >
              <div>
                <span className="block font-display font-extrabold text-3xl text-white">500+</span>
                <span className="block text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Premium Cars</span>
              </div>
              <div>
                <span className="block font-display font-extrabold text-3xl text-gold">Guaranteed</span>
                <span className="block text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Monthly Income</span>
              </div>
              <div>
                <span className="block font-display font-extrabold text-3xl text-white">100%</span>
                <span className="block text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Trusted Customers</span>
              </div>
              <div>
                <span className="block font-display font-extrabold text-3xl text-white">Self Drive</span>
                <span className="block text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Only Mandate</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Calculator Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold mb-4">
            Earning <span className="text-gold-gradient">Estimator</span>
          </h2>
          <div className="h-[2px] w-20 bg-gold mx-auto rounded-full"></div>
        </div>
        <IncomeCalculator />
      </section>

      {/* 3. Monthly Rental Packages Preview */}
      <section className="py-24 px-6 bg-slate-950/40 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="text-left">
              <span className="text-xs font-display font-bold text-gold uppercase tracking-widest">Leasing Options</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold mt-2 text-white">
                Monthly Rental Packages
              </h2>
            </div>
            <Link to="/fleet" className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-display text-sm font-semibold tracking-wider uppercase mt-4 md:mt-0 transition-colors group">
              Explore Entire Fleet <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleetData.slice(0, 3).map((car) => (
              <div key={car.id} className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={car.image} 
                      alt={car.name} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                    />
                    <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-lg bg-emerald-500 text-dark font-display font-extrabold text-xs tracking-wider uppercase">
                      Earn {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(car.monthlyIncome)}/Mo
                    </div>
                  </div>
                  <div className="p-6 text-left">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">{car.type}</span>
                    <h3 className="text-xl font-display font-extrabold mt-1 text-white">{car.name}</h3>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2">{car.description}</p>
                    
                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-3 mt-6 border-t border-white/5 pt-4">
                      <div>
                        <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Engine</span>
                        <span className="block text-xs text-slate-300 font-medium mt-0.5">{car.specs.engine}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Transmission</span>
                        <span className="block text-xs text-slate-300 font-medium mt-0.5">{car.specs.transmission}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center py-3.5 bg-white/5 border border-white/10 hover:border-gold hover:bg-gold hover:text-dark rounded-xl font-display font-semibold text-xs tracking-wider transition-all duration-300 uppercase"
                  >
                    Partner Inquiry
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Partner With Us */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-display font-bold text-gold uppercase tracking-widest">Key Advantages</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold mt-2 text-white">
              Why Partner With GO CARS
            </h2>
            <div className="h-[2px] w-20 bg-gold mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={i}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl text-left flex flex-col gap-4 border border-white/5"
                >
                  <div className="p-3 bg-gold/10 border border-gold/20 text-gold rounded-xl w-fit">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-lg text-white mb-2">{benefit.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Vehicle Attachment Process Timeline */}
      <section className="py-24 px-6 bg-slate-950/40 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-display font-bold text-gold uppercase tracking-widest">Simple Onboarding</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold mt-2 text-white">
              Vehicle Attachment Process
            </h2>
            <div className="h-[2px] w-20 bg-gold mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Timeline Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[52px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-gold/5 via-gold/40 to-gold/5 z-0" />

            {attachmentSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-gold/30 hover:border-gold flex items-center justify-center font-display font-black text-lg text-gold hover:scale-115 hover:shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-all duration-300 mb-6 bg-radial-gradient">
                  {step.step}
                </div>
                <h3 className="font-display font-extrabold text-lg text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 max-w-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Quick Category Nav Panels */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Finance card */}
          <div className="glass-panel rounded-2xl p-8 text-left flex flex-col justify-between h-96 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-emerald-500/5 blur-[80px] pointer-events-none"></div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-6">
                <BadgePercent size={10} /> Auto Loans & Mortgages
              </div>
              <h3 className="text-2xl font-display font-extrabold text-white">Car Finance & Loans</h3>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Competitive rates starting at 8.5% p.a. Multi-bank tie-ups with quick digitised disbursals.
              </p>
            </div>
            <Link
              to="/finance"
              className="inline-flex items-center gap-1 text-gold group-hover:text-gold-light text-xs font-display font-bold uppercase tracking-wider transition-colors mt-8"
            >
              Get Rates & Apply <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Marketplace card */}
          <div className="glass-panel rounded-2xl p-8 text-left flex flex-col justify-between h-96 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-gold/5 blur-[80px] pointer-events-none"></div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-wider mb-6">
                <Car size={10} /> Buy / Sell / Exchange
              </div>
              <h3 className="text-2xl font-display font-extrabold text-white">Automotive Marketplace</h3>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Premium collection of inspected pre-owned cars. Get best trade-in value for your old vehicle.
              </p>
            </div>
            <Link
              to="/marketplace"
              className="inline-flex items-center gap-1 text-gold group-hover:text-gold-light text-xs font-display font-bold uppercase tracking-wider transition-colors mt-8"
            >
              View Inventory <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Tourism card */}
          <div className="glass-panel rounded-2xl p-8 text-left flex flex-col justify-between h-96 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none"></div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-wider mb-6">
                <Compass size={10} /> Guided Journeys
              </div>
              <h3 className="text-2xl font-display font-extrabold text-white">Tourism & Bus Services</h3>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Curated Holiday Packages, hotel reservations, and daily air-conditioned bus services.
              </p>
            </div>
            <Link
              to="/tourism"
              className="inline-flex items-center gap-1 text-gold group-hover:text-gold-light text-xs font-display font-bold uppercase tracking-wider transition-colors mt-8"
            >
              Plan Your Trip <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 px-6 bg-slate-950/40 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-display font-bold text-gold uppercase tracking-widest">Client Reviews</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold mt-2 text-white">
              Trusted by Hundreds
            </h2>
            <div className="h-[2px] w-20 bg-gold mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="glass-panel p-8 rounded-2xl text-left flex flex-col justify-between border border-white/5">
                <div>
                  <div className="flex gap-1 mb-5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>
                <div className="mt-8 border-t border-white/5 pt-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">{t.name}</h4>
                    <span className="text-[10px] text-slate-500 font-semibold">{t.role}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] text-gold uppercase font-bold tracking-wider">
                    {t.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-display font-bold text-gold uppercase tracking-widest">Information Desk</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold mt-2 text-white">
              Frequently Asked Questions
            </h2>
            <div className="h-[2px] w-20 bg-gold mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="flex flex-col gap-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="glass-panel rounded-xl overflow-hidden border border-white/5 transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full py-5 px-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex flex-col gap-1 pr-4">
                    <span className="text-[9px] font-bold tracking-widest text-gold uppercase">{faq.category}</span>
                    <span className="font-display font-bold text-sm sm:text-base text-white">{faq.question}</span>
                  </div>
                  <div className="text-gold">
                    {activeFaq === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeFaq === index ? 'max-h-40 border-t border-white/5' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 text-xs text-slate-400 leading-relaxed bg-slate-950/20">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact Banner CTA */}
      <section className="py-24 px-6 bg-slate-950/40 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat filter opacity-10 brightness-[0.2]" style={{ backgroundImage: `url('/hero-bg.png')` }} />
        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold mb-4">
            Ready to Unlock Your Car's <span className="text-gold-gradient">True Potential</span>?
          </h2>
          <p className="text-slate-300 text-sm max-w-lg mb-8 leading-relaxed">
            Get in touch with our partnerships desk today. We will guide you through the documentation, inspect your vehicle, and get your earnings activated.
          </p>
          <Link
            to="/contact"
            className="px-10 py-4.5 rounded-xl bg-gold text-dark font-display font-extrabold tracking-wider hover:bg-gold-light hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 uppercase text-xs"
          >
            Start Attachment Onboarding
          </Link>
        </div>
      </section>
    </div>
  );
}
