import { Metadata } from 'next';

const defaultMetadata: Metadata = {
  title: {
    default: 'Quantix Analytics - Premium Cannabis Testing Lab',
    template: '%s | Quantix Analytics'
  },
  description: 'Professional cannabis testing services with fast turnaround times. State-certified lab offering potency, pesticides, microbials, and heavy metals testing.',
  keywords: ['cannabis testing', 'hemp testing', 'lab testing', 'THC testing', 'CBD testing', 'pesticide testing', 'microbial testing'],
  authors: [{ name: 'Quantix Analytics' }],
  creator: 'Quantix Analytics',
  publisher: 'Quantix Analytics',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quantixanalytics.com',
    title: 'Quantix Analytics - Premium Cannabis Testing Lab',
    description: 'Professional cannabis testing services with fast turnaround times.',
    siteName: 'Quantix Analytics',
    images: [{
      url: '/quantixlogo.png',
      width: 1200,
      height: 630,
      alt: 'Quantix Analytics Logo',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantix Analytics - Premium Cannabis Testing Lab',
    description: 'Professional cannabis testing services with fast turnaround times.',
    images: ['/quantixlogo.png'],
  },
  verification: {
    google: '', // Add Google Search Console verification
  },
  alternates: {
    canonical: 'https://quantixanalytics.com',
  },
};

export const getPageMetadata = (page: string): Metadata => {
  const pageMetadata: Record<string, Metadata> = {
    home: {
      ...defaultMetadata,
    },
    about: {
      title: 'About Us',
      description: 'Learn about Quantix Analytics, our mission, and our commitment to accurate cannabis testing.',
      openGraph: {
        ...defaultMetadata.openGraph,
        title: 'About Us | Quantix Analytics',
        description: 'Learn about our mission and commitment to accurate cannabis testing.',
      },
    },
    services: {
      title: 'Our Services',
      description: 'Comprehensive cannabis testing services including potency, pesticides, microbials, and heavy metals testing.',
      openGraph: {
        ...defaultMetadata.openGraph,
        title: 'Services | Quantix Analytics',
        description: 'Comprehensive cannabis testing services with fast turnaround.',
      },
    },
    contact: {
      title: 'Contact Us',
      description: 'Get in touch with Quantix Analytics for all your cannabis testing needs.',
      openGraph: {
        ...defaultMetadata.openGraph,
        title: 'Contact | Quantix Analytics',
        description: 'Get in touch for all your cannabis testing needs.',
      },
    },
    'client-portal': {
      title: 'Client Portal',
      description: 'Access your test results and manage your account.',
      robots: {
        index: false, // Don't index client portal
        follow: false,
      },
    },
    'submit-sample': {
      title: 'Submit Sample',
      description: 'Submit your cannabis samples for testing with our easy online form.',
      openGraph: {
        ...defaultMetadata.openGraph,
        title: 'Submit Sample | Quantix Analytics',
        description: 'Submit your cannabis samples for testing.',
      },
    },
  };

  return pageMetadata[page] || defaultMetadata;
}; 