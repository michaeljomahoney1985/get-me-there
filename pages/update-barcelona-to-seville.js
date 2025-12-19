import React from 'react';
import { Mountain, Train, Clock, DollarSign, CheckCircle, AlertCircle, Star } from 'lucide-react';

export default function BarcelonaToSeville() {
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
          <span className="text-blue-300">Barcelona to Seville</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
            Barcelona to Seville:
          </span>
          <br />
          <span className="text-blue-100">High-Speed Train Guide (current 2026 prices)</span>
        </h1>

        <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
          Direct high-speed connection across Spain—from vibrant Catalonia to historic Andalusia, with operators Renfe AVE and iryo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"><grok:render card_id="9c4452" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="46e4ff" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="56951c" card_type="image_card" type="render_searched_image"></grok:render>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"><grok:render card_id="48592f" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="cf7c47" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="293591" card_type="image_card" type="render_searched_image"></grok:render>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"><grok:render card_id="8e3e58" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="9334ba" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="2c58bf" card_type="image_card" type="render_searched_image"></grok:render>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"><grok:render card_id="29ca25" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="9d73cd" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="e61a75" card_type="image_card" type="render_searched_image"></grok:render>
        </div>

        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2">Quick Summary</h3>
              <p className="text-blue-200/90 leading-relaxed">
                Direct high-speed trains (Renfe AVE & iryo): ~5h 30min, from €30 one-way if booked early (up to €180 last-minute). 6-8 departures daily. Book on renfe.com or iryo.eu.
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
                <h2 className="text-3xl font-bold text-blue-100">Direct High-Speed Trains</h2>
                <p className="text-cyan-300 text-sm">Renfe AVE & iryo</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">~5h 30min</div>
                <div className="text-sm text-blue-300/70">Direct</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">€30-180</div>
                <div className="text-sm text-blue-300/70">One-way (current 2026 prices)</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Train className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">6-8 daily</div>
                <div className="text-sm text-blue-300/70">Sants → Santa Justa</div>
              </div>
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>Direct services by Renfe AVE and iryo. High-speed (up to 310 km/h), route passes through Madrid (direction change, no platform change). Wi-Fi, power sockets, cafe-bar on board.</p>

              <p className="font-semibold text-cyan-300">Classes & Prices (current 2026 prices):</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Economy/Básico: €30-90 (early fares)</li>
                <li>Standard: €40-120</li>
                <li>Premium/Preferente/Infinita: €100-180+ (meals, lounge access)</li>
              </ul>

              <p>Book early for lowest fares—competition keeps prices competitive.</p>

              <div className="bg-slate-900/50 border border-cyan-400/30 rounded-xl p-4">
                <p className="text-sm text-cyan-300 font-semibold mb-2">💡 Tips:</p>
                <ul className="text-sm space-y-2">
                  <li>Compare renfe.com and iryo.eu</li>
                  <li>Morning departures often cheaper</li>
                  <li>Arrive 20-30 min early</li>
                  <li>Free local connections often included</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <a href="https://www.thetrainline.com/en/train-times/barcelona-to-seville" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300">
                Compare & Book Tickets
                <Train className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Star className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Eurail/Interrail Pass</h2>
                <p className="text-cyan-300 text-sm">For wider Spain/Europe trips</p>
              </div>
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>Eurail (non-EU) or Interrail (EU residents) passes valid on AVE and iryo. Reservation mandatory (€15-30).</p>
              <p>Limited seats—book well in advance for this popular route.</p>
            </div>

            <div className="mt-8">
              <a href="https://www.eurail.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300">
                Explore Eurail Passes
                <Star className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-100 mb-6">Quick Comparison</h2>
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-blue-400/20">
                  <th className="py-4 px-4 text-cyan-300">Option</th>
                  <th className="py-4 px-4 text-cyan-300">Time</th>
                  <th className="py-4 px-4 text-cyan-300">Cost</th>
                  <th className="py-4 px-4 text-cyan-300">Best For</th>
                </tr>
              </thead>
              <tbody className="text-blue-200/80">
                <tr className="border-b border-blue-400/10">
                  <td className="py-4 px-4 font-semibold text-cyan-300">High-Speed Train</td>
                  <td className="py-4 px-4">~5h 30min</td>
                  <td className="py-4 px-4">€30-180</td>
                  <td className="py-4 px-4">Direct comfort</td>
                </tr>
                <tr className="border-b border-blue-400/10">
                  <td className="py-4 px-4 font-semibold text-cyan-300">Flying</td>
                  <td className="py-4 px-4">~4-5h total</td>
                  <td className="py-4 px-4">€50-150</td>
                  <td className="py-4 px-4">Similar with airports</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-cyan-300">Rail Pass</td>
                  <td className="py-4 px-4">~5h 30min</td>
                  <td className="py-4 px-4">Pass + €15-30 res.</td>
                  <td className="py-4 px-4">Multi-city travel</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-cyan-300 mb-4">Our Recommendation</h2>
            <p className="text-blue-200/90 text-lg leading-relaxed">
              Direct high-speed train—book early on Trainline or operators for €30+ fares. Relaxing, no transfers, and scenic Spanish views make it the best way to travel between these iconic cities.
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
