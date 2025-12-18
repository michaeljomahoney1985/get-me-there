import React from 'react';
import { Mountain, Train, Bus, Car, Clock, DollarSign, CheckCircle, AlertCircle, Snowflake, Sun } from 'lucide-react';

export default function GenevaToChamonix() {
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
            Here's everything you need to know about making that 1-hour journey without the stress.
          </p>
        </div>

        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2">Best Way to Get There</h3>
              <p className="text-blue-200/90 leading-relaxed">
                Shared shuttle bus is the winner for 90% of travelers. It takes 1-1.5 hours, 
                costs €30-50, and drops you right at your hotel door with all your ski gear.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <div className="prose prose-invert max-w-none">
            <p className="text-blue-200/80 text-lg leading-relaxed mb-4">
              Picture this: You've just touched down at Geneva Airport after an early morning flight. You're carrying 
              skis, boots, a backpack, and running on airport coffee. The last thing you want is a complicated journey 
              involving multiple trains.
            </p>
            <p className="text-blue-200/80 text-lg leading-relaxed mb-4">
              Good news: Getting from Geneva to Chamonix is actually one of the easiest mountain transfers in the Alps. 
              The two are only 88km apart, and the route is so well-traveled that you have multiple solid options.
            </p>
          </div>
        </section>

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
                <div className="text-2xl font-bold text-cyan-300">1-1.5 hrs</div>
                <div className="text-sm text-blue-300/70">Journey time</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">€30-50</div>
                <div className="text-sm text-blue-300/70">One-way cost</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <CheckCircle className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">Hourly</div>
                <div className="text-sm text-blue-300/70">Frequency</div>
              </div>
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>
                This is the no-brainer option. You walk out of Geneva arrivals, spot your driver, hand over your bags, 
                and collapse into a comfortable minibus. The driver handles everything while you watch the Alps get 
                progressively more dramatic. Ninety minutes later, you're dropped at your hotel door.
              </p>
              
              <p className="font-semibold text-cyan-300">
                Why it beats the train: No dragging ski bags through train stations, no missed connections, 
                no platform panic. Just point-to-point service.
              </p>

              <p>
                Popular companies: Mountain Dropoffs, AlpyBus, and Chamexpress all run reliable services.
              </p>

             <div className="bg-slate-900/50 border border-cyan-400/30 rounded-xl p-4 mt-6">
                <p className="text-sm text-cyan-300 font-semibold mb-2">💡 Pro Tip:</p>
                <p className="text-sm">
                  Book your shuttle when you book your flights. Prices go up as seats fill, especially during 
                  February half-term and Christmas week.
                </p>
              </div>
            </div>

         <div className="mt-8">
              <a
                href="https://www.getyourguide.com/chamonix-mont-blanc-l220/from-geneva-airport-bus-transfer-to-chamonix-t55754/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300">
                Check Shuttle Availability
                <Bus className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Train className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 2: Train</h2>
                <p className="text-cyan-300 text-sm">For scenery lovers</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">3-4 hrs</div>
                <div className="text-sm text-blue-300/70">With 2+ changes</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">€40-70</div>
                <div className="text-sm text-blue-300/70">Typical cost</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Train className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">2-3</div>
                <div className="text-sm text-blue-300/70">Connections</div>
              </div>
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>
                The train isn't the fastest or easiest option. But if you're the type who'd rather spend three 
                extra hours watching Swiss countryside than save time in a minibus, this might be your move.
              </p>

              <p className="font-semibold text-cyan-300">
                The typical route: Geneva Airport to Geneva Cornavin (10 min), then to Martigny (1 hr), 
                then to Vallorcine (1 hr), finally to Chamonix-Mont-Blanc (20 min).
              </p>

              <p>
                The final leg on the Mont Blanc Express is genuinely spectacular—narrow-gauge mountain railway, 
                glacier views, tiny alpine villages.
              </p>

              <p className="font-semibold text-cyan-300">
                The reality check: You're hauling ski gear through three different train stations. If you're 
                traveling light or genuinely love trains, go for it. Otherwise, reconsider.
              </p>
            </div>

            <div className="mt-8">
              
                href="https://www.omio.com/trains/geneva/chamonix-mont-blanc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300"
              >
                Check Train Times
                <Train className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Car className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 3: Rental Car</h2>
                <p className="text-cyan-300 text-sm">For groups and road trippers</p>
              </div>
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>
                Renting a car makes sense if you're a group of four splitting costs, or if you want freedom 
                to explore the valley. The A40 motorway from Geneva is smooth and scenic.
              </p>

              <p className="font-semibold text-cyan-300">
                The winter catch: Winter tyres are legally required in the Alps from November to April. 
                Rental companies charge extra (usually €10-15/day). Snow chains might be needed during heavy snowfall.
              </p>

              <div className="bg-slate-900/50 border border-cyan-400/30 rounded-xl p-4">
                <p className="text-sm text-cyan-300 font-semibold mb-2">Important:</p>
                <p className="text-sm">
                  Check your rental agreement for cross-border coverage (Geneva is Swiss, Chamonix is French). 
                  Most allow it, but confirm.
                </p>
              </div>
            </div>

            <div className="mt-8">
              
                href="https://www.rentalcars.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300"
              >
                Compare Car Rentals
                <Car className="w-5 h-5" />
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
                  <td className="py-4 px-4 font-semibold text-cyan-300">Shuttle</td>
                  <td className="py-4 px-4">1-1.5 hrs</td>
                  <td className="py-4 px-4">€30-50</td>
                  <td className="py-4 px-4">Most travelers</td>
                </tr>
                <tr className="border-b border-blue-400/10">
                  <td className="py-4 px-4 font-semibold">Train</td>
                  <td className="py-4 px-4">3-4 hrs</td>
                  <td className="py-4 px-4">€40-70</td>
                  <td className="py-4 px-4">Scenic journeys</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold">Car</td>
                  <td className="py-4 px-4">~1 hr</td>
                  <td className="py-4 px-4">€40-80/day</td>
                  <td className="py-4 px-4">Groups, flexibility</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-cyan-300 mb-4">Our Recommendation</h2>
            <p className="text-blue-200/90 text-lg leading-relaxed mb-4">
              Unless you have specific reasons otherwise, book a shared shuttle. It's the sweet spot of cost, 
              convenience, and hassle-free travel. You'll arrive in Chamonix relaxed, with your equipment intact, 
              ready to actually enjoy your trip.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-slate-900/50 border border-blue-400/20 rounded-xl p-6">
            <p className="text-xs text-blue-300/60 leading-relaxed">
              Affiliate Disclosure: Links may earn us a commission at no extra cost to you. We only recommend 
              services we'd actually use.
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
