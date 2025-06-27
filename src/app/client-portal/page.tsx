"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import Card from "@/components/UI/Card";
import Skeleton from "@/components/UI/Skeleton";

export default function ClientPortal() {
  const [mounted, setMounted] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Always show invalid credentials
    setShowError(true);
    setIsSubmitting(false);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Always show error for signup too
    setShowError(true);
    setIsSubmitting(false);
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending reset email
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setResetSent(true);
    setIsSubmitting(false);
  };

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

  if (showForgotPassword) {
    return (
      <Layout currentPage="client-portal">
        <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
          <Card className="w-full max-w-md p-8">
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
                Reset Password
              </h1>
              <p className="text-gray-600 mt-2">
                Enter your email to receive reset instructions
              </p>
            </div>

            {resetSent ? (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Check your email</h3>
                <p className="text-gray-600 text-sm">
                  We've sent password reset instructions to <strong>{resetEmail}</strong>
                </p>
                <p className="text-gray-500 text-xs">
                  Didn't receive the email? Check your spam folder or try again in a few minutes.
                </p>
                <Button 
                  fullWidth 
                  variant="secondary"
                  onClick={() => {
                    setShowForgotPassword(false);
                    setResetSent(false);
                    setResetEmail('');
                  }}
                >
                  Back to Sign In
                </Button>
              </div>
            ) : (
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <Input
                  type="email"
                  label="Email Address"
                  placeholder="you@company.com"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required
                />
                
                <Button 
                  type="submit" 
                  fullWidth 
                  size="large"
                  loading={isSubmitting}
                >
                  Send Reset Instructions
                </Button>

                <div className="text-center pt-4">
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(false)}
                    className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    ← Back to Sign In
                  </button>
                </div>
              </form>
            )}
          </Card>
        </div>
      </Layout>
    );
  }

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
              {isLogin ? 'Client Portal' : 'Create Account'}
            </h1>
            <p className="text-gray-600 mt-2">
              {isLogin ? 'Sign in to access your test results and COAs' : 'Join our platform to manage your testing'}
            </p>
          </div>

          {/* Error Message */}
          {showError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div>
                  <h3 className="text-sm font-medium text-red-800">
                    {isLogin ? 'Invalid credentials' : 'Registration failed'}
                  </h3>
                  <p className="text-sm text-red-700 mt-1">
                    {isLogin 
                      ? 'The email or password you entered is incorrect. Please try again or reset your password.'
                      : 'Unable to create account. Please contact support or try again later.'
                    }
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Form */}
          {isLogin ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="email"
                label="Email Address"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 rounded border-gray-300" />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              <Button 
                type="submit" 
                fullWidth 
                size="large"
                loading={isSubmitting}
              >
                {isSubmitting ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleSignup} className="space-y-4">
              <Input
                label="Company Name"
                placeholder="Your company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
              <Input
                type="email"
                label="Email Address"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                label="Password"
                placeholder="Create a secure password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Input
                type="password"
                label="Confirm Password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              
              <div className="flex items-start">
                <input type="checkbox" className="mr-2 mt-1 rounded border-gray-300" required />
                <span className="text-sm text-gray-600">
                  I agree to the <a href="#" className="text-blue-600 hover:text-blue-800">Terms of Service</a> and <a href="#" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>
                </span>
              </div>
              
              <Button 
                type="submit" 
                fullWidth 
                size="large"
                loading={isSubmitting}
              >
                {isSubmitting ? 'Creating Account...' : 'Create Account'}
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
                  setShowError(false);
                  setEmail('');
                  setPassword('');
                  setCompanyName('');
                  setConfirmPassword('');
                }}
                className="ml-1 text-blue-600 hover:text-blue-800 transition-colors font-medium"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>

          {/* Additional Links */}
          <div className="text-center pt-4">
            <p className="text-xs text-gray-500">
              Need help? <a href="/contact" className="text-blue-600 hover:text-blue-800">Contact Support</a>
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
}