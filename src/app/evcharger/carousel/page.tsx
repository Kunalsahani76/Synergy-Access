"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 sm:p-8 md:p-16 gap-6 sm:gap-8 bg-white min-h-screen">
      {/* Left Side Content */}
      <div className="w-full md:w-1/2 text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">
          Electric Vehicle Charging Solutions
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
          At Synergy Access, we bring cutting-edge electric vehicle charging technology designed for the next generation of mobility. Our range of AC and DC EV Chargers combines innovation, reliability, and performance to support residential, commercial, and public charging infrastructure. With a focus on advanced safety, intelligent control systems, and seamless connectivity, Synergy Access delivers complete EV charging solutions that enable a greener and more sustainable future.
        </p>
        <div className="flex justify-center mt-6 sm:mt-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              href="/evcharger"
              className="px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore EV Chargers
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-80 sm:h-96 md:h-120 rounded-xl"
        >
          <Image
            src="/assets/ev-charger-main.png"
            alt="EV Charger"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </div>
  );
}