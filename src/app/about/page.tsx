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
            {/* About Section */}
            <Card className="p-8 md:p-6 slide-up">
              <p className="text-gray-600 leading-relaxed text-base md:text-sm">
                Quantix Analytics is an independent cannabis testing lab based in Charlotte, North Carolina—right in the middle of one of the fastest-growing hemp and cannabis markets on the East Coast. We started Quantix after years of working in the industry ourselves—managing production and supply chains across California, Michigan, and Colorado. The lab reflects that background: it&apos;s built to be lean, reliable, and fast—designed for operators who need results they can trust without slowing things down.
              </p>
              <br />
              <p className="text-gray-600 leading-relaxed text-base md:text-sm">
                We handle analytical testing for a wide range of products, with a focus on speed, accuracy, and consistency. That includes potency, pesticide screening, heavy metals, and microbial panels—all run on validated methods and trusted instrumentation that meet regulatory standards. Everything moves through a fully digital pipeline: from the moment a sample is logged to the moment a COA is delivered, every step is tracked, time-stamped, and built for transparency.
              </p>
              <br />
              <p className="text-gray-600 leading-relaxed text-base md:text-sm">
                We work with teams all over the East Coast and beyond. Whether you&apos;re running a single batch or scaling across multiple states, we keep pace—and keep it clean.
              </p>
            </Card>



            {/* Call to Action */}
            <Card className="p-8 md:p-6 text-center bg-gradient-subtle slide-up">
              <h2 className="text-2xl md:text-xl font-bold text-gray-900 mb-4 md:mb-3">See What We Test</h2>
              <p className="text-gray-600 mb-6 md:mb-4 text-base md:text-sm">
                From potency to pesticides, heavy metals to microbials—our testing services are built 
                for operators who need accurate results without the wait. See our full testing menu 
                and turnaround times.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/services" size="medium">
                  View Testing Services
                </Button>
                <Button href="/submit-sample" variant="secondary" size="medium">
                  Submit a Sample
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
} 