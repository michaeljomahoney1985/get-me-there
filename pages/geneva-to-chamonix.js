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

        {/* Hero Images */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <img src="https://c8.alamy.com/comp/2DDGYR6/chamonix-france-aerial-view-of-chamonix-valley-mountains-montblanc-in-france-in-winter-snow-cover-high-peaks-2DDGYR6.jpg" alt="Aerial view of Chamonix valley and Mont Blanc in winter" className="rounded-2xl object-cover h-72 w-full border border-cyan-400/20" />
          <img src="https://c8.alamy.com/comp/JEHBNT/aerial-view-of-chamonix-and-mont-blanc-from-plan-praz-france-JEHBNT.jpg" alt="Chamonix and Mont Blanc aerial from Plan Praz" className="rounded-2xl object-cover h-72 w-full border border-cyan-400/20" />
          <img src="https://frenchmoments.eu/wp-content/uploads/2012/11/Chamonix-Mont-Blanc-Featured-Image-web-copyright-French-Moments.jpg" alt="Chamonix town center with Mont Blanc backdrop" className="rounded-2xl object-cover h-72 w-full border border-cyan-400/20" />
        </div>

        {/* Best Option Callout */}
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2">Best Overall Option (2025)</h3>
              <p className="text-blue-200/90 leading-relaxed">
                Shared shuttle bus — door-to-door, hassle-free with luggage/ski gear, and the perfect balance of speed and cost.
              </p>
            </div>
          </div>
        </div>

        {/* Intro Text */}
        <section className="mb-12 text-blue-200/80 text-lg leading-relaxed">
          <p className="mb-4">
            You've just landed at Geneva Airport, loaded with skis or hiking gear. The last thing you need is a stressful transfer.
          </p>
          <p>
            The good news? This 88km journey is one of the easiest in the Alps, with frequent, reliable options year-round.
          </p>
        </section>

        {/* Option 1: Shared Shuttle */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Bus className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 1: Shared Shuttle Bus</h2>
                <p className="text-cyan-300 text-sm">Recommended for 90% of travelers</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">1–1.5 hrs</div>
                <div className="text-sm text-blue-300/70">Journey time</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">€30–45</div>
                <div className="text-sm text-blue-300/70">One-way (2025)</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <CheckCircle className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">Frequent</div>
                <div className="text-sm text-blue-300/70">Every 30–60 mins</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <img src="https://www.chamonix.net/sites/default/files/post-gallery/alpybus3.jpg" alt="AlpyBus shared shuttle in the Alps" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
              <img src="https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=620,height=400,dpr=1/tour_img/24be7352a549047e46dfced43282009e0fd0176ab8eca29610fdcdf6e2c955b3.jpg" alt="Shared transfer minivan arriving in Chamonix" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>Driver meets you in arrivals, handles luggage, and drops you at your hotel door while you enjoy Mont Blanc views emerging.</p>
              <p className="font-semibold text-cyan-300">No train changes, no heavy bags on platforms — pure convenience.</p>
              <p>Popular providers: AlpyBus, Mountain Dropoffs, ChamExpress, SwissTours.</p>
              <div className="bg-slate-900/50 border border-cyan-400/30 rounded-xl p-4">
                <p className="text-sm text-cyan-300 font-semibold mb-2">💡 Pro Tip:</p>
                <p className="text-sm">Book in advance during peak season (Dec–Mar). Prices rise as seats fill.</p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://www.getyourguide.com/chamonix-mont-blanc-l220/from-geneva-airport-bus-transfer-to-chamonix-t55754/?partner_id=YOUR_AFFILIATE_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300"
              >
                Book Shared Shuttle
                <Bus className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Option 2: Train */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Train className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 2: Train (Mont Blanc Express)</h2>
                <p className="text-cyan-300 text-sm">Most scenic route</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">3–4 hrs</div>
                <div className="text-sm text-blue-300/70">With changes</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">€40–70</div>
                <div className="text-sm text-blue-300/70">Return possible</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Train className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">Daily</div>
                <div className="text-sm text-blue-300/70">Multiple departures</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <img src="https://cdn.chamonixallyear.com/cay-media/uploads/2024/04/mont-blanc-express-shutter-free.jpg" alt="Mont Blanc Express train in the mountains" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
              <img src="https://i.guim.co.uk/img/media/2c90612614f1efd8205b91705e232e3a79b3917a/0_135_4256_2554/master/4256.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=30c45f1d18476be59bcf7b1c816c066c" alt="Scenic view from Mont Blanc Express" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>The final leg on the red Mont Blanc Express is stunning — glaciers, villages, and dramatic valleys.</p>
              <p className="font-semibold text-cyan-300">Downside: Multiple changes and hauling gear through stations.</p>
              <p>Best if you travel light and love trains.</p>
            </div>

            <div className="mt-8">
              <a
                href="https://www.thetrainline.com/en/train-times/geneva-to-chamonix-mont-blanc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300"
              >
                Check Train Times & Book
                <Train className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Option 3: Car Rental/Drive */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Car className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 3: Rental Car or Drive</h2>
                <p className="text-cyan-300 text-sm">Maximum flexibility</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">~1 hr</div>
                <div className="text-sm text-blue-300/70">Direct drive</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">€50–100/day</div>
                <div className="text-sm text-blue-300/70">+ winter tires</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Car className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">Freedom</div>
                <div className="text-sm text-blue-300/70">Groups & stops</div>
              </div>
            </div>

            <img src="https://www.chamonix.net/sites/default/files/nodeimages/the-main-motorway-between-geneva-in-switzerland-and-chamonix-in-france.jpg" alt="Motorway from Geneva to Chamonix with mountains" className="rounded-xl object-cover h-64 w-full mx-auto mb-8 border border-cyan-400/20" />

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>Fastest option if driving yourself. Scenic A40 motorway.</p>
              <p className="font-semibold text-cyan-300">Winter note: Tires mandatory Nov–Apr (extra fee). Chains may be needed.</p>
              <p>Great for groups splitting costs or exploring the valley freely.</p>
            </div>

            <div className="mt-8">
              <a
                href="https://www.rentalcars.com/"
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

        {/* Quick Comparison Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-100 mb-6">Quick Comparison</h2>
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-blue-400/20">
                  <th className="py-4 px-4 text-cyan-300">Option</th>
                  <th className="py-4 px-4 text-cyan-300">Time</th>
                  <th className="py-4 px-4 text-cyan-300">Cost (one-way)</th>
                  <th className="py-4 px-4 text-cyan-300">Best For</th>
                </tr>
              </thead>
              <tbody className="text-blue-200/80">
                <tr className="border-b border-blue-400/10">
                  <td className="py-4 px-4 font-semibold text-cyan-300">Shuttle Bus</td>
                  <td className="py-4 px-4">1–1.5 hrs</td>
                  <td className="py-4 px-4">€30–45</td>
                  <td className="py-4 px-4">Most travelers, luggage</td>
                </tr>
                <tr className="border-b border-blue-400/10">
                  <td className="py-4 px-4 font-semibold text-cyan-300">Train</td>
                  <td className="py-4 px-4">3–4 hrs</td>
                  <td className="py-4 px-4">€40–70</td>
                  <td className="py-4 px-4">Scenery lovers</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-cyan-300">Car</td>
                  <td className="py-4 px-4">~1 hr</td>
                  <td className="py-4 px-4">€50–100/day</td>
                  <td className="py-4 px-4">Groups, flexibility</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Recommendation */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-cyan-300 mb-4">Our Recommendation</h2>
            <p className="text-blue-200/90 text-lg leading-relaxed">
              Go with a shared shuttle unless you have a specific reason not to. It's the sweet spot of convenience, cost, and comfort — you'll arrive relaxed and ready for the mountains.
            </p>
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <section className="mb-12">
          <div className="bg-slate-900/50 border border-blue-400/20 rounded-xl p-6">
            <p className="text-xs text-blue-300/60 leading-relaxed">
              Affiliate Disclosure: Links may earn us a commission at no extra cost to you. We only recommend services we trust and would use ourselves.
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
                Your journey companion. Compare and book the best routes worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-100 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-blue-300/70">
                <li><a href="/" className="hover:text-cyan-300 transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-cyan-300 transition-colors">About</a></li>
                <li><a href="/privacy" className="hover:text-cyan-300 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-cyan-300 transition-colors">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-100 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-blue-300/70">
                <li><a href="/contact" className="hover:text-cyan-300 transition-colors">Get in Touch</a></li>
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
