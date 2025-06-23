"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function About() {
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
              <Link href="/about" className="text-xs text-gray-900 font-medium">
                About
              </Link>
              <Link href="/services" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-medium">
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
                className="block px-4 py-3 text-sm text-gray-900 font-medium hover:bg-gray-50 transition-colors"
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
            Precision Hemp Analytics
          </h2>
        </div>

        {/* Origin Story */}
        <section className="mb-4 md:mb-3">
          <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-3">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Quantix was built out of necessity.
            </h3>
            <div className="space-y-2 text-gray-700 leading-relaxed">
              <p className="text-xs">
                As operators in the cannabis supply chain, we experienced firsthand the delays, inconsistencies, 
                and outdated methods that plague traditional testing labs. Slow turnaround times, vague reporting, 
                and lab errors don&apos;t just hurt margins—they delay launches, stall sales, and put compliance at risk.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-2 my-2">
                <p className="text-xs font-medium text-gray-900">
                  We created Quantix to solve that.
                </p>
              </div>
              <p className="text-xs">
                Our mission is simple: deliver accurate, compliant test results—fast. Because in this industry, 
                every second matters. Products need to hit shelves without delay, whether you&apos;re a farm, retailer, 
                or distributor. We designed our lab around that urgency.
              </p>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="mb-4 md:mb-3">
          <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-3">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Based in Charlotte. Serving Nationally.
            </h3>
            <div className="space-y-2 text-gray-700 leading-relaxed">
              <p className="text-xs">
                We operate out of Charlotte, North Carolina, a rising cannabis hub on the East Coast. 
                While our lab is local, our reach extends nationwide—we serve operators across the country 
                with a regional focus on the Southeast. Our strategic location and streamlined logistics 
                enable us to deliver fast, reliable results wherever your operation is based.
              </p>
              <p className="text-xs font-medium text-gray-900">
                Whether you&apos;re a local cultivator or a national brand, we&apos;re structured to move fast and deliver clarity.
              </p>
            </div>
          </div>
        </section>

        {/* What We Test */}
        <section className="mb-4 md:mb-3">
          <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-3">
            <h3 className="text-sm font-semibold text-gray-900 mb-2 text-center">
              What We Test
            </h3>
            <p className="text-xs text-gray-600 mb-3 text-center">
              We specialize in comprehensive testing for:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div className="bg-white border border-gray-200 rounded-lg p-3 hover:scale-105 transition-transform">
                <div className="w-8 h-8 data-green rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-xs font-medium text-gray-900 mb-1">THCA Flower</h4>
                <p className="text-xs text-gray-600">Premium hemp flower testing with full cannabinoid profiling</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-3 hover:scale-105 transition-transform">
                <div className="w-8 h-8 data-blue rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-xs font-medium text-gray-900 mb-1">Live Resin & Concentrates</h4>
                <p className="text-xs text-gray-600">Precise potency analysis for extracts and concentrates</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-3 hover:scale-105 transition-transform">
                <div className="w-8 h-8 data-purple rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h4 className="text-xs font-medium text-gray-900 mb-1">Edibles & Beverages</h4>
                <p className="text-xs text-gray-600">Homogeneity testing for infused products</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-3 hover:scale-105 transition-transform">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h4 className="text-xs font-medium text-gray-900 mb-1">Tinctures & Oils</h4>
                <p className="text-xs text-gray-600">Full-spectrum analysis for liquid formulations</p>
              </div>
            </div>
            <div className="text-center bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-700">
                Any cannabis-derived product requiring legal compliance or third-party verification
              </p>
              <p className="text-xs text-gray-900 font-medium mt-2">
                Each test panel is designed to meet bank, buyer, and regulatory standards with no fluff and no margin for error.
              </p>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-4 md:mb-3">
          <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-3">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Our Methodology
            </h3>
            <p className="text-xs text-gray-600 mb-3">
              Our analytical platform is built on dual-layered instrumentation:
            </p>
            
            <div className="space-y-3">
              {/* HPLC */}
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="text-xs font-medium text-gray-900 mb-2">
                  High-Performance Liquid Chromatography (HPLC)
                </h4>
                <p className="text-xs text-gray-700 mb-2">
                  We use HPLC to separate individual cannabinoids with high molecular specificity. 
                  Unlike gas chromatography, HPLC preserves heat-sensitive compounds like THCa and CBDa—allowing 
                  for accurate quantification without thermal degradation or decarboxylation skew.
                </p>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Optimized for complex matrices: flower, extracts, emulsions
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Full-spectrum resolution of cannabinoids, even in multicomponent products
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Minimal sample prep required, enabling cleaner throughput
                  </li>
                </ul>
              </div>

              {/* UV-Vis */}
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="text-xs font-medium text-gray-900 mb-2">
                  Ultraviolet Absorbance Spectroscopy (UV-Vis)
                </h4>
                <p className="text-xs text-gray-700 mb-2">
                  After separation, we quantify compounds by their UV absorption profiles—each analyzed 
                  against internal calibration standards using Beer-Lambert Law. This ensures high accuracy 
                  even in variable product types.
                </p>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Reliable potency results
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Semi-quantitative terpene data
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Audit-grade documentation for every batch
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Built for Operators */}
        <section className="mb-4 md:mb-3">
          <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-3">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Built for Operators Who Move Fast
            </h3>
            <div className="space-y-2 text-gray-700 leading-relaxed">
              <p className="text-xs font-medium text-gray-900">
                We don&apos;t believe in waiting a week for test results that barely tell you anything.
              </p>
              <p className="text-xs">
                We built Quantix to support operators who move fast and don&apos;t have time for guesswork. 
                Our systems are tuned for precision, compliance, and real-world cannabis logistics.
              </p>
              <p className="text-xs">
                If you&apos;re a cultivator, formulator, processor, or brand, you need results you can trust—and 
                you need them without delay. That&apos;s what we do.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="text-center py-4 md:py-3 border-t border-gray-200">
          <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-3">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Born from frustration. Built for speed. Powered by science.
            </h3>
            <p className="text-base font-bold text-gray-900 mb-3">
              Quantix.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
              <Link href="/submit-sample" className="apple-button px-6 py-2 w-full sm:w-auto">
                Submit Sample
              </Link>
              <Link href="/services" className="apple-button-secondary px-6 py-2 w-full sm:w-auto">
                View Services
              </Link>
            </div>
          </div>
        </section>
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