"use client";

import Image from "next/image";
import Layout from "@/components/Layout";
import Button from "@/components/UI/Button";
import Card from "@/components/UI/Card";

export default function Home() {
  return (
    <Layout currentPage="home">
      {/* Hero Section */}
      <section className="relative bg-white min-h-screen flex items-center justify-center px-4 gradient-mesh">
        <div className="max-w-6xl mx-auto text-center py-20 relative">
          {/* Logo and Brand */}
          <div className="fade-in mb-12">
            <div className="flex items-center justify-center mb-10 -space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-25"></div>
                <Image
                  src="/quantixlogo.png"
                  alt="Quantix Logo"
                  width={140}
                  height={140}
                  className="w-32 h-32 md:w-36 md:h-36 relative z-10 drop-shadow-xl"
                />
              </div>
              <h1 className="text-7xl md:text-9xl font-bold text-gray-900 tracking-tight">
                Quantix
              </h1>
            </div>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Full-panel cannabis testing with 24–48 hour turnaround.<br />
              <span className="text-gray-500">Trusted by growers, brands, and distributors across the cannabis industry.</span>
            </p>
            
                         {/* CTA Buttons */}
             <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <Button href="/submit-sample" size="large" className="font-semibold">
                Submit Sample
              </Button>
              <Button href="/services" variant="secondary" size="large" className="font-semibold">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Quantix Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why <span style={{color: '#007aff'}}>Quantix</span>?</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center slide-up">
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Verified Results</h3>
              <p className="text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
                Accurate, lab-grade testing designed for real-world production and compliance.
              </p>
            </div>
            
            <div className="text-center slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Secure Infrastructure</h3>
              <p className="text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
                Encrypted data, permanent access to every report, and protected digital records.
              </p>
            </div>
            
            <div className="text-center slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Effortless Intake</h3>
              <p className="text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
                Register in minutes, print your shipping labels, and send your samples — it's that easy.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Experience the Difference</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Submit your samples today and get results within 24-48 hours.<br />
            <span className="text-gray-500">Professional testing that keeps your business moving forward.</span>
          </p>
                     <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button href="/submit-sample" size="large" className="font-semibold">
              Submit Your Sample
            </Button>
            <Button href="/contact" variant="secondary" size="large" className="font-semibold">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
