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
          So you've done Bangkok—survived Khao San Road, eaten more pad thai than humanly possible, 
          and now you're ready to head north. Here's how to get to Chiang Mai without losing your mind or budget.
        </p>

        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2">What Most Backpackers Do</h3>
              <p className="text-blue-200/90 leading-relaxed">
                The overnight sleeper train is the classic move. You save a night's accommodation, 
                wake up in the mountains, and experience one of Southeast Asia's best train journeys. 
                Short on time? Fly. Broke? Take the bus.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <p className="text-blue-200/80 text-lg leading-relaxed mb-4">
            Bangkok to Chiang Mai is Thailand's most popular backpacker route. You're trading 
            the chaos of the capital for laid-back mountain vibes—temples tucked into forested hillsides, 
            night markets without the tourist crush, and enough cooking classes to turn you into a pad thai expert.
          </p>
          <p className="text-blue-200/80 text-lg leading-relaxed">
            The journey covers about 700km. You've got three solid options depending on your time and budget.
          </p>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Train className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 1: Overnight Sleeper Train</h2>
                <p className="text-cyan-300 text-sm">The backpacker favorite</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">11-14 hrs</div>
                <div className="text-sm text-blue-300/70">Overnight</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">฿800-1600</div>
                <div className="text-sm text-blue-300/70">~ $23-45 USD (2025 prices)</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Moon className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">Sleeper</div>
                <div className="text-sm text-blue-300/70">Save a night's hotel</div>
              </div>
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>
                This is the one. If you're in Thailand for more than a week, the overnight train is an absolute 
                rite of passage.
              </p>

              <p className="font-semibold text-cyan-300">
                The experience: You board in the evening at Bangkok's Krung Thep Aphiwat Central Station. 
                The carriage is clean—rows of seats that convert into bunk beds around 9pm. 
                You get a pillow, blanket, and curtain for privacy. The train rocks gently as it chugs north. 
                You wake up to mountains and mist.
              </p>

              <p className="font-semibold text-cyan-300">Class breakdown (approx. 2025 prices):</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>2nd class sleeper (AC): ฿800-1100. The sweet spot—comfortable and popular.</li>
                <li>1st class sleeper: ฿1400-2500. Private 2-berth cabins (great for couples or solo privacy).</li>
              </ul>

              <p>
                The train is reliable, the views are stunning in the morning, and you'll arrive with stories to share.
              </p>

              <div className="bg-slate-900/50 border border-cyan-400/30 rounded-xl p-4 mt-6">
                <p className="text-sm text-cyan-300 font-semibold mb-2">💡 Pro Tips:</p>
                <ul className="text-sm space-y-2">
                  <li>• Book 2-4 weeks ahead in peak season (Nov-Feb)</li>
                  <li>• Lower bunk = easier access; Upper = more privacy & slightly cheaper</li>
                  <li>• Bring snacks and a jacket (AC can be cold)</li>
                  <li>• Popular trains: #9 (newer carriages) and #13</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://12go.asia/en/travel/bangkok/chiang-mai?date=2025-12-20&direction=forward" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300">
                Book Train Tickets on 12Go
                <Train className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"><grok:render card_id="dc0d64" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="235bc1" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="0ff739" card_type="image_card" type="render_searched_image"></grok:render>
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
                <p className="text-cyan-300 text-sm">When time matters</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">~1.5 hrs</div>
                <div className="text-sm text-blue-300/70">Including airport time</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">฿800-2500</div>
                <div className="text-sm text-blue-300/70">~ $23-70 USD</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Plane className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">Many daily</div>
                <div className="text-sm text-blue-300/70">From BKK or DMK</div>
              </div>
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>
                Sometimes you just need to get there fast. Budget airlines like AirAsia, Nok Air, and Thai Lion Air fly this route multiple times a day.
              </p>

              <p>
                Base fares can drop below ฿1000 if booked ahead, but add-ons (bags, seats) push it higher. Travel light to save.
              </p>

              <div className="bg-slate-900/50 border border-cyan-400/30 rounded-xl p-4 mt-6">
                <p className="text-sm text-cyan-300 font-semibold mb-2">💡 Pro Tip:</p>
                <p className="text-sm">
                  Compare on Skyscanner or book direct. Midweek flights are often cheapest.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a href="https://www.skyscanner.net/transport/flights/bkk/cnx/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300">
                Compare Flight Prices on Skyscanner
                <Plane className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"><grok:render card_id="253b43" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="88c529" card_type="image_card" type="render_searched_image"></grok:render>
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
                <h2 className="text-3xl font-bold text-blue-100">Option 3: Bus</h2>
                <p className="text-cyan-300 text-sm">The budget champion</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">9-11 hrs</div>
                <div className="text-sm text-blue-300/70">Day or overnight</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">฿500-1000</div>
                <div className="text-sm text-blue-300/70">~ $14-28 USD</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Bus className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">Many daily</div>
                <div className="text-sm text-blue-300/70">VIP options available</div>
              </div>
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>
                The cheapest way—perfect if you're on a tight budget. Overnight VIP buses are surprisingly comfortable with reclining seats.
              </p>

              <p>
                Depart from Mo Chit (Northern Bus Terminal) or private terminals. Arrive at Chiang Mai Arcade Bus Station.
              </p>

              <div className="bg-slate-900/50 border border-cyan-400/30 rounded-xl p-4 mt-6">
                <p className="text-sm text-cyan-300 font-semibold mb-2">⚠️ Tip:</p>
                <p className="text-sm">
                  Book through reputable sites like 12Go to avoid scams. Go for VIP/First Class for better seats.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a href="https://12go.asia/en/travel/bangkok/chiang-mai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300">
                Book Bus Tickets on 12Go
                <Bus className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"><grok:render card_id="7c53f1" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="cb7f7b" card_type="image_card" type="render_searched_image"></grok:render>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-100 mb-6">Quick Comparison (2025)</h2>
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
                  <td className="py-4 px-4 font-semibold text-cyan-300">Sleeper Train</td>
                  <td className="py-4 px-4">11-14 hrs</td>
                  <td className="py-4 px-4">800-1600</td>
                  <td className="py-4 px-4">Experience & saving accommodation</td>
                </tr>
                <tr className="border-b border-blue-400/10">
                  <td className="py-4 px-4 font-semibold text-cyan-300">Flight</td>
                  <td className="py-4 px-4">~1.5 hrs</td>
                  <td className="py-4 px-4">800-2500</td>
                  <td className="py-4 px-4">Speed & convenience</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-cyan-300">Bus</td>
                  <td className="py-4 px-4">9-11 hrs</td>
                  <td className="py-4 px-4">500-1000</td>
                  <td className="py-4 px-4">Ultra-budget</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6"><grok:render card_id="22fddb" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="68511c" card_type="image_card" type="render_searched_image"></grok:render><grok:render card_id="410f85" card_type="image_card" type="render_searched_image"></grok:render>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-cyan-300 mb-4">Our Recommendation</h2>
            <p className="text-blue-200/90 text-lg leading-relaxed mb-4">
              Take the overnight sleeper train if you can—it's the most memorable way to travel this iconic route. 
              You'll save on a hotel, wake up refreshed in the mountains, and have an authentic Thai experience.
            </p>
            <p className="text-blue-200/90 text-lg leading-relaxed">
              If sold out or you're short on time, fly. If every baht counts, go by VIP bus.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-slate-900/50 border border-blue-400/20 rounded-xl p-6">
            <p className="text-xs text-blue-300/60 leading-relaxed">
              Affiliate Disclosure: Links may earn us a commission at no extra cost to you. 
              Prices are approximate for 2025 and can vary—always check current rates.
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
