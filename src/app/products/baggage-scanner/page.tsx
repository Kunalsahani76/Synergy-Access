'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

const scanner = '../../assets/xray.jpeg';
const BaggageScannerBanner = '/new-assets/X-ray Scanner Technology.png';
const scannerDiagram = '/assets/Baggage-scanner.jpeg';
const securityCheckpoint = '/assets/Supermacy-7.jpg';
const airportSecurity = '/assets/Baggage-scanner.jpeg';

const productLinks = [
  { name: 'Boom Barrier', path: '/products/boom-barrier' },
  { name: 'Bollards', path: '/products/bollards' },
  { name: 'Tripod Turnstile', path: '/products/tripod-turnstile' },
  { name: 'Parking Management System', path: '/products/parking-management' },
  { name: 'Visitor Management System', path: '/products/visitor-management' },
  { name: 'Other Solutions', path: '/products/solutions' },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const itemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const features = [
  {
    title: "High-Resolution Imaging",
    description: "Advanced dual-view technology provides clear images with material discrimination",
    icon: "🔍"
  },
  {
    title: "Threat Detection",
    description: "Automated detection of explosives, weapons, and prohibited items",
    icon: "⚠️"
  },
  {
    title: "High Throughput",
    description: "Process up to 1,800 bags per hour with our rapid scanning technology",
    icon: "⚡"
  },
  {
    title: "User-Friendly Interface",
    description: "Intuitive controls with image enhancement tools for operators",
    icon: "🖥️"
  },
  {
    title: "Compact Design",
    description: "Space-saving footprint ideal for various security checkpoints",
    icon: "📐"
  },
  {
    title: "Low Radiation",
    description: "Meets all international safety standards for X-ray exposure",
    icon: "☢️"
  }
];

export default function BaggageScanner() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-full h-full relative overflow-hidden">
      <Head>
        <title>X-ray Baggage Scanner | Security Screening Equipment | Synergy Access</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Advanced X-ray Baggage Scanner for threat detection and security screening. High-resolution imaging for airports, courier hubs, and secure buildings." />
        <meta name="keywords" content="x-ray baggage scanner, security screening, threat detection, airport security, Synergy Access" />
      </Head>

      {/* Banner */}
      <div className="relative w-full h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
              <Image
                src={scanner}
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
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {/* Left Sidebar */}
          <motion.div className="space-y-6" variants={itemAnimation}>
            {/* Product Links */}
            <motion.div className="p-6 transition-all shadow-xl bg-gradient-to-br from-blue-50 to-white rounded-2xl hover:shadow-2xl" whileHover={{ y: -5 }}>
              <h2 className="flex items-center gap-3 mb-5 text-xl font-bold text-blue-900">
                <span className="p-2 text-white bg-blue-600 rounded-full">🛡️</span> OUR PRODUCTS & SOLUTIONS
              </h2>
              <ul className="space-y-3">
                {productLinks.map((prod) => (
                  <motion.li
                    key={prod.name}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="overflow-hidden"
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

            {/* Brochure */}
            <motion.div className="p-6 transition-all shadow-xl bg-gradient-to-br from-blue-50 to-white rounded-2xl hover:shadow-2xl" whileHover={{ y: -5 }}>
              <h3 className="flex items-center gap-3 mb-5 text-xl font-bold text-blue-900">
                <span className="p-2 text-white bg-blue-600 rounded-full">📄</span> BROCHURES
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 px-4 py-3 transition-all rounded-lg bg-white/80 hover:bg-blue-100">
                  <span className="p-2 text-blue-600 bg-blue-100 rounded-full">📎</span>
                  <a href="#" className="text-sm font-semibold text-blue-900 hover:underline">SA Brochure.pdf</a>
                </div>               
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div className="p-6 transition-all shadow-xl bg-gradient-to-br from-blue-50 to-white rounded-2xl hover:shadow-2xl" whileHover={{ y: -5 }}>
              <h3 className="flex items-center gap-3 mb-5 text-xl font-bold text-blue-900">
                <span className="p-2 text-white bg-blue-600 rounded-full">📞</span> CONTACT US
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/80 hover:bg-blue-100">
                  <span className="p-2 text-blue-600 bg-blue-100 rounded-full">📞</span>
                  <div>
                    <div className="text-xs font-semibold text-blue-600 uppercase">Call Us</div>
                    <div className="text-sm font-bold text-blue-900">+91 99993 39265</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/80 hover:bg-blue-100">
                  <span className="p-2 text-blue-600 bg-blue-100 rounded-full">✉️</span>
                  <div>
                    <div className="text-xs font-semibold text-blue-600 uppercase">Email</div>
                    <div className="text-sm font-bold text-blue-900">business@synergy-access.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/80 hover:bg-blue-100">
                  <span className="p-2 text-blue-600 bg-blue-100 rounded-full">📍</span>
                  <div>
                    <div className="text-xs font-semibold text-blue-600 uppercase">Location</div>
                    <div className="text-sm font-bold text-blue-900">B6, 3rd floor, Sector-2<br />Noida, 201301</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div className="space-y-8 lg:col-span-2" variants={itemAnimation}>
            {/* Main Image */}
            <motion.div
              className="relative overflow-hidden shadow-xl rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="relative w-full h-96">
                <Image
                  src={BaggageScannerBanner}
                  alt="Baggage Scanner"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/60 to-transparent">
                <h2 className="text-2xl font-bold sm:text-3xl">X-ray Scanner Technology</h2>
                <p className="mt-2 text-blue-100">Threat detection for secure environments</p>
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div 
              className="grid gap-4 sm:grid-cols-2"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemAnimation}
                  className="p-5 transition-all bg-white border border-gray-100 rounded-xl hover:shadow-lg hover:border-blue-100"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <span className="p-3 text-2xl bg-blue-50 rounded-full">{feature.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-blue-900">{feature.title}</h3>
                      <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tabbed Content */}
            <div className="overflow-hidden bg-white shadow-xl rounded-2xl">
              <div className="flex overflow-x-auto border-b border-gray-200">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`px-6 py-3 text-sm font-medium transition-colors duration-300 whitespace-nowrap ${activeTab === "description" ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("applications")}
                  className={`px-6 py-3 text-sm font-medium transition-colors duration-300 whitespace-nowrap ${activeTab === "applications" ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Applications
                </button>
                <button
                  onClick={() => setActiveTab("technology")}
                  className={`px-6 py-3 text-sm font-medium transition-colors duration-300 whitespace-nowrap ${activeTab === "technology" ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Technology
                </button>
                <button
                  onClick={() => setActiveTab("compliance")}
                  className={`px-6 py-3 text-sm font-medium transition-colors duration-300 whitespace-nowrap ${activeTab === "compliance" ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Compliance
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
                      className="space-y-6 text-gray-700"
                    >
                      <div>
                        <h2 className="mb-3 text-2xl font-bold text-gray-900">X-ray Baggage Scanner – Advanced Threat Detection</h2>
                        <p className="leading-relaxed">
                          Our <strong className="text-blue-900">X-ray baggage scanner</strong> is a high-performance system tailored for critical environments like airports and secure buildings. It ensures safe, fast, and reliable threat detection with state-of-the-art imaging technology.
                        </p>
                      </div>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h3 className="mb-2 text-xl font-bold text-blue-700">Key Features:</h3>
                          <ul className="pl-5 space-y-2 list-disc">
                            <li><strong>High-resolution X-ray imaging</strong> with internal content clarity (up to 43-bit color depth)</li>
                            <li><strong>Dual-energy technology</strong> for material discrimination</li>
                            <li><strong>Rapid detection</strong> of explosives, narcotics, and weapons</li>
                            <li><strong>User-friendly UI</strong> with one-touch image enhancement tools</li>
                            <li><strong>Seamless integration</strong> with existing control systems</li>
                            <li><strong>Remote diagnostics</strong> capability for maintenance</li>
                            <li>Ideal for <strong>airports, metro stations, courier hubs</strong> and government buildings</li>
                          </ul>
                        </div>
                        <div className="relative h-64">
                          <Image 
                            src={scannerDiagram} 
                            alt="Scanner technology diagram" 
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="p-5 bg-blue-50 rounded-lg">
                        <h4 className="mb-2 font-bold text-blue-800">Why Choose Our Scanner?</h4>
                        <p className="text-sm text-gray-700">
                          Our baggage scanners are designed with operator efficiency in mind, reducing fatigue with ergonomic workstations while maintaining the highest detection standards. The systems are backed by our 24/7 technical support and come with comprehensive training programs.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "applications" && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={fadeIn}
                      className="space-y-6 text-gray-700"
                    >
                      <h2 className="text-2xl font-bold text-gray-900">Applications</h2>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h3 className="mb-3 text-xl font-bold text-blue-700">Primary Use Cases</h3>
                          <ul className="space-y-3">
                            <li className="p-4 bg-gray-50 rounded-lg">
                              <h4 className="font-bold">Airport Security</h4>
                              <p className="mt-1 text-sm text-gray-600">Check-in baggage screening, hold baggage screening, and cabin baggage inspection</p>
                            </li>
                            <li className="p-4 bg-gray-50 rounded-lg">
                              <h4 className="font-bold">Government Buildings</h4>
                              <p className="mt-1 text-sm text-gray-600">Secure entry points for sensitive facilities and ministries</p>
                            </li>
                            <li className="p-4 bg-gray-50 rounded-lg">
                              <h4 className="font-bold">Courier & Logistics</h4>
                              <p className="mt-1 text-sm text-gray-600">Package screening for postal services and logistics companies</p>
                            </li>
                          </ul>
                        </div>
                        <div className="relative h-64">
                          <Image 
                            src={securityCheckpoint} 
                            alt="Security checkpoint application" 
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="p-5 bg-blue-50 rounded-lg">
                        <h4 className="mb-2 font-bold text-blue-800">Custom Solutions Available</h4>
                        <p className="text-sm text-gray-700">
                          We can customize our baggage scanners to meet specific operational requirements including throughput needs, space constraints, and integration with existing security infrastructure.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "technology" && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={fadeIn}
                      className="space-y-6 text-gray-700"
                    >
                      <h2 className="text-2xl font-bold text-gray-900">Advanced Scanning Technology</h2>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h3 className="mb-3 text-xl font-bold text-blue-700">Core Technologies</h3>
                          <ul className="space-y-4">
                            <li>
                              <h4 className="font-bold">Dual-Energy X-ray</h4>
                              <p className="mt-1 text-sm text-gray-600">Simultaneous acquisition of two X-ray images at different energy levels for material discrimination</p>
                            </li>
                            <li>
                              <h4 className="font-bold">Automatic Threat Recognition (ATR)</h4>
                              <p className="mt-1 text-sm text-gray-600">AI-powered algorithms to highlight potential threats for operator review</p>
                            </li>
                            <li>
                              <h4 className="font-bold">High-Speed Processing</h4>
                              <p className="mt-1 text-sm text-gray-600">Real-time image processing with sub-second latency</p>
                            </li>
                            <li>
                              <h4 className="font-bold">Multi-View Reconstruction</h4>
                              <p className="mt-1 text-sm text-gray-600">Generates multiple viewing angles from a single scan pass</p>
                            </li>
                          </ul>
                        </div>
                        <div className="relative h-64">
                          <Image 
                            src={airportSecurity} 
                            alt="Airport security technology" 
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="p-5 bg-blue-50 rounded-lg">
                        <h4 className="mb-2 font-bold text-blue-800">Radiation Safety</h4>
                        <p className="text-sm text-gray-700">
                          Our systems use the minimum necessary radiation dose while maintaining image quality. All scanners comply with international radiation safety standards (IEC 62463) with multiple safety interlocks and shielding.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "compliance" && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={fadeIn}
                      className="space-y-6 text-gray-700"
                    >
                      <h2 className="text-2xl font-bold text-gray-900">Certifications & Compliance</h2>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h3 className="mb-3 text-xl font-bold text-blue-700">Standards Met</h3>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                              <span className="p-1 text-white bg-green-500 rounded">✓</span>
                              <div>
                                <h4 className="font-bold">ECAC Standard 3.1</h4>
                                <p className="mt-1 text-xs text-gray-600">European Civil Aviation Conference hold baggage screening</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                              <span className="p-1 text-white bg-green-500 rounded">✓</span>
                              <div>
                                <h4 className="font-bold">TSA AT-2</h4>
                                <p className="mt-1 text-xs text-gray-600">Transportation Security Administration standards</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                              <span className="p-1 text-white bg-green-500 rounded">✓</span>
                              <div>
                                <h4 className="font-bold">IEC 62463</h4>
                                <p className="mt-1 text-xs text-gray-600">Radiation safety standards</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                              <span className="p-1 text-white bg-green-500 rounded">✓</span>
                              <div>
                                <h4 className="font-bold">ISO 9001:2015</h4>
                                <p className="mt-1 text-xs text-gray-600">Quality management system</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="mb-3 text-xl font-bold text-blue-700">Maintenance & Support</h3>
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <h4 className="font-bold text-blue-800">Comprehensive Warranty</h4>
                            <p className="mt-2 text-sm text-gray-700">3-year comprehensive warranty covering parts and labor with optional extended support packages available.</p>
                            <h4 className="mt-4 font-bold text-blue-800">Preventive Maintenance</h4>
                            <p className="mt-2 text-sm text-gray-700">Regular maintenance programs to ensure optimal performance and longevity of your equipment.</p>
                            <h4 className="mt-4 font-bold text-blue-800">24/7 Technical Support</h4>
                            <p className="mt-2 text-sm text-gray-700">Dedicated support hotline with average response time under 2 hours for critical issues.</p>
                          </div>
                        </div>
                      </div>
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
