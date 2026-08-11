// SEO Utilities and Configuration
export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: Record<string, unknown>; // Replaced any with Record<string, unknown>
}

// Site-wide SEO configuration
export const siteConfig = {
  siteName: 'Synergy Access',
  siteUrl: 'https://synergy-access.com', // Update with actual domain
  defaultTitle: 'Synergy Access | Entrance Automation, Boom Barriers, Bollards, Turnstiles',
  defaultDescription: 'Leading manufacturer of entrance automation and intelligent access control solutions. Boom barriers, bollards, turnstiles, parking management, and security systems.',
  defaultKeywords: 'boom barrier, bollard, turnstile, access control, entrance automation, security systems, parking management, ANPR, RFID, biometric access, Synergy Access, ' +
    'gate automation system, automatic gate system india, electric gate automation, sliding gate automation, automatic gate opener, faac gate automation india, ' +
    'boom barrier price in india, automatic boom barrier, faac boom barrier distributor, parking boom barrier, automatic barrier gate, ' +
    'vehicle access control system, road blocker system, hydraulic road blocker india, tyre killer system, automatic tyre killer, ' +
    'bollards for vehicle control, retractable bollards manufacturer, ' +
    'parking automation system, parking management solution, rfid parking system, automatic parking gate, smart parking india, access control for parking lots, ' +
    'baggage scanner for mall, x ray baggage scanner india, ' +
    'dfmd door frame metal detector, hhmd hand held metal detector, ' +
    'pedestrian access gates, uvss under vehicle surveillance system, ' +
    'access control system india, biometric access control, face recognition access system, rfid access control system, time attendance access control, faac access control india, biometric access control system, ' +
    'face recognition attendance system, rfid based access control, visitor management system software, qr based access control system, vms with mobile application, fingerprint attendance machine, access control solutions india, ' +
    'siren alarm system for buildings, security access management system',
  defaultImage: '/assets/logo.png',
  twitterHandle: '@synergyaccess',
  companyInfo: {
    name: 'Synergy Access Pvt. Ltd.',
    address: 'B6, 3rd floor, Sector-2, Noida, 201301',
    phone: '+91 99993 39265',
    email: 'business@synergy-access.com',
    foundedYear: '2019'
  }
};

// Generate page-specific SEO data
export const generateSEOData = (pageData: Partial<SEOData>): SEOData => {
  const title = pageData.title 
    ? `${pageData.title} | ${siteConfig.siteName}`
    : siteConfig.defaultTitle;
    
  return {
    title,
    description: pageData.description || siteConfig.defaultDescription,
    keywords: pageData.keywords || siteConfig.defaultKeywords,
    canonical: pageData.canonical,
    ogTitle: pageData.ogTitle || title,
    ogDescription: pageData.ogDescription || pageData.description || siteConfig.defaultDescription,
    ogImage: pageData.ogImage || siteConfig.defaultImage,
    ogType: pageData.ogType || 'website',
    structuredData: pageData.structuredData
  };
};

// Product categories for sitemap generation
export const productCategories = [
  { name: 'Boom Barriers', slug: 'boom-barrier', priority: 0.9 },
  { name: 'Bollards', slug: 'bollards', priority: 0.9 },
  { name: 'Door Frame Metal Detector', slug: 'dfmd', priority: 0.8 },
  { name: 'Hand Held Metal Detector', slug: 'hhmd', priority: 0.8 },
  { name: 'Flap Swing Barrier', slug: 'flap-swing-barrier', priority: 0.8 },
  { name: 'Tripod Turnstile', slug: 'tripod-turnstile', priority: 0.8 },
  { name: 'P-Type Swing Barrier', slug: 'p-type-swing-barrier', priority: 0.8 },
  { name: 'Full Height Turnstile', slug: 'full-height-turnstile', priority: 0.8 },
  { name: 'Parking Management', slug: 'parking-management', priority: 0.9 },
  { name: 'Parking Guidance', slug: 'parking-guidance', priority: 0.8 },
  { name: 'Parking Information', slug: 'parking-information', priority: 0.8 },
  { name: 'ANPR Solution', slug: 'anpr-solution', priority: 0.9 },
  { name: 'Biometric Fingerprint', slug: 'biometric-fingerprint', priority: 0.8 },
  { name: 'RFID Solution', slug: 'rfid-solution', priority: 0.8 },
  { name: 'Visitor Management', slug: 'visitor-management', priority: 0.8 },
  { name: 'VMS Mobile', slug: 'vms-mobile', priority: 0.7 },
  { name: 'QR Solutions', slug: 'qr-solutions', priority: 0.8 },
  { name: 'Face Recognition', slug: 'face-recognition', priority: 0.8 },
  { name: 'Solutions', slug: 'solutions', priority: 0.7 },
  { name: 'Siren System', slug: 'siren-system', priority: 0.7 },
  { name: 'Tyre Killer', slug: 'tyre-killer', priority: 0.8 },
  { name: 'Road Blocker', slug: 'road-blocker', priority: 0.8 },
  { name: 'UVSS', slug: 'uvss', priority: 0.8 },
  { name: 'Baggage Scanner', slug: 'baggage-scanner', priority: 0.8 }
];

