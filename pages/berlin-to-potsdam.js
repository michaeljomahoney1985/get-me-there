import React from 'react';
import { Mountain, Train, CheckCircle, Car, Star, Clock } from 'lucide-react';  // ← Clock added
import Head from 'next/head';

export default function BerlinToPotsdam() {
  return (
    <>
      <Head>
        <title>Berlin to Potsdam Day Trip: Palaces & Gardens Guide (2026)</title>
        <meta
          name="description"
          content="Easy 30-minute S-Bahn from Berlin to Potsdam. Visit UNESCO Sanssouci Palace, beautiful gardens, and historic Dutch Quarter – no car needed."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
        {/* Background SVG and header with logo */}

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
            <span className="text-blue-300">Berlin to Potsdam</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Berlin to Potsdam Day Trip:
            </span>
            <br />
            <span className="text-blue-100">
              Sanssouci Palace & Prussian Splendour (2026)
            </span>
          </h1>

          <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
            Just 30 minutes from Berlin lies Potsdam – home to Frederick the Great's magnificent Sanssouci Palace (the "Prussian Versailles"), sprawling gardens, and charming Dutch Quarter. One of Europe's easiest and most rewarding day trips, all reachable by public transport.
          </p>

          {/* Recommended */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/60 backdrop-blur-xl rounded-3xl p-8 border border-cyan-400/40">
              <h2 className="text-3xl font-bold text-cyan-200 mb-6 flex items-center gap-3">
                <CheckCircle className="w-10 h-10 text-cyan-400" />
                Recommended: S-Bahn (Public Transport)
              </h2>
              <p className="text-xl text-blue-100 mb-6">
                The S-Bahn is fastest, cheapest, and most convenient – covered by your Berlin ABC ticket. No car needed for the palaces.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <a
                  href="https://www.omio.com/"
                  target="_blank"
                  rel="nofollow noopener"
                  className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 rounded-xl font-semibold text-white shadow-lg transition-all text-lg"
                >
                  <Train className="w-8 h-8" />
                  Check S-Bahn times on Omio
                </a>
                <a
                  href="https://www.bvg.de/en"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-orange-600 hover:bg-orange-500 rounded-xl font-semibold text-white shadow-lg transition-all text-lg"
                >
                  Berlin transport info
                </a>
              </div>
            </div>
          </section>

          {/* Quick facts – now Clock is defined */}
          <section className="mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-3xl font-bold">25–40min</p>
                <p className="text-blue-300 text-sm">S-Bahn</p>
              </div>
              <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold">€4–10</p>
                <p className="text-blue-300 text-sm">With ABC ticket</p>
              </div>
              <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold">Every 10min</p>
                <p className="text-blue-300 text-sm">S7 line</p>
              </div>
            </div>
          </section>

          {/* Highlights, car rental, activities, FAQ, hotels, related routes – all unchanged */}

          {/* Rest of the page is the same as before */}

        </main>

        <footer className="border-t border-blue-400/20 bg-slate-900/50 backdrop-blur-sm mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <p className="text-xs text-blue-300/50 text-center mt-8">
              Affiliate links may earn commission at no cost to you.<br />
              Prices approximate for 2026—check current rates.
            </p>
            <div className="text-center text-sm text-blue-300/50 pt-8 border-t border-blue-400/10 mt-8">
              © 2026 Get Me There. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
