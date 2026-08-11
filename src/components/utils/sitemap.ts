          import { mainPages, productCategories, blogCategories, siteConfig } from '@/components/utils/seo';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

// Generate XML sitemap content
export const generateXMLSitemap = (): string => {
  const urls: SitemapUrl[] = [];
  const currentDate = new Date().toISOString().split('T')[0];

  // Add main pages
  mainPages.forEach(page => {
    urls.push({
      loc: `${siteConfig.siteUrl}/${page.slug}`,
      lastmod: currentDate,
      changefreq: page.slug === '' ? 'daily' : 'weekly',
      priority: page.priority
    });
  });

  // Add product pages
  productCategories.forEach(product => {
    urls.push({
      loc: `${siteConfig.siteUrl}/products/${product.slug}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: product.priority
    });
  });

  // Add blog pages
  blogCategories.forEach(blog => {
    urls.push({
      loc: `${siteConfig.siteUrl}/blog/${blog.slug}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: blog.priority
    });
  });

  // Generate XML
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xmlContent;
};

// Generate robots.txt content
export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${siteConfig.siteUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin areas (if any)
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$
Disallow: /*.xml$
Disallow: /api/

# Allow important directories
Allow: /assets/
Allow: /images/
Allow: /css/
Allow: /js/

# Block specific bots (optional)
User-agent: AhrefsBot
Crawl-delay: 10

User-agent: MJ12bot
Crawl-delay: 10`;
};

// Validate URL format
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Get sitemap statistics for reference
export const getSitemapStats = () => {
  return {
    totalUrls: mainPages.length + productCategories.length + blogCategories.length,
    mainPages: mainPages.length,
    productPages: productCategories.length,
    blogPages: blogCategories.length,
    lastGenerated: new Date().toISOString()
  };
};