'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Clock, Shield, Wrench, Phone, MapPin } from 'lucide-react';
import { ServiceStructuredData, OrganizationStructuredData } from '@/components/StructuredData';

export default function ServicesPage() {
  const services = [
    {
      title: 'Installation Services',
      description: 'Professional installation of all entrance automation systems with proper testing and commissioning.',
      icon: <Wrench className="w-8 h-8" />,
      features: ['Site survey', 'Professional installation', 'Testing & commissioning', 'Training provided'],
      image: '/assets/p10.jpg'
    },
    {
      title: 'Maintenance & Support',
      description: '24/7 maintenance support with preventive and corrective maintenance services.',
      icon: <Shield className="w-8 h-8" />,
      features: ['24/7 support', 'Preventive maintenance', 'Emergency repairs', 'Spare parts supply'],
      image: '/assets/p11.jpg'
    },
    {
      title: 'Annual Maintenance Contract',
      description: 'Comprehensive AMC packages to ensure optimal performance of your systems.',
      icon: <Clock className="w-8 h-8" />,
      features: ['Regular inspections', 'Priority support', 'Cost-effective', 'Performance guarantee'],
      image: '/assets/p12.jpg'
    }
  ];

  const serviceAreas = [
    'Delhi NCR', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune',
    'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Chandigarh', 'Indore'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data */}
      <ServiceStructuredData services={services} />
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
              Synergy Access Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Complete installation, maintenance, and support services for all entrance automation systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Service Quote
              </a>
              <a
                href="tel:+919999339265"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call Now: +91 99993 39265
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Service Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services to keep your entrance automation systems running smoothly
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-blue-600">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Service Coverage Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide services across major cities in India
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 p-4 rounded-lg text-center hover:bg-blue-50 transition-colors"
              >
                <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <span className="font-semibold text-gray-900">{area}</span>
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
              Need Service Support?
            </h2>
            <p className="text-xl mb-8">
              Our expert technicians are ready to help you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Service
              </Link>
              <a
                href="tel:+919999339265"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Emergency Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}