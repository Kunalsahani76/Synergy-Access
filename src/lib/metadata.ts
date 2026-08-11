import { Metadata } from 'next';

// Base configuration
export const siteConfig = {
  name: 'Synergy Access Pvt. Ltd',
  description: 'Synergy Access - Leading manufacturer of entrance automation products including boom barriers, bollards, turnstiles, and access control solutions. Professional installation services, parking management systems, and security automation solutions across India. Contact our Noida office for expert consultation.',
  url: 'https://www.synergy-access.com',
  ogImage: 'https://www.synergy-access.com/assets/logo.png',
  keywords: [
    // Primary Brand Keywords
    'Synergy Access', 'SynergyAccess', 'Synergy Access Pvt Ltd', 'synergy-access.com', 'synergy access systems', 'synergy access solutions', 'synergy access india', 'synergy access delhi', 'synergy access noida',
    
    // Target Search Queries - Products
    'Synergy Access products', 'synergy access product range', 'synergy access boom barriers', 'synergy access bollards', 'synergy access access control systems', 'synergy access turnstiles', 'synergy access security products',
    
    // Target Search Queries - Solutions
    'Synergy Access solutions', 'synergy access parking management', 'synergy access security automation', 'synergy access EV charging systems', 'synergy access smart solutions', 'synergy access automation solutions',
    
    // Target Search Queries - Installation
    'Synergy Access installation', 'synergy access installation services', 'synergy access technical setup', 'synergy access installation support', 'synergy access professional installation',
    
    // Target Search Queries - Contact & Location
    'Synergy Access Noida contact', 'synergy access noida office', 'synergy access contact info', 'synergy access office locations', 'synergy access support', 'synergy access sales enquiries', 'synergy access noida address',
    
    // Target Search Queries - Reviews & Features
    'Synergy Access reviews', 'Synergy Access features', 'synergy access features', 'synergy access specifications', 'synergy access product comparisons', 'synergy access real world use', 'synergy access testimonials',
    
    // Core Product Keywords
    'boom barrier', 'bollard', 'turnstile', 'access control', 'parking management', 'security systems', 'automation', 'entrance automation', 'ANPR', 'RFID', 'biometric access', 'Delhi', 'Noida', 'Mumbai',
    'gate automation system', 'automatic gate system india', 'electric gate automation', 'sliding gate automation', 'automatic gate opener', 'faac gate automation india',
    'boom barrier price in india', 'automatic boom barrier', 'faac boom barrier distributor', 'parking boom barrier', 'automatic barrier gate',
    'vehicle access control system', 'road blocker system', 'hydraulic road blocker india', 'tyre killer system', 'automatic tyre killer',
    'bollards for vehicle control', 'retractable bollards manufacturer',
    'parking automation system', 'parking management solution', 'rfid parking system', 'automatic parking gate', 'smart parking india', 'access control for parking lots',
    'baggage scanner for mall', 'x ray baggage scanner india',
    'dfmd door frame metal detector', 'hhmd hand held metal detector',
    'pedestrian access gates', 'uvss under vehicle surveillance system',
    'access control system india', 'biometric access control', 'face recognition access system', 'rfid access control system', 'time attendance access control', 'faac access control india', 'biometric access control system',
    'face recognition attendance system', 'rfid based access control', 'visitor management system software', 'qr based access control system', 'vms with mobile application', 'fingerprint attendance machine', 'access control solutions india',
    'siren alarm system for buildings', 'security access management system'
  ],
};

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
  canonical?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  noIndex = false,
  canonical,
}: GenerateMetadataProps): Metadata {
  const pageTitle = title ? `${title} | Synergy Access` : siteConfig.name;
  const pageDescription = description || siteConfig.description;
  const allKeywords = [...new Set([...siteConfig.keywords, ...keywords])];
  const pageImage = image || siteConfig.ogImage;
  const pageUrl = canonical || siteConfig.url;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: allKeywords.join(', '),
    authors: [{ name: 'Synergy Access Pvt. Ltd' }],
    creator: 'Synergy Access Pvt. Ltd',
    publisher: 'Synergy Access Pvt. Ltd',
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
    },
  };
}

