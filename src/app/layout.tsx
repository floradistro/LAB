import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Quantix Analytics | Premier Hemp & Cannabis Testing Laboratory",
    template: "%s | Quantix Analytics"
  },
  description: "Leading hemp and cannabis testing laboratory providing accurate, reliable analytical testing services. ISO/IEC 17025 accredited lab specializing in potency, pesticides, heavy metals, and microbial testing.",
  keywords: ["cannabis testing", "hemp testing", "laboratory testing", "THC testing", "CBD testing", "potency analysis", "pesticide testing", "heavy metals testing", "microbial testing", "terpene profiling", "Quantix Analytics", "cannabis lab", "hemp lab", "analytical testing"],
  authors: [{ name: "Quantix Analytics" }],
  creator: "Quantix Analytics",
  publisher: "Quantix Analytics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://quantixanalytics.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Quantix Analytics | Premier Hemp & Cannabis Testing Laboratory",
    description: "Leading hemp and cannabis testing laboratory providing accurate, reliable analytical testing services. Fast turnaround, precise results.",
    url: 'https://quantixanalytics.com',
    siteName: 'Quantix Analytics',
    images: [
      {
        url: '/quantixlogo.png',
        width: 1200,
        height: 630,
        alt: 'Quantix Analytics - Hemp & Cannabis Testing Laboratory',
        type: 'image/png',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Quantix Analytics | Hemp & Cannabis Testing Lab",
    description: "Leading analytical testing laboratory for hemp and cannabis. Accurate results you can trust.",
    images: ['/quantixlogo.png'],
    creator: '@quantixanalytics',
    site: '@quantixanalytics',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/quantixlogo.png',
        color: '#007aff',
      },
    ],
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  other: {
    'msapplication-TileColor': '#007aff',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
