import React from 'react';
import { Mountain, Train, CheckCircle, Star, Clock } from 'lucide-react';
import Head from 'next/head';

export default function CopenhagenToMalmo() {
  return (
    <>
      <Head>
        <title>Copenhagen to Malmö by Train: Time, Cost & Travel Guide (2026)</title>
        <meta
          name="description"
          content="Book Copenhagen to Malmö train tickets from €8 with Öresundståg. Discover 2026 schedules, cheap fares, frequent direct trains across the Øresund Bridge, tips, and why this quick hop is perfect for day trips or Scandinavian city-hopping."
        />
        <meta property="og:title" content="Copenhagen to Malmö by Train: Time, Cost & Travel Guide (2026)" />
        <meta property="og:description" content="Direct Öresundståg from Copenhagen to Malmö in ~40min – cheap tickets, frequent departures, Øresund Bridge views." />
        <meta property="og:url" content="https://www.get-me-there.com/copenhagen-to-malmo" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Copenhagen to Malmö by Train: Time, Cost & Travel Guide (2026)" />
        <meta name="twitter:description" content="Direct Öresundståg from Copenhagen to Malmö in ~40min – cheap tickets, frequent departures, Øresund Bridge views." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does the train from Copenhagen to Malmö take?",
                acceptedAnswer: { "@type": "Answer", text: "Direct Öresundståg trains take around 35–40 minutes." }
              },
              {
                "@type": "Question",
                name: "Do I need a passport for the Copenhagen to Malmö train?",
                acceptedAnswer: { "@type": "Answer", text: "No formal checks (Schengen/Nordic), but carry ID for possible spot checks." }
              },
              {
                "@type": "Question",
                name: "Can I bring luggage or a bike?",
                acceptedAnswer: { "@type": "Answer", text: "Generous allowance on Öresundståg; bikes allowed (free or small fee depending on time)." }
              },
              {
                "@type": "Question",
                name: "When is the best time to book cheap tickets?",
                acceptedAnswer: { "@type": "Answer", text: "Tickets are fixed price – buy anytime, but off-peak for quieter trains." }
              },
              {
                "@type": "Question",
                name: "Which side of the train has the best views from Copenhagen to Malmö?",
                acceptedAnswer: { "@type": "Answer", text: "Right side (facing forward) for the best Øresund Bridge and sea views." }
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.get-me-there.com/" },
              { "@type": "ListItem", position: 2, name: "Europe", item: "https://www.get-me-there.com/europe" },
              { "@type": "ListItem", position: 3, name: "Copenhagen to Malmö by Train", item: "https://www.get-me-there.com/copenhagen-to-malmo" }
            ]
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
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
            <span className="text-blue-300">Copenhagen to Malmö</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Copenhagen to Malmö by Train:
            </span>
            <br />
            <span className="text-blue-100">Time, Cost & Travel Guide (2026)</span>
          </h1>

          <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
            One of the quickest and most convenient international train hops in Europe, the frequent Öresundståg service crosses the iconic Øresund Bridge linking Danish Copenhagen with Swedish Malmö. In just 35–40 minutes, you can go from hygge cafes to Swedish design shops – ideal for day trips, business, or exploring the greater Øresund region without airport hassle.
          </p>

          <section className="mb-12">
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/60 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <div className="flex items-center gap-3 mb-6">
                <Train className="w-8 h-8 text-cyan-400" />
                <h2 className="text-2xl font-bold text-blue-100">Direct Öresundståg Train</h2>
                <p className="text-cyan-300 text-sm">DSB & Skånetrafiken</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white">~40min</p>
                  <p className="text-blue-300 text-sm">Direct</p>
                </div>
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-white">€8–15</p>
                  <p className="text-blue-300 text-sm">One-way (2026)</p>
                </div>
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-white">Every 20min</p>
                  <p className="text-blue-300 text-sm">From København H</p>
                </div>
              </div>

              <p className="text-blue-200/90 leading-relaxed mb-6">
                Frequent direct regional trains cross the Øresund Bridge with views of the sea – one of Europe's easiest and most scenic short international journeys.
              </p>

              <div className="bg-slate-800/60 rounded-2xl p-6">
                <p className="text-cyan-300 font-semibold mb-3 flex items-center gap-2">
                  <span className="text-yellow-400">💡</span> Tips:
                </p>
                <ul className="text-blue-200/90 space-y-2 text-sm">
                  <li>Sit on the right side (from Copenhagen) for best Øresund Bridge and sea views</li>
                  <li>No reservation needed – just buy ticket and hop on</li>
                  <li>Tickets valid on both Danish and Swedish sides</li>
                  <li>Use Øresundståg app or machines for easiest purchase</li>
                </ul>
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
                    <td className="py-4 px-4 font-semibold text-cyan-300">Train (Öresundståg direct)</td>
                    <td className="py-4 px-4">~40min</td>
                    <td className="py-4 px-4">€8–15</td>
                    <td className="py-4 px-4">Everyone – fastest and most convenient</td>
                  </tr>
                  <tr className="border-b border-blue-400/10">
                    <td className="py-4 px-4 font-semibold text-cyan-300">Bus</td>
                    <td className="py-4 px-4">~1h</td>
                    <td className="py-4 px-4">€10–20</td>
                    <td className="py-4 px-4">Rarely – train is better</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-cyan-300">Car (Øresund Bridge)</td>
                    <td className="py-4 px-4">~45min</td>
                    <td className="py-4 px-4">€60+ toll</td>
                    <td className="py-4 px-4">With luggage or group</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Copenhagen to Malmö Schedule</h2>
            <p className="text-blue-200/80 leading-relaxed">
              Very frequent direct Öresundståg departures (every 20 minutes most of day) from København H to Malmö C. First trains ~5am, last after midnight. Journey time 35–40 minutes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Ticket Prices & Discounts</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Fixed price tickets €8–15 one-way. No advance purchase needed – buy at station, app, or onboard (small surcharge). Øresund region tickets valid across both countries.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Travel Tips for First-Time Passengers</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-3">
              <li>No passport checks (Schengen).</li>
              <li>No seat reservation required.</li>
              <li>Trains run 24/7 with night services.</li>
              <li>City center to city center – no airport transfers.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Train Journey Breakdown</h2>
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <p className="text-blue-200/80 leading-relaxed mb-6">
                Regional Öresundståg trains cross the impressive Øresund Bridge with panoramic sea views before arriving in central Malmö.
              </p>
              <p className="text-blue-200/80 leading-relaxed">
                Onboard Wi-Fi, power sockets, café car on some services.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Who This Route Is Best For</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><strong>Day Trippers:</strong> Easy escape to Sweden for lunch or shopping.</li>
              <li><strong>Design Lovers:</strong> Quick access to Malmö's modern architecture.</li>
              <li><strong>Commuters:</strong> Many cross daily for work.</li>
              <li><strong>Budget Travelers:</strong> Cheap and frequent.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Scenic & Seasonal Advice</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Short but sweet highlight is the Øresund Bridge crossing with open sea views. Clear days best for visibility.
            </p>
            <p className="text-blue-200/80 leading-relaxed mb-8">
              Right side (facing forward) for the best bridge and sea panorama.
            </p>
          </section>

          {/* Booking CTAs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Book Your Ticket</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="https://www.oresundstag.se/en"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <Train className="w-6 h-6" />
                Book on Öresundståg (official)
              </a>
              <a
                href="https://www.omio.com/trains/copenhagen/malmo"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <CheckCircle className="w-6 h-6" />
                Compare prices on Omio
              </a>
            </div>
          </section>

          {/* Eurail */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                  <Star className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-blue-100">Eurail/Interrail Pass</h2>
                  <p className="text-cyan-300 text-sm">For wider Europe trips</p>
                </div>
              </div>

              <div className="space-y-4 text-blue-200/80 leading-relaxed">
                <p>Eurail/Interrail passes are valid on Öresundståg (no reservation needed).</p>
                <p>Great for frequent cross-border hops.</p>
              </div>

              <div className="mt-8">
                <a
                  href="https://www.eurail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300"
                >
                  Explore Eurail Passes
                  <Star className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-8">FAQs About Copenhagen to Malmö Train</h2>
            <div className="space-y-6">
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">How long does the train from Copenhagen to Malmö take?</summary>
                <p className="mt-4 text-blue-200/80">Around 35–40 minutes on direct Öresundståg services.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Do I need a passport?</summary>
                <p className="mt-4 text-blue-200/80">No – Schengen/Nordic route.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Can I bring luggage or a bike?</summary>
                <p className="mt-4 text-blue-200/80">Generous allowance. Bikes usually free or small fee.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Best time to book?</summary>
                <p className="mt-4 text-blue-200/80">Anytime – fixed price tickets.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Which side has the best views?</summary>
                <p className="mt-4 text-blue-200/80">Right side for Øresund Bridge and sea.</p>
              </details>
            </div>
          </section>

          {/* Related Routes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Related Routes</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><a href="/malmo-to-copenhagen" className="text-cyan-300 hover:text-cyan-400">Malmö to Copenhagen (reverse)</a></li>
              <li><a href="/copenhagen-to-stockholm" className="text-cyan-300 hover:text-cyan-400">Copenhagen to Stockholm train</a></li>
              <li><a href="/hamburg-to-copenhagen" className="text-cyan-300 hover:text-cyan-400">Hamburg to Copenhagen train</a></li>
            </ul>
          </section>
        </main>

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
