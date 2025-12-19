import React from 'react';
import { Mountain, Train, CheckCircle } from 'lucide-react';
import Head from 'next/head';

export default function ParisToAmsterdam() {
  return (
    <>
      <Head>
        <title>Paris to Amsterdam by Train: Time, Cost & Travel Guide (2026)</title>
        <meta
          name="description"
          content="Book Paris to Amsterdam train tickets from €35 with Eurostar. Discover 2026 schedules, cheap fares, direct city-center travel tips, luggage rules, and why the train beats flying."
        />
        {/* Open Graph / Social Tags */}
        <meta property="og:title" content="Paris to Amsterdam by Train: Time, Cost & Travel Guide (2026)" />
        <meta property="og:description" content="Direct Eurostar from Paris to Amsterdam in 3h20m – cheap tickets, schedules, tips & FAQs." />
        <meta property="og:image" content="https://www.amsterdamtips.com/news/wp-content/uploads/2023/03/amsterdam-paris-rail-map.jpg" />
        <meta property="og:url" content="https://www.get-me-there.com/paris-to-amsterdam" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paris to Amsterdam by Train: Time, Cost & Travel Guide (2026)" />
        <meta name="twitter:description" content="Direct Eurostar from Paris to Amsterdam in 3h20m – cheap tickets, schedules, tips & FAQs." />
        <meta name="twitter:image" content="https://www.amsterdamtips.com/news/wp-content/uploads/2023/03/amsterdam-paris-rail-map.jpg" />

        {/* FAQ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does the Eurostar train from Paris to Amsterdam take?",
                acceptedAnswer: { "@type": "Answer", text: "The direct Eurostar journey takes exactly 3 hours 20 minutes." }
              },
              {
                "@type": "Question",
                name: "Do I need a passport or ID for the Paris to Amsterdam train?",
                acceptedAnswer: { "@type": "Answer", text: "No passport control – both countries are in Schengen. Bring ID for possible spot checks." }
              },
              {
                "@type": "Question",
                name: "Can I bring luggage or a bike on Eurostar?",
                acceptedAnswer: { "@type": "Answer", text: "Generous allowance: 2 large bags + hand luggage (no weight limit). Folding bikes OK if under 85cm; full bikes currently not allowed on this route." }
              },
              {
                "@type": "Question",
                name: "When is the best time to book cheap Eurostar tickets?",
                acceptedAnswer: { "@type": "Answer", text: "Book 4–6 months ahead for €35 fares. Midweek and off-peak are cheapest." }
              },
              {
                "@type": "Question",
                name: "Which side of the train has the best views from Paris to Amsterdam?",
                acceptedAnswer: { "@type": "Answer", text: "Sit on the right side (facing forward) for the best Dutch countryside, canals, and windmills as you approach Amsterdam." }
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
              { "@type": "ListItem", position: 3, name: "Paris to Amsterdam by Train", item: "https://www.get-me-there.com/paris-to-amsterdam" }
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
            <span className="text-blue-300">Paris to Amsterdam</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Paris to Amsterdam by Train:
            </span>
            <br />
            <span className="text-blue-100">Time, Cost & Travel Guide (2026)</span>
          </h1>

          {/* Intro */}
          <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
            Connecting two of Europe's most iconic capitals, the high-speed Eurostar route from Paris to Amsterdam offers a seamless, city-center-to-city-center journey. In just over three hours, you'll glide from the elegant boulevards of Paris to the picturesque canals of Amsterdam without airport hassles. Direct trains make it perfect for culture seekers, business travelers, or weekend explorers, providing a comfortable and efficient way to experience Europe.
          </p>

          {/* Route Overview Image */}
          <figure className="mb-12">
            <img
              src="https://www.amsterdamtips.com/news/wp-content/uploads/2023/03/amsterdam-paris-rail-map.jpg"
              alt="Rail map showing the high-speed Eurostar route from Paris to Amsterdam through Belgium"
              className="w-full rounded-2xl object-cover shadow-2xl"
              loading="lazy"
            />
            <figcaption className="text-blue-300 text-sm mt-2 text-center">
              High-speed rail route from Paris to Amsterdam
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
                    <td className="py-4 px-4">3h 20min</td>
                    <td className="py-4 px-4">€35–200+</td>
                    <td className="py-4 px-4">Everyone—fast, direct, city-center arrivals, no security queues</td>
                  </tr>
                  <tr className="border-b border-blue-400/10">
                    <td className="py-4 px-4 font-semibold text-cyan-300">Bus (FlixBus/BlaBlaCar)</td>
                    <td className="py-4 px-4">6–8h</td>
                    <td className="py-4 px-4">€20–70</td>
                    <td className="py-4 px-4">Budget travelers; overnight saves accommodation</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-cyan-300">Flight</td>
                    <td className="py-4 px-4">4–6h door-to-door</td>
                    <td className="py-4 px-4">€50–200</td>
                    <td className="py-4 px-4">Rarely—airports add stress and time</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* New SEO Sections */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Eurostar Paris to Amsterdam Schedule</h2>
            <p className="text-blue-200/80 leading-relaxed">
              Eurostar runs 10–15 direct trains daily from Paris Gare du Nord to Amsterdam Centraal. Departures spread from early morning (~6am) to evening (~9pm). Journey time is consistently 3 hours 20 minutes – reliable city-center train travel with no changes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Ticket Prices & Discounts</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Cheap train tickets from Paris to Amsterdam start at €35 one-way when booked early. Standard fares €35–130, Premier €90–220+. Last-minute prices can exceed €200. Book 4–6 months ahead for the lowest Eurostar ticket prices.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Travel Tips for First-Time Passengers</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-3">
              <li>Arrive 20–30 minutes early – light security only.</li>
              <li>No passport control (Schengen zone), but carry ID.</li>
              <li>Free Wi-Fi and power sockets in all classes.</li>
              <li>Generous luggage allowance – ideal for weekend trips.</li>
            </ul>
          </section>

          {/* Train Journey Breakdown */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Train Journey Breakdown</h2>
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
              <p className="text-blue-200/80 leading-relaxed mb-6">
                Eurostar offers 10–15 direct departures daily from Paris Gare du Nord to Amsterdam Centraal. Standard, Standard Premier, and Business Premier seating are available, with onboard Wi-Fi and refreshments. Booking early can save up to 50% on tickets. Passengers benefit from city-center to city-center travel, avoiding airport security and long check-ins.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <figure>
                  <img
                    src="https://static.tildacdn.net/tild3432-3739-4239-a632-386262646562/winston-tjia-1YMEIbE.jpg"
                    alt="Spacious and comfortable Eurostar Standard seating interior on Paris to Amsterdam route"
                    className="w-full rounded-2xl object-cover shadow-2xl"
                    loading="lazy"
                  />
                  <figcaption className="text-blue-300 text-sm mt-2 text-center">Eurostar Standard class</figcaption>
                </figure>
                <figure>
                  <img
                    src="https://www.seat61.com/images2/Eurostar-classes-premier3-large.jpg"
                    alt="Luxurious Eurostar Standard Premier seating with meal service"
                    className="w-full rounded-2xl object-cover shadow-2xl"
                    loading="lazy"
                  />
                  <figcaption className="text-blue-300 text-sm mt-2 text-center">Eurostar Standard Premier</figcaption>
                </figure>
              </div>

              <p className="text-blue-200/80 leading-relaxed">
                Platform assignments can change; arrive 15–30 minutes early. Luggage allowances are generous, making it easy for travelers with bikes or sports gear.
              </p>
            </div>
          </section>

          {/* Arrival Station Image */}
          <figure className="mb-12">
            <img
              src="https://www.zja.nl/image/2025/2/10/001_eurostar_uk_terminal_zja_architects_and_engineers_superimpose_architecture.jpg%28mediaclass-schema-org-4x3.ff34a6db3ea054562f36403cfada8d9cd9076085%29.jpg"
              alt="Amsterdam Centraal station Eurostar platform and terminal"
              className="w-full rounded-2xl object-cover shadow-2xl"
              loading="lazy"
            />
            <figcaption className="text-blue-300 text-sm mt-2 text-center">
              Arrival at Amsterdam Centraal
            </figcaption>
          </figure>

          {/* Who This Route Is Best For */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Who This Route Is Best For</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><strong>Backpackers:</strong> Direct trains, easy hostel connections in Amsterdam.</li>
              <li><strong>Business Travelers:</strong> City-center arrivals, onboard Wi-Fi, comfortable work environment.</li>
              <li><strong>Families:</strong> Spacious seating, onboard snacks, luggage-friendly.</li>
              <li><strong>Adventure / Seasonal Travelers:</strong> Perfect for tulip season, canal-side explorations, or cycling trips.</li>
            </ul>
          </section>

          {/* Scenic & Seasonal Advice */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Scenic & Seasonal Advice</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              The route offers picturesque glimpses of rolling Dutch fields, canals, and windmills – especially beautiful in spring with blooming tulips. Sit on the right side heading to Amsterdam for the best views as you enter the Netherlands.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <figure>
                <img
                  src="https://cdn.adventure-life.com/67/73/0/r4tnvcw8/fullsize.jpg"
                  alt="Classic Dutch windmills and canals visible from the train route to Amsterdam"
                  className="w-full rounded-2xl object-cover shadow-2xl"
                  loading="lazy"
                />
                <figcaption className="text-blue-300 text-sm mt-2 text-center">Windmills and canals</figcaption>
              </figure>
              <figure>
                <img
                  src="https://www.getours.com/media/lh3im45g/tulips-and-windmills.jpg?width=1280&height=854&v=1da60f4545a1f10"
                  alt="Vibrant tulip fields in spring along the Netherlands countryside train views"
                  className="w-full rounded-2xl object-cover shadow-2xl"
                  loading="lazy"
                />
                <figcaption className="text-blue-300 text-sm mt-2 text-center">Spring tulip season highlights</figcaption>
              </figure>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-8">FAQs About Paris to Amsterdam Train</h2>
            <div className="space-y-6">
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">How long does the Eurostar train from Paris to Amsterdam take?</summary>
                <p className="mt-4 text-blue-200/80">The direct journey is exactly 3 hours 20 minutes – city center to city center.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Do I need a passport or ID?</summary>
                <p className="mt-4 text-blue-200/80">No formal passport control (Schengen), but bring ID for random checks.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Can I bring luggage or a bike?</summary>
                <p className="mt-4 text-blue-200/80">2 large bags + hand luggage (no weight limit). Folding bikes OK if under 85cm; full-size bikes not currently allowed on this route.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Best time to book cheap fares?</summary>
                <p className="mt-4 text-blue-200/80">4–6 months ahead for €35 tickets. Midweek/off-peak cheapest.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Which side has the best views?</summary>
                <p className="mt-4 text-blue-200/80">Right side (facing forward) for Dutch canals and windmills near Amsterdam.</p>
              </details>
            </div>
          </section>

          {/* Booking CTAs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Book Your Ticket</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="https://www.thetrainline.com/en-us/train-times/paris-to-amsterdam"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <Train className="w-6 h-6" />
                Check train times and book on Trainline
              </a>
              <a
                href="https://www.omio.com/trains/paris/amsterdam"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
              >
                <CheckCircle className="w-6 h-6" />
                Compare train, bus & flight on Omio
              </a>
            </div>
          </section>

          {/* Related Routes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Related Routes</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li><a href="/paris-to-brussels" className="text-cyan-300 hover:text-cyan-400">Train from Paris to Brussels</a></li>
              <li><a href="/amsterdam-to-berlin" className="text-cyan-300 hover:text-cyan-400">Amsterdam to Berlin by train</a></li>
              <li><a href="/paris-to-rotterdam" className="text-cyan-300 hover:text-cyan-400">Paris to Rotterdam train route</a></li>
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
