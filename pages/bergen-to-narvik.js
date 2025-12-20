import React from 'react';
import { Mountain, Ship, Train, CheckCircle, Star, Clock } from 'lucide-react';
import Head from 'next/head';

export default function BergenToNarvik() {
  return (
    <>
      <Head>
        <title>Bergen to Narvik: Time, Cost & Travel Guide (2026)</title>
        <meta
          name="description"
          content="Travel from Bergen to Narvik by Hurtigruten coastal voyage or Havila – scenic fjord and Arctic route from €800. Discover 2026 schedules, fares, tips, and why this iconic boat journey along Norway's coast is a bucket-list adventure with optional fjord excursions."
        />
        <meta property="og:title" content="Bergen to Narvik: Time, Cost & Travel Guide (2026)" />
        <meta property="og:description" content="Hurtigruten/Havila coastal voyage from Bergen to Narvik in ~4 days – dramatic fjords, Arctic landscapes, Northern Lights potential." />
        <meta property="og:url" content="https://www.get-me-there.com/bergen-to-narvik" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bergen to Narvik: Time, Cost & Travel Guide (2026)" />
        <meta name="twitter:description" content="Hurtigruten/Havila coastal voyage from Bergen to Narvik in ~4 days – dramatic fjords, Arctic landscapes, Northern Lights potential." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does the journey from Bergen to Narvik take?",
                acceptedAnswer: { "@type": "Answer", text: "Around 4 days on Hurtigruten or Havila coastal voyage (with multiple port stops)." }
              },
              {
                "@type": "Question",
                name: "Is there a direct train from Bergen to Narvik?",
                acceptedAnswer: { "@type": "Answer", text: "No – no direct train; requires multiple changes and bus north of Bodø/Fauske (total ~30–35 hours)." }
              },
              {
                "@type": "Question",
                name: "Can I do fjord cruises along the way or at Narvik?",
                acceptedAnswer: { "@type": "Answer", text: "Yes – optional excursions on the voyage; local RIB/sightseeing boat tours from Narvik on Ofotfjord." }
              },
              {
                "@type": "Question",
                name: "When is the best time to travel?",
                acceptedAnswer: { "@type": "Answer", text: "Summer for midnight sun and excursions; winter for Northern Lights." }
              },
              {
                "@type": "Question",
                name: "Which side of the ship has the best views?",
                acceptedAnswer: { "@type": "Answer", text: "Both sides excellent – scenery changes constantly; port side often for coastal views." }
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
              { "@type": "ListItem", position: 3, name: "Bergen to Narvik", item: "https://www.get-me-there.com/bergen-to-narvik" }
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
            <span className="text-blue-300">Bergen to Narvik</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Bergen to Narvik:
            </span>
            <br />
            <span className="text-blue-100">Time, Cost & Travel Guide (2026)</span>
          </h1>

          <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
            There is no direct train from Bergen to Narvik – Norway's railway ends at Bodø/Fauske. The classic and most scenic way north is the iconic **Hurtigruten** or newer **Havila** coastal voyage, sailing along dramatic fjords, past thousands of islands, and into the Arctic Circle. This multi-day journey combines transportation with cruise-like experience, stopping at 20+ ports. In Narvik, local fjord cruises explore the deep Ofotfjord with mountains plunging into the sea.
          </p>

          <section className="mb-12">
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/60 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <div className="flex items-center gap-3 mb-6">
                <Ship className="w-8 h-8 text-cyan-400" />
                <h2 className="text-2xl font-bold text-blue-100">Hurtigruten / Havila Coastal Voyage</h2>
                <p className="text-cyan-300 text-sm">Classic Norwegian Coastal Route</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white">~4 days</p>
                  <p className="text-blue-300 text-sm">With port stops</p>
                </div>
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-white">€800–2000</p>
                  <p className="text-blue-300 text-sm">Port-to-port cabin (2026)</p>
                </div>
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-white">Daily</p>
                  <p className="text-blue-300 text-sm">Year-round departures</p>
                </div>
              </div>

              <p className="text-blue-200/90 leading-relaxed mb-6">
                The famous Norwegian coastal steamer route sails north from Bergen through stunning fjords, crossing the Arctic Circle, to Narvik – a working ship with cruise elements, meals included on full voyages.
              </p>

              <div className="bg-slate-800/60 rounded-2xl p-6">
                <p className="text-cyan-300 font-semibold mb-3 flex items-center gap-2">
                  <span className="text-yellow-400">💡</span> Tips:
                </p>
                <ul className="text-blue-200/90 space-y-2 text-sm">
                  <li>Both sides spectacular – scenery constant</li>
                  <li>Book cabin for comfort; port-to-port possible</li>
                  <li>Optional excursions (e.g. Geirangerfjord, Trondheim)</li>
                  <li>Winter for Northern Lights; summer for midnight sun</li>
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
                    <td className="py-4 px-4 font-semibold text-cyan-300">Coastal Voyage (Hurtigruten/Havila)</td>
                    <td className="py-4 px-4">~4 days</td>
                    <td className="py-4 px-4">€800–2000+</td>
                    <td className="py-4 px-4">Scenic coastal experience</td>
                  </tr>
                  <tr className="border-b border-blue-400/10">
                    <td className="py-4 px-4 font-semibold text-cyan-300">Train + Bus</td>
                    <td className="py-4 px-4">~30–35h</td>
                    <td className="py-4 px-4">€200–400</td>
                    <td className="py-4 px-4">Budget overland</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-cyan-300">Flight</td>
                    <td className="py-4 px-4">~4–6h (with connection)</td>
                    <td className="py-4 px-4">€100–300</td>
                    <td className="py-4 px-4">Speed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Bergen to Narvik Schedule</h2>
            <p className="text-blue-200/80 leading-relaxed">
              Daily departures year-round on Hurtigruten and Havila. Ships sail northbound from Bergen evening, arriving Narvik around day 4 morning. Multiple stops en route.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Ticket Prices & Options</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Port-to-port cabin €800–2000+ depending on season/cabin. Full voyage with meals higher. Book early for best rates.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Travel Tips for First-Time Passengers</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-3">
              <li>Hybrid ships – smoother and greener.</li>
              <li>Optional excursions at ports (book onboard).</li>
              <li>Northern Lights season Oct–Mar.</li>
              <li>In Narvik: local RIB tours on Ofotfjord.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Journey Breakdown</h2>
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <p className="text-blue-200/80 leading-relaxed mb-6">
                Sail from Bergen through fjords, cross Arctic Circle, pass Lofoten islands (distant views), arrive deep Ofotfjord in Narvik.
              </p>
              <p className="text-blue-200/80 leading-relaxed">
                Onboard restaurants, lounges, panoramic decks. Meals often included.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Who This Route Is Best For</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><strong>Coastal Explorers:</strong> Iconic Norwegian voyage.</li>
              <li><strong>Northern Lights Hunters:</strong> Winter sailings.</li>
              <li><strong>Relaxed Travelers:</strong> No flying, scenic ports.</li>
              <li><strong>Fjord Lovers:</strong> Local cruises from Narvik.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Scenic & Seasonal Advice</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Epic coastal scenery year-round: summer midnight sun, winter aurora potential. Calm inside passage most of way.
            </p>
            <p className="text-blue-200/80 leading-relaxed mb-8">
              Both sides excellent. In Narvik, short fjord cruises explore dramatic Ofotfjord.
            </p>
          </section>

          {/* Booking CTAs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Book Your Voyage</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="https://www.hurtigruten.com"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <Ship className="w-6 h-6" />
                Book on Hurtigruten (classic)
              </a>
              <a
                href="https://www.fjordtours.com/en"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <CheckCircle className="w-6 h-6" />
                Explore options & local fjord tours
              </a>
            </div>
          </section>

          {/* No Eurail for coastal voyage */}

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-8">FAQs About Bergen to Narvik</h2>
            <div className="space-y-6">
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">How long does the journey from Bergen to Narvik take?</summary>
                <p className="mt-4 text-blue-200/80">Around 4 days on Hurtigruten or Havila coastal voyage (with port stops).</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Is there a direct train?</summary>
                <p className="mt-4 text-blue-200/80">No – train only to Bodø/Fauske; then bus.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Can I do fjord cruises?</summary>
                <p className="mt-4 text-blue-200/80">Yes – optional excursions; local tours from Narvik on Ofotfjord.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Best time to travel?</summary>
                <p className="mt-4 text-blue-200/80">Summer for midnight sun; winter for Northern Lights.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Which side has the best views?</summary>
                <p className="mt-4 text-blue-200/80">Both sides – scenery constant.</p>
              </details>
            </div>
          </section>

          {/* Related Routes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Related Routes</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><a href="/oslo-to-bergen" className="text-cyan-300 hover:text-cyan-400">Oslo to Bergen train</a></li>
              <li><a href="/bergen-to-flam" className="text-cyan-300 hover:text-cyan-400">Bergen to Flåm</a></li>
              <li><a href="/narvik-to-kiruna" className="text-cyan-300 hover:text-cyan-400">Narvik to Sweden by train</a></li>
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
