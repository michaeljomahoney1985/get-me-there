import React from 'react';
import { Mountain, Train, CheckCircle, Star } from 'lucide-react';
import Head from 'next/head';

export default function AmsterdamToBerlin() {
  return (
    <>
      <Head>
        <title>Amsterdam to Berlin by Train: Time, Cost & Travel Guide (2026)</title>
        <meta
          name="description"
          content="Book Amsterdam to Berlin train tickets from €38 with Deutsche Bahn ICE or European Sleeper night train. Discover 2026 schedules, cheap fares, direct routes, tips, and why the train beats flying."
        />
        <meta property="og:title" content="Amsterdam to Berlin by Train: Time, Cost & Travel Guide (2026)" />
        <meta property="og:description" content="Direct ICE or night train from Amsterdam to Berlin in 6h20m – cheap tickets, schedules, tips & FAQs." />
        <meta property="og:url" content="https://www.get-me-there.com/amsterdam-to-berlin" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Amsterdam to Berlin by Train: Time, Cost & Travel Guide (2026)" />
        <meta name="twitter:description" content="Direct ICE or night train from Amsterdam to Berlin in 6h20m – cheap tickets, schedules, tips & FAQs." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "How long does the train from Amsterdam to Berlin take?", acceptedAnswer: { "@type": "Answer", text: "Daytime ICE takes 6 hours 20 minutes; European Sleeper night train around 10–12 hours." } },
              { "@type": "Question", name: "Do I need a passport for the Amsterdam to Berlin train?", acceptedAnswer: { "@type": "Answer", text: "No formal checks (Schengen), but carry ID for possible spot checks." } },
              { "@type": "Question", name: "Can I bring luggage or a bike?", acceptedAnswer: { "@type": "Answer", text: "Generous allowance on ICE; night train has limits. Bikes require reservation." } },
              { "@type": "Question", name: "When is the best time to book cheap tickets?", acceptedAnswer: { "@type": "Answer", text: "Book 3–6 months ahead for €38 fares." } },
              { "@type": "Question", name: "Which side has the best views?", acceptedAnswer: { "@type": "Answer", text: "Right side (facing forward) for more German countryside." } }
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
        {/* Background SVG, Header, Breadcrumb, H1, Intro – same as template */}

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
            The direct high-speed ICE or overnight European Sleeper connects Amsterdam Centraal to Berlin Hauptbahnhof, linking two vibrant capitals. Daytime journey offers speed and comfort, while the night train saves a hotel night—ideal for city-hoppers, culture lovers, or budget travelers exploring Central Europe.
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
                    <td className="py-4 px-4 font-semibold text-cyan-300">Train (ICE direct / night)</td>
                    <td className="py-4 px-4">6h20m / 10–12h</td>
                    <td className="py-4 px-4">€38–150+</td>
                    <td className="py-4 px-4">Everyone—comfort, city-center, no airport stress</td>
                  </tr>
                  <tr className="border-b border-blue-400/10">
                    <td className="py-4 px-4 font-semibold text-cyan-300">Bus (FlixBus)</td>
                    <td className="py-4 px-4">9–12h</td>
                    <td className="py-4 px-4">€25–60</td>
                    <td className="py-4 px-4">Budget; overnight options</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-cyan-300">Flight</td>
                    <td className="py-4 px-4">5–7h door-to-door</td>
                    <td className="py-4 px-4">€60–200</td>
                    <td className="py-4 px-4">Rarely—airports add time</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Schedule */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Amsterdam to Berlin Schedule</h2>
            <p className="text-blue-200/80 leading-relaxed">
              Multiple direct ICE trains daily (around 6–8) from Amsterdam Centraal to Berlin Hbf. Departures from ~6am to ~2pm. European Sleeper night train 3–4 times weekly.
            </p>
          </section>

          {/* Prices */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Ticket Prices & Discounts</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Advance tickets from €38 one-way. Sparpreis fares rise closer to travel. Night train seats from €49, sleepers from €89. Book early for best deals.
            </p>
          </section>

          {/* Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Travel Tips for First-Time Passengers</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-3">
              <li>No passport checks (Schengen).</li>
              <li>Reserve seats on ICE (recommended).</li>
              <li>Night train offers private compartments.</li>
              <li>Generous luggage on both services.</li>
            </ul>
          </section>

          {/* Journey Breakdown */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Train Journey Breakdown</h2>
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <p className="text-blue-200/80 leading-relaxed mb-6">
                Daytime ICE speeds through Dutch and German countryside. Night train departs evening, arrives morning with sleeping options.
              </p>
              <p className="text-blue-200/80 leading-relaxed">
                Wi-Fi, power sockets, restaurant car on ICE. Quiet zones available.
              </p>
            </div>
          </section>

          {/* Who Best For */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Who This Route Is Best For</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><strong>City-Hoppers:</strong> Direct link between two major capitals.</li>
              <li><strong>Night Train Fans:</strong> Save time and accommodation.</li>
              <li><strong>Families:</strong> Comfortable seating, luggage space.</li>
              <li><strong>Budget Travelers:</strong> Early fares under €40.</li>
            </ul>
          </section>

          {/* Scenic Advice */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Scenic & Seasonal Advice</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Flat Dutch polders and German forests. Spring tulips, autumn colors best. Summer green, winter atmospheric.
            </p>
            <p className="text-blue-200/80 leading-relaxed mb-8">
              Right side (facing forward) for more open countryside views.
            </p>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-8">FAQs About Amsterdam to Berlin Train</h2>
            <div className="space-y-6">
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">How long does the train from Amsterdam to Berlin take?</summary>
                <p className="mt-4 text-blue-200/80">Daytime ICE takes 6 hours 20 minutes; night train around 10–12 hours.</p>
              </details>
              {/* Other FAQs similar */}
            </div>
          </section>

          {/* Booking CTAs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Book Your Ticket</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a href="https://www.thetrainline.com/en-us/train-times/amsterdam-to-berlin" target="_blank" rel="nofollow noopener" className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg">
                <Train className="w-6 h-6" />
                Check train times and book on Trainline
              </a>
              <a href="https://www.omio.com/trains/amsterdam/berlin" target="_blank" rel="nofollow noopener" className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg">
                <CheckCircle className="w-6 h-6" />
                Compare train, bus & flight on Omio
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
                <p>Eurail (non-EU) or Interrail (EU residents) passes are valid on both ICE and European Sleeper with mandatory reservation.</p>
                <p className="font-semibold text-cyan-300">Reservation fee: €10–20 daytime / €20–100 night sleeper</p>
                <p>Book early—limited passholder seats.</p>
              </div>
              <div className="mt-8">
                <a href="https://www.eurail.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300">
                  Explore Eurail Passes <Star className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          {/* Related Routes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Related Routes</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><a href="/amsterdam-to-brussels" className="text-cyan-300 hover:text-cyan-400">Amsterdam to Brussels by train</a></li>
              <li><a href="/berlin-to-prague" className="text-cyan-300 hover:text-cyan-400">Berlin to Prague by train</a></li>
              <li><a href="/paris-to-berlin" className="text-cyan-300 hover:text-cyan-400">Paris to Berlin night train</a></li>
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
