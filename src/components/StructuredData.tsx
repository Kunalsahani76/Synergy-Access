'use client';

interface Product {
  name: string;
  description: string;
  image: string;
  category: string;
  brand?: string;
  manufacturer?: string;
  price?: string;
}

interface StructuredDataProps {
  type: 'Product' | 'Service' | 'Organization' | 'WebSite';
  data: Record<string, unknown>;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  switch (type) {
    case 'Product':
      structuredData = {
        ...structuredData,
        name: data.name,
        description: data.description,
        image: data.image,
        brand: {
          '@type': 'Brand',
          name: data.brand || 'Synergy Access'
        },
        manufacturer: {
          '@type': 'Organization',
          name: data.manufacturer || 'Synergy Access Pvt. Ltd'
        },
        category: data.category,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          price: data.price || '50000',
          priceCurrency: 'INR',
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: data.price || '50000',
            priceCurrency: 'INR',
            valueAddedTaxIncluded: true
          },
          seller: {
            '@type': 'Organization',
            name: 'Synergy Access Pvt. Ltd'
          }
        }
      };
      break;

    case 'Service':
      structuredData = {
        ...structuredData,
        name: data.name,
        description: data.description,
        provider: {
          '@type': 'Organization',
          name: 'Synergy Access Pvt. Ltd'
        },
        serviceType: data.serviceType,
        areaServed: data.areaServed || 'India'
      };
      break;

    case 'Organization':
      structuredData = {
        ...structuredData,
        name: data.name,
        description: data.description,
        url: data.url,
        logo: data.logo,
        contactPoint: data.contactPoint,
        address: data.address,
        sameAs: data.sameAs
      };
      break;

    case 'WebSite':
      structuredData = {
        ...structuredData,
        name: data.name,
        url: data.url,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${data.url}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}

// Product collection structured data
export function ProductCollectionStructuredData({ products }: { products: Product[] }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Synergy Access Products',
    description: 'Complete range of entrance automation and security solutions',
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: `https://www.synergy-access.com${product.image}`,
        category: product.category,
        brand: {
          '@type': 'Brand',
          name: 'Synergy Access'
        },
        manufacturer: {
          '@type': 'Organization',
          name: 'Synergy Access Pvt. Ltd'
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          price: product.price || '50000',
          priceCurrency: 'INR',
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: product.price || '50000',
            priceCurrency: 'INR',
            valueAddedTaxIncluded: true
          },
          seller: {
            '@type': 'Organization',
            name: 'Synergy Access Pvt. Ltd'
          }
        }
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}

// Service structured data
export function ServiceStructuredData({ services }: { services: Array<{ title: string; description: string }> }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Synergy Access Services',
    description: 'Professional installation, maintenance, and support services',
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
          '@type': 'Organization',
          name: 'Synergy Access Pvt. Ltd'
        },
        serviceType: service.title,
        areaServed: 'India'
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}

// Organization structured data
export function OrganizationStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Synergy Access Pvt. Ltd',
    description: 'Leading manufacturer of entrance automation systems including boom barriers, bollards, turnstiles, and access control solutions.',
    url: 'https://www.synergy-access.com',
    logo: 'https://www.synergy-access.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-99993-39265',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi']
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Delhi',
      addressLocality: 'New Delhi'
    },
    sameAs: [
      'https://www.facebook.com/synergyaccess',
      'https://www.linkedin.com/company/synergy-access',
      'https://twitter.com/synergyaccess'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}