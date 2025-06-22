"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation Bar - Apple Style */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 glass-effect">
        {/* Mobile Navigation - Edge to Edge */}
        <div className="md:hidden">
          <div className="flex items-center justify-between h-12 px-2">
            <Link href="/" className="p-1">
              <Image
                src="/quantixlogo.png"
                alt="Quantix Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </Link>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block max-w-6xl mx-auto px-4">
          <div className="flex items-center h-9 relative">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/quantixlogo.png"
                alt="Quantix Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </Link>
            
            {/* Desktop Navigation - Centered */}
            <div className="flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
              <Link href="/" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-medium">
                About
              </Link>
              <Link href="/services" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Services
              </Link>
              <Link href="/contact" className="text-xs text-gray-900 font-medium">
                Contact
              </Link>
              <Link href="/client-portal" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Client Portal
              </Link>
            </div>

            {/* Submit Sample Button - Right Side */}
            <div className="flex ml-auto w-64 justify-end">
              <Link href="/submit-sample" className="apple-button">
                Submit Sample
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md">
            <div className="py-3 space-y-1">
              <Link 
                href="/" 
                className="block px-4 py-3 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-4 py-3 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="block px-4 py-3 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="block px-4 py-3 text-sm text-gray-900 font-medium hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/client-portal" 
                className="block px-4 py-3 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Client Portal
              </Link>
              <div className="px-4 pt-2 pb-3">
                <Link 
                  href="/submit-sample" 
                  className="apple-button w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Submit Sample
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 py-6 md:py-4">
        <div className="text-center mb-6 md:mb-4">
          <h1 className="text-base md:text-xl font-semibold text-gray-900 tracking-tight mb-1.5">
            Contact Us
          </h1>
          <p className="text-xs text-gray-600 max-w-2xl mx-auto font-light leading-snug">
            Ready to get started? Get in touch with our team.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Contact Details */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-3">
            <h2 className="text-sm font-semibold text-gray-900 mb-3">
              Get In Touch
            </h2>
            
            <div className="space-y-3">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 data-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs md:text-[11px] font-medium text-gray-900 mb-1">Laboratory Address</h3>
                  <p className="text-xs text-gray-600">
                    5540 Centerview Dr Ste 204 #982095<br />
                    Raleigh, NC 27606
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 data-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs md:text-[11px] font-medium text-gray-900 mb-1">Email Support</h3>
                  <a 
                    href="mailto:support@quantixanalytics.com" 
                    className="text-xs text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    support@quantixanalytics.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 data-purple rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs md:text-[11px] font-medium text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-xs text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM EST<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-3 text-center">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Ready to Submit a Sample?
              </h3>
              <p className="text-xs text-gray-600 mb-3">
                Get started with our streamlined sample submission process.
              </p>
              <Link href="/submit-sample" className="apple-button w-full">
                Submit Sample
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-3 text-center">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                View Our Services
              </h3>
              <p className="text-xs text-gray-600 mb-3">
                Learn more about our comprehensive testing capabilities.
              </p>
              <Link href="/services" className="apple-button-secondary w-full">
                View Services
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-3 text-center">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Client Portal
              </h3>
              <p className="text-xs text-gray-600 mb-3">
                Access your test results and manage your account.
              </p>
              <Link href="/client-portal" className="apple-button-secondary w-full">
                Client Portal
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-4 md:mt-3 text-center">
          <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-3">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Questions About Testing?
            </h3>
            <p className="text-xs text-gray-600 mb-3 max-w-2xl mx-auto">
              Our team is here to help you understand our testing processes, turnaround times, 
              and how we can support your cannabis operation. Don&apos;t hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a 
                href="mailto:support@quantixanalytics.com" 
                className="apple-button px-6 py-2 w-full sm:w-auto"
              >
                Email Us
              </a>
              <Link href="/about" className="apple-button-secondary px-6 py-2 w-full sm:w-auto">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-6 md:mt-4">
        <div className="max-w-6xl mx-auto px-4 py-4 md:py-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Company Info */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Quantix Analytics</h4>
              <div className="space-y-1 text-gray-600">
                <p className="text-xs">5540 Centerview Dr Ste 204 #982095, Raleigh, NC 27606</p>
                <p>
                  <a href="mailto:support@quantixanalytics.com" className="text-xs hover:text-gray-900 transition-colors">
                    support@quantixanalytics.com
                  </a>
                </p>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Quick Links</h4>
              <div className="flex flex-wrap gap-3 text-gray-600">
                <Link href="/" className="text-xs hover:text-gray-900 transition-colors">Home</Link>
                <Link href="/services" className="text-xs hover:text-gray-900 transition-colors">Services</Link>
                <Link href="/submit-sample" className="text-xs hover:text-gray-900 transition-colors">Sample Submission</Link>
                <Link href="/contact" className="text-xs hover:text-gray-900 transition-colors">Contact</Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 pt-3 text-center text-xs text-gray-500">
            <p className="mb-1">© 2025 Quantix Labs. All rights reserved.</p>
            <p>Quantix Labs is an independent hemp testing facility.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 