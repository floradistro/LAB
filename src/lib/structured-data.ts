export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Quantix Analytics',
  url: 'https://quantixanalytics.com',
  logo: 'https://quantixanalytics.com/quantixlogo.png',
  description: 'Professional cannabis testing services with fast turnaround times. State-certified lab offering potency, pesticides, microbials, and heavy metals testing.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5540 Centerview Dr Ste 204 #982095',
    addressLocality: 'Raleigh',
    addressRegion: 'NC',
    postalCode: '27606',
    addressCountry: 'US'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-XXX-XXX-XXXX',
    contactType: 'customer service',
    email: 'support@quantixanalytics.com'
  },
  sameAs: [
    // Add social media links when available
  ]
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://quantixanalytics.com',
  name: 'Quantix Analytics',
  image: 'https://quantixanalytics.com/quantixlogo.png',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5540 Centerview Dr Ste 204 #982095',
    addressLocality: 'Raleigh',
    addressRegion: 'NC',
    postalCode: '27606',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.8926,  // Update with actual coordinates
    longitude: -78.7811
  }
};

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Cannabis Testing Laboratory',
  provider: {
    '@type': 'Organization',
    name: 'Quantix Analytics'
  },
  areaServed: {
    '@type': 'State',
    name: 'North Carolina'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cannabis Testing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Potency Testing',
          description: 'Accurate cannabinoid profiling including THC, CBD, and other cannabinoids'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pesticide Testing',
          description: 'Comprehensive pesticide screening for cannabis products'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Microbial Testing',
          description: 'Testing for mold, yeast, and harmful bacteria'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Heavy Metals Testing',
          description: 'Detection of heavy metal contamination'
        }
      }
    ]
  }
}; 