import React from 'react';
import { Mountain, Shield } from 'lucide-react';

export default function Privacy() {
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
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl mb-6">
            <Shield className="w-12 h-12 text-cyan-400" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h2>
          <p className="text-lg text-blue-200/80">
            Last updated: December 17, 2024
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <Section title="Introduction">
            <p>
              Get Me There ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>
          </Section>

          <Section title="Information We Collect">
            <p className="mb-4">We collect information in the following ways:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-cyan-300">Information you provide:</strong> When you use our search tools or contact us, you may provide travel preferences and contact details.</li>
              <li><strong className="text-cyan-300">Automatically collected information:</strong> We collect technical data including your IP address, browser type, device information, and pages visited.</li>
              <li><strong className="text-cyan-300">Cookies:</strong> We use cookies and similar technologies to enhance your experience and analyze site usage.</li>
            </ul>
          </Section>

          <Section title="How We Use Your Information">
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide and improve our travel comparison services</li>
              <li>Personalize your experience on our website</li>
              <li>Analyze site usage and optimize performance</li>
              <li>Communicate with you about updates or respond to inquiries</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="Sharing Your Information">
            <p className="mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-cyan-300">Affiliate partners:</strong> When you click on booking links, you'll be redirected to our partners' websites. Their privacy policies will apply.</li>
              <li><strong className="text-cyan-300">Service providers:</strong> Third-party services that help us operate our website (hosting, analytics, etc.).</li>
              <li><strong className="text-cyan-300">Legal requirements:</strong> When required by law or to protect our rights.</li>
            </ul>
            <p className="mt-4">
              We do not sell your personal information to third parties.
            </p>
          </Section>

          <Section title="Affiliate Disclosure">
            <p>
              Get Me There participates in affiliate marketing programs. When you click on links to booking sites 
              and make a purchase, we may earn a commission at no additional cost to you. This helps us maintain 
              and improve our free service.
            </p>
          </Section>

          <Section title="Cookies">
            <p className="mb-4">
              We use cookies to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Remember your preferences</li>
              <li>Understand how you use our site</li>
              <li>Track affiliate referrals</li>
              <li>Improve site performance</li>
            </ul>
            <p className="mt-4">
              You can control cookies through your browser settings. Note that disabling cookies may affect site functionality.
            </p>
          </Section>

          <Section title="Data Security">
            <p>
              We implement appropriate technical and organizational measures to protect your personal data. However, 
              no internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="Your Rights">
            <p className="mb-4">
              Depending on your location, you may have rights including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access to your personal data</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of your data</li>
              <li>Objection to data processing</li>
              <li>Data portability</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us using the details below.
            </p>
          </Section>

          <Section title="Third-Party Links">
            <p>
              Our website contains links to third-party websites (booking platforms, travel providers). We are not 
              responsible for their privacy practices. Please review their privacy policies before providing any information.
            </p>
          </Section>

          <Section title="Children's Privacy">
            <p>
              Our service is not directed to children under 16. We do not knowingly collect personal information 
              from children. If you believe we have collected such information, please contact us immediately.
            </p>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this privacy policy from time to time. We will notify you of significant changes by 
              posting the new policy on this page with an updated "Last updated" date.
            </p>
          </Section>

          <Section title="Contact Us">
            <p className="mb-4">
              If you have questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
              <p className="text-cyan-300">Get Me There</p>
              <p className="text-blue-200/80 mt-2">
                Email: <a href="/contact" className="text-cyan-400 hover:text-cyan-300 underline">Contact Form</a>
              </p>
            </div>
          </Section>
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

function Section({ title, children }) {
  return (
    <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20">
      <h3 className="text-2xl font-bold text-cyan-300 mb-4">{title}</h3>
      <div className="text-blue-200/80 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
    }
