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

        {/* Header with logo restored */}
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

          {/* Expanded, enticing heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Amsterdam to Berlin by Train:
            </span>
            <br />
            <span className="text-blue-100">
              Time, Cost & Travel Guide (2026) – Canals to Clubbing, Bikes to Brandenburg Gate
            </span>
          </h1>

          <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
            Swap Amsterdam's laid-back canals, world-class museums and coffee shops for Berlin's electric nightlife, street art, history-soaked landmarks and 24-hour party vibe — all in just 6 hours on a comfortable direct train. This iconic route connects two of Europe's most vibrant capitals with flat Dutch landscapes giving way to German forests. Perfect for weekend city breaks, history lovers, clubbers, or anyone chasing that unbeatable European freedom feeling.
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

          {/* Rest of sections: train details, comparison, schedule, prices, journey breakdown, who it's for, scenic advice, FAQs, lower booking buttons, Eurail, hotels */}

          {/* Highlights in Berlin – new section to entice */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Highlights in Berlin</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-3 text-lg">
              <li>Brandenburg Gate & Reichstag – iconic history right in the centre</li>
              <li>East Side Gallery – longest remaining stretch of the Berlin Wall covered in art</li>
              <li>World-class nightlife – Berghain, techno clubs, rooftop bars</li>
              <li>Museum Island (UNESCO) – five world-famous museums in one spot</li>
              <li>Street food heaven – currywurst, döner kebabs, food markets</li>
              <li>Tiergarten park – massive green space for cycling and chilling</li>
              <li>Alternative vibe in Kreuzberg & Friedrichshain – street art, cafes, vintage shops</li>
            </ul>
          </section>

          {/* Planning onward journeys? */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Planning onward journeys?</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-3 text-lg">
              <li><a href="/berlin-to-dresden" className="text-cyan-300 hover:text-cyan-400 underline">Berlin to Dresden by train (Elbe valley scenery)</a></li>
              <li><a href="/berlin-to-potsdam" className="text-cyan-300 hover:text-cyan-400 underline">Berlin to Potsdam day trip (palaces & gardens, no car needed)</a></li>
              <li><a href="/berlin-to-prague" className="text-cyan-300 hover:text-cyan-400 underline">Berlin to Prague by train</a></li>
            </ul>
          </section>

          {/* Need a flight somewhere? */}
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