// Product metadata templates
export const productMetadata = {
  boomBarrier: {
    title: 'Automatic Boom Barriers - Gate Barrier Systems',
    description: 'High-quality automatic boom barriers for parking lots and access control. Available in 3-7 meter spans with fast operation cycles. ISO certified boom barrier manufacturer in India.',
    keywords: ['boom barrier', 'automatic boom barrier', 'parking boom barrier', 'gate barrier system', 'boom barrier price', 'hydraulic boom barrier', 'automatic barrier gate'],
  },
  bollards: {
    title: 'Hydraulic Bollards - Automatic Retractable Bollards',
    description: 'Heavy-duty hydraulic and automatic bollards for vehicle access control. Crash-rated, anti-terrorist bollards manufactured and installed across India.',
    keywords: ['hydraulic bollards', 'automatic bollards', 'retractable bollards', 'security bollards', 'anti-terrorist bollards', 'crash rated bollards'],
  },
  tripodTurnstile: {
    title: 'Tripod Turnstile Gates - Pedestrian Access Control',
    description: 'Durable tripod turnstile gates for pedestrian access control in offices, metros, stadiums, and public venues. RFID and biometric integration available.',
    keywords: ['tripod turnstile', 'turnstile gate', 'pedestrian turnstile', 'access control turnstile', 'entry turnstile', 'turnstile barrier'],
  },
  flapBarrier: {
    title: 'Flap Barrier Gates - Speed Gates for Access Control',
    description: 'Premium flap barrier gates (speed gates) for modern office buildings and corporate environments. Fast, secure, and elegant access control solution.',
    keywords: ['flap barrier', 'speed gate', 'swing barrier', 'flap gate', 'office turnstile', 'corporate access control'],
  },
  fullHeightTurnstile: {
    title: 'Full Height Turnstiles - Maximum Security Turnstiles',
    description: 'Full height rotating turnstiles for maximum security applications. Ideal for stadiums, prisons, factories, and high-security facilities.',
    keywords: ['full height turnstile', 'full body turnstile', 'security turnstile', 'rotating turnstile', 'maximum security turnstile'],
  },
  tyreKiller: {
    title: 'Tyre Killers - Road Spike Barriers',
    description: 'Automatic tyre killers (road spike barriers) for preventing unauthorized vehicle entry. Hydraulic and pneumatic options available.',
    keywords: ['tyre killer', 'tire killer', 'road spike barrier', 'vehicle spike system', 'anti-ram barrier', 'spike barrier'],
  },
  roadBlocker: {
    title: 'Hydraulic Road Blockers - Vehicle Barrier Systems',
    description: 'Heavy-duty hydraulic road blockers for high-security perimeter protection. Crash-rated K12, K8, and K4 options available.',
    keywords: ['road blocker', 'hydraulic road blocker', 'vehicle barrier', 'crash rated barrier', 'K12 road blocker', 'security barrier'],
  },
  parkingManagement: {
    title: 'Parking Management System - Smart Parking Solutions',
    description: 'Complete parking management systems with RFID, ANPR, payment integration, and real-time monitoring for commercial and residential complexes.',
    keywords: ['parking management system', 'smart parking', 'automated parking', 'parking guidance system', 'RFID parking', 'ANPR parking'],
  },
  anpr: {
    title: 'ANPR Solutions - Automatic Number Plate Recognition',
    description: 'Advanced ANPR (Automatic Number Plate Recognition) systems for vehicle tracking, parking automation, and access control in India.',
    keywords: ['ANPR', 'automatic number plate recognition', 'license plate recognition', 'LPR system', 'vehicle tracking', 'ANPR camera'],
  },
  dfmd: {
    title: 'Door Frame Metal Detector (DFMD) - Walk Through Metal Detector',
    description: 'High-sensitivity door frame metal detectors (DFMD) for security checkpoints in malls, airports, offices, and government buildings.',
    keywords: ['DFMD', 'door frame metal detector', 'walk through metal detector', 'security scanner', 'metal detection gate', 'WTMD'],
  },
  hhmd: {
    title: 'Hand Held Metal Detector (HHMD) - Portable Security Scanner',
    description: 'Professional hand-held metal detectors (HHMD) for security screening and body scanning in events, offices, and public venues.',
    keywords: ['HHMD', 'hand held metal detector', 'handheld scanner', 'portable metal detector', 'security wand', 'body scanner'],
  },
  baggageScanner: {
    title: 'X-Ray Baggage Scanner - Luggage Screening System',
    description: 'Advanced X-ray baggage scanners for security screening in airports, malls, hotels, and government facilities across India.',
    keywords: ['baggage scanner', 'x-ray scanner', 'luggage scanner', 'cargo scanner', 'security screening', 'airport scanner'],
  },
  uvss: {
    title: 'Under Vehicle Surveillance System (UVSS) - Vehicle Scanning',
    description: 'Under vehicle surveillance systems (UVSS) for detecting threats underneath vehicles at entry points of high-security facilities.',
    keywords: ['UVSS', 'under vehicle scanner', 'vehicle inspection system', 'under car scanner', 'vehicle security scanner'],
  },
  biometricAccess: {
    title: 'Biometric Access Control - Fingerprint & Face Recognition',
    description: 'Advanced biometric access control systems with fingerprint, face recognition, and iris scanning for secure facility management.',
    keywords: ['biometric access control', 'fingerprint scanner', 'face recognition', 'biometric attendance', 'access control system'],
  },
  visitorManagement: {
    title: 'Visitor Management System - VMS Software & Hardware',
    description: 'Complete visitor management systems (VMS) with badge printing, photo capture, and digital logs for offices and corporate buildings.',
    keywords: ['visitor management system', 'VMS', 'visitor registration', 'gate pass system', 'visitor tracking software'],
  },
  rfid: {
    title: 'RFID Access Control Solutions - Card-Based Entry System',
    description: 'RFID-based access control systems for contactless entry, parking automation, and time attendance management.',
    keywords: ['RFID access control', 'RFID card system', 'contactless access', 'proximity card reader', 'RFID parking'],
  },
  qrSolution: {
    title: 'QR Code Access Control - Contactless Entry System',
    description: 'Modern QR code-based access control systems for contactless, mobile-friendly entry and visitor management.',
    keywords: ['QR code access control', 'QR scanner', 'contactless entry', 'mobile access control', 'QR gate pass'],
  },
  faceRecognition: {
    title: 'Face Recognition System - AI-Powered Access Control',
    description: 'AI-powered face recognition systems for touchless access control, attendance marking, and visitor identification.',
    keywords: ['face recognition', 'facial recognition system', 'AI access control', 'touchless entry', 'biometric face scanner'],
  },
  sirenSystem: {
    title: 'Siren & Alarm Systems - Security Alert Solutions',
    description: 'Professional siren and alarm systems for buildings, factories, and facilities. Intrusion detection and emergency alert systems.',
    keywords: ['siren system', 'alarm system', 'security siren', 'emergency alarm', 'intrusion alarm', 'hooter system'],
  },
};

