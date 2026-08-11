'use client';

import { targetSearchMetadata } from '@/lib/metadata';

interface TargetSearchSEOProps {
  searchType: 'products' | 'solutions' | 'installation' | 'contact' | 'reviews';
  additionalKeywords?: string[];
}

export function TargetSearchSEO({ searchType, additionalKeywords = [] }: TargetSearchSEOProps) {
  const metadata = targetSearchMetadata[searchType];
  
  const allKeywords = [...metadata.keywords, ...additionalKeywords];
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: metadata.title,
    description: metadata.description,
    url: `https://www.synergy-access.com/${searchType === 'contact' ? 'contact' : searchType === 'reviews' ? 'about' : searchType}`,
    mainEntity: {
      '@type': 'Organization',
      name: 'Synergy Access Pvt. Ltd',
      description: 'Leading manufacturer of entrance automation systems',
      url: 'https://www.synergy-access.com',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressRegion: 'Uttar Pradesh',
        addressLocality: 'Noida'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91 99993 39265',
        contactType: 'customer service',
        areaServed: 'IN'
      }
    },
    keywords: allKeywords.join(', ')
  };

  return (
    <>
      {/* Additional meta tags for target search queries */}
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="description" content={metadata.description} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://www.synergy-access.com/${searchType}`} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 2)
        }}
      />
    </>
  );
}

// FAQ Schema for common search queries
export function SynergyAccessFAQSchema() {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What products does Synergy Access offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Synergy Access offers a complete range of products including boom barriers, bollards, turnstiles, access control systems, parking management solutions, ANPR systems, biometric access control, and security automation systems.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does Synergy Access provide installation services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Synergy Access provides professional installation services including technical setup, system commissioning, training, and ongoing support across India.'
        }
      },
      {
        '@type': 'Question',
        name: 'Where is Synergy Access Noida office located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Synergy Access has offices in Noida, Delhi NCR. Contact us at +91 99993 39265 for sales enquiries, support, and consultation services.'
        }
      },
      {
        '@type': 'Question',
        name: 'What solutions does Synergy Access provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Synergy Access provides comprehensive solutions including parking management systems, security automation, EV charging systems, smart building integration, and custom automation solutions.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are there reviews available for Synergy Access products?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Synergy Access has served 1000+ clients with positive reviews. Our products feature high-quality specifications, reliable performance, and comprehensive support services.'
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqData, null, 2)
      }}
    />
  );
}

// Breadcrumb Schema for better navigation
export function SynergyAccessBreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbData, null, 2)
      }}
    />
  );
}