import Link from "next/link";

export default function Footer() {
  return (
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
  );
} 