import React from 'react';
import { Mountain, Train, CheckCircle, Star, Clock } from 'lucide-react';
import Head from 'next/head';

export default function StockholmToOslo() {
  return (
    <>
      <Head>
        <title>Stockholm to Oslo by Train: Time, Cost & Travel Guide (2026)</title>
        <meta
          name="description"
          content="Book Stockholm to Oslo train tickets from €25 with SJ or Vy. Discover 2026 schedules, cheap fares, direct routes through Swedish and Norwegian countryside, tips, and why the train beats flying on this scenic Nordic link."
        />
        <meta property="og:title" content="Stockholm to Oslo by Train: Time, Cost & Travel Guide (2026)" />
        <meta property="og:description" content="Direct SJ/Vy from Stockholm to Oslo in ~5h30m – cheap tickets, schedules, tips & FAQs." />
        <meta property="og:url" content="https://www.get-me-there.com/stockholm-to-oslo" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stockholm to Oslo by Train: Time, Cost & Travel Guide (2026)" />
        <meta name="twitter:description" content="Direct SJ/Vy from Stockholm to Oslo in ~5h30m – cheap tickets, schedules, tips & FAQs." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does the train from Stockholm to Oslo take?",
                acceptedAnswer: { "@type": "Answer", text: "Direct trains take around 5 hours 30 minutes on most services." }
              },
              {
                "@type": "Question",
                name: "Do I need a passport for the Stockholm to Oslo train?",
                acceptedAnswer: { "@type": "Answer", text: "No formal checks (Nordic agreement), but carry ID for possible spot checks." }
              },
              {
                "@type": "Question",
                name: "Can I bring luggage or a bike?",
                acceptedAnswer: { "@type": "Answer", text: "Generous allowance on SJ/Vy trains; bikes require reservation (€10–15)." }
              },
              {
                "@type": "Question",
                name: "When is the best time to book cheap tickets?",
                acceptedAnswer: { "@type": "Answer", text: "Book 3–6 months ahead for €25–40 fares." }
              },
              {
                "@type": "Question",
                name: "Which side of the train has the best views from Stockholm to Oslo?",
                acceptedAnswer: { "@type": "Answer", text: "Right side (facing forward) for lakes, forests, and glimpses of Norwegian fjord-like scenery." }
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
              { "@type": "ListItem", position: 3, name: "Stockholm to Oslo by Train", item: "https://www.get-me-there.com/stockholm-to-oslo" }
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
            <span className="text-blue-300">Stockholm to Oslo</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Stockholm to Oslo by Train:
            </span>
            <br />
            <span className="text-blue-100">Time, Cost & Travel Guide (2026)</span>
          </h1>

          {/* Intro */}
          <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
            The relaxed Nordic rail link connects elegant Stockholm with vibrant Oslo through beautiful Swedish and Norwegian forests and lakes. Operated jointly by SJ and Vy, this comfortable journey is perfect for fjord-bound adventures, design lovers, or exploring two Scandinavian capitals without the stress of flying.
          </p>

          {/* Route Highlights Card */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/60 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <div className="flex items-center gap-3 mb-6">
                <Train className="w-8 h-8 text-cyan-400" />
                <h2 className="text-2xl font-bold text-blue-100">Direct InterCity Train</h2>
                <p className="text-cyan-300 text-sm">SJ & Vy</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white">~5h30m</p>
                  <p className="text-blue-300 text-sm">Direct</p>
                </div>
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-white">€25–100</p>
                  <p className="text-blue-300 text-sm">One-way (2026 advance fares)</p>
                </div>
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-white">4–6 daily</p>
                  <p className="text-blue-300 text-sm">From Stockholm Central</p>
                </div>
              </div>

              <p className="text-blue-200/90 leading-relaxed mb-6">
                Comfortable direct trains jointly operated by SJ (Sweden) and Vy (Norway). Scenic route through forests, lakes, and rolling hills – a relaxing Nordic classic.
              </p>

              <div className="bg-slate-800/60 rounded-2xl p-6">
                <p className="text-cyan-300 font-semibold mb-3 flex items-center gap-2">
                  <span className="text-yellow-400">💡</span> Tips:
                </p>
                <ul className="text-blue-200/90 space-y-2 text-sm">
                  <li>Sit on the right side (from Stockholm) for best lake and forest views</li>
                  <li>Seat reservation recommended in summer (€5–10)</li>
                  <li>Onboard bistro serves Scandinavian treats</li>
                  <li>Book early for cheapest fares (limited availability)</li>
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
                    <td className="py-4 px-4 font-semibold text-cyan-300">Train (SJ/Vy direct)</td>
                    <td className="py-4 px-4">~5h30m</td>
                    <td className="py-4 px-4">€25–100+</td>
                    <td className="py-4 px-4">Everyone—scenic, comfortable, city-center</td>
                  </tr>
                  <tr className="border-b border-blue-400/10">
                    <td className="py-4 px-4 font-semibold text-cyan-300">Bus (FlixBus/Vy)</td>
                    <td className="py-4 px-4">7–9h</td>
                    <td className="py-4 px-4">€30–60</td>
                    <td className="py-4 px-4">Budget travelers</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-cyan-300">Flight</td>
                    <td className="py-4 px-4">3–5h door-to-door</td>
                    <td className="py-4 px-4">€50–150</td>
                    <td className="py-4 px-4">Speed, but airports add hassle</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Schedule */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Stockholm to Oslo Schedule</h2>
            <p className="text-blue-200/80 leading-relaxed">
              4–6 direct departures daily from Stockholm Central to Oslo Sentralstasjon. First trains ~6am, last ~5pm. Journey time consistently around 5h30m.
            </p>
          </section>

          {/* Ticket Prices & Discounts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Ticket Prices & Discounts</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Advance tickets from €25–40 when booked early. Standard fares €70–100. Book 3–6 months ahead for lowest prices on SJ.se or Vy.no.
            </p>
          </section>

          {/* Travel Tips for First-Time Passengers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Travel Tips for First-Time Passengers</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-3">
              <li>No passport checks (Nordic agreement).</li>
              <li>Seat reservation recommended in summer (€5–10).</li>
              <li>First Class offers more comfort and quiet.</li>
              <li>Generous luggage allowance.</li>
            </ul>
          </section>

          {/* Train Journey Breakdown */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Train Journey Breakdown</h2>
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <p className="text-blue-200/80 leading-relaxed mb-6">
                Comfortable trains wind through central Sweden and into Norway with views of dense forests, lakes, and rolling hills.
              </p>
              <p className="text-blue-200/80 leading-relaxed">
                Onboard bistro, Wi-Fi (variable), power sockets. Quiet zones available.
              </p>
            </div>
          </section>

          {/* Who This Route Is Best For */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Who This Route Is Best For</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><strong>Fjord-Bound Travelers:</strong> Easy gateway to Norwegian adventures.</li>
              <li><strong>Nature Lovers:</strong> Beautiful forest and lake scenery.</li>
              <li><strong>Design & Culture Fans:</strong> Two Scandinavian style capitals.</li>
              <li><strong>Relaxing Journeys:</strong> Comfortable alternative to flying.</li>
            </ul>
          </section>

          {/* Scenic & Seasonal Advice */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Scenic & Seasonal Advice</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Lovely route through Swedish and Norwegian nature. Summer green forests, autumn vibrant colours, winter possible snow.
            </p>
            <p className="text-blue-200/80 leading-relaxed mb-8">
              Right side (facing forward) for best lake and forest views.
            </p>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-8">FAQs About Stockholm to Oslo Train</h2>
            <div className="space-y-6">
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">How long does the train from Stockholm to Oslo take?</summary>
                <p className="mt-4 text-blue-200/80">Around 5 hours 30 minutes on direct services.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Do I need a passport?</summary>
                <p className="mt-4 text-blue-200/80">No – Nordic agreement route.</p>
              </details>
              <details className="bg-slate-800/10 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Can I bring luggage or a bike?</summary>
                <p className="mt-4 text-blue-200/80">Generous allowance. Bikes require €10–15 reservation.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Best time to book cheap fares?</summary>
                <p className="mt-4 text-blue-200/80">3–6 months ahead for €25–40 tickets.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Which side has the best views?</summary>
                <p className="mt-4 text-blue-200/80">Right side for lakes and forests.</p>
              </details>
            </div>
          </section>

          {/* Booking CTAs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Book Your Ticket</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="https://www.thetrainline.com/en-us/train-times/stockholm-to-oslo"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <Train className="w-6 h-6" />
                Check train times and book on Trainline
              </a>
              <a
                href="https://www.omio.com/trains/stockholm/oslo"
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
                <p>Eurail (non-EU) or Interrail (EU residents) passes are valid on SJ/Vy trains with mandatory seat reservation (€5–10).</p>
                <p>Limited passholder seats—book early via SJ/Vy or rail.cc.</p>
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
              <li><a href="/copenhagen-to-stockholm" className="text-cyan-300 hover:text-cyan-400">Copenhagen to Stockholm by train</a></li>
              <li><a href="/oslo-to-bergen" className="text-cyan-300 hover:text-cyan-400">Oslo to Bergen scenic route</a></li>
              <li><a href="/stockholm-to-gothenburg" className="text-cyan-300 hover:text-cyan-400">Stockholm to Gothenburg train</a></li>
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
