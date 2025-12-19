import React from 'react';
import { Mountain, Train, Bus, Plane, Clock, DollarSign, CheckCircle, Moon } from 'lucide-react';

export default function BangkokToChiangMai() {
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
          <a href="/southeast-asia" className="hover:text-cyan-300">Southeast Asia</a>
          <span>→</span>
          <span className="text-blue-300">Bangkok to Chiang Mai</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
            Bangkok to Chiang Mai:
          </span>
          <br />
          <span className="text-blue-100">Every Backpacker's First Big Journey</span>
        </h1>

        <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
          You've conquered Bangkok's chaos and endless pad thai. Now head north to Chiang Mai's chill mountain vibes. Here's how to get there without breaking the bank or your sanity (December 2025 update).
        </p>

        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2">What Most Backpackers Do</h3>
              <p className="text-blue-200/90 leading-relaxed">
                Overnight sleeper train: classic, scenic, saves a hotel night. Short on time? Fly. On a tight budget? VIP bus.
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
                <h2 className="text-3xl font-bold text-blue-100">Option 1: Overnight Sleeper Train</h2>
                <p className="text-cyan-300 text-sm">The iconic backpacker experience</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">10-14 hrs</div>
                <div className="text-sm text-blue-300/70">Overnight</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">฿800-1,600</div>
                <div className="text-sm text-blue-300/70">~ $23-45 USD</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Moon className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">Sleeper berth</div>
                <div className="text-sm text-blue-300/70">Save on accommodation</div>
              </div>
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed mb-8">
              <p>The rite of passage. Board in the evening at Krung Thep Aphiwat station, beds made up around 9pm, wake to mountain views.</p>
              <p className="font-semibold text-cyan-300">Popular classes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>2nd class AC: ฿800-1,100 – comfortable, most popular</li>
                <li>1st class private cabin: ฿1,400-2,500 – luxury for couples/solo privacy (sells out fast!)</li>
              </ul>
              <p>Scenic morning views, reliable, authentic Thai travel vibe.</p>

              <div className="bg-slate-900/50 border border-cyan-400/30 rounded-xl p-4">
                <p className="text-sm text-cyan-300 font-semibold mb-2">💡 Tips:</p>
                <ul className="text-sm space-y-2">
                  <li>Book early (up to 180 days ahead in 2025) via 12Go or official site</li>
                  <li>Lower bunk: easier access; Upper: cheaper & more privacy</li>
                  <li>Bring snacks/jacket – AC can be chilly</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"><grok:render card_id="c06005" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="8710c9" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="7e248b" card_type="image_card" type="render_searched_image"></grok:render>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"><grok:render card_id="ccb04e" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="9b18b7" card_type="image_card" type="render_searched_image"></grok:render>
            </div>

            <a href="https://12go.asia/en/travel/bangkok/chiang-mai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300">
              Book Train Tickets on 12Go
              <Train className="w-5 h-5" />
            </a>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Plane className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 2: Flight</h2>
                <p className="text-cyan-300 text-sm">Fastest way – when time is short</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">~1 hr 20 min</div>
                <div className="text-sm text-blue-300/70">Flight time</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">฿800-2,500</div>
                <div className="text-sm text-blue-300/70">~ $23-70 USD (Dec 2025)</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Plane className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">Many daily</div>
                <div className="text-sm text-blue-300/70">AirAsia, Nok, VietJet</div>
              </div>
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed mb-8">
              <p>Budget airlines fly dozens of times daily from BKK or DMK. Quick and convenient – add airport time (~3 hrs total door-to-door).</p>
              <p>Cheapest if booked ahead; watch baggage fees. Great if trains are sold out.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"><grok:render card_id="4b0cbf" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="60a630" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="5e4d9f" card_type="image_card" type="render_searched_image"></grok:render>
            </div>

            <a href="https://www.skyscanner.net/transport/flights/bkk/cnx/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300">
              Compare Flights on Skyscanner
              <Plane className="w-5 h-5" />
            </a>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Bus className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 3: VIP Bus</h2>
                <p className="text-cyan-300 text-sm">Cheapest & surprisingly comfy</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">9-11 hrs</div>
                <div className="text-sm text-blue-300/70">Overnight common</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">฿500-1,000</div>
                <div className="text-sm text-blue-300/70">~ $14-28 USD</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Bus className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">Frequent</div>
                <div className="text-sm text-blue-300/70">From Mo Chit / private</div>
              </div>
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed mb-8">
              <p>Modern VIP buses have reclining seats, AC, snacks, and often onboard toilet. Overnight saves a hotel night.</p>
              <p>Book reputable companies to avoid scams.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"><grok:render card_id="50ef87" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="e5da32" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="a5c580" card_type="image_card" type="render_searched_image"></grok:render>
            </div>

            <a href="https://12go.asia/en/travel/bangkok/chiang-mai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300">
              Book Bus Tickets on 12Go
              <Bus className="w-5 h-5" />
            </a>
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
                  <th className="py-4 px-4 text-cyan-300">Cost (THB)</th>
                  <th className="py-4 px-4 text-cyan-300">Best For</th>
                </tr>
              </thead>
              <tbody className="text-blue-200/80">
                <tr className="border-b border-blue-400/10">
                  <td className="py-4 px-4 font-semibold text-cyan-300">Train</td>
                  <td className="py-4 px-4">10-14 hrs</td>
                  <td className="py-4 px-4">800-1,600</td>
                  <td className="py-4 px-4">Experience & views</td>
                </tr>
                <tr className="border-b border-blue-400/10">
                  <td className="py-4 px-4 font-semibold text-cyan-300">Flight</td>
                  <td className="py-4 px-4">~1.5 hrs</td>
                  <td className="py-4 px-4">800-2,500</td>
                  <td className="py-4 px-4">Speed</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-cyan-300">Bus</td>
                  <td className="py-4 px-4">9-11 hrs</td>
                  <td className="py-4 px-4">500-1,000</td>
                  <td className="py-4 px-4">Budget</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6"><grok:render card_id="f9e4b8" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="486a69" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="4d60c8" card_type="image_card" type="render_searched_image"></grok:render>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-cyan-300 mb-4">Our Recommendation</h2>
            <p className="text-blue-200/90 text-lg leading-relaxed">
              Do the overnight sleeper train if possible – it's memorable, scenic, and saves a hotel night. If sold out or you're rushed, fly. For max savings, take a VIP bus.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-slate-900/50 border border-blue-400/20 rounded-xl p-6">
            <p className="text-xs text-blue-300/60 leading-relaxed">
              Affiliate links may earn commission at no cost to you. Prices approximate for Dec 2025 – check current rates.
            </p>
          </div>
        </section>
      </main>

      {/* Footer unchanged */}
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
