"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Layout from "@/components/Layout";
import Button from "@/components/UI/Button";
import Card from "@/components/UI/Card";

// Pricing Inquiry Form Component
function PricingInquiryForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    testingNeeds: [] as string[],
    sampleVolume: '',
    turnaroundTime: '',
    additionalInfo: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const testingOptions = [
    'Potency (Cannabinoids)',
    'Pesticide Screening',
    'Heavy Metals',
    'Microbial Testing',
    'Terpene Profile',
    'Residual Solvents',
    'Water Activity',
    'Moisture Content'
  ];

  const handleTestingNeedChange = (option: string) => {
    setFormData(prev => ({
      ...prev,
      testingNeeds: prev.testingNeeds.includes(option)
        ? prev.testingNeeds.filter(need => need !== option)
        : [...prev.testingNeeds, option]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Request Submitted!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for your inquiry. We&apos;ll get back to you within 24 hours with a custom quote.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="secondary">
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            required
            value={formData.companyName}
            onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your company name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contact Name *
          </label>
          <input
            type="text"
            required
            value={formData.contactName}
            onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your full name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Testing Services Needed *
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {testingOptions.map((option) => (
            <label key={option} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.testingNeeds.includes(option)}
                onChange={() => handleTestingNeedChange(option)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Expected Sample Volume *
          </label>
          <select
            required
            value={formData.sampleVolume}
            onChange={(e) => setFormData(prev => ({ ...prev, sampleVolume: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select volume range</option>
            <option value="1-10">1-10 samples/month</option>
            <option value="11-50">11-50 samples/month</option>
            <option value="51-100">51-100 samples/month</option>
            <option value="100+">100+ samples/month</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Turnaround Time Preference
          </label>
          <select
            value={formData.turnaroundTime}
            onChange={(e) => setFormData(prev => ({ ...prev, turnaroundTime: e.target.value }))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select preference</option>
            <option value="same-day">Same day (rush)</option>
            <option value="24-hours">24 hours</option>
            <option value="48-hours">48 hours (standard)</option>
            <option value="3-5-days">3-5 business days</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Additional Information
        </label>
        <textarea
          value={formData.additionalInfo}
          onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Tell us about any specific requirements, questions, or additional details..."
        />
      </div>

      <div className="text-center">
        <Button
          type="submit"
          size="large"
          className="font-medium"
        >
          Get Custom Quote
        </Button>
      </div>
    </form>
  );
}

export default function Services() {
  return (
    <Layout currentPage="services">
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

          {/* Core Testing Services */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 slide-up hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <div className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <div className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <div className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">R&D Support</h4>
                  <p className="text-sm text-gray-600">
                    Custom testing protocols for product development and formulation
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Rush Testing</h4>
                  <p className="text-sm text-gray-600">
                    Same-day results available for time-sensitive samples
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* Pricing Inquiry Funnel */}
      <section id="pricing" className="py-12 md:py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Get Custom Pricing</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Tell us about your testing needs and we&apos;ll provide a tailored quote within 24 hours
            </p>
          </div>

          <Card className="p-8 md:p-10 bg-white shadow-xl">
            <PricingInquiryForm />
          </Card>

          {/* Why Choose Us */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
              <p className="text-sm text-gray-600">
                Volume discounts and flexible packages to fit your budget
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Turnaround</h3>
              <p className="text-sm text-gray-600">
                24-48 hour standard results, same-day rush available
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Full Compliance</h3>
              <p className="text-sm text-gray-600">
                State-certified lab with complete regulatory documentation
              </p>
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
              onClick={() => document.getElementById('pricing')?.scrollIntoView()}
              className="apple-button-secondary w-full sm:w-auto"
            >
              Get Pricing Quote
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
} 