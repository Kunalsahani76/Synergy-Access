// Essential SEO utilities for website optimization

// SEO-friendly URL slug generator
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

// Generate canonical URL
export const generateCanonical = (path: string): string => {
  const baseUrl = 'https://synergy-access.com'; // Update with actual domain
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

// Extract keywords from content for meta tags
export const extractKeywords = (content: string, maxKeywords: number = 10): string[] => {
  const commonWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should'];
  
  const words = content
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3 && !commonWords.includes(word));
  
  const wordCount = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  return Object.entries(wordCount)
    .sort(([,a], [,b]) => b - a)
    .slice(0, maxKeywords)
    .map(([word]) => word);
};

// Generate breadcrumb structured data for better SEO
export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

// Generate meta tags for social sharing
export const generateSocialMetaTags = (data: {
  title: string;
  description: string;
  image?: string;
  url?: string;
}) => {
  return {
    openGraph: {
      title: data.title,
      description: data.description,
      image: data.image || '/assets/logo.png',
      url: data.url || (typeof window !== 'undefined' ? window.location.href : ''),
      type: 'website',
      siteName: 'Synergy Access'
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      image: data.image || '/assets/logo.png',
      site: '@synergyaccess'
    }
  };
};