"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Building2, KeyRound, Users } from "lucide-react";
import Head from "next/head";
import Image from "next/image";

const UvssBanner = '/assets/uvss.png';
const uvssimg = '/assets/UVSS.jpeg';

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

export default function Uvss() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Head>
        <title>UVSS | Synergy Access Pvt. Ltd.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Under Vehicle Surveillance System (UVSS) for intelligent threat detection. High-resolution imaging, real-time detection, and seamless integration for critical infrastructure security." />
      </Head>

      <div className="relative w-full h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
              <Image
                src={uvssimg}
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
                  SA Brochure.pdf
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
              <Image
                src={UvssBanner}
                alt="Under Vehicle Surveillance System"
                className="object-cover w-full h-full max-h-96 rounded-2xl"
                width={1200}
                height={400}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
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
                      <h2 className="text-2xl font-bold text-gray-900">Under Vehicle Surveillance System (UVSS) – Intelligent Threat Detection Technology.</h2>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The <span className="font-bold text-blue-900">Under Vehicle Surveillance System (UVSS)</span> is a next-generation security solution engineered to <span className="font-bold text-blue-900">fortify perimeter control and detect hidden threats</span> with unmatched precision. Designed for critical infrastructure and high-security environments, the UVSS offers a <span className="font-bold text-blue-900">non-intrusive, automated inspection</span> of a vehicle&apos;s undercarriage&mdash;eliminating blind spots in conventional security checks.
                      </p>

                      <div className="flex items-center gap-3">
                        <span className="p-2 text-blue-600 bg-blue-100 rounded-full">🔍</span>
                        <h3 className="text-xl font-bold text-blue-700">Key Features:</h3>
                      </div>

                      <ul className="pl-5 space-y-2 text-gray-600 list-disc">
                        <li><span className="font-bold">High-resolution imaging</span> for crystal-clear undercarriage visuals</li>
                        <li><span className="font-bold">Real-time threat detection</span> using advanced image processing algorithms</li>
                        <li>Seamless integration with <span className="font-bold">ANPR, boom barriers, and access control systems</span></li>
                        <li>Rugged design suitable for <span className="font-bold">all weather and terrain conditions</span></li>
                        <li>Intuitive operator interface for rapid decision-making</li>
                      </ul>

                      <p className="text-lg leading-relaxed text-gray-600">
                        Whether at <span className="font-bold text-blue-900">airports, government buildings, border checkpoints, or defense installations</span>, the <span className="font-bold text-blue-900">Under Vehicle Surveillance System</span> ensures every vehicle is thoroughly scanned for concealed explosives, contraband, or unauthorized modifications <span className="font-bold">without halting the flow of traffic</span>.
                      </p>

                      <p className="text-lg leading-relaxed text-gray-600">
                        Enhance your facility&apos;s first line of defense with <span className="font-bold text-blue-900">UVSS</span>&mdash;where innovation meets intelligence in security.
                      </p>
                    </motion.div>
                  )}

                  {activeTab === "technical" && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={fadeIn}
                    >
                      <div className="italic text-gray-500">Technical Data coming soon.</div>
                    </motion.div>
                  )}

                  {activeTab === "manuals" && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={fadeIn}
                    >
                      <div className="italic text-gray-500">No manuals available yet.</div>
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
