'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import InternalLinks from "@/components/SEO/InternalLinks";
const parking = '/assets/Automatic Number.jpeg';
const banner = '/assets/anprbanner.jpg';

const productLinks = [
  { name: 'Boom Barrier', path: '/products/boom-barrier' },
  { name: 'Bollards', path: '/products/bollards' },
  { name: 'Tripod Turnstile', path: '/products/tripod-turnstile' },
  { name: 'Automatic Number Plate Recognition', path: '/products/anpr-solution' },
  { name: 'Visitor Management System', path: '/products/visitor-management' },
  { name: 'Other Solutions', path: '/products/solutions' },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export default function ANPRPage() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-full h-full relative overflow-hidden">
      <Head>
        <title>ANPR Solution | Automatic Number Plate Recognition | Synergy Access</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="description" content="Advanced Automatic Number Plate Recognition (ANPR) system for parking management and access control. Real-time license plate detection and automated vehicle tracking." />
        <meta name="keywords" content="ANPR, automatic number plate recognition, license plate recognition, parking management, access control, vehicle tracking, Synergy Access" />
      </Head>

      {/* Hero Banner */}
      <div className="relative w-full h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
              <Image
                src={banner}
                alt="About Synergy Access Banner"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
              />             
            </div>

      {/* Main Content */}
      <div className="container px-4 py-8 mx-auto sm:px-6 lg:py-12">
        <motion.div 
          className="grid gap-6 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Left Column - Sidebar (hidden on mobile) */}
          <motion.div className="hidden space-y-6 lg:block" variants={itemAnimation}>
            {/* Products Card */}
            <motion.div 
              className="p-4 transition-all duration-300 shadow-lg rounded-xl bg-gradient-to-br from-blue-50 to-white hover:shadow-xl"
              whileHover={{ y: -5 }}
            >
              <h2 className="flex items-center gap-2 mb-4 text-lg font-bold text-blue-900">
                <span className="p-1.5 text-sm text-white bg-blue-600 rounded-full">🛡️</span>
                OUR PRODUCTS
              </h2>
              <ul className="space-y-2">
                {productLinks.map((prod) => (
                  <motion.li
                    key={prod.name}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="overflow-hidden rounded-lg"
                  >
                    <a
                      href={prod.path}
                      className="block px-3 py-2 text-xs font-medium text-blue-900 transition-all rounded-lg sm:text-sm bg-white/80 hover:bg-blue-100"
                    >
                      {prod.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Brochures Card */}
            <motion.div 
              className="p-4 transition-all duration-300 shadow-lg rounded-xl bg-gradient-to-br from-blue-50 to-white hover:shadow-xl"
              whileHover={{ y: -5 }}
            >
              <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-blue-900">
                <span className="p-1.5 text-sm text-white bg-blue-600 rounded-full">📄</span>
                BROCHURES
              </h3>
              <div className="flex items-center gap-2 px-3 py-2 transition-all rounded-lg bg-white/80 hover:bg-blue-100">
                <span className="p-1.5 text-blue-600 bg-blue-100 rounded-full">📎</span>
                <a href="#" className="text-xs font-medium text-blue-900 sm:text-sm hover:underline">
                  ANPR Brochure.pdf
                </a>
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div 
              className="p-4 transition-all duration-300 shadow-lg rounded-xl bg-gradient-to-br from-blue-50 to-white hover:shadow-xl"
              whileHover={{ y: -5 }}
            >
              <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-blue-900">
                <span className="p-1.5 text-sm text-white bg-blue-600 rounded-full">📞</span>
                CONTACT US
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 px-3 py-2 transition-all rounded-lg bg-white/80 hover:bg-blue-100">
                  <span className="p-1.5 text-blue-600 bg-blue-100 rounded-full">📞</span>
                  <div>
                    <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Call Us</div>
                    <div className="text-sm font-bold text-blue-900">+91 99993 39265</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 transition-all rounded-lg bg-white/80 hover:bg-blue-100">
                  <span className="p-1.5 text-blue-600 bg-blue-100 rounded-full">✉️</span>
                  <div>
                    <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Email</div>
                    <div className="text-sm font-bold text-blue-900">business@synergy-access.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 transition-all rounded-lg bg-white/80 hover:bg-blue-100">
                  <span className="p-1.5 text-blue-600 bg-blue-100 rounded-full">📍</span>
                  <div>
                    <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Location</div>
                    <div className="text-sm font-bold text-blue-900">B6, 3rd floor, Sector-2<br />Noida, 201301</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div className="lg:col-span-2" variants={itemAnimation}>
            {/* Featured Image */}
            <motion.div 
              className="relative mb-6 overflow-hidden shadow-lg rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="relative w-full h-64 sm:h-80 md:h-96">
                <Image
                  src={parking}
                  alt="Automatic Number Plate Recognition System"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h2 className="text-xl font-bold sm:text-2xl">ANPR Technology</h2>
                <p className="mt-1 text-sm text-blue-100">Real-time vehicle recognition for seamless access control</p>
              </div>
            </motion.div>

            {/* Mobile Sidebar (only visible on mobile) */}
            <div className="mb-6 space-y-4 lg:hidden">
              <details className="p-3 overflow-hidden transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-sm open:shadow-lg">
                <summary className="flex items-center justify-between font-bold text-blue-900 cursor-pointer">
                  <span className="flex items-center gap-2">
                    <span className="p-1.5 text-sm text-white bg-blue-600 rounded-full">🛡️</span>
                    OUR PRODUCTS
                  </span>
                  <svg className="w-5 h-5 text-gray-500 transition-transform duration-200 transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <ul className="mt-3 space-y-2">
                  {productLinks.map((prod) => (
                    <motion.li
                      key={prod.name}
                      whileTap={{ scale: 0.98 }}
                      className="overflow-hidden rounded-lg"
                    >
                      <a
                        href={prod.path}
                        className="block px-3 py-2 text-sm font-medium text-blue-900 transition-all rounded-lg bg-gray-50 hover:bg-blue-100"
                      >
                        {prod.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </details>

              <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="flex items-center gap-2 mb-3 font-bold text-blue-900">
                  <span className="p-1.5 text-sm text-white bg-blue-600 rounded-full">📞</span>
                  CONTACT US
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50">
                    <span className="p-1.5 text-blue-600 bg-blue-100 rounded-full">📞</span>
                    <div>
                      <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Call Us</div>
                      <div className="text-sm font-bold text-blue-900">+91 99993 39265</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50">
                    <span className="p-1.5 text-blue-600 bg-blue-100 rounded-full">✉️</span>
                    <div>
                      <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Email</div>
                      <div className="text-sm font-bold text-blue-900">business@synergy-access.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabbed Content */}
            <div className="overflow-hidden shadow-lg rounded-xl">
              <div className="flex overflow-x-auto border-b border-gray-200 hide-scrollbar">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium whitespace-nowrap ${activeTab === "description" ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Description
                </button>
              </div>

              <div className="p-4 bg-white sm:p-6">
                <AnimatePresence mode="wait">
                  {activeTab === "description" && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={fadeIn}
                      className="space-y-6"
                    >
                      <motion.div variants={itemAnimation}>
                        <h2 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
                          Advanced Automatic Number Plate Recognition
                        </h2>
                        <p className="text-base leading-relaxed text-gray-600">
                          Our ANPR system revolutionizes parking and security management through cutting-edge license plate recognition technology, reducing manual effort while maximizing efficiency and accuracy.
                        </p>
                      </motion.div>

                      <motion.div variants={itemAnimation} className="space-y-4">
                        <h3 className="text-lg font-bold text-blue-700 sm:text-xl">Core Features</h3>
                        
                        <div className="grid gap-4 sm:grid-cols-2">
                          <motion.div 
                            className="p-4 transition-all bg-white border border-gray-100 rounded-lg hover:shadow-md"
                            whileHover={{ y: -3 }}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className="p-1.5 text-blue-600 bg-blue-100 rounded-full">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                              </div>
                              <h4 className="text-sm font-semibold text-gray-800 sm:text-base">Real-Time Recognition</h4>
                            </div>
                            <ul className="pl-2 space-y-1 text-xs text-gray-600 list-disc list-inside sm:text-sm">
                              <li>99.7% accuracy in various lighting conditions</li>
                              <li>Processes up to 100 plates per second</li>
                              <li>Supports multiple international plate formats</li>
                            </ul>
                          </motion.div>

                          <motion.div 
                            className="p-4 transition-all bg-white border border-gray-100 rounded-lg hover:shadow-md"
                            whileHover={{ y: -3 }}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className="p-1.5 text-blue-600 bg-blue-100 rounded-full">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                              </div>
                              <h4 className="text-sm font-semibold text-gray-800 sm:text-base">Secure Access Control</h4>
                            </div>
                            <ul className="pl-2 space-y-1 text-xs text-gray-600 list-disc list-inside sm:text-sm">
                              <li>Automated barrier/gate control integration</li>
                              <li>Blacklist/whitelist functionality</li>
                              <li>Tamper-proof audit logs</li>
                            </ul>
                          </motion.div>

                          <motion.div 
                            className="p-4 transition-all bg-white border border-gray-100 rounded-lg hover:shadow-md"
                            whileHover={{ y: -3 }}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className="p-1.5 text-blue-600 bg-blue-100 rounded-full">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                              </div>
                              <h4 className="text-sm font-semibold text-gray-800 sm:text-base">Comprehensive Reporting</h4>
                            </div>
                            <ul className="pl-2 space-y-1 text-xs text-gray-600 list-disc list-inside sm:text-sm">
                              <li>Customizable dashboard analytics</li>
                              <li>Automated PDF/Excel report generation</li>
                              <li>Real-time alerts for suspicious vehicles</li>
                            </ul>
                          </motion.div>

                          <motion.div 
                            className="p-4 transition-all bg-white border border-gray-100 rounded-lg hover:shadow-md"
                            whileHover={{ y: -3 }}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className="p-1.5 text-blue-600 bg-blue-100 rounded-full">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                              </div>
                              <h4 className="text-sm font-semibold text-gray-800 sm:text-base">Smart Integration</h4>
                            </div>
                            <ul className="pl-2 space-y-1 text-xs text-gray-600 list-disc list-inside sm:text-sm">
                              <li>Seamless PMS and RMS integration</li>
                              <li>API for third-party systems</li>
                              <li>Mobile app connectivity</li>
                            </ul>
                          </motion.div>
                        </div>
                      </motion.div>

                      <motion.div variants={itemAnimation} className="space-y-4">
                        <h3 className="text-lg font-bold text-blue-700 sm:text-xl">Technical Specifications</h3>
                        
                        <div className="p-4 rounded-lg bg-gray-50 sm:p-6">
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                              <h4 className="mb-2 text-sm font-semibold text-gray-800 sm:text-base">Hardware Requirements</h4>
                              <ul className="space-y-1 text-xs text-gray-600 sm:text-sm">
                                <li className="flex items-start gap-1">
                                  <span className="mt-1 text-blue-500">•</span>
                                  <span>IP67-rated cameras with IR illumination</span>
                                </li>
                                <li className="flex items-start gap-1">
                                  <span className="mt-1 text-blue-500">•</span>
                                  <span>Minimum 4MP resolution at 30fps</span>
                                </li>
                                <li className="flex items-start gap-1">
                                  <span className="mt-1 text-blue-500">•</span>
                                  <span>Edge processing or centralized server options</span>
                                </li>
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="mb-2 text-sm font-semibold text-gray-800 sm:text-base">Software Features</h4>
                              <ul className="space-y-1 text-xs text-gray-600 sm:text-sm">
                                <li className="flex items-start gap-1">
                                  <span className="mt-1 text-blue-500">•</span>
                                  <span>Cloud-based or on-premise deployment</span>
                                </li>
                                <li className="flex items-start gap-1">
                                  <span className="mt-1 text-blue-500">•</span>
                                  <span>Multi-lane synchronization</span>
                                </li>
                                <li className="flex items-start gap-1">
                                  <span className="mt-1 text-blue-500">•</span>
                                  <span>OCR in 20+ languages</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div variants={itemAnimation}>
                        <div className="p-4 rounded-lg bg-blue-50 sm:p-6">
                          <h3 className="mb-3 text-lg font-bold text-blue-700 sm:text-xl">Why Choose Our ANPR Solution?</h3>
                          <p className="text-xs text-gray-700 sm:text-sm">
                            Our system reduces operational costs by up to 60% while improving security and user experience. 
                            The AI-powered platform learns and adapts to your specific environment, delivering 24/7 
                            reliability with minimal maintenance requirements. Transform your parking or access control 
                            into a seamless, automated process that scales with your needs.
                          </p>
                        </div>
                      </motion.div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
          
        </motion.div>
        {/* Internal Links Section */}
                <section className="py-12 bg-gray-50">
                  <div className="container px-4 mx-auto">
                    <div className="grid gap-8 lg:grid-cols-2">
                      <InternalLinks
                        category="products"
                        title="Related Products"
                        maxLinks={4}
                        currentPage="/products/boom-barrier"
                      />
                      <InternalLinks
                        category="services"
                        title="Our Services"
                        maxLinks={4}
                        currentPage="/products/boom-barrier"
                      />
                    </div>
                  </div>
                </section>
      </div>
    </div>
  );
}