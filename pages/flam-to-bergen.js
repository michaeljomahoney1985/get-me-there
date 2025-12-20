import React from 'react';
import { Mountain, Train, CheckCircle, Star, Clock } from 'lucide-react';
import Head from 'next/head';

export default function FlamToBergen() {
  return (
    <>
      <Head>
        <title>Flåm to Bergen by Train: Time, Cost & Travel Guide (2026)</title>
        <meta
          name="description"
          content="Book Flåm to Bergen train tickets from €50 with Vy (Flåmsbana + Bergen Line). Discover 2026 schedules, cheap fares, reverse scenic route via Myrdal, tips, and why this remains one of the world's most beautiful rail journeys."
        />
        <meta property="og:title" content="Flåm to Bergen by Train: Time, Cost & Travel Guide (2026)" />
        <meta property="og:description" content="Flåmsbana ascent + Bergen Line from Flåm to Bergen in ~5h – dramatic fjords, waterfalls, mountains." />
        <meta property="og:url" content="https://www.get-me-there.com/flam-to-bergen" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Flåm to Bergen by Train: Time, Cost & Travel Guide (2026)" />
        <meta name="twitter:description" content="Flåmsbana ascent + Bergen Line from Flåm to Bergen in ~5h – dramatic fjords, waterfalls, mountains." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does the train from Flåm to Bergen take?",
                acceptedAnswer: { "@type": "Answer", text: "Around 5 hours total (Flåmsbana to Myrdal ~1h + connection + Bergen Line to Bergen ~4h)." }
              },
              {
                "@type": "Question",
                name: "Do I need a passport for the Flåm to Bergen train?",
                acceptedAnswer: { "@type": "Answer", text: "No – domestic Norwegian route." }
              },
              {
                "@type": "Question",
                name: "Can I bring luggage or a bike?",
                acceptedAnswer: { "@type": "Answer", text: "Generous allowance on mainline; limited on Flåmsbana (bikes require reservation)." }
              },
              {
                "@type": "Question",
                name: "When is the best time to book cheap tickets?",
                acceptedAnswer: { "@type": "Answer", text: "Book early for combined Minipris fares." }
              },
              {
                "@type": "Question",
                name: "Which side of the train has the best views from Flåm to Bergen?",
                acceptedAnswer: { "@type": "Answer", text: "Left side ascending Flåmsbana (right descending) for dramatic waterfalls and valley views." }
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
              { "@type": "ListItem", position: 3, name: "Flåm to Bergen by Train", item: "https://www.get-me-there.com/flam-to-bergen" }
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
            <span className="text-blue-300">Flåm to Bergen</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Flåm to Bergen by Train:
            </span>
            <br />
            <span className="text-blue-100">Time, Cost & Travel Guide (2026)</span>
          </h1>

          {/* Intro */}
          <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
            The reverse of the classic Bergen Line journey takes you from fjord-level Flåm up the legendary Flåm Railway before joining the main Bergen Line across mountains and valleys to colourful Bergen. This scenic masterpiece offers dramatic ascents, waterfalls, plateaus, and coastal approaches – ideal for completing a Norway fjord adventure.
          </p>

          {/* Route Highlights Card */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/60 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <div className="flex items-center gap-3 mb-6">
                <Train className="w-8 h-8 text-cyan-400" />
                <h2 className="text-2xl font-bold text-blue-100">Flåmsbana + Bergen Line</h2>
                <p className="text-cyan-300 text-sm">Vy</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white">~5h</p>
                  <p className="text-blue-300 text-sm">Total (incl. connection)</p>
                </div>
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-white">€50–120</p>
                  <p className="text-blue-300 text-sm">One-way (2026 advance)</p>
                </div>
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-white">Multiple daily</p>
                  <p className="text-blue-300 text-sm">From Flåm</p>
                </div>
              </div>

              <p className="text-blue-200/90 leading-relaxed mb-6">
                Dramatic ascent on world-famous Flåmsbana followed by scenic Bergen Line crossing Hardangervidda plateau and western Norway valleys.
              </p>

              <div className="bg-slate-800/60 rounded-2xl p-6">
                <p className="text-cyan-300 font-semibold mb-3 flex items-center gap-2">
                  <span className="text-yellow-400">💡</span> Tips:
                </p>
                <ul className="text-blue-200/90 space-y-2 text-sm">
                  <li>Left side ascending Flåmsbana (right descending) for best waterfall/valley views</li>
                  <li>Train stops at Kjosfossen waterfall for photos</li>
                  <li>Timed connections at Myrdal – easy transfer</li>
                  <li>Book combined ticket early in summer</li>
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
                    <td className="py-4 px-4 font-semibold text-cyan-300">Train (Flåmsbana + mainline)</td>
                    <td className="py-4 px-4">~5h</td>
                    <td className="py-4 px-4">€50–120</td>
                    <td className="py-4 px-4">Scenic mountain & plateau views</td>
                  </tr>
                  <tr className="border-b border-blue-400/10">
                    <td className="py-4 px-4 font-semibold text-cyan-300">Express Boat (Sognefjord)</td>
                    <td className="py-4 px-4">~5h15m</td>
                    <td className="py-4 px-4">€80–120</td>
                    <td className="py-4 px-4">Fjord & coastal scenery</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-cyan-300">Bus</td>
                    <td className="py-4 px-4">~3h</td>
                    <td className="py-4 px-4">€30–50</td>
                    <td className="py-4 px-4">Fastest & cheapest</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Schedule */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Flåm to Bergen Schedule</h2>
            <p className="text-blue-200/80 leading-relaxed">
              Multiple timed connections daily: Flåmsbana ascent to Myrdal + Bergen Line to Bergen. Departures throughout the day with easy transfers.
            </p>
          </section>

          {/* Ticket Prices & Discounts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Ticket Prices & Discounts</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Combined one-way €50–120 advance. Minipris deals on mainline; Flåmsbana portion fixed. Book early for best availability.
            </p>
          </section>

          {/* Travel Tips for First-Time Passengers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Travel Tips for First-Time Passengers</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-3">
              <li>No ID checks – domestic Norwegian route.</li>
              <li>Reserve Flåmsbana seat in peak season.</li>
              <li>Short connection at Myrdal – straightforward.</li>
              <li>Alternative: express boat for fjord views.</li>
            </ul>
          </section>

          {/* Train Journey Breakdown */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Train Journey Breakdown</h2>
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <p className="text-blue-200/80 leading-relaxed mb-6">
                Steep ascent on Flåmsbana through tunnels and valleys, photo stop at Kjosfossen, then mainline across Hardangervidda plateau and western valleys to Bergen.
              </p>
              <p className="text-blue-200/80 leading-relaxed">
                Onboard café on mainline; audio guide on Flåmsbana.
              </p>
            </div>
          </section>

          {/* Who This Route Is Best For */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Who This Route Is Best For</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><strong>Scenic Enthusiasts:</strong> Reverse of world's top rail journey.</li>
              <li><strong>Mountain Lovers:</strong> Hardangervidda plateau drama.</li>
              <li><strong>Returning from Fjords:</strong> Perfect end to Flåm stay.</li>
              <li><strong>Photographers:</strong> Waterfalls, tunnels, high plateaus.</li>
            </ul>
          </section>

          {/* Scenic & Seasonal Advice */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Scenic & Seasonal Advice</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Stunning ascent with different perspectives from descent. Summer green, autumn colours, winter snow.
            </p>
            <p className="text-blue-200/80 leading-relaxed mb-8">
              Left side ascending Flåmsbana for prime views.
            </p>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-8">FAQs About Flåm to Bergen Train</h2>
            <div className="space-y-6">
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">How long does the train from Flåm to Bergen take?</summary>
                <p className="mt-4 text-blue-200/80">Around 5 hours total with connection at Myrdal.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Do I need ID?</summary>
                <p className="mt-4 text-blue-200/80">No – domestic Norwegian route.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Can I bring luggage or a bike?</summary>
                <p className="mt-4 text-blue-200/80">Mainline yes; Flåmsbana limited.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Best time to book?</summary>
                <p className="mt-4 text-blue-200/80">Early for Minipris and Flåmsbana seats.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Which side has the best views?</summary>
                <p className="mt-4 text-blue-200/80">Left side ascending Flåmsbana.</p>
              </details>
            </div>
          </section>

          {/* Booking CTAs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Book Your Ticket</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="https://www.thetrainline.com/en-us/train-times/flam-to-bergen"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <Train className="w-6 h-6" />
                Check train times and book on Trainline
              </a>
              <a
                href="https://www.omio.com/trains/flam/bergen"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <CheckCircle className="w-6 h-6" />
                Compare options on Omio
              </a>
            </div>
          </section>

          {/* Eurail/Interrail Pass Section */}
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
                <p>Eurail/Interrail valid on mainline Myrdal–Bergen; Flåmsbana requires separate ticket/reservation.</p>
                <p>Reserve early in summer.</p>
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

          {/* Related Routes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Related Routes</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><a href="/bergen-to-flam" className="text-cyan-300 hover:text-cyan-400">Bergen to Flåm (reverse journey)</a></li>
              <li><a href="/flam-to-gudvangen" className="text-cyan-300 hover:text-cyan-400">Flåm to Gudvangen fjord cruise</a></li>
              <li><a href="/oslo-to-bergen" className="text-cyan-300 hover:text-cyan-400">Full Oslo to Bergen Bergen Line</a></li>
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
