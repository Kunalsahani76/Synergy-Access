'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Building2, KeyRound, Users, Shield, Wrench, Clock, Database } from "lucide-react";
import Head from "next/head";
const parking = '/assets/ParkingGuidance.jpg';
const banner = '/assets/parkingguid.jpg';
import Image from 'next/image';


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

const productLinks = [
  { name: 'Boom Barrier', path: '/products/boom-barrier' },
  { name: 'Bollards', path: '/products/bollards' },
  { name: 'Tripod Turnstile', path: '/products/tripod-turnstile' },
  { name: 'Parking Guidance System', path: '/products/parking-guidance' },
  { name: 'Visitor Management System', path: '/products/visitor-management' },
  { name: 'Other Solutions', path: '/products/solutions' },
];

export default function ParkingGuidanceSystem() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-full h-full relative overflow-hidden">
      <Head>
        <title>Parking Guidance System | Synergy Access Pvt. Ltd.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Parking Guidance System (PGS) for efficient parking management. Real-time space detection, dynamic pricing, and advanced analytics for smart parking." />
      </Head>

      {/* Hero Banner with Parallax Effect */}
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
      <div className="container px-4 py-12 mx-auto sm:px-6 lg:py-16">
        <motion.div 
          className="grid gap-8 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Left Column - Sidebar */}
          <motion.div className="space-y-6" variants={itemAnimation}>
            {/* Products Card */}
            <motion.div 
              className="p-6 transition-all duration-300 shadow-xl rounded-2xl bg-gradient-to-br from-blue-50 to-white hover:shadow-2xl"
              whileHover={{ y: -5 }}
            >
              <h2 className="flex items-center gap-3 mb-5 text-xl font-bold text-blue-900">
                <span className="p-2 text-white bg-blue-600 rounded-full">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                OUR PRODUCTS & SOLUTIONS
              </h2>
              <ul className="space-y-3">
                {productLinks.map((prod) => (
                  <motion.li
                    key={prod.name}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="overflow-hidden rounded-lg"
                  >
                    <a
                      href={prod.path}
                      className="block px-4 py-3 text-sm font-semibold text-blue-900 transition-all rounded-lg bg-white/80 hover:bg-blue-100"
                    >
                      {prod.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Brochures Card */}
            <motion.div 
              className="p-6 transition-all duration-300 shadow-xl rounded-2xl bg-gradient-to-br from-blue-50 to-white hover:shadow-2xl"
              whileHover={{ y: -5 }}
            >
              <h3 className="flex items-center gap-3 mb-5 text-xl font-bold text-blue-900">
                <span className="p-2 text-white bg-blue-600 rounded-full">
                  <Building2 className="w-5 h-5" />
                </span>
                BROCHURES
              </h3>
              <div className="flex items-center gap-3 px-4 py-3 transition-all rounded-lg bg-white/80 hover:bg-blue-100">
                <KeyRound className="w-4 h-4 text-blue-600" />
                <a href="#" className="text-sm font-semibold text-blue-900 hover:underline">
                  PGS Brochure.pdf
                </a>
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div 
              className="p-6 transition-all duration-300 shadow-xl rounded-2xl bg-gradient-to-br from-blue-50 to-white hover:shadow-2xl"
              whileHover={{ y: -5 }}
            >
              <h3 className="flex items-center gap-3 mb-5 text-xl font-bold text-blue-900">
                <span className="p-2 text-white bg-blue-600 rounded-full">
                  <Users className="w-5 h-5" />
                </span>
                CONTACT US
              </h3>
              <div className="space-y-4">
                <motion.div className="flex items-center gap-3 px-4 py-3 transition-all rounded-lg bg-white/80 hover:bg-blue-100">
                  <span className="p-2 text-blue-600 bg-blue-100 rounded-full">📞</span>
                  <div>
                    <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Call Us</div>
                    <div className="text-sm font-bold text-blue-900">+91 99993 39265</div>
                  </div>
                </motion.div>
                <motion.div className="flex items-center gap-3 px-4 py-3 transition-all rounded-lg bg-white/80 hover:bg-blue-100">
                  <span className="p-2 text-blue-600 bg-blue-100 rounded-full">✉️</span>
                  <div>
                    <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Email</div>
                    <div className="text-sm font-bold text-blue-900">business@synergy-access.com</div>
                  </div>
                </motion.div>
                <motion.div className="flex items-center gap-3 px-4 py-3 transition-all rounded-lg bg-white/80 hover:bg-blue-100">
                  <span className="p-2 text-blue-600 bg-blue-100 rounded-full">📍</span>
                  <div>
                    <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Location</div>
                    <div className="text-sm font-bold text-blue-900">B6, 3rd floor, Sector-2<br />Noida, 201301</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div className="lg:col-span-2" variants={itemAnimation}>
            {/* Featured Image with Floating Effect */}
            <motion.div 
              className="relative mb-8 overflow-hidden shadow-xl rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
            >
              <img
                src={parking}
                alt="Parking Guidance System"
                className="object-cover w-full h-full max-h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl font-bold sm:text-3xl">Smart Parking Guidance</h2>
                <p className="mt-2 text-blue-100">Real-time space detection and management</p>
              </div>
            </motion.div>

            {/* Tabbed Content */}
            <div className="overflow-hidden shadow-xl rounded-2xl">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`px-6 py-3 text-sm font-medium transition-colors duration-300 ${
                    activeTab === "description" 
                      ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50" 
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Description
                </button>
              </div>

              <div className="p-6 bg-white">
                <AnimatePresence mode="wait">
                  {activeTab === "description" && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={fadeIn}
                      className="space-y-8"
                    >
                      <motion.div variants={itemAnimation}>
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">
                          Smart Parking Management Solution
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-600">
                          Our Parking Guidance System (PGS) provides real-time space detection and management,
                          helping drivers quickly locate available parking spaces while reducing congestion
                          and improving the overall parking experience.
                        </p>
                      </motion.div>

                      {/* Key Features Grid */}
                      <motion.div variants={itemAnimation} className="space-y-6">
                        <h3 className="text-xl font-bold text-blue-700">Key Features</h3>
                        <div className="grid gap-6 sm:grid-cols-2">
                          {[
                            {
                              icon: Shield,
                              title: "Real-Time Monitoring",
                              features: [
                                "Ultrasonic, infrared, or camera-based sensors",
                                "Dynamic space availability mapping",
                                "Instant updates to digital signage"
                              ]
                            },
                            {
                              icon: Wrench,
                              title: "Access Control",
                              features: [
                                "License Plate Recognition (LPR)",
                                "RFID tags for subscribers",
                                "QR code ticket system"
                              ]
                            },
                            {
                              icon: Clock,
                              title: "Dynamic Operations",
                              features: [
                                "Adjustable pricing based on demand",
                                "Reservation management system",
                                "Path optimization algorithms"
                              ]
                            },
                            {
                              icon: Database,
                              title: "Smart Integration",
                              features: [
                                "AI-powered demand prediction",
                                "EV charging integration",
                                "Cloud-based data synchronization"
                              ]
                            }
                          ].map((feature, index) => (
                            <motion.div 
                              key={index}
                              className="p-5 transition-all bg-white border border-gray-100 rounded-xl hover:shadow-lg"
                              whileHover={{ y: -5 }}
                            >
                              <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 text-blue-600 bg-blue-100 rounded-full">
                                  <feature.icon className="w-5 h-5" />
                                </div>
                                <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                              </div>
                              <ul className="pl-2 space-y-2 text-gray-600 list-disc list-inside">
                                {feature.features.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Technical Workflow */}
                      <motion.div variants={itemAnimation} className="space-y-6">
                        <h3 className="text-xl font-bold text-blue-700">System Workflow</h3>
                        <div className="space-y-4">
                          {[
                            {
                              title: "Entry Process",
                              items: [
                                "LPR camera scans plate or issues ticket",
                                "System checks availability and opens gate",
                                "Database updates space count"
                              ]
                            },
                            {
                              title: "Parking Guidance",
                              items: [
                                "LED indicators or mobile apps guide drivers",
                                "Optimized routing reduces congestion",
                                "Reserved spaces are clearly marked"
                              ]
                            },
                            {
                              title: "Payment & Exit",
                              items: [
                                "Multiple payment options (app, kiosk)",
                                "Automated validation at exit",
                                "Space count updates in real-time"
                              ]
                            }
                          ].map((section, index) => (
                            <motion.div 
                              key={index}
                              className="p-5 border border-blue-100 bg-blue-50 rounded-xl"
                              whileHover={{ y: -3 }}
                            >
                              <h4 className="mb-3 font-semibold text-blue-700">{section.title}</h4>
                              <ul className="pl-2 space-y-2 text-gray-600 list-disc list-inside">
                                {section.items.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Benefits Section */}
                      <motion.div variants={itemAnimation} className="space-y-6">
                        <h3 className="text-xl font-bold text-blue-700">System Benefits</h3>
                        <div className="grid gap-6 sm:grid-cols-2">
                          {[
                            {
                              title: "For Drivers",
                              items: [
                                "Reduced search time for parking",
                                "Improved parking experience",
                                "Multiple payment options"
                              ]
                            },
                            {
                              title: "For Operators",
                              items: [
                                "Increased revenue through better utilization",
                                "Reduced operational costs",
                                "Detailed analytics and reporting"
                              ]
                            },
                            {
                              title: "Environmental Impact",
                              items: [
                                "Reduced emissions from circling vehicles",
                                "Optimized space utilization",
                                "Support for EV charging infrastructure"
                              ]
                            },
                            {
                              title: "Security Features",
                              items: [
                                "Comprehensive access control",
                                "Real-time monitoring",
                                "Automated alerts for suspicious activity"
                              ]
                            }
                          ].map((benefit, index) => (
                            <motion.div 
                              key={index}
                              className="p-5 transition-all bg-white border border-gray-100 rounded-xl hover:shadow-lg"
                              whileHover={{ y: -5 }}
                            >
                              <h4 className="mb-2 font-semibold text-gray-800">{benefit.title}</h4>
                              <ul className="pl-2 space-y-2 text-gray-600 list-disc list-inside">
                                {benefit.items.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}