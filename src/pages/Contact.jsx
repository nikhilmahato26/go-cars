import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  MapPin, Phone, Mail, MessageSquare, Clock, AlertCircle, CheckCircle2, 
  Map, ExternalLink, Sparkles
} from 'lucide-react';

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Contact Form Submitted:', data);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      reset();
    }, 4000);
  };

  const primaryNumber = '9897958402';
  const whatsappLink = `https://wa.me/91${primaryNumber}?text=Hi%20GO%20CARS,%20I%20have%20an%20inquiry.`;

  return (
    <div className="w-full min-h-screen bg-dark pt-32 pb-24 px-6 relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-left mb-16">
          <span className="text-xs font-display font-bold text-gold uppercase tracking-widest">Connect With Us</span>
          <h1 className="text-4xl sm:text-5xl font-display font-black mt-2 text-white">
            Contact Us
          </h1>
          <p className="text-sm text-slate-400 mt-3 max-w-2xl leading-relaxed">
            Have questions about vehicle attachment, daily self-drive car rentals, car loans, or travel tour bookings? Get in touch with our helpdesk today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            
            {/* Phone Numbers */}
            <div className="glass-panel p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-gold/10 border border-gold/20 text-gold rounded-xl">
                <Phone size={20} />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Helpline Numbers</span>
                <a href="tel:+919897958402" className="text-base font-display font-extrabold text-white hover:text-gold transition-colors">
                  +91 98979 58402 <span className="text-xs text-gold font-normal ml-2">(Primary)</span>
                </a>
                <div className="flex flex-col text-sm text-slate-400 gap-0.5">
                  <a href="tel:+919997292800" className="hover:text-gold transition-colors">+91 99972 92800</a>
                  <a href="tel:+919808172734" className="hover:text-gold transition-colors">+91 98081 72734</a>
                </div>
              </div>
            </div>

            {/* Address Details */}
            <div className="glass-panel p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-gold/10 border border-gold/20 text-gold rounded-xl">
                <MapPin size={20} />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1">Corporate Address</span>
                <p className="text-sm font-display font-semibold text-white leading-relaxed">
                  Lambardar Market, Ambedkar Nagar,<br />
                  Near Kakrau Kothi, Bamba Road,<br />
                  Firozabad – 283203, Uttar Pradesh
                </p>
              </div>
            </div>

            {/* Timings */}
            <div className="glass-panel p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-gold/10 border border-gold/20 text-gold rounded-xl">
                <Clock size={20} />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1">Office Hours</span>
                <p className="text-sm font-display font-semibold text-white">
                  Monday to Sunday: 09:00 AM – 09:00 PM
                </p>
                <span className="block text-[10px] text-emerald-400 font-semibold mt-1">
                  *Emergency Support Call lines active 24/7.
                </span>
              </div>
            </div>

            {/* Rapid Direct Action Buttons */}
            <div className="flex gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-emerald-500 hover:bg-emerald-600 text-dark font-display font-bold text-xs tracking-wider uppercase rounded-xl transition-colors shadow-[0_4px_15px_rgba(16,185,129,0.2)]"
              >
                <MessageSquare size={14} className="fill-dark" /> WhatsApp Desk
              </a>
              <a
                href={`tel:+91${primaryNumber}`}
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-gold hover:bg-gold-light text-dark font-display font-bold text-xs tracking-wider uppercase rounded-xl transition-colors shadow-[0_4px_15px_rgba(212,175,55,0.2)]"
              >
                <Phone size={14} /> Call Helpline
              </a>
            </div>

          </div>

          {/* Form + Map (Right) */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-left">
            {/* Contact Form */}
            <div className="glass-panel rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>

              {success ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-5">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                    Thank you. We have received your query. A support officer will check the message details and respond to you within 30 minutes.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-display font-extrabold text-white mb-6">Send an Online Inquiry</h3>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            pattern: { value: /^[0-9]{10}$/, message: '10-digit number required' }
                          })}
                          className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                          placeholder="9876543210"
                        />
                        {errors.phone && <span className="text-[10px] text-rose-500 mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.phone.message}</span>}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Email Address (Optional)</label>
                      <input
                        type="email"
                        {...register('email')}
                        className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Select Department / Service</label>
                      <select
                        {...register('department')}
                        className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold"
                      >
                        <option value="attachment">Vehicle Attachment Program</option>
                        <option value="rental">Self-Drive Rentals</option>
                        <option value="finance">Car Finance & Loans</option>
                        <option value="insurance">Insurance Products</option>
                        <option value="tourism">Holiday Tour Packages</option>
                        <option value="general">General Support</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Your Message</label>
                      <textarea
                        rows="4"
                        {...register('message', { required: 'Message is required' })}
                        className="py-3 px-4 bg-slate-900 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-gold resize-none"
                        placeholder="Please write details of your requirements here..."
                      />
                      {errors.message && <span className="text-[10px] text-rose-500 mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.message.message}</span>}
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-4 py-4 bg-gold hover:bg-gold-light text-dark font-display font-extrabold tracking-wider text-xs rounded-xl uppercase transition-colors"
                    >
                      Submit Support Message
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Embedded Google Map (Firozabad area) */}
            <div className="glass-panel rounded-2xl overflow-hidden h-72 border border-white/5 relative">
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14214.269389230554!2d78.3912195!3d27.1542152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397440eb76326e95%3A0xc3b8655fa05ec617!2sFirozabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1719330000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale invert opacity-70"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
