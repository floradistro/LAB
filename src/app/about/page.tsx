"use client";

import Image from "next/image";
import Layout from "@/components/Layout";
import Button from "@/components/UI/Button";
import Card from "@/components/UI/Card";

export default function About() {
  return (
    <Layout currentPage="about">
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
          </div>

          {/* Content Sections */}
          <div className="space-y-12 md:space-y-10">
            {/* Mission Section */}
            <Card className="p-8 md:p-6 slide-up">
              <h2 className="text-2xl md:text-xl font-bold text-gray-900 mb-4 md:mb-3">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-sm">
                Quantix Analytics exists to provide cannabis operators with the fastest, most accurate testing 
                results in the industry. We understand that in this business, time equals money—and lab errors 
                don&apos;t just hurt margins—they delay launches, stall sales, and put compliance at risk.
              </p>
            </Card>

            {/* Why We're Different */}
            <Card className="p-8 md:p-6 slide-up">
              <h2 className="text-2xl md:text-xl font-bold text-gray-900 mb-4 md:mb-3">Why We&apos;re Different</h2>
              <div className="space-y-4 md:space-y-3">
                <div>
                  <h3 className="text-lg md:text-base font-semibold text-gray-900 mb-2">Speed Without Compromise</h3>
                  <p className="text-gray-600 text-base md:text-sm leading-relaxed">
                    24-48 hour turnaround is our standard, not our exception. We&apos;ve built our entire operation 
                    around speed because we know that in cannabis, every second matters. Products need to hit 
                    shelves without delay, whether you&apos;re a farm, retailer, or distributor. We designed our 
                    lab around that urgency.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg md:text-base font-semibold text-gray-900 mb-2">Built for Scale</h3>
                  <p className="text-gray-600 text-base md:text-sm leading-relaxed">
                    From small craft batches to large-scale commercial operations, our processes adapt to your 
                    needs. Whether you&apos;re a local cultivator or a national brand, we&apos;re structured to 
                    move fast and deliver clarity.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg md:text-base font-semibold text-gray-900 mb-2">Technology First</h3>
                  <p className="text-gray-600 text-base md:text-sm leading-relaxed">
                    State-of-the-art equipment, automated workflows, and digital reporting mean you get results 
                    faster and with complete transparency. We don&apos;t believe in waiting a week for test 
                    results that barely tell you anything.
                  </p>
                </div>
              </div>
            </Card>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
              <Card className="p-6 md:p-4 text-center slide-up">
                <div className="w-16 h-16 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-3">
                  <svg className="w-8 h-8 md:w-6 md:h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-base font-semibold text-gray-900 mb-2">Speed</h3>
                <p className="text-gray-600 text-sm md:text-xs">24-48 hour results, guaranteed</p>
              </Card>
              
              <Card className="p-6 md:p-4 text-center slide-up">
                <div className="w-16 h-16 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-3">
                  <svg className="w-8 h-8 md:w-6 md:h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-base font-semibold text-gray-900 mb-2">Accuracy</h3>
                <p className="text-gray-600 text-sm md:text-xs">ISO-certified precision you can trust</p>
              </Card>
              
              <Card className="p-6 md:p-4 text-center slide-up">
                <div className="w-16 h-16 md:w-12 md:h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-3">
                  <svg className="w-8 h-8 md:w-6 md:h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-base font-semibold text-gray-900 mb-2">Partnership</h3>
                <p className="text-gray-600 text-sm md:text-xs">Your success is our priority</p>
              </Card>
            </div>

            {/* Call to Action */}
            <Card className="p-8 md:p-6 text-center bg-gradient-subtle slide-up">
              <h2 className="text-2xl md:text-xl font-bold text-gray-900 mb-4 md:mb-3">Ready to Experience the Difference?</h2>
              <p className="text-gray-600 mb-6 md:mb-4 text-base md:text-sm">
                We built Quantix to support operators who move fast and don&apos;t have time for guesswork. 
                If you&apos;re a cultivator, formulator, processor, or brand, you need results you can 
                trust—and you need them without delay. That&apos;s what we do.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/submit-sample" size="medium">
                  Submit a Sample
                </Button>
                <Button href="/contact" variant="secondary" size="medium">
                  Contact Us
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
} 