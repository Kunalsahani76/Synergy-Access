"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Building2, KeyRound, Users } from "lucide-react";
import Head from "next/head";
const parking = '/new-assets/VMS.png';
const banner = '/assets/VisitorManagementbanner.jpg';
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

export default function VisitorManagementSystem() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-full h-full relative overflow-hidden">
      <Head>
        <title>Visitor Management System | Synergy Access Pvt. Ltd.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Visitor Management System for smart, secure, and efficient parking and access control. Real-time monitoring, automated access, dynamic pricing, and advanced analytics." />
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
                  PMS Brochure.pdf
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
                alt="Visitor Management System"
                className="object-cover w-full h-full max-h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
                        <h2 className="text-2xl font-bold text-gray-900">Visitor Management System</h2>
                        <p className="text-lg leading-relaxed text-gray-600">
                          A Visitor Management System is a technology-driven solution designed to streamline parking operations, reduce manual effort, and maximize efficiency.
                        </p>
                      </motion.div>

                      <motion.div variants={itemAnimation}>
                        <h3 className="text-xl font-bold text-blue-700">Core Functions</h3>
                        
                        <div className="space-y-4">
                          <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
                            <h4 className="mb-3 font-semibold text-gray-800">Real-Time Space Monitoring:</h4>
                            <ul className="pl-5 space-y-2 text-gray-600 list-disc">
                              <li>Sensors (ultrasonic, infrared, or camera-based) detect vehicle presence in individual slots</li>
                              <li>Data is sent to a central server via Wi-Fi, LoRaWAN, or cellular networks</li>
                              <li>A space availability map updates dynamically on apps/website/digital signage</li>
                            </ul>
                          </div>

                          <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
                            <h4 className="mb-3 font-semibold text-gray-800">Automated Access Control:</h4>
                            <ul className="pl-5 space-y-2 text-gray-600 list-disc">
                              <li>License Plate Recognition (LPR): Cameras capture license plates at entry/exit</li>
                              <li>RFID Tags: Assign unique tags to monthly subscribers for hands-free access</li>
                              <li>QR Code Tickets: Generated at entry for temporary users; scanned at exit for payment</li>
                            </ul>
                          </div>

                          <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
                            <h4 className="mb-3 font-semibold text-gray-800">Dynamic Pricing:</h4>
                            <ul className="pl-5 space-y-2 text-gray-600 list-disc">
                              <li>Adjust parking rates based on demand (e.g., higher fees during peak hours or events)</li>
                              <li>Algorithms analyze historical data, weather, and local events to optimize pricing</li>
                            </ul>
                          </div>

                          <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
                            <h4 className="mb-3 font-semibold text-gray-800">Reservation Management:</h4>
                            <ul className="pl-5 space-y-2 text-gray-600 list-disc">
                              <li>Users pre-book slots via apps/websites</li>
                              <li>Reserved slots are blocked in the system and marked with LED indicators</li>
                            </ul>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div variants={itemAnimation}>
                        <h3 className="text-xl font-bold text-blue-700">Advanced Features</h3>
                        
                        <div className="grid gap-6 md:grid-cols-2">
                          <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
                            <h4 className="mb-3 font-semibold text-gray-800">AI-Powered Analytics:</h4>
                            <ul className="pl-5 space-y-2 text-gray-600 list-disc">
                              <li>Predict parking demand using machine learning models</li>
                              <li>Detect anomalies (overstaying vehicles) or security threats</li>
                            </ul>
                          </div>

                          <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
                            <h4 className="mb-3 font-semibold text-gray-800">EV Charging Integration:</h4>
                            <ul className="pl-5 space-y-2 text-gray-600 list-disc">
                              <li>Dedicated slots with EV chargers linked to the PMS</li>
                              <li>Single interface for parking + charging payments</li>
                            </ul>
                          </div>

                          <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
                            <h4 className="mb-3 font-semibold text-gray-800">Valet Mode:</h4>
                            <ul className="pl-5 space-y-2 text-gray-600 list-disc">
                              <li>Staff use handheld devices to log vehicle details</li>
                              <li>Automated retrieval via PMS database</li>
                            </ul>
                          </div>

                          <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
                            <h4 className="mb-3 font-semibold text-gray-800">Multi-Level Parking:</h4>
                            <ul className="pl-5 space-y-2 text-gray-600 list-disc">
                              <li>Automated stackers or robotic systems for vertical setups</li>
                              <li>Controlled by PLCs integrated with the PMS</li>
                            </ul>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div variants={itemAnimation}>
                        <h3 className="text-xl font-bold text-blue-700">Technical Workflow</h3>
                        
                        <div className="space-y-6">
                          <div className="p-6 border border-blue-200 rounded-lg bg-blue-50">
                            <h4 className="mb-3 font-semibold text-blue-700">Entry Process:</h4>
                            <ul className="pl-5 space-y-2 text-gray-600 list-disc">
                              <li>Vehicle approaches gate → LPR camera scans plate or driver takes ticket</li>
                              <li>System checks for pre-booked slots or available space → Gate opens</li>
                              <li>Sensor updates the central database: Total spaces - 1</li>
                            </ul>
                          </div>

                          <div className="p-6 border border-blue-200 rounded-lg bg-blue-50">
                            <h4 className="mb-3 font-semibold text-blue-700">Parking Guidance:</h4>
                            <ul className="pl-5 space-y-2 text-gray-600 list-disc">
                              <li>Overhead LED lights or mobile apps direct to free slots</li>
                              <li>Path optimization algorithms reduce congestion</li>
                            </ul>
                          </div>

                          <div className="p-6 border border-blue-200 rounded-lg bg-blue-50">
                            <h4 className="mb-3 font-semibold text-blue-700">Payment & Exit:</h4>
                            <ul className="pl-5 space-y-2 text-gray-600 list-disc">
                              <li>Pre-Paid: User pays via app; LPR/QR validates payment at exit</li>
                              <li>Post-Paid: User pays at kiosk; system validates payment → Gate opens</li>
                              <li>Sensor updates database: Total spaces + 1</li>
                            </ul>
                          </div>

                          <div className="p-6 border border-blue-200 rounded-lg bg-blue-50">
                            <h4 className="mb-3 font-semibold text-blue-700">Data Sync:</h4>
                            <ul className="pl-5 space-y-2 text-gray-600 list-disc">
                              <li>All transactions and sensor data sync with cloud/server</li>
                              <li>Reports generated for admins (daily revenue, peak hours)</li>
                            </ul>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div variants={itemAnimation}>
                        <h3 className="text-xl font-bold text-blue-700">Why It Matters</h3>
                        <p className="text-lg leading-relaxed text-gray-600">
                          A modern PMS cuts costs, boosts revenue, and reduces environmental impact (less fuel waste from searching for slots). By merging IoT, AI, and cloud systems, it transforms chaotic parking lots into smart, user-friendly spaces.
                        </p>
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
