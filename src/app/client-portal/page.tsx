"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import Card from "@/components/UI/Card";
import Skeleton from "@/components/UI/Skeleton";
import { useForm } from "@/hooks/useForm";
import { ValidationSchema } from "@/lib/validation";

type LoginFormData = {
  email: string;
  password: string;
  [key: string]: unknown;
};

type SignupFormData = {
  email: string;
  password: string;
  companyName: string;
  confirmPassword: string;
  [key: string]: unknown;
};

export default function ClientPortal() {
  const [mounted, setMounted] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('results');

  const loginValidation: ValidationSchema = {
    email: [{ type: 'required' }, { type: 'email' }],
    password: [{ type: 'required' }]
  };

  const signupValidation: ValidationSchema = {
    companyName: [{ type: 'required' }],
    email: [{ type: 'required' }, { type: 'email' }],
    password: [{ type: 'required' }],
    confirmPassword: [{ type: 'required' }]
  };

  const loginForm = useForm<LoginFormData>({
    initialValues: { email: '', password: '' },
    validationSchema: loginValidation,
    onSubmit: async () => {
      // Simulate login
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoggedIn(true);
    }
  });

  const signupForm = useForm<SignupFormData>({
    initialValues: { email: '', password: '', companyName: '', confirmPassword: '' },
    validationSchema: signupValidation,
    onSubmit: async (values) => {
      if (values.password !== values.confirmPassword) {
        signupForm.setFieldError('confirmPassword', 'Passwords do not match');
        return;
      }
      // Simulate signup
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoggedIn(true);
    }
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Layout currentPage="client-portal">
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="text-center">
            <Skeleton variant="circular" width={48} height={48} className="mx-auto mb-4" />
            <Skeleton variant="text" width={200} height={24} className="mx-auto" />
          </div>
        </div>
      </Layout>
    );
  }

  if (isLoggedIn) {
    return (
      <Layout currentPage="client-portal">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Dashboard Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Client Dashboard</h1>
            <p className="text-gray-600">Welcome back! Manage your test results and account.</p>
          </div>

          {/* Mobile-Optimized Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <div className="flex overflow-x-auto scrollbar-hide -mb-px">
              {[
                { id: 'results', label: 'Test Results', icon: '📊' },
                { id: 'submit', label: 'Submit Sample', icon: '🧪' },
                { id: 'account', label: 'Account', icon: '⚙️' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-6 py-3 text-sm font-medium whitespace-nowrap
                    border-b-2 transition-colors
                    ${activeTab === tab.id 
                      ? 'border-blue-500 text-blue-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                  `}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'results' && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <h2 className="text-xl font-semibold">Recent Test Results</h2>
                  <Input
                    type="search"
                    placeholder="Search results..."
                    className="w-full sm:w-64"
                  />
                </div>

                {/* Sample Results - Mobile Optimized Cards */}
                <div className="grid gap-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="p-4 hover:shadow-lg transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-gray-900">Sample #{2024000 + i}</h3>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Complete
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">Product: THCA Flower - Batch A{i}</p>
                          <p className="text-xs text-gray-500">Submitted: {new Date().toLocaleDateString()}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="small" variant="secondary">
                            View COA
                          </Button>
                          <Button size="small">
                            Download
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center pt-6">
                  <Button variant="secondary">Load More Results</Button>
                </div>
              </div>
            )}

            {activeTab === 'submit' && (
              <div className="max-w-2xl mx-auto">
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Quick Sample Submission</h2>
                  <form className="space-y-4">
                    <Input
                      label="Sample ID"
                      placeholder="Enter your sample ID"
                      required
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Product Type"
                        placeholder="e.g., Flower, Extract"
                        required
                      />
                      <Input
                        label="Batch Number"
                        placeholder="Enter batch number"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Testing Required
                      </label>
                      <div className="space-y-2">
                        {['Potency', 'Pesticides', 'Microbials', 'Heavy Metals'].map((test) => (
                          <label key={test} className="flex items-center">
                            <input type="checkbox" className="mr-2 rounded" />
                            <span className="text-sm">{test}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <Button fullWidth size="large">
                      Submit Sample
                    </Button>
                  </form>
                </Card>
              </div>
            )}

            {activeTab === 'account' && (
              <div className="max-w-2xl mx-auto space-y-6">
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Account Information</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">Company Name</p>
                      <p className="font-medium">Demo Company LLC</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium">demo@example.com</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Account Type</p>
                      <p className="font-medium">Premium</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                  <div className="space-y-3">
                    <Button fullWidth variant="secondary">Update Profile</Button>
                    <Button fullWidth variant="secondary">Billing & Invoices</Button>
                    <Button fullWidth variant="secondary">Download All Results</Button>
                    <Button 
                      fullWidth 
                      variant="secondary"
                      onClick={() => setIsLoggedIn(false)}
                      className="!text-red-600 hover:!bg-red-50"
                    >
                      Sign Out
                    </Button>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
  }

  // Login/Signup Form
  return (
    <Layout currentPage="client-portal">
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md p-8">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Image
                src="/quantixlogo.png"
                alt="Quantix Logo"
                width={60}
                height={60}
                className="drop-shadow-lg"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-gray-600 mt-2">
              {isLogin ? 'Sign in to access your results' : 'Start managing your test results'}
            </p>
          </div>

          {/* Form */}
          {isLogin ? (
            <form onSubmit={loginForm.handleSubmit} className="space-y-4">
              <Input
                type="email"
                label="Email"
                placeholder="you@company.com"
                required
                {...loginForm.getFieldProps('email')}
                error={loginForm.errors.email}
              />
              <Input
                type="password"
                label="Password"
                placeholder="Enter your password"
                required
                {...loginForm.getFieldProps('password')}
                error={loginForm.errors.password}
              />
              
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 rounded" />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                  Forgot password?
                </a>
              </div>

              <Button 
                type="submit" 
                fullWidth 
                size="large"
                loading={loginForm.isSubmitting}
              >
                Sign In
              </Button>
            </form>
          ) : (
            <form onSubmit={signupForm.handleSubmit} className="space-y-4">
              <Input
                label="Company Name"
                placeholder="Your company name"
                required
                {...signupForm.getFieldProps('companyName')}
                error={signupForm.errors.companyName}
              />
              <Input
                type="email"
                label="Email"
                placeholder="you@company.com"
                required
                {...signupForm.getFieldProps('email')}
                error={signupForm.errors.email}
              />
              <Input
                type="password"
                label="Password"
                placeholder="Create a password"
                required
                {...signupForm.getFieldProps('password')}
                error={signupForm.errors.password}
              />
              <Input
                type="password"
                label="Confirm Password"
                placeholder="Confirm your password"
                required
                {...signupForm.getFieldProps('confirmPassword')}
                error={signupForm.errors.confirmPassword}
              />
              
              <Button 
                type="submit" 
                fullWidth 
                size="large"
                loading={signupForm.isSubmitting}
              >
                Create Account
              </Button>
            </form>
          )}

          {/* Toggle Form */}
          <div className="text-center pt-6 border-t border-gray-100 mt-6">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  loginForm.reset();
                  signupForm.reset();
                }}
                className="ml-1 text-blue-600 hover:text-blue-800 transition-colors font-medium"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
}