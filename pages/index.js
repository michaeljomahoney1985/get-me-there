import Head from 'next/head';
import { Mountain, MapPin, Train, Car, Plane } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (from && to) {
      const query = encodeURIComponent(`${from} to ${to}`);
      window.location.href = `https://www.omio.com/search?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
    }
  };

  const popularRoutes = [
    { from: 'Oslo', to: 'Bergen', slug: 'oslo-to-bergen', icon: Mountain },
    { from: 'Munich', to: 'Vienna', slug: 'munich-to-vienna', icon: Train },
    { from: 'Prague', to: 'Rozvadov', slug: 'prague-to-rozvadov', icon: Train },
    { from: 'Munich', to: 'Zurich', slug: 'munich-to-zurich', icon: Train },
    { from: 'Berlin', to: 'Munich', slug: 'berlin-to-munich', icon: Train },
    { from: 'Munich', to: 'Rozvadov', slug: 'munich-to-rozvadov', icon: Train },
  ];

  return (
    <>
      <Head>
        <title>Get Me There – Safe & Smart Travel Worldwide</title>
        <meta name="description" content="Plan safe, reliable journeys anywhere in the world – trains, buses, flights, road trips, casinos, backpacking routes and more. Detailed guides, real prices and trusted tips." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
        {/* Restored Logo + Original Tagline */}
        <header className="relative border-b border-blue-400/20 backdrop-blur-sm bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center gap-4 group">
                <Mountain className="w-12 h-12 text-cyan-400 group-hover:text-cyan-300 transition-all" />
                <div>
                  <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Get Me There
                  </h1>
                  <p className="text-lg text-blue-200/80 mt-1">
                    Getting people to places safely, reliably and affordably – anywhere in the world
                  </p>
                </div>
              </a>
              <nav className="flex gap-8 text-lg">
                <a href="/" className="text-blue-200 hover:text-cyan-300 transition-colors">Home</a>
                <a href="/about" className="text-blue-200 hover:text-cyan-300 transition-colors">About</a>
                <a href="/privacy-policy" className="text-blue-200 hover:text-cyan-300 transition-colors">Privacy Policy</a>
                <a href="/contact" className="text-blue-200 hover:text-cyan-300 transition-colors">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
            Safe & Smart Travel Worldwide
          </h2>
          <p className="text-xl md:text-2xl text-blue-200 mb-16 max-w-4xl mx-auto leading-relaxed">
            Trains across Europe • Poker trips to King's Casino • Road trips • Backpacking routes • Alpine adventures • Japan rail • Flights • Buses<br />
            Detailed guides with real prices, safety tips, and the best ways to get there – no matter where "there" is.
          </p>

          {/* Search Form – Pre-filled Omio for best UX */}
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-20">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="relative">
                <MapPin className="absolute left-4 top-4 w-6 h-6 text-cyan-400" />
                <input
                  type="text"
                  placeholder="From (e.g. Munich)"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 rounded-xl bg-slate-800/70 border border-blue-400/30 text-white placeholder-blue-300 focus:outline-none focus:border-cyan-400 text-lg"
                  required
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-4 w-6 h-6 text-cyan-400" />
                <input
                  type="text"
                  placeholder="To (e.g. Rozvadov)"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 rounded-xl bg-slate-800/70 border border-blue-400/30 text-white placeholder-blue-300 focus:outline-none focus:border-cyan-400 text-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="md:col-span-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-bold text-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 px-8 py-5"
              >
                <Plane className="w-7 h-7" />
                Search All Options
              </button>
            </div>
            <p className="text-blue-300 text-sm">
              Powered by Omio – searches trains, buses, flights and more with live prices.
            </p>
          </form>

          {/* Popular Guides */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-cyan-300">
              Popular Travel Guides
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularRoutes.map((route) => {
                const Icon = route.icon;
                return (
                  <a
                    key={route.slug}
                    href={`/${route.slug}`}
                    className="block bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20 hover:border-cyan-400 hover:bg-slate-800/80 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-12 h-12 text-cyan-400" />
                      <span className="text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {route.from} → {route.to}
                      </span>
                    </div>
                    <p className="text-blue-300 text-left">Detailed guide with prices, tips & booking →</p>
                  </a>
                );
              })}
            </div>

            <p className="mt-16 text-blue-200 text-lg max-w-3xl mx-auto">
              Hundreds more routes coming: Japan Shinkansen • USA road trips • Southeast Asia backpacking • Alpine hiking • Casino trips worldwide • and beyond.
            </p>
          </div>
        </div>

        <footer className="border-t border-blue-400/20 bg-slate-900/50 backdrop-blur-sm mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-blue-300/70 text-sm">
            © 2026 Get Me There. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
