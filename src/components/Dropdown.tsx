'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProductsDropdownProps {
  isMobile?: boolean;
  closeMobileMenu?: () => void;
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

const CustomIcon: React.FC<{ src: string; alt: string; size?: number }> = ({ src, alt, size = 32 }) => (
  <Image src={src} alt={alt} width={size} height={size} className="object-contain w-8 h-8" />
);

const products = [
  {
    name: 'Gate Automation',
    key: 'gate-automation',
    subItems: [
      { name: 'Boom Barrier', href: '/products/boomBarrier', icon: <CustomIcon src="/assets/icons/barrier.png" alt="Boom Barrier" /> },
      { name: 'Bollards', href: '/products/bollards', icon: <CustomIcon src="/assets/icons/bollard.png" alt="Bollards" /> },
      { name: 'Tyre Killer', href: '/products/tyre-killer', icon: <CustomIcon src="/assets/icons/tyre.png" alt="Tyre Killer" /> },
      { name: 'Road Blocker', href: '/products/road-blocker', icon: <CustomIcon src="/assets/icons/roadblocker.png" alt="Road Blocker" /> },
      { name: 'UVSS', href: '/products/uvss', icon: <CustomIcon src="/assets/icons/uvss.png" alt="UVSS" /> },
      { name: 'Baggage Scanner', href: '/products/baggage-scanner', icon: <CustomIcon src="/assets/icons/xray.png" alt="Baggage Scanner" /> },
      { name: 'DFMD', href: '/products/dfmd', icon: <CustomIcon src="/assets/icons/door-frame.png" alt="DFMD" /> },
      { name: 'HHMD', href: '/products/hhmd', icon: <CustomIcon src="/assets/icons/handlehead.png" alt="HHMD" /> },
    ],
  },
  {
    name: 'Pedestrian Access Gates',
    key: 'pedestrian-access',
    subItems: [
      { name: 'Flap/Swing Barrier', href: '/products/flap-swing-barrier', icon: <CustomIcon src="/assets/icons/flap.png" alt="Flap/Swing Barrier" /> },
      { name: 'Tripod Turnstile', href: '/products/tripod-turnstile', icon: <CustomIcon src="/assets/icons/Tripod Turnstile.png" alt="Tripod Turnstile" /> },
      { name: 'P-Type Swing Barrier', href: '/products/p-type-swing-barrier', icon: <CustomIcon src="/assets/icons/ptype.png" alt="P-Type Swing Barrier" /> },
      { name: 'Full Height Turnstile', href: '/products/full-height-turnstile', icon: <CustomIcon src="/assets/icons/fullheight.png" alt="Full Height Turnstile" /> },
    ],
  },
  {
    name: 'Parking',
    key: 'parking',
    subItems: [
      { name: 'Parking Management System', href: '/products/parking-management', icon: <CustomIcon src="/assets/icons/ParkingSystem.png" alt="Parking Management" /> },
      { name: 'Parking Guidance System', href: '/products/parking-guidance', icon: <CustomIcon src="/assets/icons/guidance.png" alt="Parking Guidance" /> },
      { name: 'Parking Information System', href: '/products/parking-information', icon: <CustomIcon src="/assets/icons/information.png" alt="Parking Information" /> },
      { name: 'ANPR Solution', href: '/products/anpr-solution', icon: <CustomIcon src="/assets/icons/anpr.png" alt="ANPR Solution" /> },
      { name: 'Stack Parking System', href: '/products/stack-parking-system', icon: <CustomIcon src="/access-parking/Icon.svg" alt="Park-Access 2500" /> },
    ],
  },
  {
    name: 'Access Control System',
    key: 'access-control',
    subItems: [
      { name: 'Biometric (Fingerprint)', href: '/products/biometric-fingerprint', icon: <CustomIcon src="/assets/icons/Biometric Fingerprint.png" alt="Biometric" /> },
      { name: 'RFID Solution', href: '/products/rfid-solution', icon: <CustomIcon src="/assets/ICONS/RFID.png" alt="RFID Solution" /> },
      { name: 'Visitor Management System', href: '/products/visitor-management', icon: <CustomIcon src="/assets/icons/visitor.png" alt="Visitor Management" /> },
      { name: 'VMS with Mobile Application', href: '/products/vms-mobile', icon: <CustomIcon src="/assets/icons/vms.png" alt="VMS Mobile" /> },
      { name: 'QR Based Solutions', href: '/products/qr-solutions', icon: <CustomIcon src="/assets/icons/scan.png" alt="QR Based Solutions" /> },
      { name: 'Face Recognition System', href: '/products/face-recognition', icon: <CustomIcon src="/assets/icons/electronics.png" alt="Face Recognition" /> },
      { name: 'Access Control Systems', href: '/products/access-control-systems', icon: <CustomIcon src="/assets/icons/electronics.png" alt="Access Control Systems" /> },
      { name: 'Siren System', href: '/products/siren-system', icon: <CustomIcon src="/assets/icons/siren.png" alt="Siren System" /> },
      { name: 'Solutions', href: '/products/solutions', icon: <CustomIcon src="/assets/icons/solution.png" alt="Solutions" /> },
    ],
  },
];

