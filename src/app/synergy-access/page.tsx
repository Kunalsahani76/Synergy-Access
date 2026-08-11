'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SynergyAccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Synergy Access</span> Pvt. Ltd
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              India&apos;s Leading Manufacturer of Entrance Automation Systems
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Synergy Access
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  <strong>Synergy Access Pvt. Ltd</strong> has been at the forefront of entrance automation technology since 2010. We are India&apos;s most trusted manufacturer and supplier of comprehensive access control solutions.
                </p>
                <p>
                  Our expertise spans across boom barriers, hydraulic bollards, turnstiles, parking management systems, and advanced biometric access control solutions. With over 1000+ successful installations across India, Synergy Access has become synonymous with quality, reliability, and innovation.
                </p>
                <p>
                  From corporate offices in Delhi NCR to industrial facilities in Mumbai, from shopping malls in Bangalore to government buildings across India, Synergy Access systems secure and streamline entry points nationwide.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <Image
                src="/assets/about.jpg"
                alt="Synergy Access - Entrance Automation Systems"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Synergy Access */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Synergy Access?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes Synergy Access the preferred choice for entrance automation solutions across India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "15+ Years Experience",
                description: "Established in 2010, Synergy Access brings over a decade of expertise in entrance automation systems.",
                icon: "🏆"
              },
              {
                title: "1000+ Installations",
                description: "Successfully deployed access control solutions across India with 99.9% client satisfaction rate.",
                icon: "📊"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock technical support and maintenance services for all Synergy Access products.",
                icon: "🛠️"
              },
              {
                title: "ISO Certified",
                description: "All Synergy Access products meet international quality standards and certifications.",
                icon: "✅"
              },
              {
                title: "Pan-India Presence",
                description: "Service network covering Delhi, Mumbai, Bangalore, Chennai, Hyderabad, and 50+ cities.",
                icon: "🌍"
              },
              {
                title: "Custom Solutions",
                description: "Tailored entrance automation solutions designed to meet specific client requirements.",
                icon: "⚙️"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Synergy Access Product Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of entrance automation and access control solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Boom Barriers", count: "5+ Models", image: "/assets/boombarr.jpg" },
              { name: "Bollards", count: "3+ Types", image: "/assets/bollard.jpg" },
              { name: "Turnstiles", count: "4+ Variants", image: "/assets/turnstiles.jpg" },
              { name: "Access Control", count: "10+ Systems", image: "/assets/Face.jpg" },
              { name: "Parking Systems", count: "6+ Solutions", image: "/assets/parking.jpg" },
              { name: "Metal Detectors", count: "3+ Models", image: "/assets/dfmd.png" },
              { name: "Road Blockers", count: "2+ Types", image: "/assets/roadblocker.jpeg" },
              { name: "Siren Systems", count: "Multiple Options", image: "/assets/siren.jpg" }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Image
                  src={product.image}
                  alt={`Synergy Access ${product.name}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.count}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Premises with Synergy Access?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free consultation and quote for your entrance automation requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Synergy Access
              </a>
              <a
                href="/quote"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}