'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Home, Phone } from 'lucide-react';

export default function NotFound() {
  const popularPages = [
    { name: 'Boom Barriers', href: '/products/boomBarrier', icon: '🚧' },
    { name: 'Bollards', href: '/products/bollards', icon: '🛡️' },
    { name: 'Turnstiles', href: '/products/tripod-turnstile', icon: '🚪' },
    { name: 'Access Control', href: '/products/biometric-fingerprint', icon: '👆' },
    { name: 'Parking Systems', href: '/products/parking-management', icon: '🅿️' },
    { name: 'ANPR Solutions', href: '/products/anpr-solution', icon: '📷' },
  ];

  const quickLinks = [
    { name: 'About Synergy Access', href: '/about' },
    { name: 'All Products', href: '/products' },
    { name: 'Blog & Resources', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Get Quote', href: '/quote' },
    { name: 'Consultancy', href: '/consultancy' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative">
            <h1 className="text-8xl md:text-9xl font-bold text-gray-200 select-none">
              404
            </h1>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-24 h-24 border-4 border-blue-500 border-dashed rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <p className="text-base text-gray-500">
            Don&apos;t worry, let&apos;s get you back to exploring our entrance automation solutions!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <Home size={20} />
            Back to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            <Phone size={20} />
            Contact Support
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </motion.div>

        {/* Popular Products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Popular Products
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {popularPages.map((page, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                <Link
                  href={page.href}
                  className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 hover:border-blue-200"
                >
                  <div className="text-2xl mb-2">{page.icon}</div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {page.name}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Quick Links
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="border-t border-gray-200 pt-8"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Image
              src="/assets/logo.png"
              alt="Synergy Access Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <div>
              <div className="font-bold text-gray-900">Synergy Access Pvt. Ltd</div>
              <div className="text-sm text-gray-600">Entrance Automation Systems</div>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Need help finding what you&apos;re looking for? Call us at{' '}
            <a href="tel:+919999339265" className="text-blue-600 hover:underline font-semibold">
              +91 99993 39265
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}