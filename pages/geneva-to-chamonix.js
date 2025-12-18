import React from 'react';
import { Mountain, Train, Bus, Car, Clock, DollarSign, CheckCircle, AlertCircle, Snowflake, Sun } from 'lucide-react';

export default function GenevaToChamonix() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <svg className="absolute bottom-0 w-full h-96" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="mountain-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path
            d="M0,400 L0,180 L200,140 L350,200 L500,80 L650,160 L800,100 L950,180 L1200,120 L1200,400 Z"
            fill="url(#mountain-gradient)"
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

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 text-cyan-400 text-sm mb-4">
            <a href="/" className="hover:text-cyan-300">Home</a>
            <span>→</span>
            <a href="/europe" className="hover:text-cyan-300">Europe</a>
            <span>→</span>
            <span className="text-blue-300">Geneva to Chamonix</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Geneva to Chamonix:
            </span>
            <br />
            <span className="text-blue-100">The Complete 2025 Guide</span>
          </h1>
          
          <p className="text-xl text-blue-200/80 leading-relaxed">
            Every week, thousands of skiers and hikers land at Geneva Airport with one mission: get to Chamonix. 
            Here's everything you need to know about making that 1-hour journey without the stress.
          </p>
        </div>

        {/* Quick Answer Box */}
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2">TL;DR – Best Way to Get There</h3>
              <p className="text-blue-200/90 leading-relaxed">
                <strong>Shared shuttle bus</strong> is the winner for 90% of travelers. It takes 1-1.5 hours, 
                costs €30-50, and drops you right at your hotel door with all your ski gear. Book it before you 
                land and you'll be sipping vin chaud in Chamonix while others are still figuring out train connections.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <div className="prose prose-invert max-w-none">
            <p className="text-blue-200/80 text-lg leading-relaxed mb-4">
              Picture this: You've just touched down at Geneva Airport after an early morning flight. You're carrying 
              skis, boots, a backpack that weighs more than a small child, and you're running on airport coffee. The 
              last thing you want is a complicated journey involving multiple trains and a prayer that your equipment 
              makes it onto the right carriage.
            </p>
            <p className="text-blue-200/80 text-lg leading-relaxed mb-4">
              Good news: Getting from Geneva to Chamonix is actually one of the easiest mountain transfers in the Alps. 
              The two are only 88km apart, and the route is so well-traveled that you have multiple solid options 
              depending on your budget, schedule, and tolerance for Swiss train efficiency (which is high, by the way).
            </p>
            <p className="text-blue-200/80 text-lg leading-relaxed">
              Let's break down every option so you can pick the right one for your trip.
            </p>
          </div>
        </section>

        {/* Option 1: Shuttle */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Bus className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 1: Shared Shuttle Bus</h2>
                <p className="text-cyan-300 text-sm">⭐ Recommended for most travelers</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">1-1.5 hrs</div>
                <div className="text-sm text-blue-300/70">Journey time</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">€30-50</div>
                <div className="text-sm text-blue-300/70">One-way cost</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <CheckCircle className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">Hourly</div>
                <div className="text-sm text-blue-300/70">Frequency</div>
              </div>
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>
                This is the no-brainer option and what I always recommend to friends. Here's why it works so well:
              </p>
              
              <p>
                <strong className="text-cyan-300">The actual experience:</strong> You walk out of Geneva arrivals, 
                spot your driver holding a sign (or find the company desk), hand over your bags, and collapse into 
                a comfortable minibus. The driver handles the motorway, the border crossing, and the winding mountain 
                roads while you watch the Alps get progressively more dramatic through the window. Ninety minutes later, 
                you're dropped at your hotel door. Done.
              </p>

              <p>
                <strong className="text-cyan-300">Why it beats the train:</strong> No dragging ski bags through 
                train stations, no missed connections, no "which platform?" panic. Just point-to-point service that 
                actually understands what skiers need.
              </p>

              <p>
                <strong className="text-cyan-300">Popular companies:</strong> Mountain Dropoffs, AlpyBus, and 
                Chamexpress all run reliable services. They're used to winter gear, know every hotel in Chamonix, 
                and won't bat an eye when you show up with enough luggage for a polar expedition.
              </p>

              <div className="bg-slate-900/50 border border-cyan-400/30 rounded-xl p-4 mt-6">
                <p className="text-sm text-cyan-300 font-semibold mb-2">💡 Pro Tip:</p>
                <p className="text-sm">
                  Book your shuttle when you book your flights—prices creep up as seats fill, especially during 
                  February half-term and Christmas week. Early morning and late evening slots are usually cheapest.
                </p>
              </div>
            </div>

            <div className="mt-8">
              
                href="https://www.getyourguide.com/chamonix-mont-blanc-l220/from-geneva-airport-bus-transfer-to-chamonix-t55754/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Check Shuttle Availability & Prices
                <Bus className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Option 2: Train */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Train className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 2: Train</h2>
                <p className="text-cyan-300 text-sm">For the scenery lovers</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">3-4 hrs</div>
                <div className="text-sm text-blue-300/70">With 2+ changes</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">€40-70</div>
                <div className="text-sm text-blue-300/70">Typical cost</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Train className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">2-3</div>
                <div className="text-sm text-blue-300/70">Connections</div>
              </div>
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>
                Let's be honest: the train isn't the fastest or easiest option. But if you're the type who'd rather 
                spend three extra hours watching Swiss countryside roll past your window than save time in a minibus, 
                this might be your move.
              </p>

              <p>
                <strong className="text-cyan-300">The typical route:</strong> Geneva Airport → Geneva Cornavin (10 min) 
                → Martigny (1 hr) → Vallorcine (1 hr) → Chamonix-Mont-Blanc (20 min). Or sometimes via St-Gervais, 
                depending on the connection.
              </p>

              <p>
                <strong className="text-cyan-300">What you get:</strong> The final leg on the Mont Blanc Express 
                is genuinely spectacular—narrow-gauge mountain railway, glacier views, tiny alpine villages. It's 
                the kind of journey where you'll have your phone camera out the whole time.
              </p>

              <p>
                <strong className="text-cyan-300">The reality check:</strong> You're schlepping ski gear through 
                three different train stations. Swiss trains are wonderful, but you'll still be hauling bags up steps, 
                finding the right platform, and hoping your skis don't cause chaos in the luggage racks. If you're 
                traveling light or genuinely love trains, go for it. If you've got two skis, two boots, two poles, 
                and questionable upper body strength, maybe reconsider.
              </p>

              <div className="bg-slate-900/50 border border-cyan-400/30 rounded-xl p-4 mt-6">
                <p className="text-sm text-cyan-300 font-semibold mb-2">💡 Pro Tip:</p>
                <p className="text-sm">
                  If you're doing this, get the Swiss Travel Pass if you're staying in Switzerland for a few days—it 
                  covers this route and makes the cost way more reasonable.
                </p>
              </div>
            </div>

            <div className="mt-8">
              
                href="https://www.omio.com/trains/geneva/chamonix-mont-blanc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Check Train Times & Tickets
                <Train className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Option 3: Car */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Car className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 3: Rental Car / Drive</h2>
                <p className="text-cyan-300 text-sm">For groups & road trippers</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">~1 hr</div>
                <div className="text-sm text-blue-300/70">Drive time</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">€40-80</div>
                <div className="text-sm text-blue-300/70">Rental/day</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Snowflake className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">Winter</div>
                <div className="text-sm text-blue-300/70">Tyres required</div>
              </div>
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>
                Renting a car makes sense if you're a group of four splitting costs, or if you want the freedom to 
                explore the valley at your own pace. The A40 motorway from Geneva is smooth and scenic, and having 
                your own wheels means mid-week supermarket runs and day trips to Argentière without checking bus schedules.
              </p>

              <p>
                <strong className="text-cyan-300">The winter catch:</strong> Winter tyres are legally required in 
                the Alps from November to April, and rental companies charge extra for them (usually €10-15/day). 
                Snow chains might also be needed during heavy snowfall. Most rental desks at Geneva will sort this 
                automatically, but confirm when booking.
              </p>

              <p>
                <strong className="text-cyan-300">Parking in Chamonix:</strong> Hotels usually have parking (sometimes 
                paid), but finding a spot in town center can be tricky on busy weekends. Most people park and walk 
                or use the free valley bus system once they arrive.
              </p>

              <div className="bg-slate-900/50 border border-cyan-400/30 rounded-xl p-4 mt-6">
                <p className="text-sm text-cyan-300 font-semibold mb-2">⚠️ Important:</p>
                <p className="text-sm">
                  Check your rental agreement for cross-border coverage (Geneva is Swiss, Chamonix is French). 
                  Most companies allow it, but confirm to avoid surprises.
                </p>
              </div>
            </div>

            <div className="mt-8">
              
                href="https://www.rentalcars.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Compare Car Rental Prices
                <Car className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-100 mb-6">Quick Comparison</h2>
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-blue-400/20">
                  <th className="text-left py-4 px-4 text-cyan-300">Option</th>
                  <th className="text-left py-4 px-4 text-cyan-300">Time</th>
                  <th className="text-left py-4 px-4 text-cyan-300">Cost</th>
                  <th className="text-left py-4 px-4 text-cyan-300">Best For</th>
                </tr>
              </thead>
              <tbody className="text-blue-200/80">
                <tr className="border-b border-blue-400/10">
                  <td className="py-4 px-4 font-semibold text-cyan-300">Shared Shuttle</td>
                  <td className="py-4 px-4">1-1.5 hrs</td>
                  <td className="py-4 px-4">€30-50</td>
                  <td className="py-4 px-4">Most travelers, ski gear, convenience</td>
                </tr>
                <tr className="border-b border-blue-400/10">
                  <td className="py-4 px-4 font-semibold">Train</td>
                  <td className="py-4 px-4">3-4 hrs</td>
                  <td className="py-4 px-4">€40-70</td>
                  <td className="py-4 px-4">Scenic journeys, light luggage</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold">Rental Car</td>
                  <td className="py-4 px-4">~1 hr</td>
                  <td className="py-4 px-4">€40-80/day</td>
                  <td className="py-4 px-4">Groups, flexibility, valley exploring</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Seasonal Tips */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Seasonal Tips</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Snowflake className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">Winter (December–March)</h3>
                  <p className="text-blue-200/80 leading-relaxed">
                    Peak season. Shuttles get fully booked, especially during school holidays and February half-term. 
                    Book 2-3 weeks ahead minimum. Roads can be icy but are well-maintained. Budget extra time for 
                    potential weather delays.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Sun className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">Summer (June–September)</h3>
                  <p className="text-blue-200/80 leading-relaxed">
                    Quieter but still popular with hikers. Shuttles run less frequently but are easier to book 
                    last-minute. Roads are clear, making driving more pleasant. Train journeys offer better weather 
                    for views.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">Peak Weekend Traffic</h3>
                  <p className="text-blue-200/80 leading-relaxed">
                    Friday evenings and Sunday afternoons can see heavy traffic from Geneva as weekend skiers flood 
                    in and out. Allow an extra 30-45 minutes during these windows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-100 mb-6">Common Questions</h2>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/20">
              <h3 className="text-xl font-bold text-cyan-300 mb-3">What's the absolute cheapest way?</h3>
              <p className="text-blue-200/80 leading-relaxed">
                FlixBus occasionally runs Geneva–Chamonix routes for €15-25, but they're infrequent and often involve 
                awkward connection times. If budget is tight, this or advance-purchase train tickets are your best bets.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/20">
              <h3 className="text-xl font-bold text-cyan-300 mb-3">Do I need to book shuttles in advance?</h3>
              <p className="text-blue-200/80 leading-relaxed">
                In winter? Absolutely. In summer? It's safer to, but you can sometimes get lucky with same-day 
                availability. Don't risk it during peak season—I've seen people stranded at Geneva baggage claim 
                desperately refreshing booking sites.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/20">
              <h3 className="text-xl font-bold text-cyan-300 mb-3">Can I Uber or taxi?</h3>
              <p className="text-blue-200/80 leading-relaxed">
                Sure, if you're comfortable spending €200-300 for a private transfer. Some people split this among 
                groups, which can make sense if you have 4-5 people. Otherwise, shared shuttles offer 90% of the 
                convenience at a fraction of the price.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/20">
              <h3 className="text-xl font-bold text-cyan-300 mb-3">What if my flight is delayed?</h3>
              <p className="text-blue-200/80 leading-relaxed">
                Most shuttle companies monitor flight times and adjust pickup accordingly. If you're drastically 
                delayed, contact them ASAP—they'll usually rebook you on the next available bus. This is another 
                reason to book with established companies rather than random WhatsApp transfer services.
              </p>
            </div>
          </div>
        </section>

        {/* Final Recommendation */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-cyan-300 mb-4">Our Recommendation</h2>
            <p className="text-blue-200/90 text-lg leading-relaxed mb-4">
              Unless you have specific reasons to do otherwise, <strong>book a shared shuttle</strong>. It's the 
              sweet spot of cost, convenience, and hassle-free travel. You'll arrive in Chamonix relaxed, with 
              your equipment intact, ready to actually enjoy your trip instead of recovering from a three-train 
              schlep through Swiss stations.
            </p>
            <p className="text-blue-200/90 text-lg leading-relaxed">
              Book it when you book your flights, show up at the meeting point, and let someone else deal with 
              the logistics. That's what holidays are for.
            </p>
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <section className="mb-12">
          <div className="bg-slate-900/50 border border-blue-400/20 rounded-xl p-6">
            <p className="text-xs text-blue-300/60 leading-relaxed">
              <strong>Affiliate Disclosure:</strong> This guide contains affiliate links to trusted booking platforms. 
              If you book through these links, we earn a small commission at no extra cost to you. This helps us keep 
              the site free and the guides comprehensive. We only recommend services we'd actually use ourselves—no 
              sponsored nonsense.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-400/20 bg-slate-900/50 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-blue-100 mb-4">Get Me There</h4>
              <p className="text-sm text-blue-300/70 leading-relaxed">
                Your journey companion. Compare and book the best routes across all transport modes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-100 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-blue-300/70">
                <li><a href="/" className="hover:text-cyan-300 transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-cyan-300 transition-colors">About Us</a></li>
                <li><a href="/privacy" className="hover:text-cyan-300 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-cyan-300 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-100 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-blue-300/70">
                <li><a href="/contact" className="hover:text-cyan-300 transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-blue-300/50 pt-8 border-t border-blue-400/10">
            © 2025 Get Me There. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
