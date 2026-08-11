import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Shield, Check, Clock, Settings, AlertCircle, BarChart2, Smartphone, ParkingCircle, Wifi, Database, Cloud } from 'lucide-react';
const parking = '/assets/parking.jpg';
const parking1 = '/assets/parkingguid.jpg';

const SmartParking = () => {
  return (
    <main className="min-h-screen px-4 py-10 mx-auto max-w-4xl">
      <Head>
        <title>Smart Parking Solutions | Synergy Access</title>
        <meta name="description" content="Discover how smart parking systems revolutionize urban mobility and reduce congestion with Synergy Access solutions." />
        <meta name="keywords" content="smart parking, parking management, parking guidance, IoT parking, parking sensors" />
      </Head>

      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
            URBAN MOBILITY
          </span>
          <h1 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">Smart Parking Solutions: Revolutionizing Urban Mobility</h1>
          <p className="mb-6 text-sm text-gray-500">
            Published on March 28, 2025 • 8 min read
          </p>
          <div className="relative w-full h-80 md:h-96 rounded-lg shadow-md overflow-hidden">
            <Image
              src={parking}
              alt="Modern smart parking system"
              className="object-cover"
              fill
              priority
            />
          </div>
        </header>

        <div className="mb-8 text-gray-700">
          <p className="mb-4 text-lg leading-relaxed">
            Smart parking systems are transforming urban landscapes by leveraging <strong>IoT sensors</strong>, <strong>real-time data analytics</strong>, and <strong>automated guidance</strong> to solve the growing challenge of parking management. These intelligent systems reduce congestion by up to <strong>30%</strong> while improving driver experience and security.
          </p>
          <p className="mb-4">
            <strong className="text-blue-800">Synergy Access</strong> smart parking solutions integrate <strong>license plate recognition</strong>, <strong>mobile payments</strong>, and <strong>dynamic space allocation</strong> to create seamless parking experiences for commercial complexes, municipal areas, and private facilities.
          </p>
        </div>

        <section className="p-6 mb-8 bg-blue-50 rounded-xl">
          <h3 className="flex items-center mb-4 text-xl font-bold text-blue-800">
            <Shield className="mr-2" size={20} /> System Highlights
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Parking Space Utilization", "Increases by 40-60%"],
              ["Search Time Reduction", "Up to 70% less circling"],
              ["Payment Automation", "90%+ cashless transactions"],
              ["Security Integration", "ANPR and CCTV linkage"],
              ["Data Collection", "Real-time occupancy analytics"],
              ["CO2 Reduction", "30% lower emissions from reduced circling"]
            ].map(([title, value], index) => (
              <div key={index} className="p-3 bg-white rounded-lg">
                <p className="text-sm font-semibold text-gray-500">{title}</p>
                <p className="font-medium">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Core Technologies</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <ParkingCircle size={24} className="text-blue-600" />,
                title: "IoT Sensors",
                content: "Ultrasonic or camera-based sensors with 99% detection accuracy"
              },
              {
                icon: <Wifi size={24} className="text-orange-600" />,
                title: "Wireless Network",
                content: "LoRaWAN or NB-IoT for reliable low-power communication"
              },
              {
                icon: <Database size={24} className="text-purple-600" />,
                title: "Cloud Platform",
                content: "Centralized management with real-time analytics dashboard"
              }
            ].map((item, index) => (
              <div key={index} className="p-4 transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-md">
                <div className="flex items-center justify-center w-12 h-12 mb-3 text-white bg-blue-600 rounded-full">
                  {item.icon}
                </div>
                <h3 className="mb-2 font-bold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">System Architecture</h2>
          <div className="p-4 mb-6 bg-gray-50 rounded-lg">
            <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
              <Image
                src={parking1}
                alt="Smart parking system architecture"
                className="object-cover"
                fill
              />
            </div>
            <ol className="pl-5 space-y-3 list-decimal">
              {[
                "In-ground or overhead sensors detect vehicle presence",
                "Data transmitted via wireless mesh network to gateway",
                "Central server processes information in real-time",
                "Availability displayed on digital signage and mobile apps",
                "Integrated payment systems enable cashless transactions",
                "Security systems validate authorized vehicles"
              ].map((item, index) => (
                <li key={index} className="pl-2">{item}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Key Features</h2>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            {[
              {
                icon: <BarChart2 size={20} className="text-blue-600" />,
                title: "Real-Time Monitoring",
                content: "Live occupancy maps with historical trend analysis"
              },
              {
                icon: <Smartphone size={20} className="text-green-600" />,
                title: "Mobile Integration",
                content: "Reservations, payments, and navigation via smartphone"
              },
              {
                icon: <AlertCircle size={20} className="text-red-600" />,
                title: "Overstay Alerts",
                content: "Automatic notifications for time limit violations"
              },
              {
                icon: <Cloud size={20} className="text-purple-600" />,
                title: "Cloud Management",
                content: "Remote configuration and system diagnostics"
              }
            ].map((item, index) => (
              <div key={index} className="flex p-4 transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-md">
                <div className="flex-shrink-0 mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="mb-2 font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Deployment Models</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-4 transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-md">
              <h3 className="flex items-center mb-3 text-lg font-bold text-blue-800">
                <Settings className="mr-2" size={20} /> On-Street Solutions
              </h3>
              <ul className="space-y-2">
                {[
                  "Single-space sensors with solar power",
                  "Multi-space camera-based monitoring",
                  "Pay-by-plate systems",
                  "Dynamic pricing integration",
                  "Parking guidance signage"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="flex-shrink-0 mt-1 mr-2 text-green-600" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-md">
              <h3 className="flex items-center mb-3 text-lg font-bold text-blue-800">
                <ParkingCircle className="mr-2" size={20} /> Off-Street Facilities
              </h3>
              <ul className="space-y-2">
                {[
                  "Multi-level parking guidance",
                  "License plate recognition entry/exit",
                  "Reserved parking management",
                  "EV charging integration",
                  "Valet parking automation"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="flex-shrink-0 mt-1 mr-2 text-green-600" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="p-6 mb-8 bg-orange-50 rounded-xl">
          <h3 className="mb-4 text-xl font-bold text-orange-800">Technical Specifications</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sensor Accuracy", "99% detection rate"],
              ["Communication", "LoRaWAN/NB-IoT/4G options"],
              ["Battery Life", "5-7 years (sensor units)"],
              ["Data Refresh", "Real-time (30 sec updates)"],
              ["Integration", "API for third-party systems"],
              ["Scalability", "Up to 10,000 spaces per system"]
            ].map(([title, value], index) => (
              <div key={index} className="p-3 bg-white rounded-lg">
                <p className="text-sm font-semibold text-gray-500">{title}</p>
                <p className="font-medium">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Case Studies</h2>
          <div className="grid gap-6 mb-6 sm:grid-cols-2">
            {[
              {
                title: "Downtown Smart Zone",
                results: [
                  "40% reduction in parking search time",
                  "28% decrease in traffic congestion",
                  "92% adoption of mobile payments",
                  "35% increase in parking revenue"
                ]
              },
              {
                title: "Hospital Complex",
                results: [
                  "Visitor parking time reduced by 65%",
                  "Staff parking utilization optimized",
                  "Emergency vehicle access improved",
                  "Patient satisfaction scores increased"
                ]
              }
            ].map((caseStudy, index) => (
              <div key={index} className="p-4 transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-md">
                <h3 className="mb-3 text-lg font-bold text-blue-800">{caseStudy.title}</h3>
                <ul className="space-y-2">
                  {caseStudy.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-start">
                      <Check className="flex-shrink-0 mt-1 mr-2 text-green-600" size={16} />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Why Choose Our Smart Parking Solutions?</h2>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            {[
              {
                icon: <Clock size={20} className="text-blue-600" />,
                title: "Proven Results",
                content: "Documented 30-60% improvements across all deployments"
              },
              {
                icon: <Settings size={20} className="text-green-600" />,
                title: "Modular Design",
                content: "Start small and expand as needed with our scalable platform"
              },
              {
                icon: <AlertCircle size={20} className="text-red-600" />,
                title: "Future-Proof",
                content: "Regular software updates and hardware upgrade paths"
              },
              {
                icon: <Shield size={20} className="text-purple-600" />,
                title: "Comprehensive Support",
                content: "Dedicated account management and 24/7 monitoring"
              }
            ].map((item, index) => (
              <div key={index} className="flex p-4 transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-md">
                <div className="flex-shrink-0 mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="mb-2 font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 text-center bg-blue-50 rounded-lg">
            <p className="mb-3 font-medium">
              Ready to transform your parking operations?
            </p>
            <button className="px-6 py-2 font-semibold text-white transition-colors duration-300 bg-blue-600 rounded-lg hover:bg-blue-700">
              Schedule a Demo
            </button>
          </div>
        </section>

        <footer className="pt-6 mt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-between">
            <div className="mb-4">
              <span className="text-sm font-medium text-gray-600">Share this article:</span>
              <div className="flex mt-2 space-x-3">
                {['Twitter', 'Facebook', 'LinkedIn', 'Email'].map((platform) => (
                  <button
                    key={platform}
                    className="p-2 text-gray-500 transition-colors duration-300 bg-gray-100 rounded-full hover:bg-gray-200"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <p>© 2025 Synergy Access. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
};

export default SmartParking;  