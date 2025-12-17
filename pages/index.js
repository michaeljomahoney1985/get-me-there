import React, { useState } from 'react';
import { Search, Plane, Train, Bus, Car, Clock, DollarSign, ArrowRight, Mountain, MapPin } from 'lucide-react';

export default function GetMeThere() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchRoutes = (e) => {
    e.preventDefault();
    if (!origin || !destination) return;
    
    setLoading(true);
    
    setTimeout(() => {
      setResults({
        routes: [
          {
            id: 1,
            type: 'flight',
            duration: '2h 15m',
            price: 89,
            carrier: 'Budget Airways',
            stops: 'Direct',
            departure: '09:30',
            arrival: '11:45',
            bookingUrl: '#',
            icon: Plane
          },
          {
            id: 2,
            type: 'train',
            duration: '4h 30m',
            price: 65,
            carrier: 'Rail Express',
            stops: '1 change',
            departure: '08:00',
            arrival: '12:30',
            bookingUrl: '#',
            icon: Train
          },
          {
            id: 3,
            type: 'bus',
            duration: '6h 45m',
            price: 35,
            carrier: 'CoachLine',
            stops: '2 stops',
            departure: '07:00',
            arrival: '13:45',
            bookingUrl: '#',
            icon: Bus
          },
          {
            id: 4,
            type: 'flight',
            duration: '3h 05m',
            price: 125,
            carrier: 'Premium Air',
            stops: '1 stop',
            departure: '14:20',
            arrival: '17:25',
            bookingUrl: '#',
            icon: Plane
          }
        ]
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <svg className="absolute bottom-0 w-full h-96" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="mountain-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path
            d="M0,400 L0,180 L200,140 L350,200 L500,80 L650,160 L800,100 L950,180 L1200,120 L1200,400 Z"
            fill="url(#mountain-gradient)"
            className="animate-pulse"
            style={{ animationDuration: '8s' }}
          />
          <path
            d="M0,400 L0,220 L150,200 L300,260 L450,180 L600,240 L800,160 L1000,200 L1200,160 L1200,400 Z"
            fill="url(#mountain-gradient)"
            opacity="0.5"
            className="animate-pulse"
            style={{ animationDuration: '12s', animationDelay: '2s' }}
          />
        </svg>
      </div>

      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="fixed w-2 h-2 bg-blue-200 rounded-full opacity-30 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${15 + Math.random() * 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

      <div className="relative z-10">
        <header className="border-b border-blue-400/20 backdrop-blur-sm bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 group">
                <div className="relative">
                  <Mountain className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 group-hover:scale-110" />
                  <div className="absolute -inset-2 bg-cyan-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Get Me There
                  </h1>
                  <p className="text-sm text-blue-300/70 tracking-wide">Find your perfect route</p>
                </div>
              </div>
              <nav className="hidden md:flex gap-8 text-sm">
                <a href="#" className="text-blue-200 hover:text-cyan-300 transition-colors">Routes</a>
                <a href="#" className="text-blue-200 hover:text-cyan-300 transition-colors">About</a>
                <a href="#" className="text-blue-200 hover:text-cyan-300 transition-colors">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                  Journey Beyond
                </span>
                <br />
                <span className="text-blue-100">Boundaries</span>
              </h2>
              <p className="text-xl text-blue-200/80 max-w-2xl mx-auto leading-relaxed">
                Compare flights, trains, buses, and more. Find the best way to reach your destination.
              </p>
            </div>

            <form onSubmit={searchRoutes} className="relative">
              <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-blue-400/20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl" />
                
                <div className="relative grid md:grid-cols-2 gap-6 mb-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-blue-200 mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      From
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        placeholder="Enter origin city"
                        className="w-full px-5 py-4 bg-slate-900/50 border border-blue-400/30 rounded-2xl text-white placeholder-blue-300/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 group-hover:border-blue-400/50"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-blue-200 mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      To
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="Enter destination city"
                        className="w-full px-5 py-4 bg-slate-900/50 border border-blue-400/30 rounded-2xl text-white placeholder-blue-300/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 group-hover:border-blue-400/50"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-3 group transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Search className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Search Routes
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </form>
          </div>
        </section>

        {loading && (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center">
              <div className="inline-block">
                <div className="w-16 h-16 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
              </div>
              <p className="mt-4 text-blue-200">Searching routes...</p>
            </div>
          </div>
        )}

        {results && !loading && (
          <section className="max-w-4xl mx-auto px-4 pb-20">
            <h3 className="text-2xl font-bold text-blue-100 mb-6 flex items-center gap-3">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 w-1 h-8 rounded-full" />
              Available Routes
            </h3>
            
            <div className="space-y-4">
              {results.routes.map((route, index) => (
                <div
                  key={route.id}
                  className="group bg-gradient-to-br from-slate-800/80 to-blue-900/40 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                  style={{ animation: `slideUp 0.5s ease-out ${index * 100}ms forwards`, opacity: 0 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <route.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold text-lg text-blue-100">{route.carrier}</h4>
                          <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-cyan-300 border border-cyan-400/30">
                            {route.stops}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-blue-200/80">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-cyan-400" />
                            <span>{route.duration}</span>
                          </div>
                          <span className="text-blue-400/50">•</span>
                          <span>{route.departure} → {route.arrival}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 md:flex-col md:items-end">
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-blue-200/60 text-sm mb-1">
                          <span>from</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <DollarSign className="w-5 h-5 text-cyan-400" />
                          <span className="text-3xl font-bold text-cyan-300">{route.price}</span>
                        </div>
                      </div>
                      
                      
                    <a href={route.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-2 transform hover:scale-105 active:scale-95 whitespace-nowrap"
                      >
                        Book Now
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-blue-300/50 text-center mt-8 max-w-2xl mx-auto leading-relaxed">
              Get Me There may earn commissions from bookings made through our affiliate partners. 
              This helps us keep the service free while showing you the best routes.
            </p>
          </section>
        )}

        <footer className="border-t border-blue-400/20 bg-slate-900/50 backdrop-blur-sm mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-blue-100 mb-4">Get Me There</h4>
                <p className="text-sm text-blue-300/70 leading-relaxed">
                  Your journey companion. Compare and book the best routes across all transport modes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-100 mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-blue-300/70">
                  <li><a href="#" className="hover:text-cyan-300 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-cyan-300 transition-colors">How It Works</a></li>
                  <li><a href="#" className="hover:text-cyan-300 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-cyan-300 transition-colors">Terms of Service</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-100 mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-blue-300/70">
                  <li><a href="#" className="hover:text-cyan-300 transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-cyan-300 transition-colors">FAQ</a></li>
                  <li><a href="#" className="hover:text-cyan-300 transition-colors">Affiliate Program</a></li>
                </ul>
              </div>
            </div>
            <div className="text-center text-sm text-blue-300/50 pt-8 border-t border-blue-400/10">
              © 2024 Get Me There. All rights reserved.
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
                                }
