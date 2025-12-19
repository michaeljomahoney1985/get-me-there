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

        {/* FAQ Structured Data (JSON-LD) */}
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
        {/* ... [Your full header, background SVG, breadcrumb, H1, intro, route map image, Quick Comparison Table remain unchanged] ... */}

        {/* Eurostar Paris to Amsterdam Schedule (New H2) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-100 mb-6">Eurostar Paris to Amsterdam Schedule</h2>
          <p className="text-blue-200/80 leading-relaxed">
            Eurostar runs 10–15 direct trains daily from Paris Gare du Nord to Amsterdam Centraal. First departure around 6–7am, last around 8–9pm. Journey time is consistently 3 hours 20 minutes – perfect city-center to city-center train travel without changes.
          </p>
        </section>

        {/* Ticket Prices & Discounts (New H2) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-100 mb-6">Ticket Prices & Discounts</h2>
          <p className="text-blue-200/80 leading-relaxed mb-6">
            Cheap train tickets from Paris to Amsterdam start at €35 one-way when booked early (4–6 months ahead). Standard fares range €35–130, Premier €90–220+. Last-minute can hit €200+. Look for flash sales and midweek/off-peak for the best deals on Eurostar tickets.
          </p>
          {/* Optional image of prices/booking example */}
          <img src="https://cdn.prod.website-files.com/67ad96126d1c26f0583844c6/680dc1e8e59ad68818d488d0_E2E-booking-flow.jpg" alt="Eurostar ticket booking example showing cheap fares from Paris to Amsterdam" className="w-full rounded-2xl object-cover shadow-2xl mb-8" loading="lazy" />
        </section>

        {/* Travel Tips for First-Time Passengers (New H2) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-100 mb-6">Travel Tips for First-Time Passengers</h2>
          <ul className="list-disc list-inside text-blue-200/80 space-y-2">
            <li>Arrive 20–30 minutes early – no heavy security like UK routes.</li>
            <li>No passport control (Schengen zone), but carry ID.</li>
            <li>Free Wi-Fi and power sockets onboard.</li>
            <li>Generous luggage – great for shopping trips!</li>
          </ul>
        </section>

        {/* ... [Your existing Train Journey Breakdown, Arrival Image, Who It's Best For, Scenic Advice with images remain unchanged] ... */}

        {/* FAQs About Paris to Amsterdam Train (New Section at bottom) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-100 mb-8">FAQs About Paris to Amsterdam Train</h2>
          <div className="space-y-8">
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
              <img src="https://preview.redd.it/bikes-as-hand-luggage-on-the-eurostar-in-paris-v0-0wvdr39328ee1.jpeg?width=640&crop=smart&auto=webp&s=dccb18b24e0a7bfad6bff1f4ce45f6f3e151d646" alt="Folding bike as hand luggage on Eurostar" className="w-full rounded-xl mt-4" loading="lazy" />
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

        {/* Related Routes – keyword-rich anchors */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-100 mb-6">Related Routes</h2>
          <ul className="list-disc list-inside text-blue-200/80 space-y-2">
            <li><a href="/paris-to-brussels" className="text-cyan-300 hover:text-cyan-400">Train from Paris to Brussels</a></li>
            <li><a href="/amsterdam-to-berlin" className="text-cyan-300 hover:text-cyan-400">Amsterdam to Berlin by train</a></li>
            <li><a href="/paris-to-rotterdam" className="text-cyan-300 hover:text-cyan-400">Paris to Rotterdam train route</a></li>
          </ul>
        </section>

        {/* ... [Your Booking CTAs and Footer unchanged] ... */}
      </div>
    </>
  );
}
