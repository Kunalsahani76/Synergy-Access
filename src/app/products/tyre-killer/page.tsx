'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Building2, KeyRound, Users } from "lucide-react";
import Head from "next/head";
const TyreKillerMain = '/assets/Tyre-killer.jpeg';
const killer = '/assets/tyrekiller.jpeg';
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

export default function TyreKiller() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Head>
        <title>Tyre Killer | Synergy Access Pvt. Ltd.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Tyre Killer for high-security vehicle access control. Hydraulic and electromechanical options, anti-ram, and emergency lowering for sensitive entrances." />
      </Head>

      {/* Hero Banner with Parallax Effect */}
      
 <div className="relative w-full h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
        <Image
          src={killer}
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
              <img
                src={TyreKillerMain}
                alt="Tyre Killer"
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
                      className="space-y-4"
                    >
                      <ul className="pl-5 space-y-2 text-gray-700 list-disc">
                        <li>Hydraulic & Electromechanical tyre killers are designed especially for entrance points to prevent force entry of vehicle. It prevents the entry from one direction only.</li>
                        <li>Movable nails are made of hard steel with hole in its core to deflate the tyre thus avoiding any explosion due to tyre burst.</li>
                        <li>Options are available with Flat top surface up to 6m and curved top surface (hump type) up to 3m only.</li>
                        <li>Provides noise free smooth operation</li>
                        <li>Control panel have inbuilt double channel loop detector</li>
                        <li>100% Duty cycle</li>
                        <li>Can be integrated with any third party access control.</li>
                        <li>Emergency lowering or up possible in case of threat or fire</li>
                        <li>25 -150 Ton Load bearing Capacity</li>
                        <li>Control panel available with display For programming Different operation logic</li>
                      </ul>
                    </motion.div>
                  )}
                  {activeTab === "technical" && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={fadeIn}
                      className="space-y-4"
                    >
                      <ul className="pl-5 space-y-2 text-gray-700 list-disc">
                        <li>Construction :Galvanized Steel</li>
                        <li>Height: 150mm</li>
                        <li>Width: 500mm</li>
                        <li>Length: 2 m to 6 m in 500 mm increments</li>
                        <li>Distance between spikes: 100-120 MM</li>
                        <li>Opening Closing Time: 2-3 sec</li>
                        <li>Dia Of spikes: 25mm</li>
                        <li>Angel: 60°</li>
                        <li>Spike material: AISI 304</li>
                        <li>Blocking Height: 120mm minimum (Customizable)</li>
                        <li>Power supply voltage: 230V~ – 50Hz</li>
                        <li>Absorbed power: 220 W</li>
                        <li>Current consumption: 1 A</li>
                        <li>Accessories max. current: 500 mA</li>
                        <li>Enviroment temperature: -20°C to +55°C, % 95 non-condensing humidity</li>
                      </ul>
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