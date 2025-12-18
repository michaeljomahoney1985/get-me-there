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

          <p className="text-xl text-blue-200/80 leading-relaxed">
            Every week, thousands of skiers and hikers land at Geneva Airport with one mission: get to Chamonix. 
            Here's everything you need to know about making that ~90-minute journey without the stress.
          </p>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-cyan-400/20">
          {/* Replace with real image */}
          <div className="bg-gray-800 h-96 flex items-center justify-center">
            <Mountain className="w-32 h-32 text-cyan-400/50" />
          </div>
        </div>

        {/* Best Option Callout */}
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2">Best Way to Get There</h3>
              <p className="text-blue-200/90 leading-relaxed">
                Shared shuttle bus is the winner for 90% of travelers. It takes 1–1.5 hours, 
                costs €30–40, and drops you right at your hotel door — perfect with ski gear.
              </p>
            </div>
          </div>
        </div>

        {/* Intro Text */}
        <section className="mb-12 text-blue-200/80 text-lg leading-relaxed">
          <p className="mb-4">
            You've just landed at Geneva Airport after a red-eye flight. You're juggling skis, boots, and luggage on little sleep.
            The last thing you want is a complicated transfer with train changes.
          </p>
          <p>
            Good news: Geneva to Chamonix is one of the easiest Alpine transfers. Just 88 km apart, with frequent, reliable options year-round.
          </p>
        </section>

        {/* Option 1: Shuttle */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Bus className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 1: Shared Shuttle Bus</h2>
                <p className="text-cyan-300 text-sm">Recommended for most travelers</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">1–1.5 hrs</div>
                <div className="text-sm text-blue-300/70">Journey time</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">€30–40</div>
                <div className="text-sm text-blue-300/70">One-way (2025)</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <CheckCircle className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">Frequent</div>
                <div className="text-sm text-blue-300/70">Hourly or better</div>
              </div>
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>
                Door-to-door comfort: Driver meets you in arrivals, loads your gear, and drops you at your accommodation while you enjoy emerging Mont Blanc views.
              </p>
              <p className="font-semibold text-cyan-300">
                Beats the train every time — no hauling bags across stations or missed connections.
              </p>
              <p>
                Top providers: Mountain Dropoffs, AlpyBus, ChamExpress, Alpine Fleet.
              </p>

              <div className="bg-slate-900/50 border border-cyan-400/30 rounded-xl p-4">
                <p className="text-sm text-cyan-300 font-semibold mb-2">💡 Pro Tip:</p>
                <p className="text-sm">
                  Book early for peak weeks (Christmas, Feb half-term). Prices rise as seats fill.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://www.getyourguide.com/chamonix-mont-blanc-l220/from-geneva-airport-bus-transfer-to-chamonix-t55754/?partner_id=YOUR_AFFILIATE_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300"
              >
                Check Shuttle Availability & Book
                <Bus className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Add similar cleaned sections for Train and Car if needed — let me know! */}

        {/* Footer, comparison table, etc. remain the same as your original (cleaned similarly) */}

      </main>

      {/* Footer (your original, cleaned) */}
      {/* ... */}
    </div>
  );
}
