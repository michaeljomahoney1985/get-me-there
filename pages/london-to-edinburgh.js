import React from 'react';
import { Mountain, Train, CheckCircle, Star } from 'lucide-react';
import Head from 'next/head';

export default function LondonToEdinburgh() {
  return (
    <>
      <Head>
        <title>London to Edinburgh by Train: Time, Cost & Travel Guide (2026)</title>
        <meta
          name="description"
          content="Book London to Edinburgh train tickets from £40 with LNER. Discover 2026 schedules, cheap fares, direct city-center travel tips, scenic East Coast route, and why the train beats flying."
        />
        {/* Open Graph / Social Tags */}
        <meta property="og:title" content="London to Edinburgh by Train: Time, Cost & Travel Guide (2026)" />
        <meta property="og:description" content="Direct LNER Azuma from London to Edinburgh in 4h20m – cheap tickets, schedules, tips & FAQs." />
        <meta property="og:image" content="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/3493/production/_101595431_eastcoast-nc-2.revamp.png.webp" />
        <meta property="og:url" content="https://www.get-me-there.com/london-to-edinburgh" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="London to Edinburgh by Train: Time, Cost & Travel Guide (2026)" />
        <meta name="twitter:description" content="Direct LNER Azuma from London to Edinburgh in 4h20m – cheap tickets, schedules, tips & FAQs." />
        <meta name="twitter:image" content="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/3493/production/_101595431_eastcoast-nc-2.revamp.png.webp" />

        {/* FAQ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does the train from London to Edinburgh take?",
                acceptedAnswer: { "@type": "Answer", text: "Direct LNER services take as little as 4 hours 20 minutes." }
              },
              {
                "@type": "Question",
                name: "Do I need ID for the London to Edinburgh train?",
                acceptedAnswer: { "@type": "Answer", text: "No passport or ID checks – domestic UK route." }
              },
              {
                "@type": "Question",
                name: "Can I bring luggage or a bike on LNER?",
                acceptedAnswer: { "@type": "Answer", text: "Generous allowance: 2 large bags + hand luggage (no weight limit). Bikes require reservation (free, limited spaces)." }
              },
              {
                "@type": "Question",
                name: "When is the best time to book cheap tickets?",
                acceptedAnswer: { "@type": "Answer", text: "Book 8–12 weeks ahead for £40–60 Advance fares. Off-peak and midweek cheapest." }
              },
              {
                "@type": "Question",
                name: "Which side of the train has the best views from London to Edinburgh?",
                acceptedAnswer: { "@type": "Answer", text: "Right side (facing forward) for dramatic North Sea coast views between Newcastle and Edinburgh." }
              }
            ]
          })}
        </script>

        {/* Breadcrumb Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.get-me-there.com/" },
              { "@type": "ListItem", position: 2, name: "UK", item: "https://www.get-me-there.com/uk" },
              { "@type": "ListItem", position: 3, name: "London to Edinburgh by Train", item: "https://www.get-me-there.com/london-to-edinburgh" }
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
            <a href="/uk" className="hover:text-cyan-300">UK</a>
            <span>→</span>
            <span className="text-blue-300">London to Edinburgh</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              London to Edinburgh by Train:
            </span>
            <br />
            <span className="text-blue-100">Time, Cost & Travel Guide (2026)</span>
          </h1>

          {/* Intro */}
          <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
            The classic East Coast Main Line route connects London King's Cross to Edinburgh Waverley in around 4½ hours on modern LNER Azuma trains. One of Britain's most scenic journeys with dramatic North Sea coast views, it's far more relaxing than flying—perfect for history buffs, festival-goers, or Highland adventures.
          </p>

          {/* Route Overview Image */}
          <figure className="mb-12">
            <img
              src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/3493/production/_101595431_eastcoast-nc-2.revamp.png.webp"
              alt="East Coast Main Line route map from London King's Cross to Edinburgh Waverley"
              className="w-full rounded-2xl object-cover shadow-2xl"
              loading="lazy"
            />
            <figcaption className="text-blue-300 text-sm mt-2 text-center">
              East Coast Main Line route to Edinburgh
            </figcaption>
          </figure>

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
                    <td className="py-4 px-4 font-semibold text-cyan-300">Train (LNER direct)</td>
                    <td className="py-4 px-4">4h 20min</td>
                    <td className="py-4 px-4">£40–150+</td>
                    <td className="py-4 px-4">Everyone—scenic, city-center, relaxing</td>
                  </tr>
                  <tr className="border-b border-blue-400/10">
                    <td className="py-4 px-4 font-semibold text-cyan-300">Bus (Megabus/National Express)</td>
                    <td className="py-4 px-4">8–10h</td>
                    <td className="py-4 px-4">£15–50</td>
                    <td className="py-4 px-4">Ultra-budget; overnight options</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-cyan-300">Flight</td>
                    <td className="py-4 px-4">4–6h door-to-door</td>
                    <td className="py-4 px-4">£50–200</td>
                    <td className="py-4 px-4">Rarely—airports far from centers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* LNER London to Edinburgh Schedule */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">LNER London to Edinburgh Schedule</h2>
            <p className="text-blue-200/80 leading-relaxed">
              Hourly direct departures from London King's Cross to Edinburgh Waverley. First trains ~5:30am, last ~7pm. Fastest ~4h20m, average 4h30m.
            </p>
          </section>

          {/* Ticket Prices & Discounts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Ticket Prices & Discounts</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Advance tickets from £40–80 one-way when booked early. Standard Anytime £150+. Railcards save 1/3. Book 8–12 weeks ahead for best deals.
            </p>
          </section>

          {/* Travel Tips for First-Time Passengers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Travel Tips for First-Time Passengers</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-3">
              <li>No ID checks – domestic UK travel.</li>
              <li>Reserve seats (free) for window views.</li>
              <li>First Class includes complimentary food/drinks on weekdays.</li>
              <li>Generous luggage – no weight limits.</li>
            </ul>
          </section>

          {/* Train Journey Breakdown */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Train Journey Breakdown</h2>
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <p className="text-blue-200/80 leading-relaxed mb-6">
                Modern LNER Azuma trains (up to 125mph) run the scenic East Coast route: past York Minster, Durham Cathedral, Newcastle, then dramatic North Sea coast to Edinburgh.
              </p>

              {/* Departure Station */}
              <figure className="mb-8">
                <img
                  src="https://www.networkrail.co.uk/wp-content/uploads/fly-images/122879/Kings-Cross-station-concourse-900x600-c.jpg"
                  alt="Iconic departure concourse at London King's Cross station"
                  className="w-full rounded-2xl object-cover shadow-2xl"
                  loading="lazy"
                />
                <figcaption className="text-blue-300 text-sm mt-2 text-center">King's Cross – famous departure</figcaption>
              </figure>

              {/* Interior Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <figure>
                  <img
                    src="https://callumelsdon.com/wp-content/uploads/2021/09/89019-dsc_2782.jpg"
                    alt="Comfortable LNER Azuma Standard class seating"
                    className="w-full rounded-2xl object-cover shadow-2xl"
                    loading="lazy"
                  />
                  <figcaption className="text-blue-300 text-sm mt-2 text-center">Standard class</figcaption>
                </figure>
                <figure>
                  <img
                    src="https://www.lner.co.uk/_next/image/?url=%2Fcontentassets%2Fmxack5k9p2sw%2F2HFvpXPQGMVdh4s1rExS6X%2F607c73683c637e61c020c54a1e4ec870%2Ffirst-class-news.jpg%3Fw%3D640%26h%3D427%26fm%3Djpg&w=3840&q=75"
                    alt="Spacious LNER Azuma First Class seating with complimentary service"
                    className="w-full rounded-2xl object-cover shadow-2xl"
                    loading="lazy"
                  />
                  <figcaption className="text-blue-300 text-sm mt-2 text-center">First Class</figcaption>
                </figure>
              </div>

              <p className="text-blue-200/80 leading-relaxed">
                Wi-Fi, power sockets, café bar. Quiet coach available.
              </p>
            </div>
          </section>

          {/* Who This Route Is Best For */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Who This Route Is Best For</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><strong>Scenic Seekers:</strong> One of UK's most beautiful rail journeys.</li>
              <li><strong>Festival-Goers:</strong> Direct to Edinburgh Fringe in August.</li>
              <li><strong>Families:</strong> Spacious, no airport hassles.</li>
              <li><strong>Business/Leisure:</strong> Productive time with First Class perks.</li>
            </ul>
          </section>

          {/* Scenic & Seasonal Advice */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Scenic & Seasonal Advice</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Stunning coastal section north of Newcastle with dramatic sea views. Spring/autumn best for clear skies; winter atmospheric, summer vibrant green.
            </p>
            <p className="text-blue-200/80 leading-relaxed mb-8">
              Sit on the right side (facing forward) for the best North Sea coast views.
            </p>
          </section>

          {/* Highlights Along the Way */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-8">Highlights Along the Way</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Famous Landmark – Left */}
              <figure>
                <img
                  src="https://cdn.britannica.com/24/94424-050-6302BA2E/Edinburgh-Castle-Scotland.jpg"
                  alt="Edinburgh Castle overlooking the city – iconic Scottish landmark"
                  className="w-full rounded-2xl object-cover shadow-2xl"
                  loading="lazy"
                />
                <figcaption className="text-blue-300 text-sm mt-2 text-center">Edinburgh Castle</figcaption>
              </figure>
              {/* Countryside – Right */}
              <figure>
                <img
                  src="https://scenicrailbritain.com/wp-content/uploads/2024/09/PAA19D1-scaled.jpg"
                  alt="Dramatic North Sea coast and countryside along the East Coast Main Line"
                  className="w-full rounded-2xl object-cover shadow-2xl"
                  loading="lazy"
                />
                <figcaption className="text-blue-300 text-sm mt-2 text-center">Scottish countryside</figcaption>
              </figure>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-8">FAQs About London to Edinburgh Train</h2>
            <div className="space-y-6">
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">How long does the train from London to Edinburgh take?</summary>
                <p className="mt-4 text-blue-200/80">As little as 4 hours 20 minutes on fastest LNER services.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Do I need ID?</summary>
                <p className="mt-4 text-blue-200/80">No – domestic UK route.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Can I bring luggage or a bike?</summary>
                <p className="mt-4 text-blue-200/80">2 large bags + hand luggage free. Bikes require free reservation.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Best time to book cheap fares?</summary>
                <p className="mt-4 text-blue-200/80">8–12 weeks ahead for £40–60 Advance tickets.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Which side has the best views?</summary>
                <p className="mt-4 text-blue-200/80">Right side for dramatic North Sea coast.</p>
              </details>
            </div>
          </section>

          {/* Booking CTAs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Book Your Ticket</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="https://www.thetrainline.com/en-us/train-times/london-to-edinburgh"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <Train className="w-6 h-6" />
                Check train times and book on Trainline
              </a>
              <a
                href="https://www.omio.com/trains/london/edinburgh"
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
                  <p className="text-cyan-300 text-sm">For wider UK trips</p>
                </div>
              </div>

              <div className="space-y-4 text-blue-200/80 leading-relaxed">
                <p>Britrail (non-UK) or Interrail (UK residents possible with restrictions) passes valid on LNER with seat reservation (free but required).</p>
                <p>Limited passholder seats—book early. Best for multi-trip UK itineraries.</p>
              </div>

              <div className="mt-8">
                <a
                  href="https://www.eurail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300"
                >
                  Explore Rail Passes
                  <Star className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          {/* Related Routes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Related Routes</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><a href="/london-to-glasgow" className="text-cyan-300 hover:text-cyan-400">London to Glasgow by train</a></li>
              <li><a href="/edinburgh-to-inverness" className="text-cyan-300 hover:text-cyan-400">Edinburgh to Inverness scenic route</a></li>
              <li><a href="/london-to-york" className="text-cyan-300 hover:text-cyan-400">London to York train</a></li>
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