// Blog categories for sitemap
export const blogCategories = [
  { name: 'ANPR Technology', slug: 'anprtechnology', priority: 0.7 },
  { name: 'Automatic Boom Barrier', slug: 'automaticboombarrier', priority: 0.7 },
  { name: 'Biometric Access', slug: 'biometricaccess', priority: 0.7 },
  { name: 'Hydraulic Bollards', slug: 'HydraulicBollards', priority: 0.7 },
  { name: 'Perimeter Security', slug: 'perimetersecurity', priority: 0.7 },
  { name: 'Smart Parking', slug: 'smartparking', priority: 0.7 }
];

// Main site pages for sitemap
export const mainPages = [
  { name: 'Home', slug: '', priority: 1.0 },
  { name: 'About', slug: 'about', priority: 0.9 },
  { name: 'Products', slug: 'products', priority: 0.9 },
  { name: 'Contact', slug: 'contact', priority: 0.8 },
  { name: 'Consultancy', slug: 'Consultancy', priority: 0.7 },
  { name: 'Assistance', slug: 'Assistance', priority: 0.7 },
  { name: 'Blog', slug: 'blog', priority: 0.8 }
];

// Define interfaces for structured data
interface StructuredDataBase {
  "@context": string;
  "@type": string;
}

interface OrganizationData extends StructuredDataBase {
  name: string;
  url: string;
  logo: string;
  contactPoint: {
    "@type": string;
    telephone: string;
    contactType: string;
    email: string;
  };
  address: {
    "@type": string;
    streetAddress: string;
    addressCountry: string;
  };
  foundingDate: string;
  sameAs: string[];
}

interface ProductData extends StructuredDataBase {
  name: string;
  description: string;
  brand: {
    "@type": string;
    name: string;
  };
  manufacturer: {
    "@type": string;
    name: string;
  };
  offers: {
    "@type": string;
    availability: string;
    priceSpecification: {
      "@type": string;
      price: string;
    };
  };
}

interface ArticleData extends StructuredDataBase {
  headline: string;
  description: string;
  author: {
    "@type": string;
    name: string;
  };
  publisher: {
    "@type": string;
    name: string;
    logo: {
      "@type": string;
      url: string;
    };
  };
  datePublished: string;
  dateModified: string;
}

interface WebSiteData extends StructuredDataBase {
  name: string;
  url: string;
  potentialAction: {
    "@type": string;
    target: string;
    "query-input": string;
  };
}

// Generate structured data for different page types
export const generateStructuredData = (
  type: 'Organization' | 'Product' | 'Article' | 'WebSite',
  data: Partial<OrganizationData | ProductData | ArticleData | WebSiteData>
): OrganizationData | ProductData | ArticleData | WebSiteData => {
  const baseData: StructuredDataBase = {
    "@context": "https://schema.org",
    "@type": type
  };

  switch (type) {
    case 'Organization':
      return {
        ...baseData,
        name: siteConfig.companyInfo.name,
        url: siteConfig.siteUrl,
        logo: `${siteConfig.siteUrl}${siteConfig.defaultImage}`,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.companyInfo.phone,
          contactType: "customer service",
          email: siteConfig.companyInfo.email
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.companyInfo.address,
          addressCountry: "IN"
        },
        foundingDate: siteConfig.companyInfo.foundedYear,
        sameAs: [
          "https://www.facebook.com/synergyaccess",
          "https://www.linkedin.com/company/synergyaccess"
        ]
      } as OrganizationData;

    case 'Product':
      return {
        ...baseData,
        name: (data as ProductData).name || '',
        description: (data as ProductData).description || '',
        brand: {
          "@type": "Brand",
          name: siteConfig.companyInfo.name
        },
        manufacturer: {
          "@type": "Organization",
          name: siteConfig.companyInfo.name
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "Contact for Price"
          }
        }
      } as ProductData;

    case 'Article':
      return {
        ...baseData,
        headline: (data as ArticleData).headline || '',
        description: (data as ArticleData).description || '',
        author: {
          "@type": "Organization",
          name: siteConfig.companyInfo.name
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.companyInfo.name,
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.siteUrl}${siteConfig.defaultImage}`
          }
        },
        datePublished: (data as ArticleData).datePublished || new Date().toISOString(),
        dateModified: (data as ArticleData).dateModified || new Date().toISOString()
      } as ArticleData;

    case 'WebSite':
      return {
        ...baseData,
        name: siteConfig.siteName,
        url: siteConfig.siteUrl,
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteConfig.siteUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      } as WebSiteData;

    default:
      // Fallback: return baseData, but ensure it has required fields for WebSiteData to satisfy type
      return {
        ...baseData,
        name: siteConfig.siteName,
        url: siteConfig.siteUrl,
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteConfig.siteUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      } as WebSiteData;
  }
};
export const generateCanonicalUrl = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${siteConfig.siteUrl}/${cleanPath}`;
};

// Keywords optimization
export const optimizeKeywords = (baseKeywords: string, pageSpecificKeywords: string[]): string => {
  const combined = [baseKeywords, ...pageSpecificKeywords].join(', ');
  return combined.length > 160 ? combined.substring(0, 157) + '...' : combined;
};