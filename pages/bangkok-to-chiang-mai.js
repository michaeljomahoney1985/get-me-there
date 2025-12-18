import React from 'react';
import { Mountain, Train, Bus, Plane, Clock, DollarSign, CheckCircle, Moon } from 'lucide-react';

export default function BangkokToChiangMai() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Background SVG Mountains */}
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
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-cyan-400 text-sm mb-4">
          <a href="/" className="hover:text-cyan-300">Home</a>
          <span>→</span>
          <a href="/southeast-asia" className="hover:text-cyan-300">Southeast Asia</a>
          <span>→</span>
          <span className="text-blue-300">Bangkok to Chiang Mai</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
            Bangkok to Chiang Mai:
          </span>
          <br />
          <span className="text-blue-100">Every Backpacker's First Big Journey (2025 Guide)</span>
        </h1>

        <p className="text-xl text-blue-200/80 leading-relaxed mb-12">
          You've conquered Bangkok's chaos—Khao San Road, endless pad thai, and temple overload. 
          Now it's time to head north to the mountains. Here's how to make the classic 700km journey on any budget.
        </p>

        {/* Hero Images */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <img src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt62a1282b8a560448/6890624f450d713eb1cec581/maria-krasnova-nwcUQlFgQ7w-unsplash-Header_Mobile.jpg?format=webp&quality=60&width=1440" alt="Scenic Thai countryside from train" className="rounded-2xl object-cover h-72 w-full border border-cyan-400/20" />
          <img src="https://adventure.com/wp-content/uploads/2018/04/Hero-Thai-train-travel-Photo-credit-iStock-structuresxx.jpg" alt="Thailand train journey landscape" className="rounded-2xl object-cover h-72 w-full border border-cyan-400/20" />
          <img src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=614567711638348" alt="Train on bridge in Thailand" className="rounded-2xl object-cover h-72 w-full border border-cyan-400/20" />
        </div>

        {/* Best Option Callout */}
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2">What Most Backpackers Do in 2025</h3>
              <p className="text-blue-200/90 leading-relaxed">
                The overnight sleeper train remains the iconic choice: scenic, social, and saves a night's accommodation. 
                Short on time? Fly cheap. Broke? VIP bus.
              </p>
            </div>
          </div>
        </div>

        {/* Sleeper Train Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                <Train className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-100">Option 1: Overnight Sleeper Train</h2>
                <p className="text-cyan-300 text-sm">The backpacker rite of passage</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Clock className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">11–14 hrs</div>
                <div className="text-sm text-blue-300/70">Overnight</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <DollarSign className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">฿800–1,500</div>
                <div className="text-sm text-blue-300/70">~$23–43 USD (2025)</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-400/20">
                <Moon className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-cyan-300">Sleeper Berth</div>
                <div className="text-sm text-blue-300/70">Save on hotel</div>
              </div>
            </div>

            {/* Clean interior images - no watermarks */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <img src="https://static.ffx.io/images/$zoom_0.8454%2C$multiply_0.7025%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/6bf8405e0a2f6362422d8c274ae9833074ed2e4c" alt="Modern sleeper bunk" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
              <img src="https://i.insider.com/62f359e2cc15bf00182fb34f?width=800&format=jpeg&auto=webp" alt="Comfortable train berth" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
              <img src="https://static.ffx.io/images/$zoom_0.603%2C$multiply_0.7725%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/deb6e87b655f85691c1cef1e8661ff463fdaa4bc" alt="Clean second class interior" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
              <img src="https://thai-railways.com/Content/images/posts/post_2nd_sleeping_air.webp" alt="AC sleeper cabin" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
            </div>

            {/* Scenic views */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <img src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt62a1282b8a560448/6890624f450d713eb1cec581/maria-krasnova-nwcUQlFgQ7w-unsplash-Header_Mobile.jpg?format=webp&quality=60&width=1440" alt="Countryside view from train" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
              <img src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=614567711638348" alt="Train on scenic bridge" className="rounded-xl object-cover h-64 w-full border border-cyan-400/20" />
            </div>

            {/* Rest of content unchanged... */}
            {/* (keeping the text, tips, CTA as before) */}
            <div className="space-y-4 text-blue-200/80 leading-relaxed">
              {/* ... your existing text ... */}
            </div>

            <div className="mt-8">
              <a href="https://12go.asia/en/travel/bangkok/chiang-mai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300">
                Book Sleeper Train Tickets
                <Train className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Flight and Bus sections - keep as before or update images similarly */}
        {/* ... */}

        {/* Footer */}
        {/* ... */}
      </main>
    </div>
  );
}
