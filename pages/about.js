import React from 'react';
import { Mountain, Users, Target, Heart } from 'lucide-react';

export default function About() {
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
              <a href="/about" className="text-cyan-300">About</a>
              <a href="/contact" className="text-blue-200 hover:text-cyan-300 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              About Get Me There
            </span>
          </h2>
          <p className="text-xl text-blue-200/80 max-w-2xl mx-auto">
            Your trusted companion for finding the best travel routes across Europe, Asia, and beyond.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 mb-8 border border-blue-400/20">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
              <Target className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-3xl font-bold text-blue-100">Our Mission</h3>
          </div>
          <p className="text-blue-200/80 text-lg leading-relaxed mb-4">
            We believe travel should be simple. Whether you're planning a weekend getaway or a cross-continent adventure, 
            Get Me There helps you compare all your options—trains, buses, flights, and more—in one place.
          </p>
          <p className="text-blue-200/80 text-lg leading-relaxed">
            No hidden fees. No confusing interfaces. Just honest, straightforward travel information to help you 
            make the best decision for your journey.
          </p>
        </div>

        {/* What We Do */}
        <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 mb-8 border border-blue-400/20">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
              <Users className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-3xl font-bold text-blue-100">What We Do</h3>
          </div>
          <div className="space-y-4 text-blue-200/80 text-lg">
            <p className="leading-relaxed">
              <strong className="text-cyan-300">Compare Transport Options:</strong> We show you trains, buses, flights, 
              and car rentals side-by-side so you can choose what works best for your budget and schedule.
            </p>
            <p className="leading-relaxed">
              <strong className="text-cyan-300">Detailed Route Guides:</strong> From European train journeys to Southeast 
              Asian backpacking routes, we provide comprehensive guides to help you plan with confidence.
            </p>
            <p className="leading-relaxed">
              <strong className="text-cyan-300">Money-Saving Tips:</strong> Learn the insider tricks to travel for less, 
              from booking strategies to alternative routes that save you money.
            </p>
            <p className="leading-relaxed">
              <strong className="text-cyan-300">Honest Recommendations:</strong> We earn commissions when you book through 
              our partners, but we only recommend options we'd choose ourselves. Your trust matters more than any commission.
            </p>
          </div>
        </div>

        {/* Why Trust Us */}
        <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
              <Heart className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-3xl font-bold text-blue-100">Why Trust Us?</h3>
          </div>
          <p className="text-blue-200/80 text-lg leading-relaxed mb-4">
            We're travelers too. We know the frustration of searching multiple websites, comparing prices, 
            and wondering if there's a better route. That's why we built Get Me There—to simplify travel 
            planning for everyone.
          </p>
          <p className="text-blue-200/80 text-lg leading-relaxed">
            We're transparent about how we make money (affiliate commissions) and we're committed to providing 
            accurate, helpful information whether you book through us or not. Your journey matters.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-blue-400/20 bg-slate-900/50 backdrop-blur-sm mt-20">
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
            © 2024 Get Me There. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
    }
