import React from 'react';
import { Mountain, Train, CheckCircle, Star, Clock } from 'lucide-react';
import Head from 'next/head';

export default function AmsterdamToBerlin() {
  return (
    <>
      <Head>
        <title>Amsterdam to Berlin by Train: Time, Cost & Travel Guide (2026)</title>
        <meta
          name="description"
          content="Book Amsterdam to Berlin train tickets from €20 with Deutsche Bahn ICE International. Discover 2026 schedules, cheap fares, direct high-speed route, tips, and why the train is the best way to connect two of Europe's coolest capitals."
        />
        <meta property="og:title" content="Amsterdam to Berlin by Train: Time, Cost & Travel Guide (2026)" />
        <meta property="og:description" content="Direct ICE from Amsterdam to Berlin in ~6h – cheap advance tickets, frequent departures, comfortable journey through Dutch and German countryside." />
        <meta property="og:url" content="https://www.get-me-there.com/amsterdam-to-berlin" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Amsterdam to Berlin by Train: Time, Cost & Travel Guide (2026)" />
        <meta name="twitter:description" content="Direct ICE from Amsterdam to Berlin in ~6h – cheap advance tickets, frequent departures, comfortable journey through Dutch and German countryside." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does the train from Amsterdam to Berlin take?",
                acceptedAnswer: { "@type": "Answer", text: "Direct ICE trains take around 6 hours." }
              },
              {
                "@type": "Question",
                name: "Do I need a passport for the Amsterdam to Berlin train?",
                acceptedAnswer: { "@type": "Answer", text: "No formal checks (Schengen), but carry ID for possible spot checks." }
              },
              {
                "@type": "Question",
                name: "Can I bring luggage or a bike?",
                acceptedAnswer: { "@type": "Answer", text: "Generous allowance; bikes require reservation (€10–15)." }
              },
              {
                "@type": "Question",
                name: "When is the best time to book cheap tickets?",
                acceptedAnswer: { "@type": "Answer", text: "Book 3–6 months ahead for Sparpreis fares from €20." }
              },
              {
                "@type": "Question",
                name: "Which side of the train has the best views from Amsterdam to Berlin?",
                acceptedAnswer: { "@type": "Answer", text: "Right side (facing forward) for more varied Dutch polders and German forests." }
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
              { "@type": "ListItem", position: 3, name: "Amsterdam to Berlin by Train", item: "https://www.get-me-there.com/amsterdam-to-berlin" }
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
            <span className="text-blue-300">Amsterdam to Berlin</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Amsterdam to Berlin by Train:
            </span>
            <br />
            <span className="text-blue-100">Time, Cost & Travel Guide (2026)</span>
          </h1>

          <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
            A comfortable high-speed connection links vibrant Amsterdam with dynamic Berlin in about 6 hours on direct ICE trains. This popular route through flat Dutch polders and German forests is ideal for city-hopping, nightlife, history, or simply enjoying two of Europe's most exciting capitals without the hassle of airports.
          </p>

          {/* Recommended Option high up with CTAs */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/60 backdrop-blur-xl rounded-3xl p-8 border border-cyan-400/40">
              <h2 className="text-3xl font-bold text-cyan-200 mb-6 flex items-center gap-3">
                <CheckCircle className="w-10 h-10 text-cyan-400" />
                Recommended: Direct ICE Train
              </h2>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                For almost everyone, the direct Deutsche Bahn ICE International is the best choice: comfortable, reliable, city-centre to city-centre, and often cheaper than flying when you factor in airport transfers. Book early for fares as low as €20.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <a
                  href="https://www.omio.com/"
                  target="_blank"
                  rel="nofollow noopener"
                  className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
                >
                  <CheckCircle className="w-8 h-8" />
                  Search on Omio
                </a>
                <a
                  href="https://www.thetrainline.com/"
                  target="_blank"
                  rel="nofollow noopener"
                  className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-[#00A387] hover:bg-[#008f75] rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
                >
                  <Train className="w-8 h-8" />
                  Search on Trainline
                </a>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/60 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <div className="flex items-center gap-3 mb-6">
                <Train className="w-8 h-8 text-cyan-400" />
                <h2 className="text-2xl font-bold text-blue-100">Direct ICE International Train</h2>
                <p className="text-cyan-300 text-sm">Deutsche Bahn</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white">~6h</p>
                  <p className="text-blue-300 text-sm">Direct</p>
                </div>
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-white">€20–100</p>
                  <p className="text-blue-300 text-sm">One-way (2026 advance fares)</p>
                </div>
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-white">6–8 daily</p>
                  <p className="text-blue-300 text-sm">From Amsterdam Centraal</p>
                </div>
              </div>

              <p className="text-blue-200/90 leading-relaxed mb-6">
                Modern high-speed ICE trains with restaurant car, Wi-Fi, and comfortable seating – the smart way between these two capitals.
              </p>

              <div className="bg-slate-800/60 rounded-2xl p-6">
                <p className="text-cyan-300 font-semibold mb-3 flex items-center gap-2">
                  <span className="text-yellow-400">💡</span> Tips:
                </p>
                <ul className="text-blue-200/90 space-y-2 text-sm">
                  <li>Right side (from Amsterdam) for varied Dutch and German landscapes</li>
                  <li>Seat reservation recommended (€5–10)</li>
                  <li>Onboard restaurant serves meals and drinks</li>
                  <li>Book early for Sparpreis advance fares</li>
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
                    <td className="py-4 px-4 font-semibold text-cyan-300">Train (ICE direct)</td>
                    <td className="py-4 px-4">~6h</td>
                    <td className="py-4 px-4">€20–100+</td>
                    <td className="py-4 px-4">Most people – comfort & convenience</td>
                  </tr>
                  <tr className="border-b border-blue-400/10">
                    <td className="py-4 px-4 font-semibold text-cyan-300">Bus (FlixBus)</td>
                    <td className="py-4 px-4">8–10h</td>
                    <td className="py-4 px-4">€20–50</td>
                    <td className="py-4 px-4">Budget travelers</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-cyan-300">Flight</td>
                    <td className="py-4 px-4">4–6h door-to-door</td>
                    <td className="py-4 px-4">€50–150</td>
                    <td className="py-4 px-4">Speed, but airports add hassle</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Amsterdam to Berlin Schedule</h2>
            <p className="text-blue-200/80 leading-relaxed">
              6–8 direct ICE departures daily from Amsterdam Centraal to Berlin Hbf. Journey time around 6 hours.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Ticket Prices & Discounts</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Sparpreis advance tickets from €20–40 when booked early. Standard fares €80–100. Book 3–6 months ahead for lowest prices.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Train Journey Breakdown</h2>
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <p className="text-blue-200/80 leading-relaxed mb-6">
                The train speeds through flat Dutch polders, crosses into Germany near Bad Bentheim, then passes forests, rivers, and small towns in Lower Saxony before arriving in Berlin.
              </p>
              <p className="text-blue-200/80 leading-relaxed">
                Onboard restaurant car, Wi-Fi, power sockets, quiet zones, and family areas. Comfortable reclining seats.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Who This Route Is Best For</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><strong>Scenic Seekers:</strong> Relaxing views of Dutch and German countryside.</li>
              <li><strong>Business Travelers:</strong> Productive time with Wi-Fi and restaurant car.</li>
              <li><strong>Families:</strong> Spacious, comfortable, no airport stress.</li>
              <li><strong>Backpackers:</strong> Affordable advance fares and city-centre arrival.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Scenic & Seasonal Advice</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Pleasant flat landscapes with canals, windmills (early part), forests, and rivers. Spring tulip fields (if timing right), summer green, autumn colours.
            </p>
            <p className="text-blue-200/80 leading-relaxed mb-8">
              Right side (facing forward) for slightly more varied views.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-8">FAQs About Amsterdam to Berlin Train</h2>
            <div className="space-y-6">
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">How long does the train from Amsterdam to Berlin take?</summary>
                <p className="mt-4 text-blue-200/80">Direct ICE trains take around 6 hours.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Do I need a passport?</summary>
                <p className="mt-4 text-blue-200/80">No formal checks (Schengen), but carry ID.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Can I bring luggage or a bike?</summary>
                <p className="mt-4 text-blue-200/80">Generous allowance; bikes require €10–15 reservation.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Best time to book cheap fares?</summary>
                <p className="mt-4 text-blue-200/80">3–6 months ahead for €20 Sparpreis tickets.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Which side has the best views?</summary>
                <p className="mt-4 text-blue-200/80">Right side for varied Dutch polders and German forests.</p>
              </details>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Book Your Ticket</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="https://www.omio.com/"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <CheckCircle className="w-6 h-6" />
                Search on Omio
              </a>
              <a
                href="https://www.thetrainline.com/"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-[#00A387] hover:bg-[#008f75] rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <Train className="w-6 h-6" />
                Search on Trainline
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
                <p>Eurail (non-EU) or Interrail (EU residents) passes are valid on DB ICE International with mandatory seat reservation (€10–15).</p>
                <p>Great route for pass holders – book reservations early.</p>
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
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Need a hotel in Berlin?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="https://www.booking.com/city/de/berlin.html"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-[#003580] hover:bg-[#002a60] rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                Find hotels on Booking.com
              </a>
              <a
                href="https://www.hotels.com/de171660/hotels-berlin-germany/"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-[#E31C3D] hover:bg-[#c41734] rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                Find hotels on Hotels.com
              </a>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Planning onward journeys?</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-3 text-lg">
              <li><a href="/berlin-to-dresden" className="text-cyan-300 hover:text-cyan-400 underline">Berlin to Dresden by train (Elbe valley scenery)</a></li>
              <li><a href="/berlin-to-potsdam" className="text-cyan-300 hover:text-cyan-400 underline">Berlin to Potsdam day trip (palaces & gardens, no car needed)</a></li>
              <li><a href="/berlin-to-prague" className="text-cyan-300 hover:text-cyan-400 underline">Berlin to Prague by train</a></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Need a flight somewhere?</h2>
            <p className="text-blue-200/80 mb-6">
              Search hundreds of airlines for your next destination or flight home.
            </p>
            <a
              href="https://www.skyscanner.net/"
              target="_blank"
              rel="nofollow noopener"
              className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-orange-600 hover:bg-orange-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
            >
              Search flights on Skyscanner
            </a>
          </section>

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
