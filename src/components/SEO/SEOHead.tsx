'use client';

import React from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { SEOData, generateCanonicalUrl, generateStructuredData } from '@/components/utils/seo';

interface SEOHeadProps extends SEOData {
  children?: React.ReactNode;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  structuredData,
  children
}) => {
  const pathname = usePathname();
  const currentUrl = canonical || generateCanonicalUrl(pathname);

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="Synergy Access Pvt. Ltd." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Synergy Access" />
      <meta property="og:locale" content="en_IN" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImage && <meta property="og:image:alt" content={title} />}
      {ogImage && <meta property="og:image:width" content="1200" />}
      {ogImage && <meta property="og:image:height" content="630" />}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@synergyaccess" />
      <meta name="twitter:creator" content="@synergyaccess" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#4A6CF7" />
      <meta name="msapplication-TileColor" content="#4A6CF7" />
      <meta name="application-name" content="Synergy Access" />

      {/* Geo Meta Tags */}
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Noida" />
      <meta name="geo.position" content="28.5355;77.3910" />
      <meta name="ICBM" content="28.5355, 77.3910" />

      {/* Business Meta Tags */}
      <meta name="rating" content="5" />
      <meta name="distribution" content="global" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      )}

      {/* Website Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData('WebSite', {})) }} />

      {/* Organization Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData('Organization', {})) }} />

      {/* Additional Head Elements */}
      {children}
    </Head>
  );
};

export default SEOHead;
