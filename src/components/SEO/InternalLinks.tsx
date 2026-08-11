import React from 'react';

import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface InternalLink {
  title: string;
  path: string;
  description?: string;
  category?: string;
}

interface InternalLinksProps {
  currentPage?: string;
  category?: 'products' | 'blog' | 'services' | 'general';
  maxLinks?: number;
  className?: string;
  title?: string;
  showDescription?: boolean;
}

const InternalLinks: React.FC<InternalLinksProps> = ({
  currentPage = '',
  category = 'general',
  maxLinks = 6,
  className = '',
  title = 'Related Pages',
  showDescription = true
}) => {

  // Define internal links by category
  const linksByCategory = {
    products: [
      {
        title: 'Boom Barriers',
        path: '/products/boomBarrier',
        description: 'Heavy-duty automatic boom barriers with 7m extension capability',
        category: 'Access Control'
      },
      {
        title: 'Hydraulic Bollards',
        path: '/products/bollards',
        description: 'Robust hydraulic bollards for vehicle access control',
        category: 'Perimeter Security'
      },
      {
        title: 'ANPR Solutions',
        path: '/products/anpr-solution',
        description: 'Automatic Number Plate Recognition for seamless access',
        category: 'Smart Technology'
      },
      {
        title: 'Parking Management',
        path: '/products/parking-management',
        description: 'Complete parking management with RFID and payment integration',
        category: 'Parking Systems'
      },
      {
        title: 'Door Frame Metal Detector',
        path: '/products/dfmd',
        description: 'High-sensitivity metal detector for security checkpoints',
        category: 'Security Screening'
      },
      {
        title: 'Tripod Turnstiles',
        path: '/products/tripod-turnstile',
        description: 'Bi-directional tripod turnstile for pedestrian access',
        category: 'Access Control'
      },
      {
        title: 'Face Recognition System',
        path: '/products/face-recognition',
        description: 'AI-powered biometric authentication for secure access',
        category: 'Biometric Security'
      },
      {
        title: 'RFID Solutions',
        path: '/products/rfid-solution',
        description: 'Advanced RFID technology for seamless access control',
        category: 'Smart Technology'
      },
      {
        title: 'Stack Parking System',
        path: '/products/stack-parking-system',
        description: 'Premium hydraulic car lift system for space optimization',
        category: 'Parking Systems'
      }
    ],
    blog: [
      {
        title: 'ANPR Technology Guide',
        path: '/blog/anprtechnology',
        description: 'Complete guide to Automatic Number Plate Recognition technology',
        category: 'Technology'
      },
      {
        title: 'Smart Parking Solutions',
        path: '/blog/smartparking',
        description: 'How smart parking is revolutionizing urban mobility',
        category: 'Innovation'
      },
      {
        title: 'Biometric Access Control',
        path: '/blog/biometricaccess',
        description: 'Future of secure authentication with biometric systems',
        category: 'Security'
      },
      {
        title: 'Hydraulic Bollards Guide',
        path: '/blog/HydraulicBollards',
        description: 'Advanced security meets seamless traffic management',
        category: 'Security'
      },
      {
        title: 'Perimeter Security',
        path: '/blog/perimetersecurity',
        description: 'First line of defense for your property security',
        category: 'Security'
      },
      {
        title: 'Automatic Boom Barriers',
        path: '/blog/automaticboombarrier',
        description: 'Intelligent access control solutions for modern facilities',
        category: 'Technology'
      }
    ],
    services: [
      {
        title: 'Consultancy Services',
        path: '/consultancy',
        description: 'Expert consultation for your security and automation needs',
        category: 'Services'
      },
      {
        title: 'Technical Assistance',
        path: '/assistance',
        description: 'Professional support and maintenance services',
        category: 'Support'
      },
      {
        title: 'Contact Us',
        path: '/contact',
        description: 'Get in touch with our team for personalized solutions',
        category: 'Contact'
      },
      {
        title: 'About Synergy Access',
        path: '/about',
        description: 'Learn about our company, mission, and values',
        category: 'Company'
      }
    ],
    general: [
      {
        title: 'Our Products',
        path: '/products',
        description: 'Explore our comprehensive range of automation solutions',
        category: 'Products'
      },
      {
        title: 'News & Blog',
        path: '/pages/blog/page',
        description: 'Latest industry insights and technology updates',
        category: 'Resources'
      },
      {
        title: 'About Us',
        path: '/about',
        description: 'Discover our journey and commitment to excellence',
        category: 'Company'
      },
      {
        title: 'Contact',
        path: '/contact',
        description: 'Connect with our experts for customized solutions',
        category: 'Contact'
      }
    ]
  };

  // Get relevant links based on category
  const availableLinks = linksByCategory[category] || linksByCategory.general;

  // Filter out current page and limit results
  const filteredLinks = availableLinks
    .filter(link => link.path !== currentPage)
    .slice(0, maxLinks);

  if (filteredLinks.length === 0) {
    return null;
  }

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <ArrowRight className="w-5 h-5 text-blue-600" />
      </div>

      <div className="space-y-4">
        {filteredLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className="block p-4 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {link.title}
                  </h4>
                  <ExternalLink className="w-4 h-4 ml-2 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>

                {showDescription && link.description && (
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                    {link.description}
                  </p>
                )}

                {link.category && (
                  <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">
                    {link.category}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {category === 'products' && (
        <div className="mt-6 pt-4 border-t border-gray-100">

        </div>
      )}

      {category === 'blog' && (
        <div className="mt-6 pt-4 border-t border-gray-100">
          <Link
            href="/pages/blog/page"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            Read More Articles
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      )}
    </div>
  );
};

// Contextual link suggestions based on current page
export const getContextualLinks = (currentPath: string): InternalLink[] => {
  const pathSegments = currentPath.split('/').filter(Boolean);

  if (pathSegments.includes('products')) {
    return [
      { title: 'Consultancy Services', path: '/Consultancy', description: 'Get expert advice for your project' },
      { title: 'Technical Support', path: '/Assistance', description: 'Professional installation and maintenance' },
      { title: 'Contact Us', path: '/contact', description: 'Request a quote or demo' }
    ];
  }

  if (pathSegments.includes('blog')) {
    return [
      { title: 'Our Products', path: '/products', description: 'Explore our automation solutions' },
      { title: 'Case Studies', path: '/about', description: 'See our successful implementations' },
      { title: 'Get Consultation', path: '/Consultancy', description: 'Discuss your requirements' }
    ];
  }

  if (currentPath === '/about') {
    return [
      { title: 'Our Products', path: '/products', description: 'See what we manufacture' },
      { title: 'Success Stories', path: '/pages/blog/page', description: 'Read our latest articles' },
      { title: 'Contact Us', path: '/contact', description: 'Start your project today' }
    ];
  }

  return [
    { title: 'Products & Solutions', path: '/products', description: 'Comprehensive automation range' },
    { title: 'Industry Insights', path: '/pages/blog/page', description: 'Latest technology trends' },
    { title: 'Expert Consultation', path: '/Consultancy', description: 'Professional guidance' }
  ];
};

export default InternalLinks;