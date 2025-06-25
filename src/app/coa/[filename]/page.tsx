'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const COAViewer = () => {
  const params = useParams()
  const filename = params?.filename as string
  const [loading, setLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleIframeLoad = () => {
    setLoading(false)
  }

  const handleIframeError = () => {
    setLoading(false)
    setError('Failed to load the certificate. Please try again later.')
  }

  if (!filename) return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading Certificate of Analysis...</p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Company Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center -space-x-2">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20"></div>
              <Image 
                src="/quantixlogo.png" 
                alt="Quantix Logo" 
                width={80}
                height={80}
                className="w-20 h-20 relative z-10 drop-shadow-lg"
              />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
              Quantix
            </h1>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Certificate of Analysis
              </h1>
            </div>
            {/* Authentic Badge */}
            <div className="flex items-center gap-2 bg-green-50 border-2 border-green-500 rounded-lg px-4 py-2">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold text-green-800">Verified Authentic</span>
            </div>
          </div>
        </div>
      </div>

      {/* COA Info Cards - Mobile Optimized */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Prepared for</h3>
            <p className="text-lg font-semibold text-gray-900">Flora Distribution Group LLC</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Status</h3>
            <p className="text-lg font-semibold text-green-600">Passed</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Method</h3>
            <p className="text-lg font-semibold text-gray-900">HPLC/MS</p>
          </div>
        </div>

        {/* PDF Viewer Container */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">

          {/* Mobile Notice */}
          {isMobile && (
            <div className="bg-blue-50 border-b border-blue-200 p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-blue-800">
                  For the best viewing experience on mobile, rotate your device to landscape mode or pinch to zoom.
                </p>
              </div>
            </div>
          )}

          {/* PDF Iframe */}
          <div className="relative bg-white">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white z-20">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading document...</p>
                </div>
              </div>
            )}
            
            {error && (
              <div className="absolute inset-0 flex items-center justify-center bg-white z-20">
                <div className="text-center max-w-md mx-auto p-6">
                  <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Unable to Load Certificate</h3>
                  <p className="text-gray-600 mb-4">{error}</p>
                  <button
                    onClick={() => {
                      setError(null)
                      setLoading(true)
                      // Reload iframe
                      const iframe = document.querySelector('iframe')
                      if (iframe) {
                        iframe.src = iframe.src
                      }
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            )}
            
            <iframe
              src={`/api/coa/${filename}`}
              className={`w-full ${isMobile ? 'h-[600px]' : 'h-[800px] lg:h-[1000px]'} border-0`}
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              title={`COA for ${filename}`}
              style={{ backgroundColor: 'white' }}
            />
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Document Verification</h3>
              <p className="text-sm text-gray-600">
                This certificate is electronically signed and verified by Quantix Analytics.
              </p>
            </div>
            <button
              onClick={() => window.open(`/api/coa/${filename}`, '_blank')}
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default COAViewer 