const ProductsDropdown: React.FC<ProductsDropdownProps> = ({ isMobile = false, closeMobileMenu, setOpen }) => {
  const [activeTab, setActiveTab] = useState(products[0].key);
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (key: string) => {
    setExpandedCategories((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleProductClick = () => {
    if (closeMobileMenu) {
      closeMobileMenu();
    }
  };

  // Mobile version - collapsible accordion style
  if (isMobile) {
    return (
      <div className="w-full">
        <button
          className="flex items-center justify-between w-full py-2 text-left"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>Products & Solutions</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pl-4 space-y-3 mt-2">
            {products.map((category) => (
              <div key={category.key} className="border-l-2 border-gray-200 pl-3">
                <button
                  className="flex items-center justify-between w-full py-1 text-sm font-medium text-gray-700"
                  onClick={() => toggleCategory(category.key)}
                >
                  <span>{category.name}</span>
                  {expandedCategories.includes(category.key) ?
                    <ChevronUp className="w-3 h-3" /> :
                    <ChevronDown className="w-3 h-3" />
                  }
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${expandedCategories.includes(category.key) ? 'max-h-screen opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="space-y-2">
                    {category.subItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-2 py-1 text-xs text-gray-600 hover:text-violet-600 transition-colors duration-200"
                        onClick={handleProductClick}
                      >
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100">
                          {item.icon}
                        </div>
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Desktop version - hover dropdown
  return (
    <div className="absolute left-1/2 top-full transform -translate-x-1/2 max-w-6xl w-[95vw] px-2 z-50 font-sans" onMouseLeave={() => setOpen && setOpen(false)}>
      <div className="w-full px-4 py-4 border-t border-gray-100 shadow-xl bg-white/70 backdrop-blur-xl rounded-b-xl sm:rounded-b-2xl sm:shadow-2xl sm:px-6 md:px-8 sm:py-6 animate-fade-in-up">
        {/* Centered tabs container */}
        <div className="flex justify-center gap-2 pb-2 mb-4 overflow-x-auto sm:gap-3 md:gap-4 sm:mb-6">
          {products.map((cat) => (
            <button
              key={cat.key}
              className={`px-4 py-2 md:px-5 md:py-2.5 rounded-xl font-semibold text-sm md:text-base
                transition-all duration-300 backdrop-blur-md shadow-md border whitespace-nowrap
                ${activeTab === cat.key
                  ? 'bg-white/30 text-blue-800 border-blue-500 shadow-blue-200'
                  : 'bg-white/10 text-gray-800 hover:bg-white/20 border-transparent hover:border-blue-300'}
              `}
              onClick={() => setActiveTab(cat.key)}
              type="button"
            >
              {cat.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 md:gap-6">
          {products.find((cat) => cat.key === activeTab)?.subItems.map((sub) => (
            <Link
              key={sub.name}
              href={sub.href}
              className="flex flex-col items-center transition-all duration-200 group hover:scale-105"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/80 group-hover:bg-violet-100 text-2xl sm:text-3xl mb-1.5 sm:mb-2 shadow-sm transition-all duration-200">
                {sub.icon}
              </div>
              <span className="text-xs font-medium leading-tight text-center text-gray-800 transition-all duration-200 sm:text-sm md:text-base group-hover:text-blue-600">
                {sub.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsDropdown;