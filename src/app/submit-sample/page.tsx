"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SubmitSample() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Sample Information
    sampleType: '',
    productType: '',
    testingRequested: [] as string[],
    urgency: 'standard',
    sampleQuantity: '',
    batchSize: '',
    harvestDate: '',
    
    // Additional Information
    specialInstructions: '',
    regulatoryCompliance: '',
    previousClient: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'testingRequested') {
        setFormData(prev => ({
          ...prev,
          testingRequested: checked 
            ? [...prev.testingRequested, value]
            : prev.testingRequested.filter(item => item !== value)
        }));
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-12 md:h-9">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/quantixlogo.png"
                  alt="Quantix Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
            </div>
          </div>
        </nav>

        {/* Success Message */}
        <div className="min-h-[calc(100vh-3rem)] md:min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
              Submission Received
            </h1>
            <p className="text-xs text-gray-600 mb-4 font-light leading-snug">
              Sample intake form processed. Laboratory protocols and client access credentials will be transmitted via email.
            </p>
            <div className="bg-gray-50 rounded-lg p-3 mb-4 text-left">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-xs md:text-[11px]">Sample preparation protocols and handling specifications</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-xs md:text-[11px]">Laboratory shipping address and packaging requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-xs md:text-[11px]">Chain of custody documentation and tracking forms</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-xs md:text-[11px]">Client portal authentication credentials and access instructions</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Link href="/" className="apple-button px-6 py-2 w-full sm:w-auto">
                Return Home
              </Link>
              <Link href="/services" className="apple-button-secondary px-6 py-2 w-full sm:w-auto">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
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
              <Link href="/services" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Services
              </Link>
              <Link href="/client-portal" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Client Portal
              </Link>
            </div>

            {/* Submit Sample Button - Right Side */}
            <div className="flex ml-auto w-64 justify-end">
              <span className="apple-button opacity-50 cursor-not-allowed">
                Submit Sample
              </span>
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
              <div className="px-4 py-3">
                <span className="text-sm text-gray-900 font-medium">Submit Sample</span>
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
            Sample Submission Portal
          </h2>
          <p className="text-xs text-gray-600 max-w-2xl mx-auto font-light leading-snug">
            Complete intake form for laboratory analysis. Sample preparation protocols, shipping instructions, and client portal credentials will be provided upon submission.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-3">
          {/* Company Information */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-3">
            <h2 className="text-sm font-semibold text-gray-900 mb-3">Client Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="companyName" className="block text-xs md:text-[11px] font-medium text-gray-700 mb-1">
                  Organization *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm md:text-xs"
                />
              </div>
              <div>
                <label htmlFor="contactName" className="block text-xs md:text-[11px] font-medium text-gray-700 mb-1">
                  Primary Contact *
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  required
                  value={formData.contactName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm md:text-xs"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs md:text-[11px] font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm md:text-xs"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs md:text-[11px] font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm md:text-xs"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-xs md:text-[11px] font-medium text-gray-700 mb-1">
                  Facility Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm md:text-xs"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-xs md:text-[11px] font-medium text-gray-700 mb-1">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm md:text-xs"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-xs md:text-[11px] font-medium text-gray-700 mb-1">
                  State *
                </label>
                <select
                  id="state"
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm md:text-xs"
                >
                  <option value="">Select State</option>
                  <option value="NC">North Carolina</option>
                  <option value="SC">South Carolina</option>
                  <option value="VA">Virginia</option>
                  <option value="TN">Tennessee</option>
                  <option value="GA">Georgia</option>
                  <option value="FL">Florida</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-xs md:text-[11px] font-medium text-gray-700 mb-1">
                  ZIP *
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  required
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm md:text-xs"
                />
              </div>
            </div>
          </div>

          {/* Sample Information */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-3">
            <h2 className="text-sm font-semibold text-gray-900 mb-3">Sample Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="sampleType" className="block text-xs md:text-[11px] font-medium text-gray-700 mb-1">
                  Matrix Type *
                </label>
                <select
                  id="sampleType"
                  name="sampleType"
                  required
                  value={formData.sampleType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm md:text-xs"
                >
                  <option value="">Select Matrix</option>
                  <option value="flower">Flower/Biomass</option>
                  <option value="concentrate">Concentrate/Extract</option>
                  <option value="edible">Edible Product</option>
                  <option value="topical">Topical Product</option>
                  <option value="tincture">Tincture/Oil</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="productType" className="block text-xs md:text-[11px] font-medium text-gray-700 mb-1">
                  Cannabinoid Class *
                </label>
                <select
                  id="productType"
                  name="productType"
                  required
                  value={formData.productType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm md:text-xs"
                >
                  <option value="">Select Class</option>
                  <option value="hemp">Hemp (≤0.3% THC)</option>
                  <option value="cbd">CBD Dominant</option>
                  <option value="delta8">Delta-8 THC</option>
                  <option value="delta9">Delta-9 THC</option>
                  <option value="other">Other Cannabinoid</option>
                </select>
              </div>
              <div>
                <label htmlFor="sampleQuantity" className="block text-xs md:text-[11px] font-medium text-gray-700 mb-1">
                  Sample Mass *
                </label>
                <input
                  type="text"
                  id="sampleQuantity"
                  name="sampleQuantity"
                  required
                  placeholder="10g, 2 units"
                  value={formData.sampleQuantity}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm md:text-xs"
                />
              </div>
              <div>
                <label htmlFor="batchSize" className="block text-xs md:text-[11px] font-medium text-gray-700 mb-1">
                  Lot Size
                </label>
                <input
                  type="text"
                  id="batchSize"
                  name="batchSize"
                  placeholder="100 lbs, 500 units"
                  value={formData.batchSize}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm md:text-xs"
                />
              </div>
              <div>
                <label htmlFor="harvestDate" className="block text-xs md:text-[11px] font-medium text-gray-700 mb-1">
                  Production Date
                </label>
                <input
                  type="date"
                  id="harvestDate"
                  name="harvestDate"
                  value={formData.harvestDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm md:text-xs"
                />
              </div>
              <div>
                <label htmlFor="urgency" className="block text-xs md:text-[11px] font-medium text-gray-700 mb-1">
                  Turnaround Time *
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  required
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm md:text-xs"
                >
                  <option value="standard">Standard (5-7 days)</option>
                  <option value="priority">Priority (3-5 days)</option>
                  <option value="rush">Rush (24-48 hrs)</option>
                </select>
              </div>
            </div>

            {/* Testing Requested */}
            <div className="mt-4 md:mt-3">
              <label className="block text-xs md:text-[11px] font-medium text-gray-700 mb-2">
                Analytical Methods * (Select all required)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-1.5">
                {[
                  'Cannabinoid Potency',
                  'Terpene Profile',
                  'Pesticide Screen',
                  'Heavy Metals',
                  'Microbial Analysis',
                  'Residual Solvents',
                  'Moisture Content',
                  'Foreign Matter'
                ].map((test) => (
                  <label key={test} className="flex items-center space-x-3 md:space-x-2 p-3 md:p-2 rounded border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      name="testingRequested"
                      value={test}
                      onChange={handleInputChange}
                      className="w-4 h-4 md:w-3 md:h-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-xs md:text-[11px] text-gray-700">{test}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-3">
            <h2 className="text-sm font-semibold text-gray-900 mb-3">Regulatory & Notes</h2>
            <div className="space-y-3">
              <div>
                <label htmlFor="regulatoryCompliance" className="block text-xs md:text-[11px] font-medium text-gray-700 mb-1">
                  Compliance Requirements
                </label>
                <select
                  id="regulatoryCompliance"
                  name="regulatoryCompliance"
                  value={formData.regulatoryCompliance}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm md:text-xs"
                >
                  <option value="">None specified</option>
                  <option value="usda-organic">USDA Organic Certification</option>
                  <option value="state-compliance">State Regulatory Compliance</option>
                  <option value="third-party-verification">Third-Party Verification</option>
                  <option value="other">Other Requirements</option>
                </select>
              </div>
              <div>
                <label htmlFor="specialInstructions" className="block text-xs md:text-[11px] font-medium text-gray-700 mb-1">
                  Special Handling Instructions
                </label>
                <textarea
                  id="specialInstructions"
                  name="specialInstructions"
                  rows={3}
                  placeholder="Chain of custody requirements, special storage conditions, reporting specifications..."
                  value={formData.specialInstructions}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 md:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none text-sm md:text-xs"
                />
              </div>
              <div>
                <label className="flex items-center space-x-3 md:space-x-2">
                  <input
                    type="checkbox"
                    name="previousClient"
                    checked={formData.previousClient}
                    onChange={handleInputChange}
                    className="w-4 h-4 md:w-3 md:h-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-xs md:text-[11px] text-gray-700">Existing client account</span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`apple-button px-8 py-3 md:py-2 ${
                isSubmitting 
                  ? 'opacity-50 cursor-not-allowed' 
                  : ''
              } transition-all duration-200`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing
                </span>
              ) : (
                'Submit for Analysis'
              )}
            </button>
            <p className="text-xs md:text-[11px] text-gray-500 mt-2">
              Submission constitutes agreement to laboratory terms and conditions.
            </p>
          </div>
        </form>
      </div>

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