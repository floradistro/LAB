"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
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
              <Link href="/services" className="text-xs text-gray-900 font-medium">
                Services
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
                className="block px-4 py-3 text-sm text-gray-900 font-medium hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
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

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6 md:py-4">
        <div className="text-center mb-6 md:mb-4">
          <div className="flex items-center justify-center mb-4 md:mb-6 fade-in -space-x-2">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20"></div>
              <Image
                src="/quantixlogo.png"
                alt="Quantix Logo"
                width={80}
                height={80}
                className="w-20 h-20 md:w-20 md:h-20 relative z-10 drop-shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Quantix
            </h1>
          </div>
          <h2 className="text-base md:text-xl font-semibold text-gray-900 tracking-tight mb-1.5">
            Testing Services & Pricing
          </h2>
          <p className="text-xs text-gray-600 max-w-2xl mx-auto font-light leading-snug">
            Comprehensive cannabis testing solutions for East Coast cultivators and distributors. Fast turnaround, competitive pricing.
          </p>
        </div>

              {/* Services Overview */}
        <section className="mb-4 md:mb-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Core Testing */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-3">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-900">Core Testing</h3>
                <div className="w-8 h-8 data-green rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-xs text-gray-700">Cannabinoid Potency</span>
                  <span className="text-xs font-medium text-gray-900">$75</span>
                </li>
                <li className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-xs text-gray-700">Terpene Profile</span>
                  <span className="text-xs font-medium text-gray-900">$65</span>
                </li>
                <li className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-xs text-gray-700">Moisture Content</span>
                  <span className="text-xs font-medium text-gray-900">$50</span>
                </li>
              </ul>
            </div>

            {/* Safety Testing */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-3">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-900">Safety Testing</h3>
                <div className="w-8 h-8 data-blue rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-xs text-gray-700">Pesticide Panel</span>
                  <span className="text-xs font-medium text-gray-900">$120</span>
                </li>
                <li className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-xs text-gray-700">Heavy Metals</span>
                  <span className="text-xs font-medium text-gray-900">$90</span>
                </li>
                <li className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-xs text-gray-700">Microbial Screen</span>
                  <span className="text-xs font-medium text-gray-900">$95</span>
                </li>
              </ul>
            </div>

            {/* Specialty Testing */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-3 md:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-900">Specialty Testing</h3>
                <div className="w-8 h-8 data-purple rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-xs text-gray-700">Residual Solvents</span>
                  <span className="text-xs font-medium text-gray-900">$85</span>
                </li>
                <li className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-xs text-gray-700">Water Activity</span>
                  <span className="text-xs font-medium text-gray-900">$50</span>
                </li>
                <li className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-xs text-gray-700">Custom R&D</span>
                  <span className="text-xs font-medium text-gray-900">Quote</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Bundle Packages */}
      <section id="packages" className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-3xl font-semibold text-gray-900 mb-2 md:mb-3">Testing Packages</h2>
            <p className="text-sm md:text-base text-gray-600">Save up to 25% with our bundled testing services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="pro-card rounded-xl p-6 md:p-8 text-center hover:scale-105 transition-transform">
              <div className="inline-flex px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full mb-4">
                Essential
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Basic Compliance</h3>
              <div className="text-3xl md:text-4xl font-light text-gray-900 mb-1">$195</div>
              <p className="text-sm text-green-600 mb-4 md:mb-6">Save $45</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 md:mb-8">
                <li className="flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cannabinoid Potency
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pesticide Panel
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Moisture Content
                </li>
              </ul>
              <Link href="/submit-sample" className="apple-button-secondary w-full">
                Get Started
              </Link>
            </div>
            
            <div className="pro-card rounded-xl p-6 md:p-8 text-center border-2 border-blue-500 relative hover:scale-105 transition-transform">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="inline-flex px-3 py-1 text-xs font-medium text-white bg-blue-500 rounded-full">
                  Most Popular
                </span>
              </div>
              <div className="inline-flex px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full mb-4">
                Professional
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Full Compliance</h3>
              <div className="text-3xl md:text-4xl font-light text-gray-900 mb-1">$325</div>
              <p className="text-sm text-green-600 mb-4 md:mb-6">Save $95</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 md:mb-8">
                <li className="flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  All Basic Tests
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Heavy Metals
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Microbial Screen
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Terpene Profile
                </li>
              </ul>
              <Link href="/submit-sample" className="apple-button w-full">
                Get Started
              </Link>
            </div>
            
            <div className="pro-card rounded-xl p-6 md:p-8 text-center bg-gray-900 text-white hover:scale-105 transition-transform">
              <div className="inline-flex px-3 py-1 text-xs font-medium text-gray-300 bg-gray-800 rounded-full mb-4">
                Enterprise
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Premium Package</h3>
              <div className="text-3xl md:text-4xl font-light text-white mb-1">$425</div>
              <p className="text-sm text-green-400 mb-4 md:mb-6">Save $145</p>
              <ul className="text-sm text-gray-300 space-y-2 mb-6 md:mb-8">
                <li className="flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  All Compliance Tests
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Residual Solvents
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Water Activity
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority Processing
                </li>
              </ul>
              <Link href="/submit-sample" className="bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors w-full inline-block">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-8 md:py-4 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-base md:text-lg font-semibold text-gray-900 text-center mb-4 md:mb-3">Simple Process</h2>
          
          {/* Desktop/Tablet Grid Layout */}
          <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-2.5">
            <div className="text-center">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-medium">1</div>
              <h3 className="text-xs font-medium text-gray-900 mb-0.5">Submit Form</h3>
              <p className="text-[11px] text-gray-600">Online submission with sample details</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-medium">2</div>
              <h3 className="text-xs font-medium text-gray-900 mb-0.5">Ship Sample</h3>
              <p className="text-[11px] text-gray-600">Mail or drop off locally in Charlotte</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-medium">3</div>
              <h3 className="text-xs font-medium text-gray-900 mb-0.5">We Test</h3>
              <p className="text-[11px] text-gray-600">3-5 business days standard turnaround</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-medium">4</div>
              <h3 className="text-xs font-medium text-gray-900 mb-0.5">Get Results</h3>
              <p className="text-[11px] text-gray-600">COA delivered via email & portal</p>
            </div>
          </div>
          
          {/* Mobile Card Layout */}
          <div className="block sm:hidden">
            <div className="space-y-3">
              <div className="flex items-start space-x-3 bg-white rounded-lg p-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">1</div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Submit Form</h3>
                  <p className="text-xs text-gray-600 mt-0.5">Complete our online form with sample details and testing requirements</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 bg-white rounded-lg p-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">2</div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Ship Sample</h3>
                  <p className="text-xs text-gray-600 mt-0.5">Mail your sample or drop off locally in the Charlotte area</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 bg-white rounded-lg p-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">3</div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">We Test</h3>
                  <p className="text-xs text-gray-600 mt-0.5">Our lab processes your sample with 3-5 business day turnaround</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 bg-white rounded-lg p-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">4</div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Get Results</h3>
                  <p className="text-xs text-gray-600 mt-0.5">Receive detailed COA via email and secure online portal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-4 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center slide-up">
          <h2 className="text-base md:text-lg font-semibold text-gray-900 tracking-tight mb-1.5">
            Ready to test?
          </h2>
          <p className="text-xs text-gray-600 mb-3 font-light">
            Get started with our simple online submission process.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
            <Link href="/client-portal" className="apple-button w-full sm:w-auto">
              Submit Sample
            </Link>
            <button 
              onClick={() => document.getElementById('packages')?.scrollIntoView()}
              className="apple-button-secondary w-full sm:w-auto"
            >
              View Pricing
            </button>
          </div>
        </div>
      </section>

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