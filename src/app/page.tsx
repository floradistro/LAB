"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
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
              <Link href="/" className="text-xs text-gray-900 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
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
                  className="block px-3 py-2 text-xs text-gray-900 font-medium hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="block px-3 py-2 text-xs text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
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

      {/* Hero Section - Large and Centered */}
      <section className="relative bg-white min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Image
              src="/quantixlogo.png"
              alt="Quantix Logo"
              width={80}
              height={80}
              className="w-20 h-20"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
              Quantix
            </h1>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-tight mb-6">
            Accurate. Compliant. Fast.
          </h2>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto font-light leading-relaxed">
            Based in Charlotte, North Carolina, Quantix delivers precision analytics for hemp products—built to meet regulatory, financial, and commercial standards without delay.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/client-portal" className="apple-button text-lg px-8 py-4">
              Submit Sample
            </Link>
            <Link href="/services" className="apple-button-secondary text-lg px-8 py-4">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
