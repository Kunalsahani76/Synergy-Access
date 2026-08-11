'use client'; // Only needed if you're using the App Router

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // useRouter if using Pages Router
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
  isActive?: boolean;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  const pathname = usePathname(); // App Router
  // const router = useRouter(); // Pages Router: use router.pathname instead

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', path: '/' }];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;

      let label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      switch (segment) {
        case 'products':
          label = 'Products & Solutions';
          break;
        case 'pages':
          return;
        case 'blog':
          label = 'News & Blog';
          break;
        case 'boom-barrier':
          label = 'Boom Barriers';
          break;
        case 'anpr-solution':
          label = 'ANPR Solutions';
          break;
        case 'rfid-solution':
          label = 'RFID Solutions';
          break;
        case 'qr-solutions':
          label = 'QR Solutions';
          break;
        case 'dfmd':
          label = 'Door Frame Metal Detector';
          break;
        case 'hhmd':
          label = 'Hand Held Metal Detector';
          break;
        case 'uvss':
          label = 'Under Vehicle Surveillance System';
          break;
        case 'vms-mobile':
          label = 'Visitor Management System';
          break;
        case 'Consultancy':
          label = 'Consultancy Services';
          break;
        case 'Assistance':
          label = 'Technical Assistance';
          break;
      }

      breadcrumbs.push({
        label,
        path: currentPath,
        isActive: isLast,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  if (pathname === '/') return null;

  return (
    <nav
      className={`flex items-center space-x-1 text-sm text-gray-600 ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1" itemScope itemType="https://schema.org/BreadcrumbList">
        {breadcrumbItems.map((item, index) => (
          <li
            key={item.path}
            className="flex items-center"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index > 0 && (
              <ChevronRight className="w-4 h-4 mx-1 text-gray-400" aria-hidden="true" />
            )}

            {item.isActive ? (
              <span className="font-medium text-blue-600" itemProp="name" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.path}
                className="hover:text-blue-600 transition-colors duration-200 flex items-center"
                itemProp="item"
              >
                {index === 0 && <Home className="w-4 h-4 mr-1" aria-hidden="true" />}
                <span itemProp="name">{item.label}</span>
              </Link>
            )}

            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
