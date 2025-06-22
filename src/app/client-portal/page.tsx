"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";


export default function ClientPortal() {
  console.log("ClientPortal component rendering");
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState("samples");
  const [expandedSamples, setExpandedSamples] = useState<Set<string>>(new Set());

  useEffect(() => {
    console.log("ClientPortal mounting");
    setMounted(true);
  }, []);

  const toggleSampleExpansion = (sampleId: string) => {
    const newExpanded = new Set(expandedSamples);
    if (newExpanded.has(sampleId)) {
      newExpanded.delete(sampleId);
    } else {
      newExpanded.add(sampleId);
    }
    setExpandedSamples(newExpanded);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    
    if (isLogin) {
      // Mock authentication
      if (email === "test@quantix.co" && password === "Test123") {
        setIsLoggedIn(true);
      } else {
        setLoginError("Invalid credentials. Use test@quantix.co / Test123");
      }
    } else {
      // Mock registration - just log them in
      setIsLoggedIn(true);
    }
  };

  // Mock user data
  const userData = {
    name: "John Smith",
    company: "Green Valley Cultivators",
    email: "test@quantix.co",
    memberSince: "January 2024"
  };

  const mockSamples = [
    {
      id: "QX-2024-001",
      name: "Blue Dream Batch #47",
      type: "Flower",
      submitted: "2024-01-15",
      status: "Complete",
      thc: "22.4%",
      cbd: "0.8%"
    },
    {
      id: "QX-2024-002", 
      name: "OG Kush Concentrate",
      type: "Concentrate",
      submitted: "2024-01-12",
      status: "Complete",
      thc: "84.2%",
      cbd: "1.2%"
    },
    {
      id: "QX-2024-003",
      name: "Wedding Cake #23",
      type: "Flower", 
      submitted: "2024-01-10",
      status: "In Progress",
      thc: "Pending",
      cbd: "Pending"
    }
  ];

  const sidebarItems = [
    { id: "samples", icon: "🧪", label: "Test Results", description: "View sample results and COAs" },
    { id: "submit", icon: "📤", label: "Submit Sample", description: "Submit new samples for testing" },
    { id: "account", icon: "👤", label: "Account", description: "Manage your profile and settings" },
    { id: "billing", icon: "💳", label: "Billing", description: "View invoices and payment methods" },
    { id: "compliance", icon: "📋", label: "Compliance", description: "Download compliance reports" },
    { id: "notifications", icon: "🔔", label: "Notifications", description: "Manage email and SMS alerts" },
    { id: "support", icon: "💬", label: "Support", description: "Get help and contact support" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "samples":
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-medium text-gray-900 mb-2">Test Results</h2>
              <p className="text-gray-600 text-sm">View and download your sample testing results and certificates of analysis.</p>
            </div>
            
            {/* Stats Overview */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="pro-card rounded-xl p-4 text-center">
                <div className="text-3xl font-light text-gray-900 mb-1 animate-number">12</div>
                <div className="text-xs text-gray-600">Total Samples</div>
              </div>
              <div className="pro-card rounded-xl p-4 text-center">
                <div className="text-3xl font-light text-green-600 mb-1 animate-number">9</div>
                <div className="text-xs text-gray-600">Completed</div>
              </div>
              <div className="pro-card rounded-xl p-4 text-center">
                <div className="text-3xl font-light text-orange-500 mb-1 animate-number">2</div>
                <div className="text-xs text-gray-600">In Progress</div>
              </div>
              <div className="pro-card rounded-xl p-4 text-center">
                <div className="text-3xl font-light text-blue-600 mb-1 animate-number">1</div>
                <div className="text-xs text-gray-600">Pending</div>
              </div>
            </div>

            {/* Sample Results */}
            <div className="pro-card rounded-xl">
              <div className="px-6 py-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">Recent Results</h3>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 pulse-green"></span>
                    Live Updates
                  </div>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {mockSamples.map((sample) => (
                  <div key={sample.id} className="p-4 hover:bg-gray-50 transition-colors">
                    {/* Compact Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1 min-w-0">
                        <button
                          onClick={() => toggleSampleExpansion(sample.id)}
                          className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
                        >
                          <svg className={`w-4 h-4 transition-transform ${expandedSamples.has(sample.id) ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 truncate">{sample.name}</h4>
                          <div className="flex items-center space-x-2 text-xs text-gray-500 mt-0.5">
                            <span className="font-mono">{sample.id}</span>
                            <span>•</span>
                            <span>{sample.type}</span>
                            <span>•</span>
                            <span>{sample.submitted}</span>
                          </div>
                        </div>
                        
                        {sample.status === 'Complete' && (
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="text-center">
                              <div className="text-xs text-gray-500">THC</div>
                              <div className="font-semibold text-gray-900">{sample.thc}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-gray-500">CBD</div>
                              <div className="font-semibold text-gray-900">{sample.cbd}</div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-3 ml-4">
                        <span className={`status-badge ${
                          sample.status === 'Complete' 
                            ? 'status-complete'
                            : sample.status === 'In Progress'
                            ? 'status-processing'
                            : 'status-pending'
                        }`}>
                          {sample.status}
                        </span>
                        
                        {sample.status === 'Complete' && (
                          <button className="apple-button px-3 py-1.5 text-xs">
                            <svg className="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            COA
                          </button>
                        )}
                      </div>
                    </div>
                    
                    {/* Expandable Details */}
                    {expandedSamples.has(sample.id) && (
                      <div className="mt-4 pl-9 border-l-2 border-gray-100">
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="pro-card rounded-lg p-3">
                              <div className="text-xs text-gray-500 mb-1">Sample Details</div>
                              <div className="space-y-1">
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-600">ID:</span>
                                  <span className="font-mono font-medium">{sample.id}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-600">Type:</span>
                                  <span className="font-medium">{sample.type}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-600">Submitted:</span>
                                  <span className="font-medium">{sample.submitted}</span>
                                </div>
                              </div>
                            </div>
                            
                            {sample.status === 'Complete' && (
                              <div className="pro-card rounded-lg p-3">
                                <div className="text-xs text-gray-500 mb-1">Test Results</div>
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="text-center p-2 bg-green-50 rounded">
                                    <div className="text-xs text-gray-600">THC</div>
                                    <div className="text-lg font-semibold text-gray-900">{sample.thc}</div>
                                  </div>
                                  <div className="text-center p-2 bg-blue-50 rounded">
                                    <div className="text-xs text-gray-600">CBD</div>
                                    <div className="text-lg font-semibold text-gray-900">{sample.cbd}</div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          {sample.status === 'Complete' && (
                            <div className="flex space-x-2">
                              <button className="apple-button px-4 py-2 text-xs">
                                <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download Full COA
                              </button>
                              <button className="apple-button-secondary px-4 py-2 text-xs">
                                View Details
                              </button>
                            </div>
                          )}
                          
                          {sample.status === 'In Progress' && (
                            <div className="bg-blue-50 rounded-lg p-3">
                              <div className="flex items-start">
                                <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div className="text-sm text-blue-700">
                                  Your sample is currently being processed. Results typically available within 3-5 business days.
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case "submit":
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-medium text-gray-900 mb-2">Submit Sample</h2>
              <p className="text-gray-600 text-sm">Submit new samples for cannabis testing and compliance analysis.</p>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Sample Submission Form</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sample Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="e.g., Blue Dream Batch #47" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sample Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Flower</option>
                    <option>Concentrate</option>
                    <option>Edible</option>
                    <option>Topical</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Testing Package</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Full Panel (Potency + Safety)</option>
                    <option>Potency Only</option>
                    <option>Safety Only</option>
                  </select>
                </div>
                <button className="apple-button px-6 py-3 text-sm">Submit Sample Request</button>
              </div>
            </div>
          </div>
        );
      

      case "account":
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-medium text-gray-900 mb-2">Account Settings</h2>
              <p className="text-gray-600 text-sm">Manage your profile information and account preferences.</p>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Information</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" value="John" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" value="Smith" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input type="text" value="Green Valley Cultivators" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" value="test@quantix.co" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <button className="apple-button px-6 py-3 text-sm">Save Changes</button>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-medium text-gray-900 mb-2">{sidebarItems.find(item => item.id === activeTab)?.label}</h2>
              <p className="text-gray-600 text-sm">{sidebarItems.find(item => item.id === activeTab)?.description}</p>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <p className="text-gray-600">This section is coming soon. We&apos;re working on adding more features to enhance your testing experience.</p>
            </div>
          </div>
        );
    }
  };

  if (!mounted) {
    console.log("ClientPortal not mounted yet, showing loading");
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-12 h-12 bg-gray-300 rounded-full mb-4"></div>
          <div className="text-gray-600">Loading...</div>
        </div>
      </div>
    );
  }

  console.log("ClientPortal mounted, isLoggedIn:", isLoggedIn);

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Main Navigation Bar */}
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 glass-effect">
          <div className="max-w-6xl mx-auto px-4">
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
              <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
                <Link href="/" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  About
                </Link>
                <Link href="/services" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Services
                </Link>
                <Link href="/client-portal" className="text-xs text-gray-900 font-medium">
                  Client Portal
                </Link>
              </div>

              {/* Right Side - Fixed Width Container */}
              <div className="hidden md:flex ml-auto w-64 justify-end items-center space-x-3">
                <Link href="/submit-sample" className="apple-button">
                  Submit Sample
                </Link>
                <span className="text-xs text-gray-600">{userData.name}</span>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="text-xs text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Settings Layout - macOS Style */}
        <div className="flex h-screen">
          {/* Sidebar - macOS Settings Style */}
          <div className="w-80 bg-gray-50 border-r border-gray-200 overflow-y-auto">
            <div className="p-4">
              <div className="space-y-1">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-blue-100 text-blue-700 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-lg mr-3">{item.icon}</span>
                    <div>
                      <div className="text-sm font-medium">{item.label}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-8">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 glass-effect">
        <div className="max-w-6xl mx-auto px-4">
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
            <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
              <Link href="/" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-medium">
                About
              </Link>
              <Link href="/services" className="text-xs text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Services
              </Link>
              <Link href="/client-portal" className="text-xs text-gray-900 font-medium">
                Client Portal
              </Link>
            </div>

            {/* Submit Sample Button - Right Side */}
            <div className="hidden md:flex ml-auto w-64 justify-end">
              <Link href="/submit-sample" className="apple-button">
                Submit Sample
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
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

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md">
              <div className="py-3 space-y-2">
                <Link 
                  href="/" 
                  className="block px-3 py-2 text-xs text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="block px-3 py-2 text-xs text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/services" 
                  className="block px-3 py-2 text-xs text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <span className="block px-3 py-2 text-xs text-gray-900 font-medium">
                  Client Portal
                </span>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="max-w-md mx-auto px-4 py-6">
        <div className="flex justify-center">
          {/* Login/Register Form */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 sticky top-20">
              {/* Logo and Brand */}
              <div className="flex items-center justify-center mb-6 fade-in -space-x-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                  <Image
                    src="/quantixlogo.png"
                    alt="Quantix Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 relative z-10 drop-shadow-lg"
                  />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                  Quantix
                </h1>
              </div>
              
              <div className="text-center mb-5">
                <h2 className="text-lg font-semibold text-gray-900 tracking-tight mb-1.5">
                  {isLogin ? "Welcome back" : "Create your account"}
                </h2>
                <p className="text-[11px] text-gray-600 font-light">
                  {isLogin 
                    ? "Sign in to access your testing results and submit new samples" 
                    : "Join Quantix Research to streamline your testing process"
                  }
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                {!isLogin && (
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-medium text-gray-700 mb-1.5">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-xs"
                        placeholder="John"
                        required={!isLogin}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-xs font-medium text-gray-700 mb-1.5">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-xs"
                        placeholder="Doe"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                {!isLogin && (
                  <div>
                    <label htmlFor="company" className="block text-xs font-medium text-gray-700 mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-xs"
                      placeholder="Your Company Name"
                      required={!isLogin}
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-xs"
                    placeholder="john@company.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-xs font-medium text-gray-700 mb-1.5">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-xs"
                    placeholder="••••••••"
                    required
                  />
                </div>

                {!isLogin && (
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                      placeholder="••••••••"
                      required={!isLogin}
                    />
                  </div>
                )}

                {loginError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                    <p className="text-red-700 text-xs text-center">{loginError}</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full apple-button py-3 text-base font-medium"
                >
                  {isLogin ? "Sign In" : "Create Account"}
                </button>

                {isLogin && (
                  <div className="text-center">
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                      Forgot your password?
                    </a>
                  </div>
                )}

                <div className="text-center pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    {isLogin ? "Don&apos;t have an account?" : "Already have an account?"}
                    <button
                      type="button"
                      onClick={() => setIsLogin(!isLogin)}
                      className="ml-1 text-blue-600 hover:text-blue-800 transition-colors font-medium"
                    >
                      {isLogin ? "Sign up" : "Sign in"}
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>


        </div>
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