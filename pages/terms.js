import React from 'react';
import { Mountain, FileText } from 'lucide-react';

export default function Terms() {
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
            <FileText className="w-12 h-12 text-cyan-400" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h2>
          <p className="text-lg text-blue-200/80">
            Last updated: December 17, 2024
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <Section title="Agreement to Terms">
            <p>
              By accessing and using Get Me There ("the Service"), you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use the Service.
            </p>
          </Section>

          <Section title="Description of Service">
            <p>
              Get Me There is a travel information and comparison platform. We provide:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Comparison of transportation options (trains, buses, flights, etc.)</li>
              <li>Travel route information and guides</li>
              <li>Links to third-party booking platforms</li>
              <li>Travel tips and recommendations</li>
            </ul>
            <p className="mt-4">
              We do not directly sell tickets or travel services. We are an information and referral service.
            </p>
          </Section>

          <Section title="Affiliate Relationships">
            <p className="mb-4">
              <strong className="text-cyan-300">Important Disclosure:</strong> Get Me There participates in affiliate marketing programs. 
              This means:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>When you click on booking links, we may earn a commission if you make a purchase</li>
              <li>Commissions are paid by the travel provider, not by you</li>
              <li>You pay the same price whether you use our links or not</li>
              <li>We only recommend services we believe are valuable</li>
            </ul>
            <p className="mt-4">
              Our affiliate relationships do not influence the accuracy of our travel information.
            </p>
          </Section>

          <Section title="Third-Party Services">
            <p className="mb-4">
              When you click on booking links, you are redirected to third-party websites operated by:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Airlines, train operators, and bus companies</li>
              <li>Booking platforms and travel agencies</li>
              <li>Hotel and accommodation providers</li>
            </ul>
            <p className="mt-4">
              <strong className="text-cyan-300">Important:</strong> These third parties have their own terms of service and privacy policies. 
              Get Me There is not responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>The booking process or transaction</li>
              <li>Ticket prices, availability, or changes</li>
              <li>Travel disruptions, cancellations, or delays</li>
              <li>Quality of service provided</li>
              <li>Refunds or customer service issues</li>
            </ul>
          </Section>

          <Section title="Accuracy of Information">
            <p>
              We strive to provide accurate and up-to-date travel information. However:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Prices, schedules, and availability change frequently</li>
              <li>Information is provided for general guidance only</li>
              <li>We cannot guarantee the accuracy of all data</li>
              <li>You should verify details directly with travel providers before booking</li>
            </ul>
            <p className="mt-4">
              <strong className="text-cyan-300">Always check:</strong> Current prices, terms, and conditions on the provider's 
              website before making any purchase.
            </p>
          </Section>

          <Section title="No Warranties">
            <p>
              The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, 
              including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Accuracy or completeness of information</li>
              <li>Uninterrupted or error-free operation</li>
              <li>Fitness for a particular purpose</li>
            </ul>
          </Section>

          <Section title="Limitation of Liability">
            <p className="mb-4">
              Get Me There and its operators shall not be liable for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Any direct, indirect, incidental, or consequential damages</li>
              <li>Issues arising from bookings made through third-party links</li>
              <li>Travel disruptions, cancellations, or changes</li>
              <li>Lost profits, data, or business opportunities</li>
              <li>Acts of third-party service providers</li>
            </ul>
            <p className="mt-4">
              Your sole remedy for dissatisfaction with the Service is to stop using it.
            </p>
          </Section>

          <Section title="User Conduct">
            <p className="mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the Service for any illegal purpose</li>
              <li>Attempt to interfere with the Service's operation</li>
              <li>Copy or reproduce content without permission</li>
              <li>Use automated tools to access the Service</li>
              <li>Impersonate others or provide false information</li>
            </ul>
          </Section>

          <Section title="Intellectual Property">
            <p>
              All content on Get Me There, including text, graphics, logos, and software, is owned by Get Me There 
              or its licensors and is protected by copyright and intellectual property laws.
            </p>
            <p className="mt-4">
              You may not reproduce, distribute, or create derivative works without express written permission.
            </p>
          </Section>

          <Section title="Links to Other Websites">
            <p>
              Our Service contains links to third-party websites. These links are provided for convenience only. 
              We do not endorse or assume responsibility for the content, privacy policies, or practices of third-party sites.
            </p>
          </Section>

          <Section title="Changes to Terms">
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately 
              upon posting. Your continued use of the Service after changes constitutes acceptance of the modified terms.
            </p>
          </Section>

          <Section title="Termination">
            <p>
              We reserve the right to terminate or suspend access to the Service at any time, without notice, 
              for any reason, including violation of these terms.
            </p>
          </Section>

          <Section title="Governing Law">
            <p>
              These Terms of Service shall be governed by and construed in accordance with applicable laws. 
              Any disputes shall be resolved in the appropriate courts.
            </p>
          </Section>

          <Section title="Contact Information">
            <p className="mb-4">
              If you have questions about these Terms of Service, please contact us:
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
