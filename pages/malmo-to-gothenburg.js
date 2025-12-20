import React from 'react';
import { Mountain, Train, CheckCircle, Star, Clock } from 'lucide-react';
import Head from 'next/head';

export default function MalmoToGothenburg() {
  return (
    <>
      <Head>
        <title>Malmö to Gothenburg by Train: Time, Cost & Travel Guide (2026)</title>
        <meta
          name="description"
          content="Book Malmö to Gothenburg train tickets from €15 with SJ X2000 or regional trains. Discover 2026 schedules, cheap fares, direct high-speed routes along Sweden's west coast, tips, and why the train is the best way to connect these vibrant cities."
        />
        <meta property="og:title" content="Malmö to Gothenburg by Train: Time, Cost & Travel Guide (2026)" />
        <meta property="og:description" content="Direct SJ X2000 from Malmö to Gothenburg in ~2h45m – cheap tickets, frequent departures, coastal views." />
        <meta property="og:url" content="https://www.get-me-there.com/malmo-to-gothenburg" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Malmö to Gothenburg by Train: Time, Cost & Travel Guide (2026)" />
        <meta name="twitter:description" content="Direct SJ X2000 from Malmö to Gothenburg in ~2h45m – cheap tickets, frequent departures, coastal views." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does the train from Malmö to Gothenburg take?",
                acceptedAnswer: { "@type": "Answer", text: "Direct SJ X2000 trains take around 2 hours 45 minutes; regional trains ~3h30m." }
              },
              {
                "@type": "Question",
                name: "Do I need ID for the Malmö to Gothenburg train?",
                acceptedAnswer: { "@type": "Answer", text: "No – domestic Swedish route." }
              },
              {
                "@type": "Question",
                name: "Can I bring luggage or a bike?",
                acceptedAnswer: { "@type": "Answer", text: "Generous allowance on SJ trains; bikes require reservation (€10–15)." }
              },
              {
                "@type": "Question",
                name: "When is the best time to book cheap tickets?",
                acceptedAnswer: { "@type": "Answer", text: "Book 3–6 months ahead for lowest fares from €15." }
              },
              {
                "@type": "Question",
                name: "Which side of the train has the best views from Malmö to Gothenburg?",
                acceptedAnswer: { "@type": "Answer", text: "Left side (facing forward) for occasional sea and coastal town views." }
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
              { "@type": "ListItem", position: 3, name: "Malmö to Gothenburg by Train", item: "https://www.get-me-there.com/malmo-to-gothenburg" }
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
            <span className="text-blue-300">Malmö to Gothenburg</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Malmö to Gothenburg by Train:
            </span>
            <br />
            <span className="text-blue-100">Time, Cost & Travel Guide (2026)</span>
          </h1>

          <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
            The fast west coast link connects modern Malmö with lively Gothenburg via high-speed SJ X2000 trains. This comfortable journey along Sweden's southern and western coast offers glimpses of sea, countryside, and charming towns – perfect for weekend getaways, business trips, or exploring Sweden's second and third largest cities without airport hassle.
          </p>

          <section className="mb-12">
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/60 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <div className="flex items-center gap-3 mb-6">
                <Train className="w-8 h-8 text-cyan-400" />
                <h2 className="text-2xl font-bold text-blue-100">Direct SJ X2000 Train</h2>
                <p className="text-cyan-300 text-sm">Swedish Railways</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white">~2h45m</p>
                  <p className="text-blue-300 text-sm">Direct (fastest)</p>
                </div>
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-white">€15–80</p>
                  <p className="text-blue-300 text-sm">One-way (2026 advance fares)</p>
                </div>
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-white">Hourly</p>
                  <p className="text-blue-300 text-sm">From Malmö C</p>
                </div>
              </div>

              <p className="text-blue-200/90 leading-relaxed mb-6">
                High-speed direct SJ X2000 trains on Sweden's busy west coast corridor. Reliable, comfortable, and frequent – ideal for quick city hops.
              </p>

              <div className="bg-slate-800/60 rounded-2xl p-6">
                <p className="text-cyan-300 font-semibold mb-3 flex items-center gap-2">
                  <span className="text-yellow-400">💡</span> Tips:
                </p>
                <ul className="text-blue-200/90 space-y-2 text-sm">
                  <li>Left side (from Malmö) for occasional sea and coastal views</li>
                  <li>Seat reservation included in ticket</li>
                  <li>Onboard bistro serves Swedish specialties</li>
                  <li>Book early for cheapest fares (limited availability)</li>
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
                    <td className="py-4 px-4 font-semibold text-cyan-300">Train (SJ X2000 direct)</td>
                    <td className="py-4 px-4">~2h45m</td>
                    <td className="py-4 px-4">€15–80+</td>
                    <td className="py-4 px-4">Everyone—fastest and most convenient</td>
                  </tr>
                  <tr className="border-b border-blue-400/10">
                    <td className="py-4 px-4 font-semibold text-cyan-300">Bus (FlixBus/Vy)</td>
                    <td className="py-4 px-4">4–5h</td>
                    <td className="py-4 px-4">€15–30</td>
                    <td className="py-4 px-4">Budget travelers</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-cyan-300">Flight</td>
                    <td className="py-4 px-4">3–5h door-to-door</td>
                    <td className="py-4 px-4">€60–150</td>
                    <td className="py-4 px-4">Rarely—airports add time</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Malmö to Gothenburg Schedule</h2>
            <p className="text-blue-200/80 leading-relaxed">
              Hourly direct SJ X2000 and regional departures from Malmö Central to Gothenburg Central. Fastest services under 3 hours.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Ticket Prices & Discounts</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Advance tickets from €15–30 when booked early. Standard fares €60–80. Book 3–6 months ahead for lowest prices.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Travel Tips for First-Time Passengers</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-3">
              <li>No ID checks – domestic Swedish route.</li>
              <li>Seat reservation included on X2000.</li>
              <li>First Class offers lounge access at stations.</li>
              <li>Generous luggage allowance.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Train Journey Breakdown</h2>
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <p className="text-blue-200/80 leading-relaxed mb-6">
                High-speed trains run north along Sweden's west coast with occasional sea views and passing through towns like Helsingborg and Halmstad.
              </p>
              <p className="text-blue-200/80 leading-relaxed">
                Onboard bistro, Wi-Fi, power sockets. Quiet zones available.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Who This Route Is Best For</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><strong>City Hoppers:</strong> Quick link between southern and western Sweden.</li>
              <li><strong>Weekend Escapers:</strong> Easy trip to Gothenburg's archipelago and nightlife.</li>
              <li><strong>Business Travelers:</strong> Fast connection with productive time onboard.</li>
              <li><strong>Families:</strong> Short, comfortable journey.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Scenic & Seasonal Advice</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Route offers occasional coastal glimpses and rural Swedish landscapes. Summer green fields, autumn colours nicest.
            </p>
            <p className="text-blue-200/80 leading-relaxed mb-8">
              Left side (facing forward) for sea views when available.
            </p>
          </section>

          {/* Booking CTAs – Trainline in green */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Book Your Ticket</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="https://www.thetrainline.com/en-us/train-times/malmo-to-gothenburg"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-[#00A387] hover:bg-[#008f75] rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <Train className="w-6 h-6" />
                Check times and book on Trainline
              </a>
              <a
                href="https://www.omio.com/trains/malmo/gothenburg"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <CheckCircle className="w-6 h-6" />
                Compare prices on Omio
              </a>
            </div>
          </section>

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
                <p>Eurail (non-EU) or Interrail (EU residents) passes are valid on SJ trains with mandatory seat reservation (€7–15).</p>
                <p>Limited passholder seats—book early.</p>
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

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-8">FAQs About Malmö to Gothenburg Train</h2>
            <div className="space-y-6">
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">How long does the train from Malmö to Gothenburg take?</summary>
                <p className="mt-4 text-blue-200/80">Around 2 hours 45 minutes on fastest SJ X2000 services.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Do I need ID?</summary>
                <p className="mt-4 text-blue-200/80">No – domestic Swedish route.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Can I bring luggage or a bike?</summary>
                <p className="mt-4 text-blue-200/80">Generous allowance. Bikes require €10–15 reservation.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Best time to book cheap fares?</summary>
                <p className="mt-4 text-blue-200/80">3–6 months ahead for €15–30 tickets.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Which side has the best views?</summary>
                <p className="mt-4 text-blue-200/80">Left side for occasional sea glimpses.</p>
              </details>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Related Routes</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><a href="/gothenburg-to-malmo" className="text-cyan-300 hover:text-cyan-400">Gothenburg to Malmö train</a></li>
              <li><a href="/copenhagen-to-malmo" className="text-cyan-300 hover:text-cyan-400">Copenhagen to Malmö quick hop</a></li>
              <li><a href="/gothenburg-to-stockholm" className="text-cyan-300 hover:text-cyan-400">Gothenburg to Stockholm train</a></li>
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
