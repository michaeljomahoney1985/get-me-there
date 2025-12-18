import React from 'react';
import { Mountain, Train, Bus, Plane, Clock, DollarSign, CheckCircle, Moon } from 'lucide-react';

export default function BangkokToChiangMai() {
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
        <div className="flex items-center gap-3 text-cyan-400 text-sm mb-4">
          <a href="/" className="hover:text-cyan-300">Home</a>
          <span>→</span>
          <a href="/southeast-asia" className="hover:text-cyan-300">Southeast Asia</a>
          <span>→</span>
          <span className="text-blue-300">Bangkok to Chiang Mai</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
            Bangkok to Chiang Mai:
          </span>
          <br />
          <span className="text-blue-100">Every Backpacker's First Big Journey (2025 Guide)</span>
        </h1>

        <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
          You've conquered Bangkok's chaos—Khao San Road, endless pad thai, and temple overload. 
          Now it's time to head north to the mountains. Here's how to make the classic 700km journey on any budget.
        </p>

        {/* Hero Images: Chiang Mai Landscapes */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/7a/f3/79.jpg" alt="Doi Suthep Temple in Chiang Mai" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
          <img src="https://www.aleenta.com/wp-content/uploads/Wat-Phra-That-Doi-Suthep-in-Chiang-Mai.jpg" alt="Wat Phra That Doi Suthep golden stupa" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
          <img src="https://catmotors.net/wp-content/uploads/2022/11/a-birds-eye-view-of-the-wat-doi-kham-temple.jpg" alt="Aerial view of Chiang Mai temple" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
        </div>

        {/* Best Option Callout */}
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2">What Most Backpackers Do in 2025</h3>
              <p className="text-blue-200/90 leading-relaxed">
                The overnight sleeper train remains the iconic choice: scenic, social, and saves a night's accommodation. 
                Short on time? Fly cheap. Broke? VIP bus.
              </p>
            </div>
          </div>
        </div>

        {/* Intro Text */}
        <section className="mb-12 text-blue-200/80 text-lg leading-relaxed">
          <p className="mb-4">
            This route is Thailand backpacking 101. You're swapping urban madness for misty mountains, ancient temples, 
            elephant sanctuaries, and chill night markets.
          </p>
          <p>
            Three main options in 2025—all reliable, frequent, and bookable online.
          </p>
        </section>

        {/* Option 1: Overnight Sleeper Train */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Train className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 1: Overnight Sleeper Train</h2>
                <p className="text-cyan-300 text-sm">The backpacker rite of passage</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">11–14 hrs</div>
                <div className="text-sm text-blue-300/70">Overnight</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">฿800–1,500</div>
                <div className="text-sm text-blue-300/70">~$23–43 USD (2025)</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Moon className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">Sleeper Berth</div>
                <div className="text-sm text-blue-300/70">Save on hotel</div>
              </div>
            </div>

            {/* Train Interior Images */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <img src="https://www.inwanderment.com/wp-content/uploads/2024/02/The-beds-on-the-sleeper-train-Bangkok-to-Chiang-Mai-2nd-Class-AC-1024x768.jpg" alt="Sleeper train bunk beds" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
              <img src="https://i.insider.com/62f359e2cc15bf00182fb34f?width=800&format=jpeg&auto=webp" alt="Second class sleeper interior" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
              <img src="https://i.insider.com/630d8d66469230001973792a?width=600&format=jpeg&auto=webp" alt="Train bunk setup" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
            </div>

            {/* Scenic Views */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <img src="https://www.shutterstock.com/image-photo/scenic-view-train-window-traveling-260nw-2487478781.jpg" alt="Countryside view from train window" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
              <img src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt62a1282b8a560448/6890624f450d713eb1cec581/maria-krasnova-nwcUQlFgQ7w-unsplash-Header_Mobile.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart" alt="Mountain scenery from Thai train" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>
                The classic Thailand experience. Board at Krung Thep Aphiwat station in the evening, 
                seats convert to bunks, and you wake up to mountain views.
              </p>
              <p className="font-semibold text-cyan-300">
                2nd class AC is the sweet spot (~฿800–1,000). Newer trains (#9 & #13) are comfier and quieter.
              </p>
              <div className="bg-slate-900/50 border border-cyan-400/30 rounded-xl p-4">
                <p className="text-sm text-cyan-300 font-semibold mb-2">💡 Pro Tips (2025):</p>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Book 2–4 weeks ahead via 12Go—as popular trains sell out fast.</li>
                  <li>Lower berth for easier access; upper for more privacy.</li>
                  <li>Bring snacks—dining car available but basic.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://12go.asia/en/travel/bangkok/chiang-mai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300"
              >
                Book Sleeper Train Tickets
                <Train className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Option 2: Flight */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Plane className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 2: Flight</h2>
                <p className="text-cyan-300 text-sm">Fastest option</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">~1.5 hrs</div>
                <div className="text-sm text-blue-300/70">Door-to-door</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">฿800–2,500</div>
                <div className="text-sm text-blue-300/70">~$23–70 USD</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Plane className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">Many daily</div>
                <div className="text-sm text-blue-300/70">AirAsia, Nok, VietJet</div>
              </div>
            </div>

            <div className="mb-8">
              <img src="https://i.ytimg.com/vi/7fuDIKY_2YE/hqdefault.jpg" alt="AirAsia plane interior" className="rounded-xl object-cover h-64 w-full mx-auto border border-cyan-400/20" />
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>Perfect when time is short. Budget carriers keep prices low—often under $30 if booked early.</p>
              <p className="font-semibold text-cyan-300">Travel light to avoid baggage fees.</p>
            </div>

            <div className="mt-8">
              <a
                href="https://www.skyscanner.net/transport/flights/bkk/cnx/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300"
              >
                Compare Flight Prices
                <Plane className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Option 3: Bus */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Bus className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 3: Overnight VIP Bus</h2>
                <p className="text-cyan-300 text-sm">Cheapest option</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">9–11 hrs</div>
                <div className="text-sm text-blue-300/70">Overnight</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">฿500–1,000</div>
                <div className="text-sm text-blue-300/70">~$14–28 USD</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Bus className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">Frequent</div>
                <div className="text-sm text-blue-300/70">VIP recliners</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <img src="https://www.tielandtothailand.com/wp-content/uploads/2017/09/VX-Green-Bus-Interior.jpg" alt="VIP bus reclining seats" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
              <img src="https://www.tripsavvy.com/thmb/uGAzLGuX-B7W3TkRQgnqPxJZVw8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sleeper-overnight-bus-in-asia-1ca3128bb69541af931b5bb63b55e73a.jpg" alt="Overnight bus interior Thailand" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>Modern VIP buses are comfy with reclining seats, snacks, and stops. Book reputable companies via 12Go.</p>
            </div>

            <div className="mt-8">
              <a
                href="https://12go.asia/en/travel/bangkok/chiang-mai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300"
              >
                Book Bus Tickets
                <Bus className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-100 mb-6">Quick Comparison (2025 Prices)</h2>
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
                  <td className="py-4 px-4">11–14 hrs</td>
                  <td className="py-4 px-4">฿800–1,500</td>
                  <td className="py-4 px-4">Experience & stories</td>
                </tr>
                <tr className="border-b border-blue-400/10">
                  <td className="py-4 px-4 font-semibold">Flight</td>
                  <td className="py-4 px-4">~1.5 hrs</td>
                  <td className="py-4 px-4">฿800–2,500</td>
                  <td className="py-4 px-4">Speed</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold">VIP Bus</td>
                  <td className="py-4 px-4">9–11 hrs</td>
                  <td className="py-4 px-4">฿500–1,000</td>
                  <td className="py-4 px-4">Budget</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Recommendation */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-cyan-300 mb-4">Our 2025 Recommendation</h2>
            <p className="text-blue-200/90 text-lg leading-relaxed">
              Do the overnight sleeper train if you can get tickets—it's unforgettable. 
              Otherwise, fly for speed or bus to save cash. Safe travels!
            </p>
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <section className="mb-12">
          <div className="bg-slate-900/50 border border-blue-400/20 rounded-xl p-6">
            <p className="text-xs text-blue-300/60 leading-relaxed">
              Affiliate Disclosure: Links may earn us a commission at no extra cost to you. 
              We only recommend services we trust and use ourselves.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
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
