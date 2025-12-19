import React from 'react';
import { Mountain, Train, CheckCircle, Star } from 'lucide-react';
import Head from 'next/head';

export default function LondonToParis() {
  return (
    <>
      <Head>
        <title>London to Paris by Train: Time, Cost & Travel Guide (2026)</title>
        <meta
          name="description"
          content="Book London to Paris train tickets from £39 with Eurostar. Discover 2026 schedules, cheap fares, direct city-center travel tips, passport requirements, luggage rules, and why the train beats flying."
        />
        {/* Open Graph / Social Tags */}
        <meta property="og:title" content="London to Paris by Train: Time, Cost & Travel Guide (2026)" />
        <meta property="og:description" content="Direct Eurostar from London to Paris in 2h16m – cheap tickets, schedules, tips & FAQs." />
        <meta property="og:image" content="https://i.redd.it/ts1rrnhmr8be1.jpeg" />
        <meta property="og:url" content="https://www.get-me-there.com/london-to-paris" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="London to Paris by Train: Time, Cost & Travel Guide (2026)" />
        <meta name="twitter:description" content="Direct Eurostar from London to Paris in 2h16m – cheap tickets, schedules, tips & FAQs." />
        <meta name="twitter:image" content="https://i.redd.it/ts1rrnhmr8be1.jpeg" />

        {/* FAQ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does the Eurostar train from London to Paris take?",
                acceptedAnswer: { "@type": "Answer", text: "The direct Eurostar journey takes as little as 2 hours 16 minutes." }
              },
              {
                "@type": "Question",
                name: "Do I need a passport for the London to Paris train?",
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
                name: "Which side of the train has the best views from London to Paris?",
                acceptedAnswer: { "@type": "Answer", text: "Right side (facing forward) offers glimpses of French countryside and Sacré-Cœur on arrival." }
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
              { "@type": "ListItem", position: 3, name: "London to Paris by Train", item: "https://www.get-me-there.com/london-to-paris" }
            ]
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
        {/* Background SVG, Header, Breadcrumb, H1, Intro, Route Map – unchanged */}

        {/* Quick Comparison Table – unchanged */}

        {/* Train Journey Breakdown (Eurostar main section) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-100 mb-6">Eurostar Direct Train</h2>
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            {/* Existing Eurostar content + images */}
            {/* ... (St Pancras, interiors, etc.) ... */}
          </div>
        </section>

        {/* Eurail/Interrail Pass Section – Added back consistently */}
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
              <a href="https://www.eurail.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300">
                Explore Eurail Passes
                <Star className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Rest of the page: Schedule, Prices, Tips, Who It's Best For, Scenic, FAQ, Booking CTAs (Trainline + Omio), Related Routes – all unchanged */}

        {/* Booking CTAs at bottom */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-100 mb-6">Book Your Ticket</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="https://www.thetrainline.com/en-us/train-times/london-to-paris"
              target="_blank"
              rel="nofollow noopener"
              className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
            >
              <Train className="w-6 h-6" />
              Check train times and book on Trainline
            </a>
            <a
              href="https://www.omio.com/trains/london/paris"
              target="_blank"
              rel="nofollow noopener"
              className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 text-lg"
            >
              <CheckCircle className="w-6 h-6" />
              Compare train, bus & flight on Omio
            </a>
          </div>
        </section>

        {/* ... Related Routes and Footer ... */}
      </div>
    </>
  );
}
