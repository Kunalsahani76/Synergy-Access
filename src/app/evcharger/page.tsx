"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const products = [
    {
      id: 1,
      title: "DC Fast Single Gun Wallbox",
      image: "/assets/cv1.png",
      features: [
        "CCS - 2 Gun with 5m Cable",
        "7 Inch Touch-Screen Display",
        ">=96% Efficiency; Forced Air Cooling",
        "OCPP 1.6J Enabled; Wi-fi, GSM & LAN for Connection",
        "RFID Card for Authentication",
        "Inbuilt Metering; RGB LED for Status Indication",
        "Protections: Over/Under Current; Over/Under Voltage",
        "Short-Circuit; Leakage Current; Earth Detection, Surge Protection",
        "Wall or Pedestal Mounting (Pedestal optional)"
      ],
      suitableFor: [
        "Electric Car Fleets",
        "Highway Restaurants",
        "Hotels/Malls",
        "Airports"
      ],
      variants: "CCS DC 30KW Three Phase, Punta Shopping 1, APFRE",
      description: "High-performance DC fast charging solution with advanced safety features and intelligent connectivity for commercial applications.",
      additionalInfo: "Designed for high-traffic commercial environments, this wallbox offers reliable and efficient charging with multiple safety protections."
    },
    {
      id: 2,
      title: "Type-2 AC EV Charger",
      image: "/assets/cv2.png",
      features: [
        "Metal Body",
        "Type - 2 Gun with 5m Cable",
        "Character Display; 4.3Inch optional",
        "OCPP 1.6J Enabled; Wi-fi & GSM for Connection",
        "RFID Card for Authentication",
        "Inbuilt Metering; RGB LED for Status Indication",
        "Wall or Pedestal Mounting (Pedestal optional)",
        "Protections: Over/Under Current; Over/Under Voltage",
        "Earth Detection; Leakage Current"
      ],
      suitableFor: [
        "Electric Car Fleets",
        "Highway Restaurants",
        "Hotels/Malls",
        "Airports"
      ],
      variants: "1. Single Gun 7.4kW Single Phase; 11kW Three Phase 22kW Three Phase, 2. Dual Gun 15kW (2x7.4kW) Three Phase",
      description: "Versatile AC charging solution for residential and commercial use with multiple configuration options.",
      additionalInfo: "Flexible installation options with both wall and pedestal mounting. Ideal for a variety of environments from residential to commercial."
    },
    {
      id: 3,
      title: "3 Output EV Charger",
      image: "/assets/cv3.png",
      features: [
        "Metal Body",
        "Type - 2 Gun with 5m Cable in Hybrid Charger",
        "Character Display; 4.3Inch optional",
        "OCPP 1.6J Enabled; Wi-fi & GSM for Connection",
        "RFID Card for Authentication; Push Button Operation",
        "Inbuilt Metering; RGB LED for Status Indication",
        "Wall or Pedestal Mounting (Pedestal optional)",
        "Protections: Over/Under Current; Over/Under Voltage",
        "Surge Protection; Earth Detection; Leakage Current"
      ],
      suitableFor: [
        "Electric Car Fleets",
        "E Rikshaw",
        "Electric Loaders",
        "Fleet Operation"
      ],
      variants: "1. Bharat AC 10KW (3x3.3KW) Three Phase, 2. Hybrid AC 14kW (1x7.4kW + 2x3.3KW) Three Phase",
      description: "Efficient multi-output charging station designed for fleet operations and high-traffic locations.",
      additionalInfo: "Optimized for fleet operations with multiple output ports, reducing the need for multiple individual chargers."
    },
    {
      id: 4,
      title: "1 Output EV Charger",
      image: "/assets/cv4.png",
      features: [
        "Non-OCPP RFID Operated: Metal Body; RFID Card for Authentication, Wall or Pedestal Mounting (Pedestal optional), Power indication, Protections: Under Current & Short-Circuit",
        "OCPP Based with RFID: Above Features + 0.96 Inch OLED Display, OCPP 1.6J Enabled; Wi-fi & GSM for Connection, Inbuilt Metering; RGB LED for Status Indication, Protections: Over/Under Current; Over/Under Voltage, Short-Circuit; Earth Detection"
      ],
      suitableFor: [
        "Electric 2 Vehicles",
        "E Rikshaw",
        "Electric Loaders",
        "Multi home Societies"
      ],
      variants: "1. Non-OCPP RFID Operated 3.3kW (15A) Single Phase, 2. OCPP Based with RFID 3.3kW (15A) Single Phase",
      description: "Compact and reliable single-point charging solution for residential and small commercial applications. Perfect for residential use and small commercial applications. Available in both standard RFID and OCPP-enabled variants for flexible connectivity options.",
      additionalInfo: "Ideal for homeowners and small businesses seeking an affordable and efficient charging solution. Features easy installation and low maintenance requirements."
    },
    {
      id: 5,
      title: "DC Fast Single Gun EV Charger - Type 6",
      image: "/assets/cv5.png",
      features: [
        "Type 6 Gun with 2m Cable; 4.3 Inch Display",
        ">=92% Efficiency; Forced Air Cooling",
        "OCPP 1.6J Enabled; Wi-fi, GSM & LAN for Connection",
        "RFID Card for Authentication",
        "Inbuilt Metering; RGB LED for Status Indication",
        "Protections: Over/Under Current; Over/Under Voltage",
        "Short-Circuit; Earth Detection, Surge Protection"
      ],
      suitableFor: [
        "Electric 2 Vehicles",
        "Electric 3 Vehicles"
      ],
      variants: "1. Single Phase 3KW; 6KW, 2. Three Phase 12KW",
      description: "Advanced DC fast charging technology for rapid vehicle charging with high efficiency. High-efficiency DC charging solution with forced air cooling system. Ideal for rapid charging requirements in both residential and commercial settings. Engineered with cutting-edge power electronics to deliver consistent performance across varying environmental conditions.",
      additionalInfo: "Delivers rapid charging capabilities with advanced thermal management. Suitable for a wide range of electric vehicles with Type 6 connectors. Features intelligent power distribution and comprehensive safety monitoring systems."
    },
    {
      id: 6,
      title: "DC Fast Single & Dual Gun Charger - CCS (DLM)",
      image: "/assets/cv6.png",
      features: [
        "Dynamic Load Management (Optional)",
        "CCS -2 Gun with 5m Cable",
        "7 Inch Touch-Screen Display",
        ">=96% Efficiency; Forced Air Cooling",
        "OCPP 1.6J Enabled; Wi-fi, GSM & LAN for Connection",
        "RFID Card for Authentication",
        "Inbuilt Metering; RGB LED for Status Indication",
        "Protections: Over/Under Current; Over/Under Voltage",
        "Short-Circuit; Leakage Current; Earth Detection, Surge Protection",
        "Floor Mounting (all 4 Side access required)"
      ],
      suitableFor: [
        "Electric Car Fleet",
        "Electric Bus/Truck Fleet",
        "Highway",
        "Hotels/Malls"
      ],
      variants: "1. Single Gun Charger CCS: 60KW; 90KW; 120KW, 2. Dual Gun Charger CCS: 60KW; 120KW",
      description: "High-power dual gun charging station with dynamic load management for fleet operations.",
      additionalInfo: "Advanced dual-gun charging station with optional dynamic load management. Designed for high-power applications and fleet operations."
    }
  ];

  const handleDownloadCatalog = () => {
    try {
      const link = document.createElement('a');
      link.href = '/assets/EV CHARGER SYNERGY.pdf'; // Corrected path with double .pdf extension
      link.download = 'EV CHARGER SYNERGY.pdf'; // Corrected filename with double .pdf extension
      link.target = '_blank'; // Open in new tab if download fails
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open('/assets/EV CHARGER SYNERGY.pdf', '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/evbanner.jpg"
            alt="EV Charger Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
        </div>
      </div>

      {/* Introduction Section */}
      <motion.div 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full -translate-y-16 translate-x-16 opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-200 rounded-full translate-y-12 -translate-x-12 opacity-20"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-amber-100 shadow-lg ">
                  <Image
                    src="/assets/ev-charger-main.png"
                    alt="EV Charger Technology"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Leading <span className="text-amber-600">EV Charging</span> Innovation
                  </h2>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify mb-6">
                    At Synergy Access, we bring cutting-edge electric vehicle charging technology designed for the next generation of mobility. Our range of AC and DC EV Chargers combines innovation, reliability, and performance to support residential, commercial, and public charging infrastructure.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Advanced Safety</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Smart Connectivity</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Sustainable Future</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.div
              className="mt-10 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                With a focus on advanced safety, intelligent control systems, and seamless connectivity, Synergy Access delivers complete EV charging solutions that enable a greener and more sustainable future. Our technology is designed to meet the evolving needs of modern electric vehicle users and fleet operators.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <button 
                  onClick={handleDownloadCatalog}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  View Product Catalog
                </button>
                <Link 
                  href="/contact"
                  className="px-6 py-3 bg-white text-amber-600 font-medium rounded-full border-2 border-amber-500 hover:bg-amber-50 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Request a Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Product Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our <span className="text-amber-600">Charging Solutions</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of EV charging solutions designed for every need
          </p>
        </div>

        {/* Products Grid - 3 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white shadow-xl overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Product Image with slow left to right animation */}
              <div className="relative h-100 w-full overflow-hidden">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="w-full h-full"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
              </div>

              {/* Product Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                
                {/* Additional Info */}
                <div className="mb-4">
                  <p className="text-sm text-gray-700">{product.additionalInfo}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Suitable For</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {product.suitableFor.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Variants</h4>
                  <p className="text-sm text-gray-600">{product.variants}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}