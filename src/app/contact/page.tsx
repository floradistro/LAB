"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import Card from "@/components/UI/Card";
import { useForm } from "@/hooks/useForm";
import { ValidationSchema } from "@/lib/validation";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  [key: string]: unknown;
}

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validationSchema: ValidationSchema = {
    name: [{ type: 'required' }],
    email: [{ type: 'required' }, { type: 'email' }],
    phone: [{ type: 'phone' }],
    company: [{ type: 'required' }],
    message: [{ type: 'required' }]
  };

  const form = useForm<ContactFormData>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    },
    validationSchema,
    onSubmit: async () => {
      try {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitStatus('success');
        form.reset();
      } catch {
        setSubmitStatus('error');
      }
    }
  });

  return (
    <Layout currentPage="contact">
      {/* Hero Section */}
      <section className="relative bg-white min-h-[80vh] md:min-h-[calc(100vh-4rem)] flex items-start justify-center px-4 gradient-mesh">
        <div className="max-w-4xl mx-auto py-8 md:py-6 relative w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 fade-in">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto slide-up">
              Our team is here to help you understand our testing processes, turnaround times, 
              and how we can support your cannabis operation. Don&apos;t hesitate to reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-1">Address</h3>
                    <p className="text-gray-600">
                      5540 Centerview Dr Ste 204 #982095<br />
                      Raleigh, NC 27606
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-1">Email</h3>
                    <a href="mailto:support@quantixanalytics.com" className="text-blue-600 hover:text-blue-800">
                      support@quantixanalytics.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-1">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Response Times</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Email responses within 2 hours during business hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Rush testing inquiries prioritized</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>24/7 client portal access for existing customers</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700">Thank you for your message! We&apos;ll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700">Something went wrong. Please try again.</p>
                </div>
              )}

              <form onSubmit={form.handleSubmit} className="space-y-4">
                <Input
                  label="Name"
                  placeholder="Your name"
                  required
                  {...form.getFieldProps('name')}
                  error={form.errors.name}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="email"
                    label="Email"
                    placeholder="you@company.com"
                    required
                    {...form.getFieldProps('email')}
                    error={form.errors.email}
                  />
                  
                  <Input
                    type="tel"
                    label="Phone"
                    placeholder="(555) 123-4567"
                    {...form.getFieldProps('phone')}
                    error={form.errors.phone}
                  />
                </div>
                
                <Input
                  label="Company"
                  placeholder="Your company name"
                  required
                  {...form.getFieldProps('company')}
                  error={form.errors.company}
                />
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your testing needs..."
                    required
                    {...form.getFieldProps('message')}
                  />
                  {form.errors.message && (
                    <p className="mt-1 text-xs text-red-600">{form.errors.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  fullWidth 
                  size="large"
                  loading={form.isSubmitting}
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What&apos;s your typical turnaround time?</h3>
                <p className="text-gray-600">
                  Standard testing is completed within 24-48 hours. Rush testing with same-day results 
                  is available for time-sensitive samples.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What types of samples do you accept?</h3>
                <p className="text-gray-600">
                  We test flower, concentrates, edibles, tinctures, topicals, and any other cannabis-derived 
                  products requiring compliance testing.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How much sample material is needed?</h3>
                <p className="text-gray-600">
                  Typically 2-5 grams for flower, 1-2 grams for concentrates, and 1-2 units for edibles. 
                  Contact us for specific requirements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Are you state certified?</h3>
                <p className="text-gray-600">
                  Yes, we maintain all required state certifications and follow ISO/IEC 17025 standards 
                  for laboratory testing.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
} 