'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Building2, KeyRound, Users, Shield, Wrench, Clock, Database } from "lucide-react";
import Head from "next/head";
const SfhtBanner = '/assets/turnstiles.jpg';
import Image from "next/image";
const banner = '/assets/fullheight.jpg';


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
  { name: 'Parking Management System', path: '/products/parking-management' },
  { name: 'Visitor Management System', path: '/products/visitor-management' },
  { name: 'Other Solutions', path: '/products/solutions' },
];

export default function FullHeightTurnstile() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-full h-full relative overflow-hidden">
      <Head>
        <title>Full Height Turnstile SFHT-3000 | Synergy Access Pvt. Ltd.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Full Height Turnstile SFHT-3000 for high-security pedestrian access control. Durable, vandal-resistant, and compatible with all access systems." />
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
                  Turnstile Brochure.pdf
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
                src={SfhtBanner}
                alt="Full Height Turnstile"
                className="object-cover w-full h-full max-h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl font-bold sm:text-3xl">SFHT-3000 Full Height Turnstile</h2>
                <p className="mt-2 text-blue-100">High-security access control for demanding environments</p>
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
                <button
                  onClick={() => setActiveTab("technical")}
                  className={`px-6 py-3 text-sm font-medium transition-colors duration-300 ${
                    activeTab === "technical" 
                      ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50" 
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Technical Data
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
                          High-Security Pedestrian Access Control
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-600">
                          The Full-Height Turnstile Model SFHT-3000 is the ideal solution for controlling pedestrian access 
                          in high-security areas. Built for both indoor and harsh outdoor environments, its durable stainless 
                          steel construction guarantees long-lasting performance.
                        </p>
                      </motion.div>

                      {/* Key Features Grid */}
                      <motion.div variants={itemAnimation} className="space-y-6">
                        <h3 className="text-xl font-bold text-blue-700">Key Features</h3>
                        <div className="grid gap-6 sm:grid-cols-2">
                          {[
                            {
                              icon: Shield,
                              title: "Security Features",
                              features: [
                                "Vandalism-proof design",
                                "Anti-backup device prevents reverse rotation",
                                "Fail-lock or fail-safe configuration"
                              ]
                            },
                            {
                              icon: Wrench,
                              title: "Durable Construction",
                              features: [
                                "Stainless steel housing (AISI 304)",
                                "IP54 rated (IP66 available)",
                                "Long service life (10M cycles)"
                              ]
                            },
                            {
                              icon: Clock,
                              title: "Efficient Operation",
                              features: [
                                "30 persons/minute flow rate",
                                "Self-centering mechanism",
                                "Smooth and quiet operation"
                              ]
                            },
                            {
                              icon: Database,
                              title: "Smart Integration",
                              features: [
                                "Compatible with all access systems",
                                "Bi-directional operation",
                                "LED indicators and audible alarm"
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

                      {/* Additional Features */}
                      <motion.div variants={itemAnimation} className="space-y-4">
                        <h3 className="text-xl font-bold text-blue-700">Additional Features</h3>
                        <ul className="grid grid-cols-1 gap-4 text-gray-600 sm:grid-cols-2">
                          <li className="flex items-start">
                            <span className="mr-2 text-blue-500">✓</span>
                            <span>Indoor/outdoor use</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-blue-500">✓</span>
                            <span>90° and 120° rotor options</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-blue-500">✓</span>
                            <span>Servo (Motorized) or Electro-Mechanical versions</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-blue-500">✓</span>
                            <span>Wings reset automatically after each pass</span>
                          </li>
                        </ul>
                      </motion.div>
                    </motion.div>
                  )}

                  {activeTab === "technical" && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={fadeIn}
                    >
                      <h3 className="mb-4 text-xl font-bold text-blue-700">Technical Specifications</h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200">
                          <tbody className="divide-y divide-gray-200">
                            <tr>
                              <td className="px-4 py-3 font-semibold bg-gray-50">Model</td>
                              <td className="px-4 py-3">SFHT-3000</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-semibold bg-gray-50">Lane Configuration</td>
                              <td className="px-4 py-3">Single</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-semibold bg-gray-50">Mechanism</td>
                              <td className="px-4 py-3">Servo/Electromechanical</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-semibold bg-gray-50">Standard Housing</td>
                              <td className="px-4 py-3">AISI 304*</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-semibold bg-gray-50">Rotor Configuration</td>
                              <td className="px-4 py-3">4 x 90° / 3 x 120°</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-semibold bg-gray-50">Dimensions (WxDxH)</td>
                              <td className="px-4 py-3">1630 x 1500 x 2310 mm</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-semibold bg-gray-50">Flow Rate</td>
                              <td className="px-4 py-3">30 persons/min**</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-semibold bg-gray-50">Passage Width</td>
                              <td className="px-4 py-3">650mm</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-semibold bg-gray-50">IP Rating</td>
                              <td className="px-4 py-3">IP54***</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-semibold bg-gray-50">Power Supply</td>
                              <td className="px-4 py-3">100-240V, 50Hz</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-semibold bg-gray-50">Power Consumption</td>
                              <td className="px-4 py-3">35W</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-semibold bg-gray-50">MCBF</td>
                              <td className="px-4 py-3">10 Million Cycles</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-semibold bg-gray-50">Operating Temperature</td>
                              <td className="px-4 py-3">-30°C to +70°C</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-semibold bg-gray-50">Humidity</td>
                              <td className="px-4 py-3">Up to 95%</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-semibold bg-gray-50">Input Signal</td>
                              <td className="px-4 py-3">12V dry, RS485, TCP/IP</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-semibold bg-gray-50">Compatibility</td>
                              <td className="px-4 py-3">All access control & security systems</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="mt-3 text-sm text-gray-500">
                          *AISI 316 available on request<br />
                          **Flow rate may vary depending on reader type<br />
                          ***IP66 available for harsh environments
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