import React from 'react';
import { Mountain, Train, CheckCircle, Star } from 'lucide-react';
import Head from 'next/head';

export default function LondonToBrussels() {
  return (
    <>
      <Head>
        <title>London to Brussels by Train: Time, Cost & Travel Guide (2026)</title>
        <meta
          name="description"
          content="Book London to Brussels train tickets from £39 with Eurostar. Discover 2026 schedules, cheap fares, direct city-center travel tips, passport requirements, luggage rules, and why the train beats flying."
        />
        {/* Open Graph / Social Tags */}
        <meta property="og:title" content="London to Brussels by Train: Time, Cost & Travel Guide (2026)" />
        <meta property="og:description" content="Direct Eurostar from London to Brussels in 2h01m – cheap tickets, schedules, tips & FAQs." />
        <meta property="og:image" content="https://i.redd.it/ts1rrnhmr8be1.jpeg" />
        <meta property="og:url" content="https://www.get-me-there.com/london-to-brussels" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="London to Brussels by Train: Time, Cost & Travel Guide (2026)" />
        <meta name="twitter:description" content="Direct Eurostar from London to Brussels in 2h01m – cheap tickets, schedules, tips & FAQs." />
        <meta name="twitter:image" content="https://i.redd.it/ts1rrnhmr8be1.jpeg" />

        {/* FAQ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does the Eurostar train from London to Brussels take?",
                acceptedAnswer: { "@type": "Answer", text: "The direct Eurostar journey takes as little as 2 hours 1 minute." }
              },
              {
                "@type": "Question",
                name: "Do I need a passport for the London to Brussels train?",
                acceptedAnswer: { "@type": "Answer", text: "Yes – full passport checks and security at St Pancras (UK border before boarding)." }
              },
              {
                "@type": "Question",
                name: "Can I bring luggage or a bike on Eurostar?",
                acceptedAnswer: { "@type": "Answer", text: "Generous allowance: 2 large bags + hand luggage (no weight limit). Bikes must be boxed/bagged for this route; folding bikes OK in cover." }
              },
              {
                "@type": "Question",
                name: "When is the best time to book cheap Eurostar tickets?",
                acceptedAnswer: { "@type": "Answer", text: "Book 4–6 months ahead for £39 fares. Midweek and off-peak are cheapest." }
              },
              {
                "@type": "Question",
                name: "Which side of the train has the best views from London to Brussels?",
                acceptedAnswer: { "@type": "Answer", text: "Right side (facing forward) offers glimpses of Belgian countryside as you approach Brussels." }
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
              { "@type": "ListItem", position: 2, name: "Europe", item: "https://www.get-me-there.com/europe" },
              { "@type": "ListItem", position: 3, name: "London to Brussels by Train", item: "https://www.get-me-there.com/london-to-brussels" }
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
            <span className="text-blue-300">London to Brussels</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              London to Brussels by Train:
            </span>
            <br />
            <span className="text-blue-100">Time, Cost & Travel Guide (2026)</span>
          </h1>

          {/* Intro */}
          <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
            The high-speed Eurostar connects London to Brussels in just over 2 hours, travelling under the English Channel to the heart of Europe. City-center to city-center with full border checks at St Pancras, it's the fastest and most convenient way to reach the EU capital—ideal for business, chocolate lovers, or weekend escapes.
          </p>

          {/* Route Overview Image */}
          <figure className="mb-12">
            <img
              src="https://i.redd.it/ts1rrnhmr8be1.jpeg"
              alt="Eurostar high-speed rail route map from London St Pancras to Brussels Midi via the Channel Tunnel"
              className="w-full rounded-2xl object-cover shadow-2xl"
              loading="lazy"
            />
            <figcaption className="text-blue-300 text-sm mt-2 text-center">
              Eurostar route through the Channel Tunnel to Brussels
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
                    <td className="py-4 px-4 font-semibold text-cyan-300">Train (Eurostar direct)</td>
                    <td className="py-4 px-4">2h 01min</td>
                    <td className="py-4 px-4">£39–200+</td>
                    <td className="py-4 px-4">Everyone—fast, direct, city-center, no airport hassles</td>
                  </tr>
                  <tr className="border-b border-blue-400/10">
                    <td className="py-4 px-4 font-semibold text-cyan-300">Bus (FlixBus/BlaBlaCar)</td>
                    <td className="py-4 px-4">6–9h</td>
                    <td className="py-4 px-4">£20–50</td>
                    <td className="py-4 px-4">Extreme budget; overnight options</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-cyan-300">Flight</td>
                    <td className="py-4 px-4">4–6h door-to-door</td>
                    <td className="py-4 px-4">£40–150</td>
                    <td className="py-4 px-4">Rarely—security and transfers add time</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Eurostar London to Brussels Schedule */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Eurostar London to Brussels Schedule</h2>
            <p className="text-blue-200/80 leading-relaxed">
              Up to 10–12 direct departures daily from London St Pancras International to Brussels Midi/Zuid. First trains around 6am, last around 7–8pm. Fastest services take 2 hours 1 minute.
            </p>
          </section>

          {/* Ticket Prices & Discounts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Ticket Prices & Discounts</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Cheap Eurostar tickets from London to Brussels start at £39/€44 one-way when booked early. Standard £39–130, Premier £100–280+. Book ahead for best deals.
            </p>
          </section>

          {/* Travel Tips for First-Time Passengers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Travel Tips for First-Time Passengers</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-3">
              <li>Check-in closes 45–60 minutes before departure – arrive early for passport/security.</li>
              <li>Full UK/Belgian border controls at St Pancras.</li>
              <li>Business Premier gets lounge access and faster check-in.</li>
              <li>Generous luggage – no weight limits.</li>
            </ul>
          </section>

          {/* Train Journey Breakdown */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Train Journey Breakdown</h2>
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <p className="text-blue-200/80 leading-relaxed mb-6">
                Depart iconic St Pancras International, dive into the Channel Tunnel for ~35 minutes, emerge in France and speed through Belgium to Brussels Midi/Zuid. Onboard café, free Wi-Fi, power sockets.
              </p>

              {/* Departure Station */}
              <figure className="mb-8">
                <img
                  src="https://images.showmethejourney.com/f_jpg,q_90,w_930,c_fill/v1615565365/272e77ee_944d_4cae_9ce8_c7235c4d4425_3681d67fdf"
                  alt="Grand departure hall at London St Pancras International for Eurostar to Brussels"
                  className="w-full rounded-2xl object-cover shadow-2xl"
                  loading="lazy"
                />
                <figcaption className="text-blue-300 text-sm mt-2 text-center">St Pancras International – iconic departure</figcaption>
              </figure>

              {/* Interior Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <figure>
                  <img
                    src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2024/05/standard-cabin-2-1440x1080.jpg"
                    alt="Comfortable Eurostar Standard class seating on London to Brussels route"
                    className="w-full rounded-2xl object-cover shadow-2xl"
                    loading="lazy"
                  />
                  <figcaption className="text-blue-300 text-sm mt-2 text-center">Standard class</figcaption>
                </figure>
                <figure>
                  <img
                    src="https://www.seat61.com/images2/Eurostar-classes-premier22-large.jpg"
                    alt="Spacious Eurostar Standard Premier seating with meal service"
                    className="w-full rounded-2xl object-cover shadow-2xl"
                    loading="lazy"
                  />
                  <figcaption className="text-blue-300 text-sm mt-2 text-center">Standard Premier</figcaption>
                </figure>
              </div>

              <p className="text-blue-200/80 leading-relaxed">
                Platform assignments can change; arrive early. Luggage allowances are generous.
              </p>
            </div>
          </section>

          {/* Who This Route Is Best For */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Who This Route Is Best For</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><strong>Backpackers:</strong> Cheap early fares, central stations.</li>
              <li><strong>Business Travelers:</strong> Fast access to EU institutions, Wi-Fi and Premier lounge.</li>
              <li><strong>Families:</strong> Easy luggage, no airport stress.</li>
              <li><strong>Food/Beer Lovers:</strong> Quick hop to Belgian chocolate and breweries.</li>
            </ul>
          </section>

          {/* Scenic & Seasonal Advice */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Scenic & Seasonal Advice</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Views are limited—much tunnel and flat land—but Belgian countryside offers pleasant glimpses. Spring and autumn are ideal; winter brings Christmas markets, summer beer festivals.
            </p>
            <p className="text-blue-200/80 leading-relaxed mb-8">
              Sit on the right side (facing forward) for the best Belgian countryside views as you approach Brussels.
            </p>
          </section>

          {/* Highlights Along the Way – Fixed */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-8">Highlights Along the Way</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Famous Landmark – Left with caption */}
              <figure>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/26/Grand-Place%2C_Brussels_-_panorama%2C_June_2018.jpg"
                  alt="Grand Place, Brussels – UNESCO World Heritage site and iconic square"
                  className="w-full rounded-2xl object-cover shadow-2xl"
                  loading="lazy"
                />
                <figcaption className="text-blue-300 text-sm mt-2 text-center">Grand Place, Brussels</figcaption>
              </figure>
              {/* Countryside – Right with no caption */}
              <figure>
                <img
                  src="https://media.istockphoto.com/id/2194571010/photo/view-to-the-rural-landscape-in-wallonie-belgium.jpg?s=612x612&w=0&k=20&c=k_7tFQtqDPNEv3eeRrtPxCG-Zk1r4DMpe-KXqYCrlTw="
                  alt="Flat green fields and rural landscape in Belgium countryside"
                  className="w-full rounded-2xl object-cover shadow-2xl"
                  loading="lazy"
                />
              </figure>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-8">FAQs About London to Brussels Train</h2>
            <div className="space-y-6">
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">How long does the Eurostar train from London to Brussels take?</summary>
                <p className="mt-4 text-blue-200/80">As little as 2 hours 1 minute on the fastest services.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Do I need a passport?</summary>
                <p className="mt-4 text-blue-200/80">Yes – full checks at St Pancras (UK exit + Belgian entry).</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Can I bring luggage or a bike?</summary>
                <p className="mt-4 text-blue-200/80">2 large bags + hand luggage free. Bikes must be boxed/bagged; folding OK in cover.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Best time to book cheap fares?</summary>
                <p className="mt-4 text-blue-200/80">4–6 months ahead for £39 tickets.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Which side has the best views?</summary>
                <p className="mt-4 text-blue-200/80">Right side (facing forward) for Belgian countryside near Brussels.</p>
              </details>
            </div>
          </section>

          {/* Booking CTAs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Book Your Ticket</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="https://www.thetrainline.com/en-us/train-times/london-to-brussels"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <Train className="w-6 h-6" />
                Check train times and book on Trainline
              </a>
              <a
                href="https://www.omio.com/trains/london/brussels"
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
                  <p className="text-cyan-300 text-sm">For wider UK/Europe trips</p>
                </div>
              </div>

              <div className="space-y-4 text-blue-200/80 leading-relaxed">
                <p>Eurail (non-EU) or Interrail (EU residents) passes are valid on Eurostar with a mandatory seat reservation.</p>
                <p className="font-semibold text-cyan-300">Reservation fee: £26–35 Standard / £38–48 Premier (2026)</p>
                <p>Limited seats for passholders—book early via Eurostar or rail.cc. Worth it only for multi-country itineraries including the UK.</p>
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
              <li><a href="/london-to-paris" className="text-cyan-300 hover:text-cyan-400">Train from London to Paris</a></li>
              <li><a href="/paris-to-amsterdam" className="text-cyan-300 hover:text-cyan-400">Paris to Amsterdam by train</a></li>
              <li><a href="/brussels-to-amsterdam" className="text-cyan-300 hover:text-cyan-400">Brussels to Amsterdam train route</a></li>
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
