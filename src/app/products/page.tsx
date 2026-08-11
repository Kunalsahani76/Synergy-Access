'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, Zap, Settings } from 'lucide-react';
import { ProductCollectionStructuredData, OrganizationStructuredData } from '@/components/StructuredData';

export default function ProductsPage() {
  // All products for structured data
  const allProducts = [
    // Access Control & Barriers
    { name: 'Boom Barriers', description: 'Automatic boom barriers for parking and vehicle access control', image: '/assets/boombarr.jpg', category: 'Access Control & Barriers', price: '75000' },
    { name: 'Bollards', description: 'Hydraulic and automatic bollards for perimeter security', image: '/assets/bollard.jpg', category: 'Access Control & Barriers', price: '120000' },
    { name: 'Road Blockers', description: 'Heavy-duty road blockers for maximum security', image: '/assets/roadblocker.jpeg', category: 'Access Control & Barriers', price: '200000' },
    { name: 'Tyre Killers', description: 'Automatic tyre killers for unauthorized vehicle prevention', image: '/assets/tyrekiller.jpeg', category: 'Access Control & Barriers', price: '80000' },

    // Turnstiles & Gates
    { name: 'Tripod Turnstiles', description: 'Durable tripod turnstiles for pedestrian access control', image: '/assets/turnstiles.jpg', category: 'Turnstiles & Gates', price: '50000' },
    { name: 'Flap Barriers', description: 'Premium flap barriers for modern office environments', image: '/assets/flap.jpeg', category: 'Turnstiles & Gates', price: '85000' },
    { name: 'Full Height Turnstiles', description: 'Maximum security full height rotating turnstiles', image: '/assets/fullheight.jpg', category: 'Turnstiles & Gates', price: '150000' },
    { name: 'P-Type Swing Barriers', description: 'Elegant swing barriers for premium access control', image: '/assets/ptype.jpg', category: 'Turnstiles & Gates', price: '95000' },

    // Parking Systems
    { name: 'Parking Management', description: 'Complete parking management systems with automation', image: '/assets/parkingmanagement.jpg', category: 'Parking Systems', price: '300000' },
    { name: 'Parking Guidance', description: 'Smart parking guidance systems for efficient space utilization', image: '/assets/parkingguid.jpg', category: 'Parking Systems', price: '250000' },
    { name: 'Parking Information', description: 'Real-time parking information display systems', image: '/assets/ParkingInformation.jpg', category: 'Parking Systems', price: '180000' },
    { name: 'ANPR Solutions', description: 'Automatic Number Plate Recognition for vehicle tracking', image: '/assets/anpr.jpg', category: 'Parking Systems', price: '220000' },
    { name: 'Park-Access 2500', description: 'Premium hydraulic car lift system for space optimization', image: '/access-parking/high-performance-engineering.png', category: 'Parking Systems', price: '450000' },

    // Additional Products
    { name: 'Biometric Access Control', description: 'Advanced biometric access control systems', image: '/assets/Face.jpg', category: 'Access Control', price: '65000' },
    { name: 'Face Recognition', description: 'AI-powered face recognition systems', image: '/assets/Face-recognition.jpg', category: 'Biometric Systems', price: '90000' },
    { name: 'RFID Solutions', description: 'RFID-based access control systems', image: '/assets/RFID.jpg', category: 'Access Control', price: '35000' },
    { name: 'QR Solutions', description: 'QR code-based access control systems', image: '/assets/QRBased.jpg', category: 'Access Control', price: '25000' },
    { name: 'Visitor Management', description: 'Complete visitor management systems', image: '/assets/VisitorManagementSystem.jpg', category: 'Management Systems', price: '45000' },
    { name: 'DFMD', description: 'Door Frame Metal Detectors for security screening', image: '/assets/dfmd.png', category: 'Security Screening', price: '55000' },
    { name: 'HHMD', description: 'Hand Held Metal Detectors for security screening', image: '/assets/hhmd.png', category: 'Security Screening', price: '8000' },
    { name: 'Baggage Scanner', description: 'X-ray baggage scanners for security screening', image: '/assets/xray.jpeg', category: 'Security Screening', price: '400000' },
    { name: 'UVSS', description: 'Under Vehicle Surveillance Systems', image: '/assets/uvss.png', category: 'Vehicle Screening', price: '500000' },
    { name: 'Siren Systems', description: 'Professional siren and alarm systems', image: '/assets/siren.jpg', category: 'Alert Systems', price: '15000' }
  ];

  const productCategories = [
    {
      title: 'Access Control & Barriers',
      description: 'Vehicle access control solutions for enhanced security',
      icon: <Shield className="w-8 h-8" />,
      products: [
        {
          name: 'Boom Barriers',
          image: '/assets/boombarr.jpg',
          href: '/products/boomBarrier',
          description: 'Automatic boom barriers for parking and vehicle access control'
        },
        {
          name: 'Bollards',
          image: '/assets/bollard.jpg',
          href: '/products/bollards',
          description: 'Hydraulic and automatic bollards for perimeter security'
        },
        {
          name: 'Road Blockers',
          image: '/assets/roadblocker.jpeg',
          href: '/products/road-blocker',
          description: 'Heavy-duty road blockers for maximum security'
        },
        {
          name: 'Tyre Killers',
          image: '/assets/tyrekiller.jpeg',
          href: '/products/tyre-killer',
          description: 'Automatic tyre killers for unauthorized vehicle prevention'
        }
      ]
    },
    {
      title: 'Turnstiles & Gates',
      description: 'Pedestrian access control and management systems',
      icon: <Zap className="w-8 h-8" />,
      products: [
        {
          name: 'Tripod Turnstiles',
          image: '/assets/turnstiles.jpg',
          href: '/products/tripod-turnstile',
          description: 'Durable tripod turnstiles for pedestrian access control'
        },
        {
          name: 'Flap Barriers',
          image: '/assets/flap.jpeg',
          href: '/products/flap-swing-barrier',
          description: 'Premium flap barriers for modern office environments'
        },
        {
          name: 'Full Height Turnstiles',
          image: '/assets/fullheight.jpg',
          href: '/products/full-height-turnstile',
          description: 'Maximum security full height rotating turnstiles'
        },
        {
          name: 'P-Type Swing Barriers',
          image: '/assets/ptype.jpg',
          href: '/products/p-type-swing-barrier',
          description: 'Elegant swing barriers for premium access control'
        }
      ]
    },
    {
      title: 'Parking Systems',
      description: 'Smart parking management and automation solutions',
      icon: <Settings className="w-8 h-8" />,
      products: [
        {
          name: 'Parking Management',
          image: '/assets/parkingmanagement.jpg',
          href: '/products/parking-management',
          description: 'Complete parking management systems with automation'
        },
        {
          name: 'Parking Guidance',
          image: '/assets/parkingguid.jpg',
          href: '/products/parking-guidance',
          description: 'Smart parking guidance systems for efficient space utilization'
        },
        {
          name: 'Parking Information',
          image: '/assets/ParkingInformation.jpg',
          href: '/products/parking-information',
          description: 'Real-time parking information display systems'
        },
        {
          name: 'ANPR Solutions',
          image: '/assets/anpr.jpg',
          href: '/products/anpr-solution',
          description: 'Automatic Number Plate Recognition for vehicle tracking'
        },
        {
          name: 'Park-Access 2500',
          image: '/access-parking/high-performance-engineering.png',
          href: '/products/stack-parking-system',
          description: 'Premium hydraulic car lift system for space optimization'
        }
      ]
    }
  ];

  const additionalProducts = [
    {
      name: 'Biometric Access Control',
      image: '/assets/Face.jpg',
      href: '/products/biometric-fingerprint',
      category: 'Access Control'
    },
    {
      name: 'Face Recognition',
      image: '/assets/Face-recognition.jpg',
      href: '/products/face-recognition',
      category: 'Biometric Systems'
    },
    {
      name: 'RFID Solutions',
      image: '/assets/RFID.jpg',
      href: '/products/rfid-solution',
      category: 'Access Control'
    },
    {
      name: 'QR Solutions',
      image: '/assets/QRBased.jpg',
      href: '/products/qr-solutions',
      category: 'Access Control'
    },
    {
      name: 'Visitor Management',
      image: '/assets/VisitorManagementSystem.jpg',
      href: '/products/visitor-management',
      category: 'Management Systems'
    },
    {
      name: 'DFMD',
      image: '/assets/dfmd.png',
      href: '/products/dfmd',
      category: 'Security Screening'
    },
    {
      name: 'HHMD',
      image: '/assets/hhmd.png',
      href: '/products/hhmd',
      category: 'Security Screening'
    },
    {
      name: 'Baggage Scanner',
      image: '/assets/xray.jpeg',
      href: '/products/baggage-scanner',
      category: 'Security Screening'
    },
    {
      name: 'UVSS',
      image: '/assets/uvss.png',
      href: '/products/uvss',
      category: 'Vehicle Screening'
    },
    {
      name: 'Siren Systems',
      image: '/assets/siren.jpg',
      href: '/products/siren-system',
      category: 'Alert Systems'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data */}
      <ProductCollectionStructuredData products={allProducts} />
      <OrganizationStructuredData />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Complete range of entrance automation and security solutions for every requirement
            </p>
          </motion.div>
        </div>
      </section>
      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {productCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="text-blue-600">{category.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {category.title}
                  </h2>
                </div>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.products.map((product, productIndex) => (
                  <motion.div
                    key={productIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: productIndex * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <Link
                        href={product.href}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Additional Products & Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security and access control solutions for specialized requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {additionalProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={250}
                    height={150}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">
                    {product.name}
                  </h3>
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-semibold text-xs"
                  >
                    View Details
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help Choosing the Right Product?
            </h2>
            <p className="text-xl mb-8">
              Our experts are here to help you find the perfect solution for your requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Our Experts
              </Link>
              <Link
                href="/quote"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}