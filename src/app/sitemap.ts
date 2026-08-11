import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.synergy-access.com'
  
  // Main pages
  const mainPages = [
    '',
    '/about',
    '/contact',
    '/blog',
    '/news-blog',
    '/services',
    '/synergy-access',
    '/consultancy',
    '/assistance',
    '/evcharger',
    '/quote',
    '/quote/thank-you',
    '/privacy',
    '/terms',
    '/products'
  ]

  // Product pages
  const productPages = [
    '/products/boomBarrier',
    '/products/bollards',
    '/products/tripod-turnstile',
    '/products/flap-swing-barrier',
    '/products/full-height-turnstile',
    '/products/p-type-swing-barrier',
    '/products/tyre-killer',
    '/products/road-blocker',
    '/products/parking-management',
    '/products/parking-guidance',
    '/products/parking-information',
    '/products/anpr-solution',
    '/products/dfmd',
    '/products/hhmd',
    '/products/baggage-scanner',
    '/products/uvss',
    '/products/biometric-fingerprint',
    '/products/face-recognition',
    '/products/rfid-solution',
    '/products/qr-solutions',
    '/products/visitor-management',
    '/products/vms-mobile',
    '/products/siren-system',
    '/products/solutions'
  ]

  // Blog pages with layouts (main ones)
  const blogPagesWithLayouts = [
    '/blog/benefits-of-using-automatic-boom-barrier',
    '/blog/anprtechnology',
    '/blog/smartparking',
    '/blog/perimetersecurity',
    '/blog/biometricaccess',
    '/blog/hydraulicBollards'
  ]

  // All blog pages (including those without layouts)
  const allBlogPages = [
    ...blogPagesWithLayouts,
    '/blog/advanced-dfmd-configurations-for-high-security-facilities',
    '/blog/advanced-intrusion-detection-systems-comparison',
    '/blog/advanced-technology-use-in-car-parking-management-system',
    '/blog/ai-powered-parking-solutions-for-smart-cities',
    '/blog/anti-climb-fencing-solutions-for-high-security-sites',
    '/blog/applications-of-tripod-turnstile-gate',
    '/blog/automatic-boom-barrier-maintenance-guide',
    '/blog/automaticboombarrier',
    '/blog/biometric-access-control%3A-the-future-of-security-gates',
    '/blog/custom-boom-barrier-solutions-for-unique-requirements',
    '/blog/customizable-automatic-boom-barriers-for-unique-requirements',
    '/blog/dfmd-sensitivity-calibration-best-practices',
    '/blog/energy-efficient-automatic-boom-barrier-solutions',
    '/blog/essential-features-for-smart-parking-management-system',
    '/blog/fullblog',
    '/blog/how-does-a-baggage-scanner-works',
    '/blog/how-does-door-frame-metal-detector-work%3F-dfmd-types-explained',
    '/blog/how-does-the-boom-barrier-contribute-toward-safety%3F',
    '/blog/improve-the-security-aspect-with-the-parking-system',
    '/blog/layered-security-approach-for-maximum-protection',
    '/blog/mobile-integration-in-modern-parking-systems',
    '/blog/perimeter-lighting-strategies-for-enhanced-security',
    '/blog/reasons-why-visitor-management-systems-is-important',
    '/blog/revenue-optimization-through-smart-parking',
    '/blog/role-of-barriers-in-perimeter-protection',
    '/blog/smart-boom-barriers-with-anpr-integration',
    '/blog/the-scope-of-effective-parking-management-system',
    '/blog/utilize-perfect-security-equipment-on-site',
    '/blog/weather-resistant-boom-barriers-for-outdoor-use',
    '/blog/wireless-control-options-for-automatic-boom-barriers'
  ]

  // Special pages
  const specialPages = [
    '/evcharger/carousel'
  ]

  const allPages = [...mainPages, ...productPages, ...allBlogPages, ...specialPages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page.includes('/blog/') ? 'weekly' as const : 'monthly' as const,
    priority: page === '' ? 1 : 
             page.includes('/products/') ? 0.8 : 
             page.includes('/blog/') ? 0.6 : 
             0.7,
  }))
}