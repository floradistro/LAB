"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar - Apple Style */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-9">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/quantixlogo.png"
                alt="Quantix Research Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <h1 className="text-sm font-semibold text-gray-900 tracking-tight">
                Quantix Research
              </h1>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-xs text-gray-900 font-medium">
                Services
              </Link>
              <Link href="/client-portal" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                Client Portal
              </Link>
              <Link href="/client-portal" className="apple-button">
                Submit Sample
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
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

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md">
              <div className="py-3 space-y-2">
                <Link 
                  href="/" 
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/services" 
                  className="block px-3 py-2 text-sm text-gray-900 font-medium hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="/client-portal" 
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Client Portal
                </Link>
                <div className="px-3 pt-2">
                  <Link 
                    href="/client-portal" 
                    className="apple-button w-full text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Submit Sample
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Services Hero */}
      <section className="relative bg-white pt-4 pb-4 px-4 fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900 tracking-tight leading-tight mb-1.5">
            Testing Services & Pricing
          </h1>
          <p className="text-xs text-gray-600 mb-2 max-w-2xl mx-auto font-light leading-snug">
            Comprehensive cannabis testing solutions for East Coast cultivators and distributors. Fast turnaround, competitive pricing.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-4 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 slide-up">
            {/* Core Testing */}
            <div className="bg-white rounded-lg p-3 border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-1.5">Core Testing</h3>
              <ul className="space-y-1">
                <li className="flex justify-between items-center">
                  <span className="text-[11px] text-gray-600">Cannabinoid Potency</span>
                  <span className="text-[11px] font-medium text-gray-900">$75</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-[11px] text-gray-600">Terpene Profile</span>
                  <span className="text-[11px] font-medium text-gray-900">$65</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-[11px] text-gray-600">Moisture Content</span>
                  <span className="text-[11px] font-medium text-gray-900">$50</span>
                </li>
              </ul>
            </div>

            {/* Safety Testing */}
            <div className="bg-white rounded-lg p-3 border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-1.5">Safety Testing</h3>
              <ul className="space-y-1">
                <li className="flex justify-between items-center">
                  <span className="text-[11px] text-gray-600">Pesticide Panel</span>
                  <span className="text-[11px] font-medium text-gray-900">$120</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-[11px] text-gray-600">Heavy Metals</span>
                  <span className="text-[11px] font-medium text-gray-900">$90</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-[11px] text-gray-600">Microbial Screen</span>
                  <span className="text-[11px] font-medium text-gray-900">$95</span>
                </li>
              </ul>
            </div>

            {/* Specialty Testing */}
            <div className="bg-white rounded-lg p-3 border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-1.5">Specialty Testing</h3>
              <ul className="space-y-1">
                <li className="flex justify-between items-center">
                  <span className="text-[11px] text-gray-600">Residual Solvents</span>
                  <span className="text-[11px] font-medium text-gray-900">$85</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-[11px] text-gray-600">Water Activity</span>
                  <span className="text-[11px] font-medium text-gray-900">$50</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-[11px] text-gray-600">Custom R&D</span>
                  <span className="text-[11px] font-medium text-gray-900">Quote</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Packages */}
      <section id="packages" className="py-4 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-900 text-center mb-3">Testing Packages</h2>
          <div className="grid md:grid-cols-3 gap-2">
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <h3 className="text-sm font-semibold text-gray-900 mb-0.5">Basic Compliance</h3>
              <div className="text-xl font-light text-gray-900 mb-0.5">$195</div>
              <p className="text-[11px] text-gray-600 mb-1.5">Save $45</p>
              <ul className="text-[11px] text-gray-600 space-y-0.5">
                <li>• Cannabinoid Potency</li>
                <li>• Pesticide Panel</li>
                <li>• Moisture Content</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 text-center border-2 border-blue-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-0.5">Full Compliance</h3>
              <div className="text-xl font-light text-gray-900 mb-0.5">$325</div>
              <p className="text-[11px] text-blue-600 mb-1.5">Most Popular • Save $95</p>
              <ul className="text-[11px] text-gray-600 space-y-0.5">
                <li>• All Basic Tests</li>
                <li>• Heavy Metals</li>
                <li>• Microbial Screen</li>
                <li>• Terpene Profile</li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-3 text-center text-white">
              <h3 className="text-sm font-semibold text-white mb-0.5">Premium Package</h3>
              <div className="text-xl font-light text-white mb-0.5">$425</div>
              <p className="text-[11px] text-gray-300 mb-1.5">Everything • Save $145</p>
              <ul className="text-[11px] text-gray-300 space-y-0.5">
                <li>• All Compliance Tests</li>
                <li>• Residual Solvents</li>
                <li>• Water Activity</li>
                <li>• Priority Processing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-4 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-900 text-center mb-3">Simple Process</h2>
          
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
              <div className="flex items-start space-x-2.5 bg-white rounded-lg p-2.5">
                <div className="w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xs font-medium text-gray-900">Submit Form</h3>
                  <p className="text-[11px] text-gray-600 mt-0.5">Complete our online form with sample details and testing requirements</p>
                </div>
              </div>
              <div className="flex items-start space-x-2.5 bg-white rounded-lg p-2.5">
                <div className="w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xs font-medium text-gray-900">Ship Sample</h3>
                  <p className="text-[11px] text-gray-600 mt-0.5">Mail your sample or drop off locally in the Charlotte area</p>
                </div>
              </div>
              <div className="flex items-start space-x-2.5 bg-white rounded-lg p-2.5">
                <div className="w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xs font-medium text-gray-900">We Test</h3>
                  <p className="text-[11px] text-gray-600 mt-0.5">Our lab processes your sample with 3-5 business day turnaround</p>
                </div>
              </div>
              <div className="flex items-start space-x-2.5 bg-white rounded-lg p-2.5">
                <div className="w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xs font-medium text-gray-900">Get Results</h3>
                  <p className="text-[11px] text-gray-600 mt-0.5">Receive detailed COA via email and secure online portal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-4 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center slide-up">
          <h2 className="text-lg font-semibold text-gray-900 tracking-tight mb-1.5">
            Ready to test?
          </h2>
          <p className="text-xs text-gray-600 mb-3 font-light">
            Get started with our simple online submission process.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
            <Link href="/client-portal" className="apple-button">
              Submit Sample
            </Link>
            <button 
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              className="apple-button-secondary"
            >
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-3 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[11px] text-gray-500 mb-2 md:mb-0">
              © 2025 Quanitx Research • Charlotte, North Carolina • All rights reserved.
            </div>
            <div className="flex space-x-3">
              <a href="#" className="text-[11px] text-gray-500 hover:text-gray-700 transition-colors">Privacy</a>
              <a href="#" className="text-[11px] text-gray-500 hover:text-gray-700 transition-colors">Terms</a>
              <a href="#" className="text-[11px] text-gray-500 hover:text-gray-700 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 