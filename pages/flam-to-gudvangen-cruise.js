import React from 'react';
import { Mountain, Ship, CheckCircle, Star, Clock } from 'lucide-react';
import Head from 'next/head';

export default function FlamToGudvangen() {
  return (
    <>
      <Head>
        <title>Flåm to Gudvangen Fjord Cruise: Time, Cost & Travel Guide (2026)</title>
        <meta
          name="description"
          content="Book Flåm to Gudvangen fjord cruise tickets from €40 with The Fjords or Legacy of The Fjords. Discover 2026 schedules, cheap fares, UNESCO Nærøyfjord route, tips, and why this silent electric cruise is one of the world's most dramatic fjord experiences."
        />
        <meta property="og:title" content="Flåm to Gudvangen Fjord Cruise: Time, Cost & Travel Guide (2026)" />
        <meta property="og:description" content="2-hour electric cruise through UNESCO Nærøyfjord – sheer cliffs, waterfalls, serene waters." />
        <meta property="og:url" content="https://www.get-me-there.com/flam-to-gudvangen" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Flåm to Gudvangen Fjord Cruise: Time, Cost & Travel Guide (2026)" />
        <meta name="twitter:description" content="2-hour electric cruise through UNESCO Nærøyfjord – sheer cliffs, waterfalls, serene waters." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long is the Flåm to Gudvangen fjord cruise?",
                acceptedAnswer: { "@type": "Answer", text: "Approximately 2 hours one-way through Aurlandsfjord and Nærøyfjord." }
              },
              {
                "@type": "Question",
                name: "Do I need ID for the Flåm to Gudvangen cruise?",
                acceptedAnswer: { "@type": "Answer", text: "No – domestic Norwegian waters." }
              },
              {
                "@type": "Question",
                name: "Can I bring luggage?",
                acceptedAnswer: { "@type": "Answer", text: "Yes – storage available on board." }
              },
              {
                "@type": "Question",
                name: "When is the best time to book?",
                acceptedAnswer: { "@type": "Answer", text: "Book early – especially summer departures sell out quickly." }
              },
              {
                "@type": "Question",
                name: "Which side has the best views from Flåm to Gudvangen?",
                acceptedAnswer: { "@type": "Answer", text: "Right side (starboard) for the most dramatic waterfalls and cliffs." }
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
              { "@type": "ListItem", position: 3, name: "Flåm to Gudvangen Fjord Cruise", item: "https://www.get-me-there.com/flam-to-gudvangen" }
            ]
          })}
        </script>
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
            <span className="text-blue-300">Flåm to Gudvangen</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Flåm to Gudvangen Fjord Cruise:
            </span>
            <br />
            <span className="text-blue-100">Time, Cost & Travel Guide (2026)</span>
          </h1>

          {/* Intro */}
          <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
            The iconic fjord cruise from Flåm to Gudvangen sails through the UNESCO-listed Nærøyfjord – one of the narrowest and most dramatic fjords in the world. Modern electric vessels glide silently past sheer 1,000-metre cliffs, thundering waterfalls, and remote farms, offering a peaceful and breathtaking complement to the Flåm Railway.
          </p>

          {/* Route Highlights Card */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/60 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <div className="flex items-center gap-3 mb-6">
                <Ship className="w-8 h-8 text-cyan-400" />
                <h2 className="text-2xl font-bold text-blue-100">Direct Nærøyfjord Cruise</h2>
                <p className="text-cyan-300 text-sm">The Fjords / Legacy of The Fjords</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white">~2h</p>
                  <p className="text-blue-300 text-sm">One-way</p>
                </div>
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-white">€40–80</p>
                  <p className="text-blue-300 text-sm">One-way (2026 advance)</p>
                </div>
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-white">Multiple daily</p>
                  <p className="text-blue-300 text-sm">From Flåm harbour</p>
                </div>
              </div>

              <p className="text-blue-200/90 leading-relaxed mb-6">
                Silent electric or hybrid boats cruise through UNESCO-listed Aurlandsfjord and Nærøyfjord – towering cliffs, waterfalls, and serene waters in one of the world's most beautiful fjord landscapes.
              </p>

              <div className="bg-slate-800/60 rounded-2xl p-6">
                <p className="text-cyan-300 font-semibold mb-3 flex items-center gap-2">
                  <span className="text-yellow-400">💡</span> Tips:
                </p>
                <ul className="text-blue-200/90 space-y-2 text-sm">
                  <li>Sit on the right side (starboard) from Flåm for best waterfall and cliff views</li>
                  <li>Go on deck for fresh air and photos (dress in layers – windy!)</li>
                  <li>Onboard café limited – bring snacks</li>
                  <li>Book in advance – sells out fast in summer</li>
                </ul>
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
                    <th className="py-4 px-4 text-cyan-300">Cost</th>
                    <th className="py-4 px-4 text-cyan-300">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-blue-200/80">
                  <tr className="border-b border-blue-400/10">
                    <td className="py-4 px-4 font-semibold text-cyan-300">Fjord Cruise (direct)</td>
                    <td className="py-4 px-4">~2h one-way</td>
                    <td className="py-4 px-4">€40–80</td>
                    <td className="py-4 px-4">Pure UNESCO fjord immersion</td>
                  </tr>
                  <tr className="border-b border-blue-400/10">
                    <td className="py-4 px-4 font-semibold text-cyan-300">Cruise + bus return</td>
                    <td className="py-4 px-4">~4h total</td>
                    <td className="py-4 px-4">€60–100 combo</td>
                    <td className="py-4 px-4">Variety of views</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-cyan-300">Full Norway in a Nutshell</td>
                    <td className="py-4 px-4">Full day</td>
                    <td className="py-4 px-4">€150+</td>
                    <td className="py-4 px-4">Train + cruise + bus package</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Schedule */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Flåm to Gudvangen Schedule</h2>
            <p className="text-blue-200/80 leading-relaxed">
              Multiple departures daily year-round (up to 10+ in peak summer). Electric boats run both directions. Timed connections with Flåmsbana and shuttle buses.
            </p>
          </section>

          {/* Ticket Prices & Discounts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Ticket Prices & Discounts</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              One-way €40–60 advance; return combos €70–120. Premium electric boats (Vision/Legacy) slightly higher. Book early for best prices and availability.
            </p>
          </section>

          {/* Travel Tips for First-Time Passengers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Travel Tips for First-Time Passengers</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-3">
              <li>No ID checks – domestic Norwegian waters.</li>
              <li>No assigned seats – arrive early for best spots.</li>
              <li>Electric boats = silent cruising (great for photos & wildlife).</li>
              <li>Layer clothing + waterproof jacket (fjord weather changes fast).</li>
            </ul>
          </section>

          {/* Journey Breakdown */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Cruise Journey Breakdown</h2>
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <p className="text-blue-200/80 leading-relaxed mb-6">
                Depart Flåm harbour, sail Aurlandsfjord, enter narrow Nærøyfjord (as little as 250m wide), pass dramatic cliffs, waterfalls, and remote farms before arriving Gudvangen.
              </p>
              <p className="text-blue-200/80 leading-relaxed">
                Onboard audio guide, café, panoramic windows, large outdoor decks.
              </p>
            </div>
          </section>

          {/* Who This Route Is Best For */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Who This Route Is Best For</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><strong>Scenic Seekers:</strong> UNESCO-listed dramatic fjord cruise.</li>
              <li><strong>Photographers:</strong> Endless waterfalls, cliffs, reflections.</li>
              <li><strong>Day Trippers:</strong> Perfect add-on to Flåmsbana.</li>
              <li><strong>Nature Lovers:</strong> Silent electric cruising enhances peace.</li>
            </ul>
          </section>

          {/* Scenic & Seasonal Advice */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Scenic & Seasonal Advice</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Breathtaking year-round: summer green + long light, autumn colours, winter snow/frozen falls. Clear days ideal; mist adds atmosphere.
            </p>
            <p className="text-blue-200/80 leading-relaxed mb-8">
              Right side (starboard) from Flåm for prime waterfall and cliff views.
            </p>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-8">FAQs About Flåm to Gudvangen Fjord Cruise</h2>
            <div className="space-y-6">
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">How long is the cruise?</summary>
                <p className="mt-4 text-blue-200/80">Approximately 2 hours one-way.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Do I need ID?</summary>
                <p className="mt-4 text-blue-200/80">No – domestic Norwegian waters.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Can I bring luggage?</summary>
                <p className="mt-4 text-blue-200/80">Yes – storage available.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Best time to book?</summary>
                <p className="mt-4 text-blue-200/80">Early – peak summer sells out.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Which side has the best views?</summary>
                <p className="mt-4 text-blue-200/80">Right side (starboard) from Flåm.</p>
              </details>
            </div>
          </section>

          {/* Booking CTAs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Book Your Ticket</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="https://www.thetrainline.com/en-us/boat-times/flam-to-gudvangen"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <Ship className="w-6 h-6" />
                Check times and book on Trainline
              </a>
              <a
                href="https://www.omio.com/ferries/flam/gudvangen"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <CheckCircle className="w-6 h-6" />
                Compare cruise & combos on Omio
              </a>
            </div>
          </section>

          {/* Eurail/Interrail Note (no pass valid on cruise) */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                  <Star className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-blue-100">Eurail/Interrail Pass</h2>
                  <p className="text-cyan-300 text-sm">Note</p>
                </div>
              </div>

              <div className="text-blue-200/80 leading-relaxed">
                <p>Eurail/Interrail passes are NOT valid on the Flåm–Gudvangen fjord cruise (private operator). Separate ticket required.</p>
              </div>
            </div>
          </section>

          {/* Related Routes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Related Routes</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><a href="/bergen-to-flam" className="text-cyan-300 hover:text-cyan-400">Bergen to Flåm train + cruise combo</a></li>
              <li><a href="/oslo-to-bergen" className="text-cyan-300 hover:text-cyan-400">Oslo to Bergen scenic train</a></li>
              <li><a href="/gudvangen-to-voss" className="text-cyan-300 hover:text-cyan-400">Gudvangen to Voss shuttle bus</a></li>
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