// Target Search Query Metadata Templates
export const targetSearchMetadata = {
  products: {
    title: 'Synergy Access Products - Complete Range of Security & Automation Systems',
    description: 'Explore Synergy Access products including boom barriers, bollards, turnstiles, access control systems, parking management solutions, and security automation. Professional installation and support across India.',
    keywords: ['Synergy Access products', 'synergy access product range', 'boom barriers', 'bollards', 'access control systems', 'turnstiles', 'security products', 'automation systems'],
  },
  solutions: {
    title: 'Synergy Access Solutions - Parking Management & Security Automation',
    description: 'Comprehensive Synergy Access solutions for parking management, security automation, EV charging systems, and smart building integration. Custom solutions designed for your specific requirements.',
    keywords: ['Synergy Access solutions', 'parking management solutions', 'security automation', 'EV charging systems', 'smart solutions', 'automation solutions', 'custom security solutions'],
  },
  installation: {
    title: 'Synergy Access Installation Services - Professional Setup & Support',
    description: 'Professional Synergy Access installation services for security and automation systems. Expert technical setup, commissioning, training, and ongoing support across India.',
    keywords: ['Synergy Access installation', 'installation services', 'technical setup', 'professional installation', 'system commissioning', 'installation support'],
  },
  contact: {
    title: 'Synergy Access Noida Contact - Office Location & Sales Enquiries',
    description: 'Contact Synergy Access Noida office for sales enquiries, support, and consultation. Get in touch with our experts for security and automation solutions. Office locations and contact information.',
    keywords: ['Synergy Access Noida contact', 'noida office', 'contact info', 'office locations', 'sales enquiries', 'support contact', 'noida address'],
  },
  reviews: {
    title: 'Synergy Access Reviews & Features - Product Specifications & Comparisons',
    description: 'Read Synergy Access reviews, product features, specifications, and real-world performance comparisons. Customer testimonials and detailed product analysis for informed decisions.',
    keywords: ['Synergy Access reviews', 'product features', 'specifications', 'product comparisons', 'customer testimonials', 'real world use', 'product analysis'],
  },
};

// Blog post metadata template  
export function generateBlogMetadata(
  title: string,
  description: string,
  keywords: string[] = [],
  publishedTime?: string,
  modifiedTime?: string
): Metadata {
  const metadata = generateMetadata({
    title,
    description,
    keywords,
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      modifiedTime,
    },
  };
}
