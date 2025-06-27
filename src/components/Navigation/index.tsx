"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NavigationProps {
  currentPage?: 'home' | 'about' | 'services' | 'contact' | 'client-portal' | 'submit-sample';
}

export default function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home', id: 'home' },
    { href: '/about', label: 'About', id: 'about' },
    { href: '/services', label: 'Services', id: 'services' },
    { href: '/client-portal', label: 'Client Portal', id: 'client-portal' },
  ];

  return (
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
            {navItems.map((item) => (
              <Link 
                key={item.id}
                href={item.href} 
                className={`text-xs ${
                  currentPage === item.id 
                    ? 'text-gray-900 font-medium' 
                    : 'text-gray-600 hover:text-gray-900 transition-colors font-medium'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Submit Sample Button - Right Side */}
          <div className="flex ml-auto justify-end">
            <Link 
              href="/submit-sample" 
              className={currentPage === 'submit-sample' 
                ? "bg-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-medium opacity-50 cursor-not-allowed transition-all duration-150" 
                : "bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg"
              }
            >
              Submit Sample
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md">
          <div className="py-3 space-y-1">
            {navItems.map((item) => (
              <Link 
                key={item.id}
                href={item.href} 
                className={`block px-4 py-3 text-sm ${
                  currentPage === item.id 
                    ? 'text-gray-900 font-medium' 
                    : 'text-gray-700 hover:text-gray-900'
                } hover:bg-gray-50 transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
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
  );
} 