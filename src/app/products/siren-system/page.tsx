'use client';
import { motion } from "framer-motion";
import { ShieldCheck, Building2, KeyRound, Users } from "lucide-react";
import Head from "next/head";
const SirenBanner = '../../assets/siren.jpg';
const SirenImg1 = '../../assets/siren1.jpg';
const SirenImg2 = '../../assets/siren2.jpg';
const SirenImg3 = '../../assets/siren3.jpg';
const speaker = '../../assets/Speakers.png';
const MANUAL = '../../assets/INTRUDER .jpg';
const MANUAL1 = '../../assets/GENERALRECALL.jpg';
const MANUAL2 = '../../assets/GENERALRECALL1.jpg';
const MANUAL3 = '../../assets/AIRRAID.jpg';
const MANUAL4 = '../../assets/AIRRAID1.jpg';
const Manual5 = '../../assets/help.jpeg';
const Manual6 = '../../assets/Hi-Lo.jpeg';
const Manual7 = '../../assets/Attack.png';
const Manual8 = '../../assets/engine.jpeg';
const banner = '../../assets/SIRENbanner.jpg';





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

export default function SirenSystem() {


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Head>
        <title>Siren System | Synergy Access Pvt. Ltd.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Differential Sound Siren System for mass alerting and public address. Multiple tones, high power, and advanced troubleshooting for critical alerts." />
      </Head>

      {/* Hero Banner with Parallax Effect */}
      <motion.section
        className="relative -mt-14 sm:-mt-16 h-64 sm:h-80 md:h-[500px] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={banner}
          alt="Siren System Banner"
          className="absolute inset-0 z-0 object-cover w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute inset-0 bg-black/20 sm:bg-transparent"></div>
      </motion.section>

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
                  SA Siren Brochure.pdf
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
                src={SirenBanner}
                alt="Siren System"
                className="object-cover w-full h-full max-h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl font-bold sm:text-3xl">Differential Sound Siren System</h2>
                <p className="mt-2 text-blue-100">Advanced mass alerting and public address solution</p>
              </div>
            </motion.div>

            {/* Main Content Area */}
            <div className="space-y-8">
              {/* System Description */}
              <motion.div
                className="p-6 bg-white shadow-xl rounded-2xl"
                variants={itemAnimation}
              >
                <h2 className="pl-4 mb-4 text-2xl font-bold text-blue-900 border-l-4 border-red-500">
                  Differential Sound Siren System
                </h2>
                <p className="text-gray-700">
                  The Synergy Differential Sound Siren system is an advanced mass alerting and public address solution. It emits 140dB at 1 meter, audible up to 3km, with multiple emergency tones and voice broadcasting via outdoor high-power amplifiers and indoor control units.
                </p>
              </motion.div>

              {/* System Components */}
              <motion.div
                className="grid grid-cols-1 gap-6 sm:grid-cols-3"
                variants={itemAnimation}
              >
                {[SirenImg1, SirenImg2, SirenImg3].map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt="Siren Component"
                    className="object-cover w-full h-48 shadow-lg rounded-xl"
                    whileHover={{ scale: 1.05 }}
                  />
                ))}
              </motion.div>

              {/* Speaker Image */}
              <motion.img
                src={speaker}
                alt="Siren Speaker"
                className="w-full shadow-xl rounded-xl"
                variants={itemAnimation}
              />

              {/* Alert Tones */}
              <motion.div
                className="p-6 bg-white shadow-xl rounded-2xl"
                variants={itemAnimation}
              >
                <h2 className="pl-4 mb-6 text-2xl font-bold text-blue-900 border-l-4 border-red-500">
                  Operating Manual Tones
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { title: "INTRUDER TONE", img: MANUAL, desc: "WW-II German bomber tone for 2 mins" },
                    { title: "GENERAL RECALL", img: MANUAL1, desc: "Continuous tone for 5 mins" },
                    { title: "CALL OFF", img: MANUAL2, desc: "Recall end tone for 3 mins" },
                    { title: "AIR RAID", img: MANUAL3, desc: "10s up + 5s down tone loop" },
                    { title: "ALL CLEAR", img: MANUAL4, desc: "2 min siren end tone" },
                    { title: "FIRE ALARM", img: Manual5, desc: "Fire engine tone for 2 mins" },
                    { title: "MEDICAL EMERGENCY", img: Manual6, desc: "Ambulance tone Hi-Lo 2 mins" },
                    { title: "BIO ATTACK", img: Manual7, desc: "Bio alert tone 2 mins" },
                    { title: "SPARE TONE", img: Manual8, desc: "Custom tone" }
                  ].map((tone, i) => (
                    <motion.div
                      key={i}
                      className="p-4 transition-all bg-white border border-gray-100 rounded-xl hover:shadow-lg"
                      whileHover={{ y: -5 }}
                    >
                      <img
                        src={tone.img}
                        alt={tone.title}
                        className="object-cover w-full h-40 mb-3 rounded-lg"
                      />
                      <h4 className="mb-1 text-sm font-bold text-gray-800">{tone.title}</h4>
                      <p className="text-xs leading-relaxed text-gray-600">{tone.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Troubleshooting */}
              <motion.div
                className="p-6 bg-white shadow-xl rounded-2xl"
                variants={itemAnimation}
              >
                <h2 className="pl-4 mb-6 text-2xl font-bold text-blue-900 border-l-4 border-red-500">
                  Troubleshooting
                </h2>
                <div className="space-y-4">
                  <motion.div
                    className="p-4 rounded-lg bg-gray-50 hover:shadow"
                    whileHover={{ x: 5 }}
                  >
                    <strong className="text-blue-700">Q:</strong> System not working?<br />
                    <span className="text-gray-600">A: Check power to indoor/outdoor units, fuses, and connections.</span>
                  </motion.div>
                  <motion.div
                    className="p-4 rounded-lg bg-gray-50 hover:shadow"
                    whileHover={{ x: 5 }}
                  >
                    <strong className="text-blue-700">Q:</strong> No sound despite system on?<br />
                    <span className="text-gray-600">A: Verify outdoor unit power and speaker hum.</span>
                  </motion.div>
                  <motion.div
                    className="p-4 rounded-lg bg-gray-50 hover:shadow"
                    whileHover={{ x: 5 }}
                  >
                    <strong className="text-blue-700">Q:</strong> Volume lower than usual?<br />
                    <span className="text-gray-600">A: Check volume knobs and horn condition.</span>
                  </motion.div>
                  <motion.div
                    className="p-4 rounded-lg bg-gray-50 hover:shadow"
                    whileHover={{ x: 5 }}
                  >
                    <strong className="text-blue-700">Q:</strong> No voice broadcasting?<br />
                    <span className="text-gray-600">A: Inspect MIC toggle switch or replace MIC.</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}