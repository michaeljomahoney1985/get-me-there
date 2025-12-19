import React from 'react';
import { Mountain, Train, Clock, DollarSign, CheckCircle, AlertCircle, Star } from 'lucide-react';

export default function RenfeAveOperator() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <svg className="absolute bottom-0 w-full h-96" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="train-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path
            d="M0,400 L0,180 L200,140 L350,200 L500,80 L650,160 L800,100 L950,180 L1200,120 L1200,400 Z"
            fill="url(#train-gradient)"
            className="animate-pulse"
            style={{ animationDuration: '8s' }}
          />
        </svg>
      </div>

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

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 text-cyan-400 text-sm mb-4">
          <a href="/" className="hover:text-cyan-300">Home</a>
          <span>→</span>
          <a href="/europe" className="hover:text-cyan-300">Europe</a>
          <span>→</span>
          <span className="text-blue-300">Renfe AVE High-Speed Trains</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
            Renfe AVE:
          </span>
          <br />
          <span className="text-blue-100">Spain's Flagship High-Speed Trains (current 2026 prices)</span>
        </h1>

        <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
          The original and premier high-speed service in Spain—extensive network, reliable, and comfortable trains connecting major cities at up to 310 km/h.
        </p>

        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2">Quick Overview</h3>
              <p className="text-blue-200/90 leading-relaxed">
                State-owned operator • Multiple train types (S-100 to S-106) • Nationwide high-speed routes • Fares from €25-40 early • Wi-Fi, cafe-bar, lounge access in Premium.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Train className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">About Renfe AVE</h2>
                <p className="text-cyan-300 text-sm">Spain's national high-speed pioneer since 1992</p>
              </div>
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>AVE (Alta Velocidad Española) is Renfe's flagship high-speed brand, launched in 1992 with the Madrid-Seville line. Now Spain's most extensive high-speed network, with modern trains from manufacturers like Talgo, Siemens, Alstom, and Bombardier.</p>

              <p>Top speed 310 km/h, punctual, and reliable. Competes with private operators (iryo, Ouigo) on key routes, keeping fares competitive.</p>

              <p className="font-semibold text-cyan-300">Key Features:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Free Wi-Fi & power sockets</li>
                <li>Cafe-bar with meals/drinks</li>
                <li>Generous luggage (no weight limit)</li>
                <li>Club lounges in Premium</li>
                <li>At-seat meals in Prémium</li>
              </ul>

              <p className="font-semibold text-cyan-300">Classes & Ticket Types:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Básico (Basic) – Cheapest, non-flexible</li>
                <li>Elige (Choose) – Mid-range with options</li>
                <li>Prémium – Full flexibility, meals, lounge</li>
              </ul>
            </div>

            <div className="mt-8">
              <a href="https://www.renfe.com/es/en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300">
                Book Tickets on Renfe.com
                <Train className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-100 mb-6">Main AVE Routes (2026)</h2>
          <p className="text-blue-200/80 mb-6">Extensive network centred on Madrid:</p>
          <ul className="list-disc list-inside space-y-2 text-blue-200/80 ml-4 mb-8">
            <li>Madrid ↔ Barcelona (most frequent)</li>
            <li>Madrid ↔ Seville/Málaga</li>
            <li>Madrid ↔ Valencia/Alicante</li>
            <li>Barcelona ↔ Seville/Málaga</li>
            <li>International: Barcelona-Lyon, Madrid-Marseille</li>
          </ul>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-cyan-300 mb-4">Why Choose Renfe AVE?</h2>
            <p className="text-blue-200/90 text-lg leading-relaxed">
              The most established operator with the widest network, reliable service, and premium options. Excellent for comfort, lounges, and included meals in Prémium—perfect for business or leisure travel across Spain.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-slate-900/50 border border-blue-400/20 rounded-xl p-6">
            <p className="text-xs text-blue-300/60 leading-relaxed">
              Affiliate links may earn commission at no cost to you. Prices approximate for current 2026 season—check current rates.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-blue-400/20 bg-slate-900/50 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-blue-100 mb-4">Get Me There</h4>
              <p className="text-sm text-blue-300/70 leading-relaxed">
                Your journey companion. Compare and book the best routes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-100 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-blue-300/70">
                <li><a href="/" className="hover:text-cyan-300 transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-cyan-300 transition-colors">About</a></li>
                <li><a href="/privacy" className="hover:text-cyan-300 transition-colors">Privacy</a></li>
                <li><a href="/terms" className="hover:text-cyan-300 transition-colors">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-100 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-blue-300/70">
                <li><a href="/contact" className="hover:text-cyan-300 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-blue-300/50 pt-8 border-t border-blue-400/10">
            © 2025 Get Me There. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
