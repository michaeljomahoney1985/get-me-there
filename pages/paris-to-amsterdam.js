import React from 'react';
import { Mountain, Train, CheckCircle, Star } from 'lucide-react';
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
        <meta property="og:title" content="Paris to Amsterdam by Train: Time, Cost & Travel Guide (2026)" />
        <meta property="og:description" content="Direct Eurostar from Paris to Amsterdam in 3h20m – cheap tickets, schedules, tips & FAQs." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1519671482749-fd9c4aea589a?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:url" content="https://www.get-me-there.com/paris-to-amsterdam" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paris to Amsterdam by Train: Time, Cost & Travel Guide (2026)" />
        <meta name="twitter:description" content="Direct Eurostar from Paris to Amsterdam in 3h20m – cheap tickets, schedules, tips & FAQs." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1519671482749-fd9c4aea589a?auto=format&fit=crop&w=1200&q=80" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "How long does the Eurostar train from Paris to Amsterdam take?", acceptedAnswer: { "@type": "Answer", text: "The direct Eurostar journey takes exactly 3 hours 20 minutes." } },
              { "@type": "Question", name: "Do I need a passport or ID for the Paris to Amsterdam train?", acceptedAnswer: { "@type": "Answer", text: "No passport control – both countries are in Schengen. Bring ID for possible spot checks." } },
              { "@type": "Question", name: "Can I bring luggage or a bike on Eurostar?", acceptedAnswer: { "@type": "Answer", text: "Generous allowance: 2 large bags + hand luggage (no weight limit). Folding bikes OK if under 85cm; full bikes currently not allowed on this route." } },
              { "@type": "Question", name: "When is the best time to book cheap Eurostar tickets?", acceptedAnswer: { "@type": "Answer", text: "Book 4–6 months ahead for €35 fares. Midweek and off-peak are cheapest." } },
              { "@type": "Question", name: "Which side of the train has the best views from Paris to Amsterdam?", acceptedAnswer: { "@type": "Answer", text: "Sit on the right side (facing forward) for the best Dutch countryside, canals, and windmills as you approach Amsterdam." } }
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
            <path d="M0,400 L0,180 L200,140 L350,200 L500,80 L650,160 L800,100 L950,180 L1200,120 L1200,400 Z" fill="url(#train-gradient)" className="animate-pulse" style={{ animationDuration: '8s' }} />
          </svg>
        </div>

        {/* Header */}
        <header className="relative border-b border-blue-400/20 backdrop-blur-sm bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center gap-3 group">
                <Mountain className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-all" />
                <div>
                  <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Get Me There</h1>
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
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">Paris to Amsterdam by Train:</span>
            <br />
            <span className="text-blue-100">Time, Cost & Travel Guide (2026)</span>
          </h1>

          {/* Intro */}
          <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
            Connecting two of Europe's most iconic capitals, the high-speed Eurostar route from Paris to Amsterdam offers a seamless, city-center-to-city-center journey. In just over three hours, you'll glide from the elegant boulevards of Paris to the picturesque canals of Amsterdam without airport hassles. Direct trains make it perfect for culture seekers, business travelers, or weekend explorers, providing a comfortable and efficient way to experience Europe.
          </p>

          {/* Route Overview Image */}
          <figure className="mb-12">
            <img src="https://images.unsplash.com/photo-1519671482749-fd9c4aea589a?auto=format&fit=crop&w=1200&q=80" alt="Rail route map from Paris to Amsterdam" className="w-full rounded-2xl object-cover shadow-2xl" loading="lazy" />
            <figcaption className="text-blue-300 text-sm mt-2 text-center">High-speed rail route from Paris to Amsterdam</figcaption>
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

          {/* Eurostar Paris to Amsterdam Schedule */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Eurostar Paris to Amsterdam Schedule</h2>
            <p className="text-blue-200/80 leading-relaxed">
              Eurostar runs 10–15 direct trains daily from Paris Gare du Nord to Amsterdam Centraal. First departure around 6–7am, last around 8–9pm. Journey time is consistently 3 hours 20 minutes – perfect city-center to city-center train travel without changes.
            </p>
          </section>

          {/* Ticket Prices & Discounts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Ticket Prices & Discounts</h2>
            <p className="text-blue-200/80 leading-relaxed mb-6">
              Cheap train tickets from Paris to Amsterdam start at €35 one-way when booked early (4–6 months ahead). Standard fares range €35–130, Premier €90–220+. Last-minute can hit €200+. Look for flash sales and midweek/off-peak for the best deals on Eurostar tickets.
            </p>
          </section>

          {/* Travel Tips for First-Time Passengers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Travel Tips for First-Time Passengers</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li>Arrive 20–30 minutes early – no heavy security like UK routes.</li>
              <li>No passport control (Schengen zone), but carry ID.</li>
              <li>Free Wi-Fi and power sockets onboard.</li>
              <li>Generous luggage – great for shopping trips!</li>
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
                  <img src="https://images.unsplash.com/photo-1589985785297-2f9d4b2eb6d0?auto=format&fit=crop&w=1200&q=80" alt="Eurostar Standard class interior" className="w-full rounded-2xl object-cover shadow-2xl" loading="lazy" />
                  <figcaption className="text-blue-300 text-sm mt-2 text-center">Standard class</figcaption>
                </figure>
                <figure>
                  <img src="https://images.unsplash.com/photo-1603987241969-32e3d7d3b4f2?auto=format&fit=crop&w=1200&q=80" alt="Eurostar Premier class interior" className="w-full rounded-2xl object-cover shadow-2xl" loading="lazy" />
                  <figcaption className="text-blue-300 text-sm mt-2 text-center">Premier class</figcaption>
                </figure>
              </div>

              <p className="text-blue-200/80 leading-relaxed">
                Platform assignments can change; arrive 15–30 minutes early. Luggage allowances are generous, making it easy for travelers with bikes or sports gear.
              </p>
            </div>
          </section>

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
              The route offers picturesque glimpses of rolling Dutch fields, canals, and windmills – especially beautiful in spring with blooming tulips.
            </p>
            <p className="text-blue-200/80 leading-relaxed mb-8">
              Sit on the right side (facing forward) for the best views as you approach Amsterdam.
            </p>
          </section>

          {/* Highlights Along the Way */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-8">Highlights Along the Way</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <figure>
                <img src="https://images.unsplash.com/photo-1517736996303-4e4f7e9c8d5e?auto=format&fit=crop&w=1200&q=80" alt="Iconic Amsterdam canals" className="w-full rounded-2xl object-cover shadow-2xl" loading="lazy" />
                <figcaption className="text-blue-300 text-sm mt-2 text-center">Amsterdam canals</figcaption>
              </figure>
              <figure>
                <img src="https://images.unsplash.com/photo-1587560699531-2d6a0f0d6a4d?auto=format&fit=crop&w=1200&q=80" alt="Dutch countryside with windmills" className="w-full rounded-2xl object-cover shadow-2xl" loading="lazy" />
                <figcaption className="text-blue-300 text-sm mt-2 text-center">Dutch countryside</figcaption>
              </figure>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-8">FAQs About Paris to Amsterdam Train</h2>
            <div className="space-y-6">
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">How long does the Eurostar train from Paris to Amsterdam take?</summary>
                <p className="mt-4 text-blue-200/80">The direct journey is exactly 3 hours 20 minutes – city center to city center.</p>
              </details>
              {/* Other FAQs... */}
            </div>
          </section>

          {/* Booking CTAs and rest unchanged */}
        </main>

        {/* Footer */}
      </div>
    </>
  );
}
