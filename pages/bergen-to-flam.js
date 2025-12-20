import React from 'react';
import { Mountain, Train, CheckCircle, Star, Clock } from 'lucide-react';
import Head from 'next/head';

export default function BergenToFlam() {
  return (
    <>
      <Head>
        <title>Bergen to Flåm by Train: Time, Cost & Travel Guide (2026)</title>
        <meta
          name="description"
          content="Book Bergen to Flåm train tickets from €50 return with Vy & Flåmsbana. Discover 2026 schedules, cheap fares, and why the Flåm Railway is one of the world's most spectacular scenic rail journeys."
        />
        <meta property="og:title" content="Bergen to Flåm by Train: Time, Cost & Travel Guide (2026)" />
        <meta property="og:description" content="Mainline + legendary Flåmsbana from Bergen to Flåm in ~5h – breathtaking fjord and mountain scenery." />
        <meta property="og:url" content="https://www.get-me-there.com/bergen-to-flam" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bergen to Flåm by Train: Time, Cost & Travel Guide (2026)" />
        <meta name="twitter:description" content="Mainline + legendary Flåmsbana from Bergen to Flåm in ~5h – breathtaking fjord and mountain scenery." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does the train from Bergen to Flåm take?",
                acceptedAnswer: { "@type": "Answer", text: "Around 5 hours total (Bergen–Myrdal ~4h + Flåmsbana ~1h). Most people do a return day trip." }
              },
              {
                "@type": "Question",
                name: "Do I need a passport for the Bergen to Flåm train?",
                acceptedAnswer: { "@type": "Answer", text: "No – domestic Norwegian route." }
              },
              {
                "@type": "Question",
                name: "Can I bring luggage or a bike?",
                acceptedAnswer: { "@type": "Answer", text: "Generous allowance on mainline; limited on Flåmsbana (bikes not allowed on tourist trains)." }
              },
              {
                "@type": "Question",
                name: "When is the best time to book cheap tickets?",
                acceptedAnswer: { "@type": "Answer", text: "Book early for combined tickets; Flåmsbana sells out in peak summer." }
              },
              {
                "@type": "Question",
                name: "Which side of the train has the best views on Flåmsbana?",
                acceptedAnswer: { "@type": "Answer", text: "Right side descending (left ascending) for the most dramatic waterfalls and valley views." }
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
              { "@type": "ListItem", position: 3, name: "Bergen to Flåm by Train", item: "https://www.get-me-there.com/bergen-to-flam" }
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
            <span className="text-blue-300">Bergen to Flåm</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Bergen to Flåm by Train:
            </span>
            <br />
            <span className="text-blue-100">Time, Cost & Travel Guide (2026)</span>
          </h1>

          {/* Intro */}
          <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
            The journey from Bergen to tiny Flåm combines the Bergen Line with the legendary Flåm Railway (Flåmsbana) – widely regarded as one of the most spectacular train rides on Earth. Descending 866 metres through 20 tunnels with views of waterfalls, sheer cliffs, and fjords, this is Norway's ultimate scenic rail experience and a bucket-list must-do.
          </p>

          {/* Route Highlights Card */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/60 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <div className="flex items-center gap-3 mb-6">
                <Train className="w-8 h-8 text-cyan-400" />
                <h2 className="text-2xl font-bold text-blue-100">Bergen Line + Flåmsbana</h2>
                <p className="text-cyan-300 text-sm">Vy & Flåm Railway</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white">~5h</p>
                  <p className="text-blue-300 text-sm">One-way (incl. connection)</p>
                </div>
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-white">€50–100</p>
                  <p className="text-blue-300 text-sm">Return day trip (2026)</p>
                </div>
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-white">Multiple daily</p>
                  <p className="text-blue-300 text-sm">From Bergen</p>
                </div>
              </div>

              <p className="text-blue-200/90 leading-relaxed mb-6">
                Mainline Bergen–Myrdal + world-famous Flåmsbana descent to fjord-level Flåm. 20 km of engineering marvel with 20 tunnels, steep gradients, and jaw-dropping views of waterfalls and valleys.
              </p>

              <div className="bg-slate-800/60 rounded-2xl p-6">
                <p className="text-cyan-300 font-semibold mb-3 flex items-center gap-2">
                  <span className="text-yellow-400">💡</span> Tips:
                </p>
                <ul className="text-blue-200/90 space-y-2 text-sm">
                  <li>Right side descending Flåmsbana (left ascending) for best waterfall/valley views</li>
                  <li>Train stops at Kjosfossen waterfall for photos</li>
                  <li>Most do a return day trip (stay longer for fjord cruise)</li>
                  <li>Book Flåmsbana in advance – sells out in summer</li>
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
                    <td className="py-4 px-4 font-semibold text-cyan-300">Train (Vy + Flåmsbana)</td>
                    <td className="py-4 px-4">~5h one-way</td>
                    <td className="py-4 px-4">€50–100 return</td>
                    <td className="py-4 px-4">Ultimate scenic experience</td>
                  </tr>
                  <tr className="border-b border-blue-400/10">
                    <td className="py-4 px-4 font-semibold text-cyan-300">Bus + Ferry</td>
                    <td className="py-4 px-4">6–8h</td>
                    <td className="py-4 px-4">€60–90</td>
                    <td className="py-4 px-4">Alternative views</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-cyan-300">Organised Tour</td>
                    <td className="py-4 px-4">Full day</td>
                    <td className="py-4 px-4">€150+</td>
                    <td className="py-4 px-4">Hassle-free with cruise</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Schedule */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Bergen to Flåm Schedule</h2>
            <p className="text-blue-200/80 leading-relaxed">
              Multiple connections daily: Bergen–Myrdal mainline (Vy) + timed transfer to Flåmsbana (up to 10 departures/day). Popular for return day trips from Bergen.
            </p>
          </section>

          {/* Ticket Prices & Discounts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Ticket Prices & Discounts</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Combined return tickets from €50–100. Flåmsbana portion ~€40 return. Book mainline early for Minipris; Flåmsbana sells out in peak season.
            </p>
          </section>

          {/* Travel Tips for First-Time Passengers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Travel Tips for First-Time Passengers</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-3">
              <li>No ID checks – domestic Norwegian route.</li>
              <li>Reserve Flåmsbana seat in advance (especially summer).</li>
              <li>Train stops at Kjosfossen waterfall for photos.</li>
              <li>Combine with fjord cruise for full Sognefjord experience.</li>
            </ul>
          </section>

          {/* Train Journey Breakdown */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Train Journey Breakdown</h2>
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <p className="text-blue-200/80 leading-relaxed mb-6">
                Bergen–Myrdal on mainline, then the 20 km Flåmsbana descent: 866 m drop, 20 tunnels, 10 stations, views of thundering waterfalls and sheer valley walls.
              </p>
              <p className="text-blue-200/80 leading-relaxed">
                Onboard audio guide on Flåmsbana. Café on mainline trains.
              </p>
            </div>
          </section>

          {/* Who This Route Is Best For */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Who This Route Is Best For</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><strong>Scenic Hunters:</strong> One of the planet's most beautiful train rides.</li>
              <li><strong>Photographers:</strong> Waterfalls, tunnels, and fjord views.</li>
              <li><strong>Fjord Explorers:</strong> Gateway to Sognefjord cruises.</li>
              <li><strong>Day Trippers:</strong> Perfect return from Bergen.</li>
            </ul>
          </section>

          {/* Scenic & Seasonal Advice */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Scenic & Seasonal Advice</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Stunning year-round: summer green valleys, autumn colours, winter snow and frozen waterfalls. Clear days best for visibility.
            </p>
            <p className="text-blue-200/80 leading-relaxed mb-8">
              Right side descending Flåmsbana for the most dramatic views.
            </p>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-8">FAQs About Bergen to Flåm Train</h2>
            <div className="space-y-6">
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">How long does the train from Bergen to Flåm take?</summary>
                <p className="mt-4 text-blue-200/80">Around 5 hours total (Bergen–Myrdal + Flåmsbana). Return day trip possible.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Do I need ID?</summary>
                <p className="mt-4 text-blue-200/80">No – domestic Norwegian route.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Can I bring luggage or a bike?</summary>
                <p className="mt-4 text-blue-200/80">Mainline yes; Flåmsbana limited (no bikes on tourist trains).</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Best time to book?</summary>
                <p className="mt-4 text-blue-200/80">Early – Flåmsbana sells out in peak season.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Which side has the best views?</summary>
                <p className="mt-4 text-blue-200/80">Right side descending for waterfalls and valley.</p>
              </details>
            </div>
          </section>

          {/* Booking CTAs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Book Your Ticket</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="https://www.thetrainline.com/en-us/train-times/bergen-to-flam"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <Train className="w-6 h-6" />
                Check train times and book on Trainline
              </a>
              <a
                href="https://www.omio.com/trains/bergen/flam"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <CheckCircle className="w-6 h-6" />
                Compare train & tours on Omio
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
                <p>Eurail/Interrail valid on mainline Bergen–Myrdal; Flåmsbana requires separate ticket (no pass discount).</p>
                <p>Reserve Flåmsbana seat early in summer.</p>
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
              <li><a href="/oslo-to-bergen" className="text-cyan-300 hover:text-cyan-400">Oslo to Bergen full Bergen Line</a></li>
              <li><a href="/flam-to-gudvangen" className="text-cyan-300 hover:text-cyan-400">Flåm fjord cruise & bus</a></li>
              <li><a href="/bergen-to-oslo" className="text-cyan-300 hover:text-cyan-400">Return Bergen to Oslo</a></li>
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
