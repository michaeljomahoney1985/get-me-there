import React from 'react';
import { Mountain, Train, Clock, DollarSign, CheckCircle, Star } from 'lucide-react';
import Head from 'next/head';

export default function ParisToAmsterdam() {
  return (
    <>
      <Head>
        <title>Paris to Amsterdam by Train: Time, Cost & Travel Guide</title>
        <meta
          name="description"
          content="Travel from Paris to Amsterdam by train in just over 3 hours with Eurostar. Discover times, costs from €35, direct routes, scenic tips, who it's best for, and why trains beat buses or flights."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
        {/* Background SVG */}
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

        <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-cyan-400 text-sm mb-4">
            <a href="/" className="hover:text-cyan-300">Home</a>
            <span>→</span>
            <a href="/europe" className="hover:text-cyan-300">Europe</a>
            <span>→</span>
            <span className="text-blue-300">Paris to Amsterdam</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Paris to Amsterdam by Train:
            </span>
            <br />
            <span className="text-blue-100">Time, Cost & Travel Guide (2026)</span>
          </h1>

          {/* Intro */}
          <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
            Connecting two of Europe's most iconic capitals, the high-speed Eurostar route from Paris to Amsterdam offers a seamless, city-center-to-city-center journey. In just over three hours, you'll glide from the elegant boulevards of Paris to the picturesque canals of Amsterdam without airport hassles. This direct service makes it ideal for culture seekers, cyclists, or quick getaways—arrive rested and ready to explore.
          </p>

          {/* Route Image */}
          <figure className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1601944174462-07a18c345c0f"
              alt="High-speed Eurostar train from Paris to Amsterdam passing through scenic Dutch countryside with windmills and canals"
              className="w-full rounded-2xl object-cover shadow-2xl"
              loading="lazy"
            />
            <figcaption className="text-blue-300 text-sm mt-2">
              Eurostar train gliding through Dutch countryside
            </figcaption>
          </figure>

          {/* Quick Comparison Table */}
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
                    <td className="py-4 px-4 font-semibold text-cyan-300">Train (Eurostar direct)</td>
                    <td className="py-4 px-4">3h 20min</td>
                    <td className="py-4 px-4">€35–200+</td>
                    <td className="py-4 px-4">Everyone—fast, direct, city-center arrivals, no security queues</td>
                  </tr>
                  <tr className="border-b border-blue-400/10">
                    <td className="py-4 px-4 font-semibold text-cyan-300">Bus (FlixBus/BlaBlaCar)</td>
                    <td className="py-4 px-4">6–8h</td>
                    <td className="py-4 px-4">€20–70</td>
                    <td className="py-4 px-4">Budget travelers with time; overnight saves accommodation</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-cyan-300">Flight</td>
                    <td className="py-4 px-4">4–6h door-to-door</td>
                    <td className="py-4 px-4">€50–200</td>
                    <td className="py-4 px-4">Rarely—airports add stress and extra time</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Train Journey Breakdown */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Train Journey Breakdown</h2>
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <p className="text-blue-200/80 leading-relaxed mb-6">
                Almost all services are direct Eurostar high-speed trains (300 km/h) from Paris Gare du Nord to Amsterdam Centraal, with 10–15 daily departures. The journey takes around 3h 20min, offering comfortable seating, onboard Wi-Fi, and refreshments. Standard, Standard Premier, and Business Premier classes are available, so you can choose the comfort level that suits your trip. Booking early can save up to 50% on tickets, especially during weekends or holidays.
              </p>

              <figure className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1567848464821-3c7b68d3a3b4"
                  alt="Eurostar train interior with comfortable seats on Paris to Amsterdam route"
                  className="w-full rounded-2xl object-cover shadow-2xl"
                  loading="lazy"
                />
                <figcaption className="text-blue-300 text-sm mt-2">
                  Spacious seating inside Eurostar trains
                </figcaption>
              </figure>

              <p className="text-blue-200/80 leading-relaxed">
                Direct trains mean no transfers, city-center departures and arrivals save time compared to flying, and luggage restrictions are generous. Check platforms 15–30 minutes before departure, as Eurostar may adjust assignments slightly.
              </p>
            </div>
          </section>

          {/* Who This Route Is Best For */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Who This Route Is Best For</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><strong>Backpackers:</strong> Quick and direct route, easy connections to hostels in Amsterdam.</li>
              <li><strong>Business Travelers:</strong> Arrive in city-center offices fast, onboard Wi-Fi ideal for working.</li>
              <li><strong>Families:</strong> Spacious seating, snacks onboard, and luggage-friendly.</li>
              <li><strong>Adventure / Seasonal Travelers:</strong> Great for cycling trips, spring tulip season, or canal-side explorations.</li>
            </ul>
          </section>

          {/* Scenic & Seasonal Advice */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Scenic & Seasonal Advice</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              The route offers charming views of the French and Dutch countryside. Rolling fields, canals, and occasional windmills make the journey scenic, though most of it is urban/suburban. Spring and early autumn are the most picturesque months, while summer and holidays are peak travel times.
            </p>
            <figure className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                alt="Scenic countryside along Paris to Amsterdam train route"
                className="w-full rounded-2xl object-cover shadow-2xl"
                loading="lazy"
              />
              <figcaption className="text-blue-300 text-sm mt-2">
                Dutch countryside glimpsed from the Eurostar train
              </figcaption>
            </figure>
          </section>

          {/* Booking CTAs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Book Your Ticket</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="https://www.thetrainline.com/en-us/train-times/paris-to-amsterdam"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <Train className="w-6 h-6" />
                Check train times and book on Trainline
              </a>
              <a
                href="https://www.omio.com/trains/paris/amsterdam"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <CheckCircle className="w-6 h-6" />
                Compare train, bus & flight on Omio
              </a>
            </div>
            <p className="text-sm text-blue-300/60 mt-4">
              Affiliate links may earn us commission at no extra cost to you. Always check official sites for latest prices.
            </p>
          </section>

          {/* Related Routes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Related Routes</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><a href="/paris-to-brussels" className="text-cyan-300 hover:text-cyan-400">Paris to Brussels</a></li>
              <li><a href="/amsterdam-to-berlin" className="text-cyan-300 hover:text-cyan-400">Amsterdam to Berlin</a></li>
              <li><a href="/paris-to-rotterdam" className="text-cyan-300 hover:text-cyan-400">Paris to Rotterdam</a></li>
            </ul>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-blue-400/20 bg-slate-900/50 backdrop-blur-sm mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center text-sm text-blue-300/50 pt-8 border-t border-blue-400/10">
              © 2026 Get Me There. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
