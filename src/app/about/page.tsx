"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function About() {
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
                alt="Quantix Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <h1 className="text-sm font-semibold text-gray-900 tracking-tight">
                Quantix
              </h1>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-xs text-gray-900 font-medium">
                About
              </Link>
              <Link href="/services" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
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
                  className="block px-3 py-2 text-xs text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="block px-3 py-2 text-xs text-gray-900 font-medium hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/services" 
                  className="block px-3 py-2 text-xs text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="/client-portal" 
                  className="block px-3 py-2 text-xs text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
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

      {/* Hero Section */}
      <section className="relative bg-white pt-16 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Image
              src="/quantixlogo.png"
              alt="Quantix Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Quantix
            </h1>
          </div>
          <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-2">
            Precision Hemp Analytics
          </h2>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        {/* Origin Story */}
        <section className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 tracking-tight">
            Quantix was built out of necessity.
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              As operators in the cannabis supply chain, we experienced firsthand the delays, inconsistencies, 
              and outdated methods that plague traditional testing labs. Slow turnaround times, vague reporting, 
              and lab errors don't just hurt margins—they delay launches, stall sales, and put compliance at risk.
            </p>
            <p className="text-lg font-medium text-gray-900">
              We created Quantix to solve that.
            </p>
            <p className="text-lg">
              Our mission is simple: deliver accurate, compliant test results—fast. Because in this industry, 
              every second matters. Products need to hit shelves without delay, whether you're a farm, retailer, 
              or distributor. We designed our lab around that urgency.
            </p>
          </div>
        </section>

        {/* Location */}
        <section className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 tracking-tight">
            Based in Charlotte. Serving the East Coast.
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              We operate out of Charlotte, North Carolina, a rising cannabis hub on the East Coast. 
              While our lab is local, our reach is regional—we support operators across North Carolina, 
              South Carolina, Tennessee, Georgia, and beyond. Wherever your facility is, we're structured 
              to move fast and deliver clarity.
            </p>
          </div>
        </section>

        {/* What We Test */}
        <section className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 tracking-tight">
            What We Test
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            We specialize in testing:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">THCA Flower</h4>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Edibles & Beverages</h4>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Live Resin & Concentrates</h4>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Tinctures & Oils</h4>
            </div>
          </div>
          <p className="text-lg text-gray-700">
            Any cannabis-derived product requiring legal compliance or third-party verification
          </p>
          <p className="text-lg text-gray-900 font-medium mt-4">
            Each test panel is designed to meet bank, buyer, and regulatory standards with no fluff and no margin for error.
          </p>
        </section>

        {/* Methodology */}
        <section className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 tracking-tight">
            Our Methodology
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            Our analytical platform is built on dual-layered instrumentation:
          </p>
          
          <div className="space-y-8">
            {/* HPLC */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                High-Performance Liquid Chromatography (HPLC)
              </h4>
              <p className="text-gray-700 mb-4">
                We use HPLC to separate individual cannabinoids with high molecular specificity. 
                Unlike gas chromatography, HPLC preserves heat-sensitive compounds like THCa and CBDa—allowing 
                for accurate quantification without thermal degradation or decarboxylation skew.
              </p>
              <ul className="space-y-2 text-gray-700">
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
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Ultraviolet Absorbance Spectroscopy (UV-Vis)
              </h4>
              <p className="text-gray-700 mb-4">
                After separation, we quantify compounds by their UV absorption profiles—each analyzed 
                against internal calibration standards using Beer-Lambert Law. This ensures high accuracy 
                even in variable product types.
              </p>
              <ul className="space-y-2 text-gray-700">
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
        </section>

        {/* Built for Operators */}
        <section className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 tracking-tight">
            Built for Operators Who Move Fast
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg font-medium text-gray-900">
              We don't believe in waiting a week for test results that barely tell you anything.
            </p>
            <p className="text-lg">
              We built Quantix to support operators who move fast and don't have time for guesswork. 
              Our systems are tuned for precision, compliance, and real-world cannabis logistics.
            </p>
            <p className="text-lg">
              If you're a cultivator, formulator, processor, or brand, you need results you can trust—and 
              you need them without delay. That's what we do.
            </p>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="text-center py-12 border-t border-gray-200">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
            Born from frustration. Built for speed. Powered by science.
          </h3>
          <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Quantix.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/client-portal" className="apple-button text-lg px-8 py-4">
              Submit Sample
            </Link>
            <Link href="/services" className="apple-button-secondary text-lg px-8 py-4">
              View Services
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 