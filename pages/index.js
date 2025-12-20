import Head from 'next/head';
import { Train, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (from && to) {
      const query = encodeURIComponent(`${from} to ${to} train`);
      window.location.href = `https://www.omio.com/trains?search=${query}`;
    }
  };

  const popularRoutes = [
    { from: 'Oslo', to: 'Bergen', slug: 'oslo-to-bergen' },
    { from: 'Bergen', to: 'Oslo', slug: 'bergen-to-oslo' },
    { from: 'Stockholm', to: 'Copenhagen', slug: 'stockholm-to-copenhagen' },
    { from: 'Copenhagen', to: 'Malmö', slug: 'copenhagen-to-malmo' },
    { from: 'Malmö', to: 'Gothenburg', slug: 'malmo-to-gothenburg' },
    { from: 'Stockholm', to: 'Gothenburg', slug: 'stockholm-to-gothenburg' },
    { from: 'Gothenburg', to: 'Stockholm', slug: 'gothenburg-to-stockholm' },
    { from: 'Gothenburg', to: 'Oslo', slug: 'gothenburg-to-oslo' },
    { from: 'Copenhagen', to: 'Hamburg', slug: 'copenhagen-to-hamburg' },
    { from: 'Hamburg', to: 'Berlin', slug: 'hamburg-to-berlin' },
    { from: 'Berlin', to: 'Munich', slug: 'berlin-to-munich' },
  ];

  return (
    <>
      <Head>
        <title>Get Me There – Europe's Best Train Routes</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Get Me There
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-3xl mx-auto">
            Find your perfect train route across Europe – with real prices, schedules, scenic tips, and insider advice.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-20">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="relative">
                <MapPin className="absolute left-4 top-4 w-6 h-6 text-cyan-400" />
                <input
                  type="text"
                  placeholder="From (e.g. Oslo)"
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
                  placeholder="To (e.g. Bergen)"
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
                <Train className="w-7 h-7" />
                Search Routes
              </button>
            </div>
          </form>

          {/* Popular Routes */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-cyan-300">
              Popular Train Routes in Europe
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularRoutes.map((route) => (
                <a
                  key={route.slug}
                  href={`/${route.slug}`}
                  className="block bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20 hover:border-cyan-400 hover:bg-slate-800/80 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {route.from} → {route.to}
                      </p>
                      <p className="text-blue-300 mt-2">Direct train guide →</p>
                    </div>
                    <Train className="w-10 h-10 text-cyan-400 group-hover:translate-x-4 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <p className="mt-20 text-blue-300 text-lg">
            All guides include real 2026 prices, schedules, scenic tips, and booking links.
          </p>
        </div>
      </div>
    </>
  );
}
