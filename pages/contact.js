import React, { useState } from 'react';
import { Mountain, Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show success message
    // In the future, you can integrate with email service
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              <a href="/contact" className="text-cyan-300">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl mb-6">
            <MessageSquare className="w-12 h-12 text-cyan-400" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-xl text-blue-200/80 max-w-2xl mx-auto">
            Have questions, feedback, or partnership inquiries? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20 mb-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full mb-6">
                <Send className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">Message Sent!</h3>
              <p className="text-blue-200/80">
                Thank you for reaching out. We'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-blue-400/30 rounded-xl text-white placeholder-blue-300/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-blue-400/30 rounded-xl text-white placeholder-blue-300/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-blue-200 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-blue-400/30 rounded-xl text-white placeholder-blue-300/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-blue-400/30 rounded-xl text-white placeholder-blue-300/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-3 group transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-5 h-5" />
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/20">
            <h3 className="text-xl font-bold text-cyan-300 mb-3 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              General Inquiries
            </h3>
            <p className="text-blue-200/80 text-sm leading-relaxed">
              Questions about routes, our service, or how to use Get Me There? Send us a message using the form above.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/20">
            <h3 className="text-xl font-bold text-cyan-300 mb-3 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Partnership Opportunities
            </h3>
            <p className="text-blue-200/80 text-sm leading-relaxed">
              Interested in partnering with Get Me There? We're always open to collaboration with travel providers.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-blue-200/60 text-sm">
            We typically respond within 24-48 hours during business days.
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
