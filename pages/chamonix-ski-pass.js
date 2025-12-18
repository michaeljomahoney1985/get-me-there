import React from 'react';
import { Mountain, Ticket, Snowflake, Clock, DollarSign, CheckCircle } from 'lucide-react';

export default function ChamonixSkiPass() {
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
            <a href="/geneva-to-chamonix" className="hover:text-cyan-300">Chamonix</a>
            <span>→</span>
            <span className="text-blue-300">Ski Passes</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Chamonix Ski Passes:
            </span>
            <br />
            <span className="text-blue-100">Your 2025 Guide to Choosing the Right One</span>
          </h1>

          <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
            You've just arrived in Chamonix, boots unpacked, staring up at those snow-covered peaks. 
            Your legs are ready to ski—but which lift pass should you buy? Don't stress; here's the straightforward breakdown so you hit the slopes tomorrow without overpaying.
          </p>
        </div>

        {/* Hero Images - Clean, high-quality, no watermarks */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <img src="https://images.unsplash.com/photo-1519904981063-b0a5d1b18c4b?auto=format&fit=crop&w=1200&q=80" alt="Aerial view of snowy Chamonix valley and Mont Blanc" className="rounded-2xl object-cover h-72 w-full border border-cyan-400/20" />
          <img src="https://images.unsplash.com/photo-1543257563-5b6f1d8c8e7f?auto=format&fit=crop&w=1200&q=80" alt="Panoramic Mont Blanc from Chamonix slopes" className="rounded-2xl object-cover h-72 w-full border border-cyan-400/20" />
          <img src="https://images.unsplash.com/photo-1601493709721-7c2d2c9e7e0e?auto=format&fit=crop&w=1200&q=80" alt="Chamonix town nestled in winter mountains" className="rounded-2xl object-cover h-72 w-full border border-cyan-400/20" />
        </div>

        {/* Best Option Callout */}
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2">Quick Recommendation for Most Visitors</h3>
              <p className="text-blue-200/90 leading-relaxed">
                Start with <strong>Chamonix Le Pass</strong>—tons of varied terrain for a week, great value. Upgrade to Mont Blanc Unlimited if you crave Vallée Blanche or side trips to Italy/Switzerland.
              </p>
            </div>
          </div>
        </div>

        {/* Pass Info Cards - Clean images */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <img src="https://www.montblancnaturalresort.com/sites/default/files/styles/large/public/2024-09/forfait-chamonix-le-pass.jpg?itok=example" alt="Chamonix Le Pass card" className="rounded-xl object-cover h-96 w-full border border-cyan-400/20" />
          <img src="https://www.montblancnaturalresort.com/sites/default/files/styles/large/public/2024-09/forfait-mont-blanc-unlimited.jpg?itok=example" alt="Mont Blanc Unlimited pass card" className="rounded-xl object-cover h-96 w-full border border-cyan-400/20" />
        </div>

        {/* Option 1: Chamonix Le Pass */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Ticket className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 1: Chamonix Le Pass</h2>
                <p className="text-cyan-300 text-sm">Perfect for most week-long trips</p>
              </div>
            </div>

            {/* Le Pass areas - clean images */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <img src="https://vcdn.bergfex.at/images/resized/8c/452be050d806028c_4eeb7a664c60c94d@2x.jpg" alt="Brévent-Flégère sunny slopes" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
              <img src="https://www.powderhounds.com/site/DefaultSite/filesystem/images/Europe/France/BreventFlegere/overview/05.JPG" alt="Brévent views over valley" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
              <img src="https://www.datocms-assets.com/144591/1730994629-home_domaine-chamonix-grands-montets2.webp" alt="Grands Montets steep terrain" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>Covers core areas: Brévent-Flégère (sunny reds with views), Grands Montets (powder steeps—top lift reopening 2026), Le Tour/Balme (cruisers), plus beginner zones.</p>
              <p className="font-semibold text-cyan-300">Enough terrain for a full week. Free valley buses included.</p>
              <p>Kids under 5 often free; big discounts for 5–14 and seniors.</p>
              <p><strong>2025 Adult Prices (indicative):</strong> 1 day ~€59–74 | 6 days ~€300–350 | Season ~€800–1,000 (early bird savings).</p>
            </div>

            <div className="mt-8">
              <a
                href="https://domaineschamonix.montblancnaturalresort.com/en/ticketing/chamonix-lepass"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300"
              >
                Buy Chamonix Le Pass
                <Ticket className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Option 2: Mont Blanc Unlimited */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Snowflake className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 2: Mont Blanc Unlimited</h2>
                <p className="text-cyan-300 text-sm">For bucket-list adventures</p>
              </div>
            </div>

            {/* Unlimited extras - clean images */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <img src="https://alpinehikers.com/wp-content/uploads/2018/09/Aiguille-du-Midi-OT-Vallee-de-Chamonix-Salome-Abrial.jpg" alt="Aiguille du Midi cable car and views" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
              <img src="https://www.datocms-assets.com/144383/1729682434-home_aiguille-du-midi-hiver.webp" alt="High altitude panorama from Aiguille du Midi" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
              <img src="https://static.seetheworld.com/image_uploader/photos/68/original/skiing-in-les-houches-and-off-the-aiguille-du-midi-chamonix-mont-blanc-valley-873.jpg" alt="Vallée Blanche off-piste descent" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <img src="https://d3u9sm4kpb9d1j.cloudfront.net/pictures/4387071" alt="Courmayeur Italy sunny slopes" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
              <img src="https://images.squarespace-cdn.com/content/v1/5dc0293d54374e259392964c/1577468289963-DJLW7MRL3LYMVCNB4558/image.png" alt="Mont Blanc Unlimited coverage map" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>Includes everything in Le Pass + Aiguille du Midi (Vallée Blanche—guide recommended), Les Houches, Courmayeur (Italy), Verbier days (Switzerland), extras like pool/rink.</p>
              <p className="font-semibold text-cyan-300">Ideal for experts chasing off-piste and international days.</p>
              <p><strong>2025 Adult Prices (indicative):</strong> 1 day ~€75–90 | 6 days ~€380–450 | Season ~€1,200–1,500 (early bird deals).</p>
            </div>

            <div className="mt-8">
              <a
                href="https://www.montblancnaturalresort.com/en/ticketing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300"
              >
                Buy Mont Blanc Unlimited
                <Snowflake className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-100 mb-6">Quick Comparison (2025 Estimates)</h2>
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-blue-400/20">
                  <th className="py-4 px-4 text-cyan-300">Pass</th>
                  <th className="py-4 px-4 text-cyan-300">Key Areas</th>
                  <th className="py-4 px-4 text-cyan-300">6-Day Adult</th>
                  <th className="py-4 px-4 text-cyan-300">Best For You</th>
                </tr>
              </thead>
              <tbody className="text-blue-200/80">
                <tr className="border-b border-blue-400/10">
                  <td className="py-4 px-4 font-semibold text-cyan-300">Chamonix Le Pass</td>
                  <td className="py-4 px-4">Valley core (Brévent, Grands Montets, etc.)</td>
                  <td className="py-4 px-4">~€300–350</td>
                  <td className="py-4 px-4">Week trips, intermediates</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-cyan-300">Mont Blanc Unlimited</td>
                  <td className="py-4 px-4">All + Italy/Switzerland extras</td>
                  <td className="py-4 px-4">~€380–450</td>
                  <td className="py-4 px-4">Experts, Vallée Blanche</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Recommendation */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-cyan-300 mb-4">Final Advice for Your Trip</h2>
            <p className="text-blue-200/90 text-lg leading-relaxed">
              Unless you're set on extreme off-piste or international days, grab <strong>Chamonix Le Pass</strong>—you can upgrade mid-week by paying the difference. Add insurance (~€3–4/day) for rescue coverage.
            </p>
            <p className="text-blue-200/90 text-lg leading-relaxed mt-4">
              You've made it to one of the world's best ski destinations—sort your pass tonight and make tomorrow epic. Safe turns! ❄️
            </p>
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <section className="mb-12">
          <div className="bg-slate-900/50 border border-blue-400/20 rounded-xl p-6">
            <p className="text-xs text-blue-300/60 leading-relaxed">
              Affiliate Disclosure: Links may earn us a commission at no extra cost to you. We only recommend official and trusted services.
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
