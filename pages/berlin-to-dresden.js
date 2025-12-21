import React from 'react';
import { Mountain, Train, CheckCircle, Car, Star, Clock } from 'lucide-react';  // ← Clock added here
import Head from 'next/head';

export default function BerlinToDresden() {
  return (
    <>
      <Head>
        <title>Berlin to Dresden by Train: Quick Day Trip Guide (2026)</title>
        <meta
          name="description"
          content="Direct trains from Berlin to Dresden in ~2h from €15. Perfect day trip to see the stunning Elbe valley, Frauenkirche, and baroque old town."
        />
        <meta property="og:title" content="Berlin to Dresden by Train: Quick Day Trip Guide (2026)" />
        <meta property="og:description" content="Direct trains in ~2h – scenic Elbe valley route, cheap fares, easy day trip from Berlin." />
        <meta property="og:url" content="https://www.get-me-there.com/berlin-to-dresden" />
        <meta property="og:type" content="article" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.get-me-there.com/" },
              { "@type": "ListItem", position: 2, name: "Europe", item: "https://www.get-me-there.com/europe" },
              { "@type": "ListItem", position: 3, name: "Berlin to Dresden by Train", item: "https://www.get-me-there.com/berlin-to-dresden" }
            ]
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
        {/* Background and header same as before */}

        <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-3 text-cyan-400 text-sm mb-4">
            <a href="/" className="hover:text-cyan-300">Home</a>
            <span>→</span>
            <a href="/europe" className="hover:text-cyan-300">Europe</a>
            <span>→</span>
            <span className="text-blue-300">Berlin to Dresden</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Berlin to Dresden by Train:
            </span>
            <br />
            <span className="text-blue-100">Quick Day Trip Guide (2026)</span>
          </h1>

          <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
            One of Germany's most beautiful short train journeys – direct to Dresden along the scenic Elbe River valley. Perfect for a day trip to see the rebuilt Frauenkirche, Zwinger Palace, and stunning baroque architecture.
          </p>

          {/* Recommended + CTAs */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/60 backdrop-blur-xl rounded-3xl p-8 border border-cyan-400/40">
              <h2 className="text-3xl font-bold text-cyan-200 mb-6 flex items-center gap-3">
                <CheckCircle className="w-10 h-10 text-cyan-400" />
                Recommended: Direct Regional or EC Train
              </h2>
              <p className="text-xl text-blue-100 mb-6">
                The direct train is the best option – frequent, cheap, and scenic along the Elbe. Takes just 2 hours and drops you right in Dresden's beautiful old town.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <a
                  href="https://www.omio.com/"
                  target="_blank"
                  rel="nofollow noopener"
                  className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 rounded-xl font-semibold text-white shadow-lg transition-all text-lg"
                >
                  <Train className="w-8 h-8" />
                  Search trains on Omio
                </a>
                <a
                  href="https://www.thetrainline.com/"
                  target="_blank"
                  rel="nofollow noopener"
                  className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-[#00A387] hover:bg-[#008f75] rounded-xl font-semibold text-white shadow-lg transition-all text-lg"
                >
                  <Train className="w-8 h-8" />
                  Search on Trainline
                </a>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-3xl font-bold">~2h</p>
                <p className="text-blue-300 text-sm">Direct</p>
              </div>
              <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold">€15–40</p>
                <p className="text-blue-300 text-sm">One-way advance</p>
              </div>
              <div className="bg-slate-800/70 rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold">Every 30–60min</p>
                <p className="text-blue-300 text-sm">From Berlin Hbf</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-100 mb-4">Quick Tips</h2>
            <ul className="list-disc list-inside text-blue-200/80 space-y-2">
              <li>Right side (from Berlin) for best Elbe valley views</li>
              <li>Day return possible – last trains back ~10pm</li>
              <li>No reservation needed on regional trains</li>
              <li>Dresden old town is walkable from station</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Need a rental car in Dresden?</h2>
            <a
              href="https://www.rentalcars.com/"
              target="_blank"
              rel="nofollow noopener"
              className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-xl font-semibold text-white shadow-lg transition-all text-lg"
            >
              <Car className="w-8 h-8" />
              Compare car rental on Rentalcars.com
            </a>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Things to do in Dresden</h2>
            <a
              href="https://www.getyourguide.com/dresden-l27/"
              target="_blank"
              rel="nofollow noopener"
              className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold text-white shadow-lg transition-all text-lg"
            >
              <Star className="w-8 h-8" />
              Book tours & activities on GetYourGuide
            </a>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-8">Quick FAQs</h2>
            <div className="space-y-6">
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Is Dresden worth a day trip from Berlin?</summary>
                <p className="mt-4 text-blue-200/80">Absolutely – stunning rebuilt old town and easy train connection.</p>
              </details>
              <details className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
                <summary className="text-xl font-semibold text-cyan-300 cursor-pointer">Best views on the train?</summary>
                <p className="mt-4 text-blue-200/80">Right side for Elbe valley scenery.</p>
              </details>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Need a hotel in Dresden?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="https://www.booking.com/city/de/dresden.html"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-[#003580] hover:bg-[#002a60] rounded-xl font-semibold text-white shadow-lg transition-all text-lg"
              >
                Find hotels on Booking.com
              </a>
              <a
                href="https://www.hotels.com/de171659/hotels-dresden-germany/"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center gap-3 px-8 py-6 bg-[#E31C3D] hover:bg-[#c41734] rounded-xl font-semibold text-white shadow-lg transition-all text-lg"
              >
                Find hotels on Hotels.com
              </a>
            </div>
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
