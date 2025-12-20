import React from 'react';
import { Mountain, Train, CheckCircle, Star, Clock } from 'lucide-react';
import Head from 'next/head';

export default function MunichToGeneva() {
  return (
    <>
      <Head>
        <title>Munich to Geneva by Train: Time, Cost & Travel Guide (2026)</title>
        <meta
          name="description"
          content="Book Munich to Geneva train tickets from €40 with direct or easy-change routes via Switzerland. Discover 2026 schedules, cheap fares, scenic Alpine journeys, tips, and why the train is the best way to connect Bavaria with lakeside Geneva."
        />
        <meta property="og:title" content="Munich to Geneva by Train: Time, Cost & Travel Guide (2026)" />
        <meta property="og:description" content="Direct or 1-change trains from Munich to Geneva in ~6–7h – stunning Alpine scenery through Austria and Switzerland." />
        <meta property="og:url" content="https://www.get-me-there.com/munich-to-geneva" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Munich to Geneva by Train: Time, Cost & Travel Guide (2026)" />
        <meta name="twitter:description" content="Direct or 1-change trains from Munich to Geneva in ~6–7h – stunning Alpine scenery through Austria and Switzerland." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does the train from Munich to Geneva take?",
                acceptedAnswer: { "@type": "Answer", text: "Direct EuroCity or easy 1-change routes take around 6–7 hours." }
              },
              {
                "@type": "Question",
                name: "Do I need a passport for the Munich to Geneva train?",
                acceptedAnswer: { "@type": "Answer", text: "No formal checks (Schengen), but carry ID for possible spot checks." }
              },
              {
                "@type": "Question",
                name: "Can I bring luggage or a bike?",
                acceptedAnswer: { "@type": "Answer", text: "Generous allowance on DB/ÖBB/SBB trains; bikes require reservation (€10–15)." }
              },
              {
                "@type": "Question",
                name: "When is the best time to book cheap tickets?",
                acceptedAnswer: { "@type": "Answer", text: "Book 3–6 months ahead for lowest fares from €40." }
              },
              {
                "@type": "Question",
                name: "Which side of the train has the best views from Munich to Geneva?",
                acceptedAnswer: { "@type": "Answer", text: "Right side (facing forward) for stunning Austrian and Swiss Alps." }
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
              { "@type": "ListItem", position: 3, name: "Munich to Geneva by Train", item: "https://www.get-me-there.com/munich-to-geneva" }
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
            <span className="text-blue-300">Munich to Geneva</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Munich to Geneva by Train:
            </span>
            <br />
            <span className="text-blue-100">Time, Cost & Travel Guide (2026)</span>
          </h1>

          <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
            A stunning Alpine rail journey connects Bavarian Munich with lakeside Geneva in 6–7 hours. Direct or easy-change routes through Austria and Switzerland offer breathtaking mountain views – perfect for nature lovers, business travellers to international Geneva, or combining Bavarian culture with Swiss precision.
          </p>

          <section className="mb-12">
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/60 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <div className="flex items-center gap-3 mb-6">
                <Train className="w-8 h-8 text-cyan-400" />
                <h2 className="text-2xl font-bold text-blue-100">Direct or 1-Change Routes</h2>
                <p className="text-cyan-300 text-sm">DB / ÖBB / SBB</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white">6–7h</p>
                  <p className="text-blue-300 text-sm">With 0–1 change</p>
                </div>
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-white">€40–150</p>
                  <p className="text-blue-300 text-sm">One-way (2026 advance fares)</p>
                </div>
                <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-white">Multiple daily</p>
                  <p className="text-blue-300 text-sm">From München Hbf</p>
                </div>
              </div>

              <p className="text-blue-200/90 leading-relaxed mb-6">
                Comfortable connections via Salzburg and Zürich or direct EuroCity options – one of Europe's most scenic cross-border routes.
              </p>

              <div className="bg-slate-800/60 rounded-2xl p-6">
                <p className="text-cyan-300 font-semibold mb-3 flex items-center gap-2">
                  <span className="text-yellow-400">💡</span> Tips:
                </p>
                <ul className="text-blue-200/90 space-y-2 text-sm">
                  <li>Right side (from Munich) for the best Alpine views through Austria and Switzerland</li>
                  <li>Seat reservation recommended (€5–15)</li>
                  <li>Onboard bistro/café on most trains</li>
                  <li>Book early for lowest fares</li>
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
                    <td className="py-4 px-4 font-semibold text-cyan-300">Train (DB/ÖBB/SBB)</td>
                    <td className="py-4 px-4">6–7h</td>
                    <td className="py-4 px-4">€40–150+</td>
                    <td className="py-4 px-4">Scenery, comfort, city-center</td>
                  </tr>
                  <tr className="border-b border-blue-400/10">
                    <td className="py-4 px-4 font-semibold text-cyan-300">Bus (FlixBus)</td>
                    <td className="py-4 px-4">8–10h</td>
                    <td className="py-4 px-4">€30–60</td>
                    <td className="py-4 px-4">Budget travelers</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-cyan-300">Flight</td>
                    <td className="py-4 px-4">3–5h door-to-door</td>
                    <td className="py-4 px-4">€80–250</td>
                    <td className="py-4 px-4">Speed, but loses scenery</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Munich to Geneva Schedule</h2>
            <p className="text-blue-200/80 leading-relaxed">
              Multiple daily connections with 0–1 change (usually via Zürich or Salzburg). Journey time 6–7 hours.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Ticket Prices & Discounts</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Advance tickets from €40–60 when booked early. Standard fares €100–150. Book 3–6 months ahead for lowest prices.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Travel Tips for First-Time Passengers</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-3">
              <li>No passport checks (Schengen).</li>
              <li>Seat reservation recommended (€5–15).</li>
              <li>Change in Zürich is easy and well-signposted.</li>
              <li>Generous luggage allowance.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Train Journey Breakdown</h2>
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <p className="text-blue-200/80 leading-relaxed mb-6">
                Trains head west through Austrian Alps and into Switzerland with spectacular mountain and lake views.
              </p>
              <p className="text-blue-200/80 leading-relaxed">
                Onboard bistro/café, Wi-Fi, power sockets. Quiet zones available.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Who This Route Is Best For</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><strong>Alpine Lovers:</strong> Stunning mountain scenery.</li>
              <li><strong>International Travellers:</strong> Easy access to Geneva's UN and lake.</li>
              <li><strong>Culture Mix:</strong> Bavarian to Swiss-French vibe.</li>
              <li><strong>Scenic Seekers:</strong> One of Europe's most beautiful rail routes.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Scenic & Seasonal Advice</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              One of the most beautiful Alpine routes in Europe. Summer green valleys, autumn colours, winter snow-capped peaks.
            </p>
            <p className="text-blue-200/80 leading-relaxed mb-8">
              Right side (facing forward) for the best mountain and lake views.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Book Your Ticket</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="https://www.thetrainline.com/en-us/train-times/munich-to-geneva"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-[#00A387] hover:bg-[#008f75] rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <Train className="w-6 h-6" />
                Check times and book on Trainline
              </a>
              <a
                href="https://www.omio.com/trains/munich/geneva"
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
                <p>Eurail (non-EU) or Interrail (EU residents) passes are valid on DB, ÖBB and SBB trains with seat reservation recommended (€5–15).</p>
                <p>Scenic route – book early in peak season.</p>
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
            <h2 className="text-3xl font-bold text-blue-100 mb-8">FAQs About Munich to Geneva Train</h2>
            <div className="space-y-6">
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">How long does the train from Munich to Geneva take?</summary>
                <p className="mt-4 text-blue-200/80">Around 6–7 hours with 0–1 change.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Do I need a passport?</summary>
                <p className="mt-4 text-blue-200/80">No – Schengen route.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Can I bring luggage or a bike?</summary>
                <p className="mt-4 text-blue-200/80">Generous allowance. Bikes require €10–15 reservation.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Best time to book cheap fares?</summary>
                <p className="mt-4 text-blue-200/80">3–6 months ahead for €40+ tickets.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Which side has the best views?</summary>
                <p className="mt-4 text-blue-200/80">Right side for stunning Alps.</p>
              </details>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Need a hotel in Geneva?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="https://www.booking.com/city/ch/geneva.html"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-[#003580] hover:bg-[#002a60] rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                Find hotels on Booking.com
              </a>
              <a
                href="https://www.hotels.com/de39255/hotels-geneva-switzerland/"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-[#E31C3D] hover:bg-[#c41734] rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                Find hotels on Hotels.com
              </a>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Related Routes</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><a href="/geneva-to-munich" className="text-cyan-300 hover:text-cyan-400">Geneva to Munich (reverse)</a></li>
              <li><a href="/munich-to-zurich" className="text-cyan-300 hover:text-cyan-400">Munich to Zurich train</a></li>
              <li><a href="/zurich-to-geneva" className="text-cyan-300 hover:text-cyan-400">Zurich to Geneva train</a></li>
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
