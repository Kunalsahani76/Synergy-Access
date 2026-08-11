// components/Footer.tsx
"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/assets/logo.png';

import {
  MapPin,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight
} from 'lucide-react';

const Footer: React.FC = () => {
  const productLinks = [
    'Bollards',
    'Flap Swing Barrier',
    'Parking Management',
    'Biometric Fingerprint',
    'VMS Mobile',
    'Solutions',
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },

    { name: 'Support', href: '/contact' },
    { name: 'Consultancy', href: '/consultancy' },
    { name: 'News & Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'Installation Services',
    'Maintenance & Repair',
    'Technical Support',
    'Training Programs',
    'Warranty Services',
    'Remote Monitoring',
    'System Integration',
    'Consultation'
  ];

  return (
    <footer className="text-white bg-gray-700">
      {/* Main Footer Content */}
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={logo}
                alt="Synergy Access Logo"
                width={160} // 40 * 4 px (Tailwind 40 means 10rem = 160px)
                height={200} // 50 * 4px = 200px
                className="object-contain"
              />
            </Link>

            <p className="leading-relaxed text-gray-300">
              Leading manufacturer & service provider of entrance automation systems for commercial and industrial segments.
              Delivering world-class security solutions since 2019.
            </p>

            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61579317924879" className="p-2 transition-colors bg-gray-800 rounded-lg hover:bg-red-500">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/Synergy_Access" className="p-2 transition-colors bg-gray-800 rounded-lg hover:bg-red-500">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/synergy-access/" className="p-2 transition-colors bg-gray-800 rounded-lg hover:bg-red-500">
                <Linkedin className="w-5 h-5" />
              </a>


            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center text-gray-300 transition-colors hover:text-red-400 group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 transition-opacity opacity-0 group-hover:opacity-100" />
                    <span className="transition-transform group-hover:translate-x-2">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Our Products</h3>
            <ul className="space-y-3">
              {productLinks.map((product) => (
                <li key={product}>
                  <Link
                    href={`/products/${product.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center text-gray-300 transition-colors hover:text-red-400 group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 transition-opacity opacity-0 group-hover:opacity-100" />
                    <span className="transition-transform group-hover:translate-x-2">{product}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service}>
                  <span className="flex items-center text-gray-300 group">
                    <ArrowRight className="w-4 h-4 mr-2 transition-opacity opacity-0 group-hover:opacity-100" />
                    <span className="transition-transform group-hover:translate-x-2">{service}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Info Bar */}
      <div className="py-8 bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 text-center sm:grid-cols-3 sm:text-left">

            {/* Location */}
            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-full">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="mb-1 text-base font-semibold text-white">Locate Us</h4>
                <p className="text-sm leading-relaxed text-gray-300">
                  <strong>Synergy Electrical and Automation</strong><br />
                  B-6, Sector-2, Noida 201301,<br />
                  Uttar Pradesh, India<br />
                  <strong>Synergy Access Pvt. Ltd.</strong><br />
                  B-103, Sector-2, Noida 201301,<br />
                  Uttar Pradesh, India
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-full">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="mb-1 text-base font-semibold text-white">Mail Us</h4>
                <a href="mailto:business@synergy-access.com" className="text-sm text-gray-300 hover:text-red-400 transition-colors">
                  business@synergy-access.com
                </a>


              </div>

            </div>




            {/* Office Hours */}
            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-full">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="mb-1 text-base font-semibold text-white">Office Hours</h4>
                <p className="text-sm text-gray-300">Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* Bottom Bar */}
      <div className="py-4 bg-gray-900 border-t border-gray-800">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Synergy Access, All Rights Reserved.
            </div>
            <a href="https://dmiraki.com/" target="_blank" rel="noopener noreferrer">
              Managed by D&apos;Miraki
            </a>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 transition-colors hover:text-red-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 transition-colors hover:text-red-400">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
