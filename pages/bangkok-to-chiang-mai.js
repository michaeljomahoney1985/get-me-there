import React from 'react';
import { Mountain, Train, Bus, Plane, Clock, DollarSign, CheckCircle, Moon } from 'lucide-react';

export default function BangkokToChiangMai() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
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
          <a href="/southeast-asia" className="hover:text-cyan-300">Southeast Asia</a>
          <span>→</span>
          <span className="text-blue-300">Bangkok to Chiang Mai</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
            Bangkok to Chiang Mai:
          </span>
          <br />
          <span className="text-blue-100">Every Backpacker's First Big Journey</span>
        </h1>

        <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
          So you've done Bangkok—survived Khao San Road, eaten more pad thai than humanly possible, 
          and now you're ready to head north. Here's how to get to Chiang Mai without losing your mind or budget.
        </p>

        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2">What Most Backpackers Do</h3>
              <p className="text-blue-200/90 leading-relaxed">
                The overnight sleeper train is the classic move. You save a night's accommodation, 
                wake up in the mountains, and experience one of Southeast Asia's best train journeys. 
                Short on time? Fly. Broke? Take the bus.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <p className="text-blue-200/80 text-lg leading-relaxed mb-4">
            Bangkok to Chiang Mai is Thailand's most popular backpacker route. You're trading 
            the chaos of the capital for laid-back mountain vibes—temples tucked into forested hillsides, 
            night markets without the tourist crush, and enough cooking classes to turn you into a pad thai expert.
          </p>
          <p className="text-blue-200/80 text-lg leading-relaxed">
            The journey covers about 700km. You've got three solid options depending on your time and budget.
          </p>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Train className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 1: Overnight Sleeper Train</h2>
                <p className="text-cyan-300 text-sm">The backpacker favorite</p>
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
                This is the one. If you're in Thailand for more than a week, the overnight train is an absolute 
                rite of passage.
              </p>

              <p className="font-semibold text-cyan-300">
                The experience: You board around 6-8pm at Bangkok's Krung Thep Aphiwat Central Station. 
                The carriage is basic but clean—rows of seats that convert into bunk beds around 9pm. 
                You get a pillow, blanket, and reading light. The train rocks gently as it chugs north. 
                You wake up to mountains, mist, and the realization you just saved 800 baht on a hostel.
              </p>

              <p className="font-semibold text-cyan-300">Class breakdown:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>2nd class sleeper (fan): ฿600. No AC, windows open, very authentic. Fine in cool season.</li>
                <li>2nd class sleeper (AC): ฿800-900. The sweet spot. Comfortable enough to sleep.</li>
                <li>1st class sleeper: ฿1,200+. Private 2-berth cabins. Overkill unless you value privacy.</li>
              </ul>

              <p>
                The train is old, the toilet is functional, and you might get woken by someone's snoring. 
                But that's part of the charm. You'll swap stories with travelers, watch rural Thailand roll past, 
                and arrive with that smug feeling of having done the classic journey.
              </p>

              <div className="bg-slate-900/50 border border-cyan-400/30 rounded-xl p-4 mt-6">
                <p className="text-sm text-cyan-300 font-semibold mb-2">💡 Pro Tips:</p>
                <ul className="text-sm space-y-2">
                  <li>• Book 2-3 weeks ahead in peak season (Nov-Feb, July-Aug)</li>
                  <li>• Lower bunk = easier access. Upper bunk = more privacy</li>
                  <li>• Bring snacks, water, and reading material. WiFi doesn't exist</li>
                  <li>• Departure times vary (usually 6pm-10pm)</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              
                href="https://12go.asia/en/travel/bangkok/chiang-mai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300"
              >
                Book Sleeper Train Tickets
                <Train className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

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
                Sometimes you just need to be in Chiang Mai by lunchtime. Thailand's budget airlines 
                make this route cheap and easy, with flights leaving basically every hour.
              </p>

              <p className="font-semibold text-cyan-300">
                What you get: AirAsia, Thai Lion Air, and Nok Air all run multiple daily flights. 
                Flight time is about an hour. You board, they throw a sandwich at you, and suddenly 
                you're landing in the mountains.
              </p>

              <p>
                Base fares can be ฿800-1,500 if you book ahead. But watch the add-ons—checked bags 
                (฿300-500), seat selection, and meals can double your price. Travel light with just 
                a backpack to save tons.
              </p>

              <p className="font-semibold text-cyan-300">
                Worth it if: You're short on time, hate buses, or can't get train tickets. 
                Not worth it on a tight budget—the train or bus will save money and give you more experience.
              </p>

              <div className="bg-slate-900/50 border border-cyan-400/30 rounded-xl p-4 mt-6">
                <p className="text-sm text-cyan-300 font-semibold mb-2">💡 Pro Tip:</p>
                <p className="text-sm">
                  Book midweek and avoid early morning/late evening slots for cheapest fares. 
                  Use Skyscanner to compare all airlines.
                </p>
              </div>
            </div>

            <div className="mt-8">
              
                href="https://www.skyscanner.net/transport/flights/bkk/cnx/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300"
              >
                Compare Flight Prices
                <Plane className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

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
                The bus is what you take when money's tight and you don't mind a long ride. 
                It's the cheapest option and honestly not that bad—just long.
              </p>

              <p className="font-semibold text-cyan-300">
                What you get: Government buses leave from Mo Chit Northern Bus Terminal. 
                Private buses leave from various points. Both end up at Chiang Mai's Arcade Bus Station. 
                Seats are reasonably comfortable, AC works (usually), toilet stops every few hours.
              </p>

              <p>
                Day buses (7am-8am) arrive in evening. Overnight buses (6pm-9pm) arrive around 5-6am, 
                which saves a night's accommodation. Overnight buses sometimes have reclining VIP seats 
                for an extra ฿100-200.
              </p>

              <p className="font-semibold text-cyan-300">
                The downsides: Nine hours is long. The movies are loud and terrible. You can't really sleep 
                on day buses. But you're saving money.
              </p>

              <div className="bg-slate-900/50 border border-cyan-400/30 rounded-xl p-4 mt-6">
                <p className="text-sm text-cyan-300 font-semibold mb-2">⚠️ Important:</p>
                <p className="text-sm">
                  Stick to official terminals or reputable companies (12Go Asia is solid). 
                  Avoid random Khao San Road agencies promising VIP buses.
                </p>
              </div>
            </div>

            <div className="mt-8">
              
                href="https://12go.asia/en/travel/bangkok/chiang-mai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300"
              >
                Book Bus Tickets
                <Bus className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

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

        <section className="mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-cyan-300 mb-4">What We'd Do</h2>
            <p className="text-blue-200/90 text-lg leading-relaxed mb-4">
              Take the overnight sleeper train if you possibly can. It's not the fastest or cheapest, 
              but it's the most memorable. You'll arrive in Chiang Mai with stories, a decent night's sleep, 
              and the satisfaction of having done one of Southeast Asia's classic journeys.
            </p>
            <p className="text-blue-200/90 text-lg leading-relaxed">
              If trains are sold out or you're genuinely time-crunched, fly. If you're broke and buses don't 
              scare you, bus it. But really—do the train if you can.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-slate-900/50 border border-blue-400/20 rounded-xl p-6">
            <p className="text-xs text-blue-300/60 leading-relaxed">
              Affiliate Disclosure: Links may earn us a commission at no extra cost to you. 
              We only recommend services we'd actually use.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-blue-400/20 bg-slate-900/50 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-blue-100 mb-4">Get Me There</h4>
              <p className="text-sm text-blue-300/70 leading-relaxed">
                Your journey companion. Compare and book the best routes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-100 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-blue-300/70">
                <li><a href="/" className="hover:text-cyan-300 transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-cyan-300 transition-colors">About</a></li>
                <li><a href="/privacy" className="hover:text-cyan-300 transition-colors">Privacy</a></li>
                <li><a href="/terms" className="hover:text-cyan-300 transition-colors">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-100 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-blue-300/70">
                <li><a href="/contact" className="hover:text-cyan-300 transition-colors">Contact</a></li>
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
