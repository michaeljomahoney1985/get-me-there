import React from 'react';
import { Mountain, Train, CheckCircle, Star } from 'lucide-react';
import Head from 'next/head';

export default function BerlinToMunich() {
  return (
    <>
      <Head>
        <title>Berlin to Munich by Train: Time, Cost & Travel Guide (2026)</title>
        <meta
          name="description"
          content="Book Berlin to Munich train tickets from €18 with Deutsche Bahn ICE. Discover 2026 schedules, cheap fares, direct high-speed routes, tips, and why the train beats flying on Germany's flagship route."
        />
        <meta property="og:title" content="Berlin to Munich by Train: Time, Cost & Travel Guide (2026)" />
        <meta property="og:description" content="Direct ICE from Berlin to Munich in ~4h – cheap tickets, schedules, tips & FAQs." />
        <meta property="og:url" content="https://www.get-me-there.com/berlin-to-munich" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Berlin to Munich by Train: Time, Cost & Travel Guide (2026)" />
        <meta name="twitter:description" content="Direct ICE from Berlin to Munich in ~4h – cheap tickets, schedules, tips & FAQs." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does the train from Berlin to Munich take?",
                acceptedAnswer: { "@type": "Answer", text: "Direct ICE high-speed trains take as little as 3 hours 55 minutes on the fastest services." }
              },
              {
                "@type": "Question",
                name: "Do I need ID for the Berlin to Munich train?",
                acceptedAnswer: { "@type": "Answer", text: "No passport or ID checks – domestic German route." }
              },
              {
                "@type": "Question",
                name: "Can I bring luggage or a bike on ICE?",
                acceptedAnswer: { "@type": "Answer", text: "Generous allowance: no weight limit, multiple racks. Bikes require reservation (€9)." }
              },
              {
                "@type": "Question",
                name: "When is the best time to book cheap tickets?",
                acceptedAnswer: { "@type": "Answer", text: "Book 3–6 months ahead for €18–30 Sparpreis fares. Off-peak and midweek cheapest." }
              },
              {
                "@type": "Question",
                name: "Which side of the train has the best views from Berlin to Munich?",
                acceptedAnswer: { "@type": "Answer", text: "Right side (facing forward) for more open countryside and glimpses of the Bavarian landscape approaching Munich." }
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
              { "@type": "ListItem", position: 3, name: "Berlin to Munich by Train", item: "https://www.get-me-there.com/berlin-to-munich" }
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
            <span className="text-blue-300">Berlin to Munich</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Berlin to Munich by Train:
            </span>
            <br />
            <span className="text-blue-100">Time, Cost & Travel Guide (2026)</span>
          </h1>

          {/* Intro */}
          <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
            Germany's flagship high-speed route connects the vibrant capital Berlin with Bavaria's lively heart Munich. Modern ICE trains reach speeds up to 300 km/h on the upgraded line, making this one of Europe's fastest domestic connections – perfect for Oktoberfest, business, or exploring contrasting German cultures.
          </p>

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
                    <td className="py-4 px-4 font-semibold text-cyan-300">Train (ICE direct)</td>
                    <td className="py-4 px-4">~4h</td>
                    <td className="py-4 px-4">€18–120+</td>
                    <td className="py-4 px-4">Everyone—fast, comfortable, city-center</td>
                  </tr>
                  <tr className="border-b border-blue-400/10">
                    <td className="py-4 px-4 font-semibold text-cyan-300">Bus (FlixBus)</td>
                    <td className="py-4 px-4">7–9h</td>
                    <td className="py-4 px-4">€20–50</td>
                    <td className="py-4 px-4">Budget; overnight options</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-cyan-300">Flight</td>
                    <td className="py-4 px-4">4–6h door-to-door</td>
                    <td className="py-4 px-4">€60–200</td>
                    <td className="py-4 px-4">Rarely—airports far from centers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Schedule */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Berlin to Munich Schedule</h2>
            <p className="text-blue-200/80 leading-relaxed">
              Frequent direct ICE departures (every 30–60 minutes) from Berlin Hbf to München Hbf. First trains ~4am, last ~10pm. Fastest services under 4 hours.
            </p>
          </section>

          {/* Ticket Prices & Discounts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Ticket Prices & Discounts</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Sparpreis advance tickets from €18–30 when booked early. Flexpreis anytime ~€100+. BahnCard 25/50 saves 25–50%. Book 3–6 months ahead for lowest fares.
            </p>
          </section>

          {/* Travel Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Travel Tips for First-Time Passengers</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-3">
              <li>No ID checks – domestic German travel.</li>
              <li>Seat reservation (€4–6) recommended on busy routes.</li>
              <li>First Class includes lounge access at major stations.</li>
              <li>Generous luggage – no weight limits.</li>
            </ul>
          </section>

          {/* Train Journey Breakdown */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Train Journey Breakdown</h2>
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <p className="text-blue-200/80 leading-relaxed mb-6">
                High-speed ICE trains reach 300 km/h on the upgraded Berlin–Munich line. Route passes through Saxony and Bavaria with views of forests and rolling hills.
              </p>
              <p className="text-blue-200/80 leading-relaxed">
                Onboard restaurant, Wi-Fi, power sockets. Quiet zones available.
              </p>
            </div>
          </section>

          {/* Who This Route Is Best For */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Who This Route Is Best For</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><strong>Oktoberfest Visitors:</strong> Direct to Munich beer halls.</li>
              <li><strong>Business Travelers:</strong> Fast connection between major hubs.</li>
              <li><strong>Culture Seekers:</strong> Contrast Berlin edge with Bavarian tradition.</li>
              <li><strong>Families:</strong> Comfortable, spacious trains.</li>
            </ul>
          </section>

          {/* Scenic & Seasonal Advice */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Scenic & Seasonal Advice</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Fast route with glimpses of German countryside. Autumn colours and spring green best; winter snow possible.
            </p>
            <p className="text-blue-200/80 leading-relaxed mb-8">
              Right side (facing forward) for more open views approaching Bavaria.
            </p>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-8">FAQs About Berlin to Munich Train</h2>
            <div className="space-y-6">
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">How long does the train from Berlin to Munich take?</summary>
                <p className="mt-4 text-blue-200/80">As little as 3 hours 55 minutes on the fastest ICE services.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Do I need ID?</summary>
                <p className="mt-4 text-blue-200/80">No – domestic German route.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Can I bring luggage or a bike?</summary>
                <p className="mt-4 text-blue-200/80">No weight limit. Bikes require €9 reservation.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Best time to book cheap fares?</summary>
                <p className="mt-4 text-blue-200/80">3–6 months ahead for €18–30 Sparpreis tickets.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Which side has the best views?</summary>
                <p className="mt-4 text-blue-200/80">Right side for Bavarian countryside near Munich.</p>
              </details>
            </div>
          </section>

          {/* Booking CTAs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Book Your Ticket</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="https://www.thetrainline.com/en-us/train-times/berlin-to-munich"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <Train className="w-6 h-6" />
                Check train times and book on Trainline
              </a>
              <a
                href="https://www.omio.com/trains/berlin/munich"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <CheckCircle className="w-6 h-6" />
                Compare train, bus & flight on Omio
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
                <p>Eurail (non-EU) or Interrail (EU residents) passes are valid on ICE with mandatory seat reservation (€4–6).</p>
                <p>Limited passholder seats—book early via DB or rail.cc.</p>
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
              <li><a href="/berlin-to-hamburg" className="text-cyan-300 hover:text-cyan-400">Berlin to Hamburg by train</a></li>
              <li><a href="/munich-to-vienna" className="text-cyan-300 hover:text-cyan-400">Munich to Vienna by train</a></li>
              <li><a href="/frankfurt-to-munich" className="text-cyan-300 hover:text-cyan-400">Frankfurt to Munich train</a></li>
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
