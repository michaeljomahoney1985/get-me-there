import React from 'react';
import { Mountain, Train, Bus, Plane, Clock, DollarSign, CheckCircle, Moon, Sun, Star } from 'lucide-react';

export default function BangkokToChiangMai() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* [Same header as Geneva page] */}
      
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
          <a href="/southeast-asia" className="hover:text-cyan-300">Southeast Asia</a>
          <span>→</span>
          <span className="text-blue-300">Bangkok to Chiang Mai</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
            Bangkok to Chiang Mai:
          </span>
          <br />
          <span className="text-blue-100">Every Backpacker's First Big Journey</span>
        </h1>

        <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
          So you've done Bangkok—survived Khao San Road, eaten more pad thai than should be humanly possible, 
          and now you're ready to head north. Here's how to get to Chiang Mai without losing your mind or your budget.
        </p>

        {/* Quick Answer */}
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2">TL;DR – What Most Backpackers Do</h3>
              <p className="text-blue-200/90 leading-relaxed">
                The <strong>overnight sleeper train</strong> is the classic move. You save a night's accommodation, 
                wake up in the mountains, and get to experience one of Southeast Asia's best train journeys. If 
                you're short on time, fly. If you're broke, take the bus. Simple as that.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-blue-200/80 text-lg leading-relaxed mb-4">
            Bangkok to Chiang Mai is Thailand's most popular backpacker route, and for good reason. You're trading 
            the chaos of Thailand's capital for the laid-back mountain vibes of the north—temples tucked into 
            forested hillsides, night markets without the tourist crush, and enough cooking classes to turn you 
            into a pad thai expert (whether you want to be or not).
          </p>
          <p className="text-blue-200/80 text-lg leading-relaxed">
            The journey covers about 700km, and you've got three solid options depending on how much time you have 
            and whether you'd rather save money or arrive before your next birthday. Let's break it down.
          </p>
        </section>

        {/* Option 1: Overnight Train */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Train className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 1: Overnight Sleeper Train</h2>
                <p className="text-cyan-300 text-sm">⭐ The backpacker favorite</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">12-14 hrs</div>
                <div className="text-sm text-blue-300/70">Overnight</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">฿600-1200</div>
                <div className="text-sm text-blue-300/70">$17-35 USD</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Moon className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">Sleeper</div>
                <div className="text-sm text-blue-300/70">Save a night's hotel</div>
              </div>
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>
                This is the one. If you're in Thailand for more than a week and not completely time-crunched, 
                the overnight train is an absolute rite of passage. Here's what actually happens:
              </p>

              <p>
                <strong className="text-cyan-300">The experience:</strong> You board around 6-8pm at Bangkok's 
                Krung Thep Aphiwat Central Station (or the old Hua Lamphong if your train originates there). The 
                carriage is basic but clean—rows of facing seats that, around 9pm, the attendants magically convert 
                into bunk beds with curtains. You get a pillow, a blanket, and a reading light. The train rocks 
                gently as it chugs north through the Thai countryside. You wake up to mountains, mist, and the 
                realization you just saved 800 baht on a hostel.
              </p>

              <p>
                <strong className="text-cyan-300">Class breakdown:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>2nd class sleeper (fan):</strong> ฿600. No AC, windows open, very "authentic." Fine 
                in cool season, sweaty in hot season.</li>
                <li><strong>2nd class sleeper (AC):</strong> ฿800-900. The sweet spot. Comfortable enough to 
                sleep, cheap enough not to feel bougie.</li>
                <li><strong>1st class sleeper:</strong> ฿1,200+. Private 2-berth cabins. Overkill unless you 
                really value privacy or are traveling as a couple.</li>
              </ul>

              <p>
                <strong className="text-cyan-300">The reality check:</strong> It's not the Orient Express. 
                The train is old, the toilet situation is... functional, and you might get woken up by someone's 
                snoring or the vendor selling fried chicken at 3am. But that's part of the charm. You'll swap 
                stories with other travelers, watch rural Thailand roll past your window, and arrive in Chiang 
                Mai with that smug "I did the train" feeling.
              </p>

              <div className="bg-slate-900/50 border border-cyan-400/30 rounded-xl p-4 mt-6">
                <p className="text-sm text-cyan-300 font-semibold mb-2">💡 Pro Tips:</p>
                <ul className="text-sm space-y-2">
                  <li>• Book 2-3 weeks ahead in peak season (Nov-Feb, July-Aug)</li>
                  <li>• Lower bunk = easier access, less climbing. Upper bunk = more privacy, better views</li>
                  <li>• Bring snacks, water, and something to read. WiFi is nonexistent</li>
                  <li>• Departure times vary (usually 6pm-10pm), so check when booking</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              
                href="https://12go.asia/en/travel/bangkok/chiang-mai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Book Sleeper Train Tickets
                <Train className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Option 2: Flight */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Plane className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 2: Flight</h2>
                <p className="text-cyan-300 text-sm">When time matters</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">~1 hr</div>
                <div className="text-sm text-blue-300/70">Flight time</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">฿800-3000</div>
                <div className="text-sm text-blue-300/70">$25-85 USD</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Plane className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">15+/day</div>
                <div className="text-sm text-blue-300/70">Frequent flights</div>
              </div>
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>
                Look, sometimes you just need to be in Chiang Mai by lunchtime. No judgment. Thailand's budget 
                airlines make this route cheap and easy, with flights leaving basically every hour.
              </p>

              <p>
                <strong className="text-cyan-300">What you get:</strong> AirAsia, Thai Lion Air, and Nok Air 
                all run multiple daily flights from Bangkok (Don Mueang or Suvarnabhumi) to Chiang Mai. Flight 
                time is about an hour. You board, they throw a sandwich at you, and suddenly you're landing in 
                the mountains. Easy.
              </p>

              <p>
                <strong className="text-cyan-300">The cost reality:</strong> Base fares can be ฿800-1,500 if 
                you book a week or two ahead. But watch the add-ons—checked bags (฿300-500), seat selection, 
                and in-flight meals can double your price. If you're traveling light with just a backpack, 
                you'll save a ton.
              </p>

              <p>
                <strong className="text-cyan-300">Worth it if:</strong> You're short on time, hate buses, 
                or can't get train tickets. Not worth it if you're on a tight budget and have time to spare—the 
                train or bus will save you money and give you more of an experience.
              </p>

              <div className="bg-slate-900/50 border border-cyan-400/30 rounded-xl p-4 mt-6">
                <p className="text-sm text-cyan-300 font-semibold mb-2">💡 Pro Tip:</p>
                <p className="text-sm">
                  Book midweek and avoid early morning/late evening slots for the cheapest fares. Use Skyscanner 
                  to compare all airlines at once—prices can vary wildly.
                </p>
              </div>
            </div>

            <div className="mt-8">
              
                href="https://www.skyscanner.net/transport/flights/bkk/cnx/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Compare Flight Prices
                <Plane className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Option 3: Bus */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Bus className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 3: Bus</h2>
                <p className="text-cyan-300 text-sm">The budget champion</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">9-10 hrs</div>
                <div className="text-sm text-blue-300/70">Day or overnight</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">฿400-800</div>
                <div className="text-sm text-blue-300/70">$11-23 USD</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Bus className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">Many/day</div>
                <div className="text-sm text-blue-300/70">Frequent services</div>
              </div>
            </div>

            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              <p>
                The bus is what you take when money's tight and you don't mind a long ride. It's the cheapest 
                option, and honestly, it's not that bad—just... long.
              </p>

              <p>
                <strong className="text-cyan-300">What you get:</strong> Government buses leave from Mo Chit 
                Northern Bus Terminal. Private buses (often booked through travel agencies) leave from various 
                points around Bangkok. Both end up in Chiang Mai's Arcade Bus Station. Seats are reasonably 
                comfortable, AC works (usually), and there are toilet stops every few hours.
              </p>

              <p>
                <strong className="text-cyan-300">Day vs overnight:</strong> Day buses (7am-8am departures) 
                mean you arrive in the evening. Overnight buses (6pm-9pm departures) mean you arrive around 
                5-6am, which is early but saves a night's accommodation. The overnight buses sometimes have 
                reclining "VIP" seats for an extra ฿100-200.
              </p>

              <p>
                <strong className="text-cyan-300">The downsides:</strong> Nine hours is a long time to sit. 
                The movies they play are loud and often terrible. You can't really sleep on day buses, and 
                overnight buses only work if you're good at sleeping upright. But hey, you're saving money.
              </p>

              <div className="bg-slate-900/50 border border-cyan-400/30 rounded-xl p-4 mt-6">
                <p className="text-sm text-cyan-300 font-semibold mb-2">⚠️ Important:</p>
                <p className="text-sm">
                  Stick to official bus terminals or reputable companies (12Go Asia is solid for booking). 
                  Avoid random Khao San Road travel agencies promising "VIP buses"—they're often just regular 
                  buses with inflated prices.
                </p>
              </div>
            </div>

            <div className="mt-8">
              
                href="https://12go.asia/en/travel/bangkok/chiang-mai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Book Bus Tickets
                <Bus className="w-5 h-5" />
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
                  <td className="py-4 px-4 font-semibold text-cyan-300">Sleeper Train</td>
                  <td className="py-4 px-4">12-14 hrs</td>
                  <td className="py-4 px-4">฿600-1200</td>
                  <td className="py-4 px-4">Experience, saving accommodation</td>
                </tr>
                <tr className="border-b border-blue-400/10">
                  <td className="py-4 px-4 font-semibold">Flight</td>
                  <td className="py-4 px-4">~1 hr</td>
                  <td className="py-4 px-4">฿800-3000</td>
                  <td className="py-4 px-4">Speed, tight schedules</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold">Bus</td>
                  <td className="py-4 px-4">9-10 hrs</td>
                  <td className="py-4 px-4">฿400-800</td>
                  <td className="py-4 px-4">Ultra-budget travel</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Final Recommendation */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-cyan-300 mb-4">What We'd Do</h2>
            <p className="text-blue-200/90 text-lg leading-relaxed mb-4">
              Take the <strong>overnight sleeper train</strong> if you possibly can. It's not the fastest or 
              the cheapest, but it's the most memorable. You'll arrive in Chiang Mai with stories, a decent 
              night's sleep (well, decent-ish), and the satisfaction of having done one of Southeast Asia's 
              classic journeys.
            </p>
            <p className="text-blue-200/90 text-lg leading-relaxed">
              If trains are sold out or you're genuinely time-crunched, fly. If you're broke and buses don't 
              scare you, bus it. But really—do the train if you can.
            </p>
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <section className="mb-12">
          <div className="bg-slate-900/50 border border-blue-400/20 rounded-xl p-6">
            <p className="text-xs text-blue-300/60 leading-relaxed">
              <strong>Affiliate Disclosure:</strong> Links to booking platforms may earn us a commission at no 
              extra cost to you. We only recommend services we'd actually use (and have used). No sponsored fluff.
            </p>
          </div>
        </section>

      </main>

      {/* [Same footer as Geneva page] */}
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
