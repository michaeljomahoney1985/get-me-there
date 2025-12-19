import React from 'react';
import { Mountain, Train, Bus, Plane, Clock, DollarSign, CheckCircle } from 'lucide-react';

export default function GenevaToZurich() {
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
          <span className="text-blue-300">Geneva to Zurich</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
            Geneva to Zurich:
          </span>
          <br />
          <span className="text-blue-100">Switzerland's Classic Cross-Country Trip</span>
        </h1>

        <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
          From elegant French-speaking Geneva on Lake Geneva to bustling German-speaking Zurich—here's how to travel efficiently (prices as of December 2025).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"><grok:render card_id="2e03e3" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="6fc8a0" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="e453d0" card_type="image_card" type="render_searched_image"></grok:render>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"><grok:render card_id="755287" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="81e515" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="98d9d8" card_type="image_card" type="render_searched_image"></grok:render>
        </div>

        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2">What Most Travelers Do</h3>
              <p className="text-blue-200/90 leading-relaxed">
                Direct SBB train: fast, frequent, scenic, and reliable. Budget? FlixBus. In a huge rush? Fly (but rarely worth the hassle).
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
                <h2 className="text-3xl font-bold text-blue-100">Option 1: Direct Train (SBB)</h2>
                <p className="text-cyan-300 text-sm">The best choice for most</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">2h 40m–3h</div>
                <div className="text-sm text-blue-300/70">Hourly departures</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">CHF 25–90</div>
                <div className="text-sm text-blue-300/70">2nd class (Supersaver to full)</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Train className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">Stunning views</div>
                <div className="text-sm text-blue-300/70">Lakes & countryside</div>
              </div>
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>Swiss efficiency at its peak. Direct InterCity trains from Genève Cornavin to Zürich HB. Comfortable seats, free Wi-Fi, restaurant car.</p>
              <p>Supersaver tickets (non-refundable) often CHF 25–50 if booked early. Full flexible fare ~CHF 88.</p>
              <p>Enjoy lakeside views, vineyards, and rolling hills—much better than flying.</p>

              <div className="bg-slate-900/50 border border-cyan-400/30 rounded-xl p-4">
                <p className="text-sm text-cyan-300 font-semibold mb-2">💡 Tips:</p>
                <ul className="text-sm space-y-2">
                  <li>Buy Supersaver early on sbb.ch for huge savings</li>
                  <li>Swiss Travel Pass/Half-Fare Card holders get discounts</li>
                  <li>No seat reservation required—board any train</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"><grok:render card_id="0c7e2c" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="88ae43" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="a23c69" card_type="image_card" type="render_searched_image"></grok:render>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"><grok:render card_id="90a269" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="27cd72" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="cb78a8" card_type="image_card" type="render_searched_image"></grok:render>
            </div>

            <div className="mt-8">
              <a href="https://www.sbb.ch/en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300">
                Book on SBB.ch
                <Train className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Plane className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 2: Flight (SWISS)</h2>
                <p className="text-cyan-300 text-sm">Fastest but rarely best</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">50 min</div>
                <div className="text-sm text-blue-300/70">Flight (total ~3h)</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">CHF 100–300</div>
                <div className="text-sm text-blue-300/70">One-way</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Plane className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">Several daily</div>
                <div className="text-sm text-blue-300/70">Direct GVA-ZRH</div>
              </div>
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>SWISS operates direct flights multiple times daily. Quick air time, but airports add hassle and cost.</p>
              <p>Only worthwhile for international connections or extreme time pressure.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"><grok:render card_id="780aa7" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="a6b6c3" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="9be7dc" card_type="image_card" type="render_searched_image"></grok:render>
            </div>

            <div className="mt-8">
              <a href="https://www.swiss.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300">
                Book on SWISS.com
                <Plane className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Bus className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 3: Bus (FlixBus)</h2>
                <p className="text-cyan-300 text-sm">Cheapest alternative</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">3h 45m–4h 30m</div>
                <div className="text-sm text-blue-300/70">Direct</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">CHF 20–45</div>
                <div className="text-sm text-blue-300/70">One-way</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Bus className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">Few daily</div>
                <div className="text-sm text-blue-300/70">Wi-Fi & power</div>
              </div>
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>Modern green FlixBus coaches with Wi-Fi, outlets, and comfy seats. Direct routes from city centers.</p>
              <p>Great for budget travelers, but train offers better views and reliability.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"><grok:render card_id="e3f2b2" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="43a97f" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="47e53e" card_type="image_card" type="render_searched_image"></grok:render>
            </div>

            <div className="mt-8">
              <a href="https://www.flixbus.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300">
                Book on FlixBus
                <Bus className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-100 mb-6">Quick Comparison (Dec 2025)</h2>
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-blue-400/20">
                  <th className="py-4 px-4 text-cyan-300">Option</th>
                  <th className="py-4 px-4 text-cyan-300">Time</th>
                  <th className="py-4 px-4 text-cyan-300">Cost (CHF)</th>
                  <th className="py-4 px-4 text-cyan-300">Best For</th>
                </tr>
              </thead>
              <tbody className="text-blue-200/80">
                <tr className="border-b border-blue-400/10">
                  <td className="py-4 px-4 font-semibold text-cyan-300">Train</td>
                  <td className="py-4 px-4">2h 40m–3h</td>
                  <td className="py-4 px-4">25–90</td>
                  <td className="py-4 px-4">Views, comfort, reliability</td>
                </tr>
                <tr className="border-b border-blue-400/10">
                  <td className="py-4 px-4 font-semibold text-cyan-300">Bus</td>
                  <td className="py-4 px-4">~4h</td>
                  <td className="py-4 px-4">20–45</td>
                  <td className="py-4 px-4">Budget</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-cyan-300">Flight</td>
                  <td className="py-4 px-4">~3h total</td>
                  <td className="py-4 px-4">100–300</td>
                  <td className="py-4 px-4">Pure speed (rarely)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-cyan-300 mb-4">Our Recommendation</h2>
            <p className="text-blue-200/90 text-lg leading-relaxed">
              Take the SBB train—it's the perfect balance of speed, scenery, and Swiss precision. You'll arrive relaxed and having enjoyed the journey.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-slate-900/50 border border-blue-400/20 rounded-xl p-6">
            <p className="text-xs text-blue-300/60 leading-relaxed">
              Affiliate links may earn commission at no cost to you. Prices approximate as of Dec 2025—always verify current fares.
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
