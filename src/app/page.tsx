"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
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
              <Link href="/" className="text-xs text-gray-900 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-medium">
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
                  className="block px-4 py-3 text-sm text-gray-900 font-medium hover:bg-gray-50 transition-colors"
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

      {/* Hero Section - Large and Centered */}
      <section className="relative bg-white min-h-[80vh] md:min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 gradient-mesh">
        <div className="max-w-5xl mx-auto text-center py-8 relative">
          {/* Mobile-only subtle content shadow */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10 rounded-3xl blur-3xl -z-10"></div>
          
          {/* Logo and Brand */}
          <div className="flex items-center justify-center mb-8 md:mb-8 fade-in -space-x-2">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-25 animate-pulse"></div>
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

          {/* Main Headline */}
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-tight mb-6 md:mb-6 slide-up">
            Accurate. Compliant. Fast.
          </h2>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-8 max-w-4xl mx-auto font-light leading-relaxed slide-up px-2">
            Based in Charlotte, North Carolina, Quantix delivers precision analytics for hemp products—built to meet regulatory, financial, and commercial standards without delay.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-4 justify-center items-center slide-up">
            <Link href="/submit-sample" className="apple-button text-lg md:text-lg px-8 md:px-8 py-4 md:py-4 w-full sm:w-auto font-medium">
              Submit Sample
            </Link>
            <Link href="/about" className="apple-button-secondary text-lg md:text-lg px-8 md:px-8 py-4 md:py-4 w-full sm:w-auto font-medium">
              Learn More
            </Link>
          </div>


        </div>

        {/* Background decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent opacity-50"></div>
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
