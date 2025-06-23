"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import Button from "@/components/UI/Button";
import Card from "@/components/UI/Card";

export default function Home() {
  return (
    <Layout currentPage="home">
      {/* Hero Section */}
      <section className="relative bg-white min-h-[80vh] md:min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 gradient-mesh">
        <div className="max-w-4xl mx-auto text-center py-16 md:py-12 relative">
          <div className="fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Cannabis Testing
              <span className="block text-blue-600">Redefined</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Professional lab results in 24-48 hours. State-certified testing for potency, 
              pesticides, microbials, and heavy metals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/submit-sample" size="large">
                Submit Sample
              </Button>
              <Button href="/services" variant="secondary" size="large">
                View Services
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 md:mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center slide-up">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 animate-number">24hr</div>
              <div className="text-sm text-gray-600 mt-1">Turnaround</div>
            </div>
            <div className="text-center slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 animate-number">99.9%</div>
              <div className="text-sm text-gray-600 mt-1">Accuracy</div>
            </div>
            <div className="text-center slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 animate-number">ISO</div>
              <div className="text-sm text-gray-600 mt-1">Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Testing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card hover className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Potency Testing</h3>
              <p className="text-gray-600 text-sm">Accurate cannabinoid profiling for THC, CBD, and more</p>
            </Card>
            
            <Card hover className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Pesticide Screening</h3>
              <p className="text-gray-600 text-sm">Comprehensive testing for harmful pesticides</p>
            </Card>
            
            <Card hover className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Microbial Testing</h3>
              <p className="text-gray-600 text-sm">Detection of mold, yeast, and harmful bacteria</p>
            </Card>
            
            <Card hover className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Heavy Metals</h3>
              <p className="text-gray-600 text-sm">Testing for lead, mercury, cadmium, and arsenic</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Submit your samples today and get results within 24-48 hours
          </p>
          <Button href="/submit-sample" size="large">
            Submit Your Sample
          </Button>
        </div>
      </section>
    </Layout>
  );
}
