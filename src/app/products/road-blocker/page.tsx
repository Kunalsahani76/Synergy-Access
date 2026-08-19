'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Building2, KeyRound, Users, Shield, Wrench, Clock, Database } from "lucide-react";
import Head from "next/head";
const RoadBlockerBanner = '/new-assets/Road Blocker SYS–BHIM-12.png';
const road = '/assets/roadblocker.jpeg';
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

export default function RoadBlocker() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Head>
        <title>Road Blocker | Synergy Access Pvt. Ltd.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Road Blocker SYS–BHIM-12 for maximum security and anti-ram protection. Certified K12 equivalent, shallow mount, and integration-ready for high-threat zones." />
      </Head>

      {/* Hero Banner with Parallax Effect */}
     <div className="relative w-full h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
             <Image
               src={road}
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
                  SA Road Blocker Brochure.pdf
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
                src={RoadBlockerBanner}
                alt="Road Blocker"
                className="object-cover w-full h-full max-h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl font-bold sm:text-3xl">Road Blocker SYS–BHIM-12</h2>
                <p className="mt-2 text-blue-100">Maximum security with K12 equivalent protection</p>
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
                <button
                  onClick={() => setActiveTab("manuals")}
                  className={`px-6 py-3 text-sm font-medium transition-colors duration-300 ${
                    activeTab === "manuals" 
                      ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50" 
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Download Manuals
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
                      className="space-y-6"
                    >
                      <h2 className="text-2xl font-bold text-gray-900">Heavy-Duty Road Blocker</h2>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The <strong className="text-blue-700">SYS–BHIM-12</strong> is a heavy-duty road blocker engineered for maximum security. 
                        It provides <strong className="text-blue-700">K12 equivalent protection</strong> ideal for 
                        <strong className="text-blue-700"> Hostile Vehicle Mitigation (HVM)</strong>.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Shallow foundation depth of <strong className="text-blue-700">300mm</strong> and raised height of 
                        <strong className="text-blue-700"> 1200mm</strong> make it ideal for high-threat zones.
                      </p>

                      <div className="space-y-6">
                        <h3 className="text-xl font-bold text-blue-700">Key Features</h3>
                        <div className="grid gap-6 sm:grid-cols-2">
                          {[
                            {
                              icon: Shield,
                              title: "Security Certification",
                              features: [
                                "Certified K12 impact resistance",
                                "Resistant to VBIED attacks",
                                "Anti-terrorist protection"
                              ]
                            },
                            {
                              icon: Wrench,
                              title: "Construction",
                              features: [
                                "Solid steel construction",
                                "Anti-corrosion treatment",
                                "Shallow mount (300mm foundation)"
                              ]
                            },
                            {
                              icon: Clock,
                              title: "Operation",
                              features: [
                                "Fast deployment/retraction",
                                "Hydraulic drive system",
                                "PLC-based control"
                              ]
                            },
                            {
                              icon: Database,
                              title: "Integration",
                              features: [
                                "Access control integration",
                                "Emergency system compatibility",
                                "Remote monitoring options"
                              ]
                            }
                          ].map((feature) => (
                            <motion.div 
                              key={feature.title}
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
                      </div>

                      <div className="p-5 bg-blue-50 rounded-xl">
                        <h4 className="mb-3 text-lg font-semibold text-blue-800">Typical Applications</h4>
                        <ul className="space-y-2">
                          {[
                            "Government buildings and embassies",
                            "Military installations and checkpoints",
                            "Critical infrastructure protection",
                            "High-security corporate campuses",
                            "Airports and transportation hubs"
                          ].map((app, i) => (
                            <motion.li 
                              key={i}
                              className="flex items-start gap-2"
                              whileHover={{ x: 5 }}
                            >
                              <span className="text-blue-600">✓</span>
                              <span className="text-gray-700">{app}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
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
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="p-5 bg-white border border-gray-100 rounded-xl">
                          <h4 className="mb-3 font-semibold text-gray-800">Physical Dimensions</h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>Width: 3–6 Mtr</li>
                            <li>Raised Height: 1200mm</li>
                            <li>Foundation Depth: 320mm</li>
                            <li>Finish: RAL Epoxy Coated</li>
                          </ul>
                        </div>
                        <div className="p-5 bg-white border border-gray-100 rounded-xl">
                          <h4 className="mb-3 font-semibold text-gray-800">Technical Details</h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>Drive Unit: Hydraulic</li>
                            <li>Control: PLC Based</li>
                            <li>Power Supply: 3 Phase, 415 Vac, 50 Hz</li>
                            <li>Temperature Range: -20°C to +65°C</li>
                            <li>Safety: Loop Detector & Photosensor</li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "manuals" && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={fadeIn}
                      className="py-8 text-center"
                    >
                      <div className="italic text-gray-500">
                        No manuals available yet. Please check back later or contact us for documentation.
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
