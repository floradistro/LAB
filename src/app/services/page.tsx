"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Layout from "@/components/Layout";
import Button from "@/components/UI/Button";
import Card from "@/components/UI/Card";

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Layout currentPage="services">
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

      {/* Main Content - Updated to match homepage structure */}
      <section className="relative bg-white min-h-[80vh] md:min-h-[calc(100vh-4rem)] flex items-start justify-center px-4 gradient-mesh">
        <div className="max-w-4xl mx-auto py-8 md:py-6 relative w-full">
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
          <div className="space-y-8">
            <Card className="p-8 md:p-6 text-center slide-up">
              <h2 className="text-2xl md:text-xl font-bold text-gray-900 mb-4">Testing Services</h2>
              <p className="text-gray-600 text-base md:text-sm max-w-3xl mx-auto">
                Comprehensive cannabis testing services designed for speed, accuracy, and compliance. 
                All tests performed in our state-certified laboratory with 24-48 hour turnaround.
              </p>
            </Card>

            {/* Core Testing Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 slide-up hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Potency Testing</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Full cannabinoid profiling including THC, THCA, CBD, CBDA, CBG, CBN, and more. 
                      Our HPLC methodology ensures accurate results without thermal degradation.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        11+ cannabinoids tested
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        0.01% detection limit
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Same-day results available
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 slide-up hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Pesticide Screening</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Comprehensive screening for 60+ pesticides using LC-MS/MS technology. 
                      We test for all state-required pesticides and more.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        60+ pesticides screened
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        PPB-level detection
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        State compliance guaranteed
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 slide-up hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Microbial Testing</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Testing for harmful microorganisms including E. coli, Salmonella, Aspergillus, 
                      and other pathogens that could compromise product safety.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Total yeast & mold count
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Pathogenic bacteria screening
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        24-hour results
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 slide-up hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Heavy Metals</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      ICP-MS testing for lead, cadmium, mercury, and arsenic. Essential for 
                      products grown in potentially contaminated soil.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        4 heavy metals tested
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        PPB-level accuracy
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        FDA compliance standards
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* Additional Services */}
            <Card className="p-8 md:p-6 slide-up">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">R&D Support</h4>
                  <p className="text-sm text-gray-600">
                    Custom testing protocols for product development and formulation
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Rush Testing</h4>
                  <p className="text-sm text-gray-600">
                    Same-day results available for time-sensitive samples
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Compliance Consulting</h4>
                  <p className="text-sm text-gray-600">
                    Expert guidance on regulatory requirements and documentation
                  </p>
                </div>
              </div>
            </Card>

            {/* Call to Action */}
            <Card className="p-8 md:p-6 text-center bg-gradient-subtle slide-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Submit Your Samples?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get started with our simple submission process. Results delivered within 24-48 hours 
                with full compliance documentation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/submit-sample" size="large">
                  Submit a Sample
                </Button>
                <Button href="/contact" variant="secondary" size="large">
                  Get a Quote
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

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
    </Layout>
  );
} 