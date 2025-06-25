"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import Card from "@/components/UI/Card";
import { useForm } from "@/hooks/useForm";
import { ValidationSchema } from "@/lib/validation";

interface SampleFormData {
  // Contact Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  
  // Sample Details
  sampleType: string;
  sampleName: string;
  batchNumber: string;
  sampleSize: string;
  
  // Testing Requirements
  testingPackage: string;
  rushTesting: boolean;
  additionalNotes: string;
  
  [key: string]: unknown;
}

export default function SubmitSample() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [currentStep, setCurrentStep] = useState(1);

  const validationSchema: ValidationSchema = {
    firstName: [{ type: 'required' }],
    lastName: [{ type: 'required' }],
    email: [{ type: 'required' }, { type: 'email' }],
    phone: [{ type: 'required' }, { type: 'phone' }],
    companyName: [{ type: 'required' }],
    sampleType: [{ type: 'required' }],
    sampleName: [{ type: 'required' }],
    batchNumber: [{ type: 'required' }],
    testingPackage: [{ type: 'required' }]
  };

  const form = useForm<SampleFormData>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      companyName: '',
      sampleType: '',
      sampleName: '',
      batchNumber: '',
      sampleSize: '',
      testingPackage: '',
      rushTesting: false,
      additionalNotes: ''
    },
    validationSchema,
    onSubmit: async () => {
      try {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        setSubmitStatus('success');
        form.reset();
        setCurrentStep(1);
      } catch {
        setSubmitStatus('error');
      }
    }
  });

  const totalSteps = 3;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="First Name"
                placeholder="John"
                required
                {...form.getFieldProps('firstName')}
                error={form.errors.firstName}
              />
              <Input
                label="Last Name"
                placeholder="Doe"
                required
                {...form.getFieldProps('lastName')}
                error={form.errors.lastName}
              />
            </div>
            <Input
              type="email"
              label="Email"
              placeholder="john@company.com"
              required
              {...form.getFieldProps('email')}
              error={form.errors.email}
            />
            <Input
              type="tel"
              label="Phone"
              placeholder="(555) 123-4567"
              required
              {...form.getFieldProps('phone')}
              error={form.errors.phone}
            />
            <Input
              label="Company Name"
              placeholder="Your company name"
              required
              {...form.getFieldProps('companyName')}
              error={form.errors.companyName}
            />
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sample Details</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sample Type <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full px-3 py-2.5 md:py-2 text-sm md:text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                {...form.getFieldProps('sampleType')}
              >
                <option value="">Select sample type</option>
                <option value="flower">Flower</option>
                <option value="concentrate">Concentrate/Extract</option>
                <option value="edible">Edible</option>
                <option value="tincture">Tincture/Oil</option>
                <option value="topical">Topical</option>
                <option value="other">Other</option>
              </select>
              {form.errors.sampleType && (
                <p className="mt-1 text-xs text-red-600">{form.errors.sampleType}</p>
              )}
            </div>
            <Input
              label="Sample Name"
              placeholder="e.g., Blue Dream Batch #47"
              required
              {...form.getFieldProps('sampleName')}
              error={form.errors.sampleName}
            />
            <Input
              label="Batch Number"
              placeholder="e.g., BD-2024-047"
              required
              {...form.getFieldProps('batchNumber')}
              error={form.errors.batchNumber}
            />
            <Input
              label="Sample Size"
              placeholder="e.g., 5 grams"
              helpText="Minimum 2g for flower, 1g for concentrates"
              {...form.getFieldProps('sampleSize')}
              error={form.errors.sampleSize}
            />
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Testing Requirements</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Testing Package <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full px-3 py-2.5 md:py-2 text-sm md:text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                {...form.getFieldProps('testingPackage')}
              >
                <option value="">Select testing package</option>
                <option value="basic">Basic Potency ($75)</option>
                <option value="full">Full Panel - Potency + Safety ($250)</option>
                <option value="potency-terpenes">Potency + Terpenes ($140)</option>
                <option value="safety">Safety Only - Pesticides, Microbials, Heavy Metals ($175)</option>
                <option value="custom">Custom Testing (Contact for Quote)</option>
              </select>
              {form.errors.testingPackage && (
                <p className="mt-1 text-xs text-red-600">{form.errors.testingPackage}</p>
              )}
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-3 rounded"
                  checked={form.values.rushTesting as boolean}
                  onChange={(e) => form.setFieldValue('rushTesting', e.target.checked)}
                />
                <div>
                  <span className="text-sm font-medium text-gray-900">Rush Testing</span>
                  <p className="text-xs text-gray-600">Same-day results (+50% rush fee)</p>
                </div>
              </label>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any special instructions or requirements..."
                {...form.getFieldProps('additionalNotes')}
              />
            </div>
          </div>
        );
    }
  };

  if (submitStatus === 'success') {
    return (
      <Layout currentPage="submit-sample">
        <div className="min-h-[80vh] flex items-center justify-center px-4">
          <Card className="max-w-md w-full p-8 text-center">
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Sample Submitted Successfully!</h2>
            <p className="text-gray-600 mb-6">
              We&apos;ve received your sample submission. You&apos;ll receive a confirmation email 
              with shipping instructions and your sample tracking number.
            </p>
            <div className="space-y-3">
              <Button onClick={() => {
                setSubmitStatus('idle');
                form.reset();
              }} fullWidth>
                Submit Another Sample
              </Button>
              <Button href="/client-portal" variant="secondary" fullWidth>
                Go to Client Portal
              </Button>
            </div>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout currentPage="submit-sample">
      <section className="relative bg-white min-h-[80vh] md:min-h-[calc(100vh-4rem)] flex items-start justify-center px-4 gradient-mesh">
        <div className="max-w-2xl mx-auto py-8 md:py-6 relative w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 fade-in">
              Submit Your Sample
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto slide-up">
              Start your testing process with our simple 3-step submission form
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm
                    ${currentStep >= step 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-600'}
                    transition-colors
                  `}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`
                      flex-1 h-1 mx-2
                      ${currentStep > step ? 'bg-blue-600' : 'bg-gray-200'}
                      transition-colors
                    `} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-600">
              <span>Contact Info</span>
              <span>Sample Details</span>
              <span>Testing Options</span>
            </div>
          </div>

          {/* Form Card */}
          <Card className="p-6 md:p-8">
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700">Something went wrong. Please try again.</p>
              </div>
            )}

            <form onSubmit={form.handleSubmit}>
              {renderStepContent()}

              <div className="flex gap-4 mt-8">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={prevStep}
                    fullWidth
                  >
                    Previous
                  </Button>
                )}
                
                {currentStep < totalSteps ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    fullWidth
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    fullWidth
                    loading={form.isSubmitting}
                  >
                    Submit Sample
                  </Button>
                )}
              </div>
            </form>
          </Card>

          {/* Info Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Fast Turnaround</h3>
              <p className="text-sm text-gray-600">24-48 hour results</p>
            </Card>
            
            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">State Certified</h3>
              <p className="text-sm text-gray-600">Full compliance testing</p>
            </Card>
            
            <Card className="p-4 text-center">
              <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Digital Results</h3>
              <p className="text-sm text-gray-600">Access via client portal</p>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}