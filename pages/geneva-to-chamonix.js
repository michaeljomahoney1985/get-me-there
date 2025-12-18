import React from 'react';
import { Mountain, Train, Bus, Car, Clock, DollarSign, CheckCircle } from 'lucide-react';

export default function GenevaToChamonix() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Background SVG Mountains */}
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
        </svg>
      </div>

      {/* Header */}
      <header className="relative border-b border-blue-400/20 backdrop-blur-sm bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 group">
              <Mountain className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-all" />
              <div>
                <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Get Me There
                </h1>
                <p className="text-sm text-blue-300/70">Find your perfect route</p>
              </div>
            </a>
            <nav className="hidden md:flex gap-8 text-sm">
              <a href="/" className="text-blue-200 hover:text-cyan-300 transition-colors">Home</a>
              <a href="/about" className="text-blue-200 hover:text-cyan-300 transition-colors">About</a>
              <a href="/contact" className="text-blue-200 hover:text-cyan-300 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-12">
          <div className="flex items-center gap-3 text-cyan-400 text-sm mb-4">
            <a href="/" className="hover:text-cyan-300">Home</a>
            <span>→</span>
            <a href="/europe" className="hover:text-cyan-300">Europe</a>
            <span>→</span>
            <span className="text-blue-300">Geneva to Chamonix</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Geneva to Chamonix:
            </span>
            <br />
            <span className="text-blue-100">The Complete 2025 Guide</span>
          </h1>

          <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
            Every week, thousands of skiers and hikers land at Geneva Airport with one mission: get to Chamonix. 
            Here's everything you need to know about this iconic Alpine transfer.
          </p>
        </div>

        {/* Hero Images - Clean, no watermarks */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <img src="https://images.unsplash.com/photo-1519904981063-b0a5d1b18c4b?ixlib=rb-4.0.3&w=1200&q=80" alt="Chamonix valley with Mont Blanc" className="rounded-2xl object-cover h-72 w-full border border-cyan-400/20" />
          <img src="https://images.unsplash.com/photo-1543257563-5b6f1d8c8e7f?ixlib=rb-4.0.3&w=1200&q=80" alt="Aiguille du Midi view" className="rounded-2xl object-cover h-72 w-full border border-cyan-400/20" />
          <img src="https://images.unsplash.com/photo-1601493709721-7c2d2c9e7e0e?ixlib=rb-4.0.3&w=1200&q=80" alt="Snowy Chamonix town" className="rounded-2xl object-cover h-72 w-full border border-cyan-400/20" />
        </div>

        {/* Rest of the page content - same as before but with clean images */}
        {/* ... (shuttle, train, car sections with Unsplash/Pexels images as in previous messages) ... */}

        {/* Footer */}
        <footer className="border-t border-blue-400/20 bg-slate-900/50 backdrop-blur-sm mt-20">
          {/* ... your footer ... */}
        </footer>
      </main>
    </div>
  );
}
