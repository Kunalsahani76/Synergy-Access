import React from 'react';
import Image from 'next/image';
import { Shield, Check, Clock, Zap, Settings, AlertCircle, BarChart2, Cpu, Smartphone } from 'lucide-react';
const barrier = '../../assets/boombarr.jpg'
import Head from 'next/head';
const AutomaticBoomBarrier = () => {
  return (
    <main className="min-h-screen px-4 py-10 mx-auto max-w-4xl">
      <Head>
        <title>Automatic Boom Barriers | Synergy Access</title>
        <meta name="description" content="Discover how automatic boom barriers enhance security and streamline traffic flow with Synergy Access solutions." />
        <meta name="keywords" content="automatic boom barrier, parking barrier, access control, traffic management, security barrier" />
      </Head>

      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
            ACCESS CONTROL
          </span>
          <h1 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">Automatic Boom Barriers: Intelligent Access Control Solutions</h1>
          <p className="mb-6 text-sm text-gray-500">
            Published on April 11, 2025 • 7 min read
          </p>
          <Image
  src={barrier}
  alt="Automatic boom barrier in operation"
  width={800}  // Set appropriate width
  height={600} // Set appropriate height
  className="object-cover w-full rounded-lg shadow-md h-80 md:h-96"
  priority={true} // If this is above the fold
/>
        </header>

        <div className="mb-8 text-gray-700">
          <p className="mb-4 text-lg leading-relaxed">
            Modern automatic boom barriers have evolved into sophisticated access control systems that combine <strong>physical security</strong> with <strong>smart technology</strong>. These barriers now serve as the first line of defense for parking facilities, gated communities, and high-security areas while maintaining efficient traffic flow.
          </p>
          <p className="mb-4">
            <strong className="text-blue-800">Synergy Access</strong> boom barriers feature <strong>3-second operation cycles</strong>, <strong>10,000+ daily operations</strong> durability, and integration with all major access control systems, making them ideal for high-traffic environments.
          </p>
        </div>

        <section className="p-6 mb-8 bg-blue-50 rounded-xl">
          <h3 className="flex items-center mb-4 text-xl font-bold text-blue-800">
            <Shield className="mr-2" size={20} /> Key Features
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Operation Speed", "3-5 second raise/lower time"],
              ["Barrier Length", "3m to 6m options available"],
              ["Motor Type", "24V DC brushless (weatherproof)"],
              ["Control Options", "RFID, ANPR, remote, mobile app"],
              ["Safety", "Photocell sensors and auto-reverse"],
              ["Durability", "10,000+ cycles per month capacity"]
            ].map(([title, value], index) => (
              <div key={index} className="p-3 bg-white rounded-lg">
                <p className="text-sm font-semibold text-gray-500">{title}</p>
                <p className="font-medium">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">System Components</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Cpu size={24} className="text-blue-600" />,
                title: "Control Unit",
                content: "IP65-rated cabinet with PLC controller and power supply"
              },
              {
                icon: <BarChart2 size={24} className="text-orange-600" />,
                title: "Barrier Arm",
                content: "Lightweight aluminum with reflective stripes (3-6m lengths)"
              },
              {
                icon: <Smartphone size={24} className="text-purple-600" />,
                title: "User Interface",
                content: "Touchscreen, mobile app, or integrated with building systems"
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
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Technical Specifications</h2>
          <div className="p-4 mb-6 bg-gray-50 rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-2">Parameter</th>
                  <th className="pb-2">Standard Model</th>
                  <th className="pb-2">Heavy-Duty Model</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Operation Voltage", "24V DC", "48V DC"],
                  ["Barrier Length", "3-4 meters", "4-6 meters"],
                  ["Operation Speed", "3 seconds", "4 seconds"],
                  ["Duty Cycle", "10,000/month", "15,000/month"],
                  ["Motor Power", "200W", "400W"],
                  ["Temperature Range", "-20°C to 60°C", "-30°C to 70°C"],
                  ["Protection Rating", "IP54", "IP65"]
                ].map(([param, standard, heavy], index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 font-medium">{param}</td>
                    <td className="py-3">{standard}</td>
                    <td className="py-3 font-semibold text-blue-800">{heavy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Integration Capabilities</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-4 transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-md">
              <h3 className="flex items-center mb-3 text-lg font-bold text-blue-800">
                <Settings className="mr-2" size={20} /> Access Control Systems
              </h3>
              <ul className="space-y-2">
                {[
                  "RFID card readers (125kHz & 13.56MHz)",
                  "ANPR (Automatic Number Plate Recognition)",
                  "Biometric fingerprint scanners",
                  "Mobile app control via Bluetooth",
                  "Intercom systems integration"
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
                <Zap className="mr-2" size={20} /> Smart Features
              </h3>
              <ul className="space-y-2">
                {[
                  "Cloud-based management portal",
                  "Real-time access logs and reports",
                  "Automated permit validation",
                  "Emergency vehicle preemption",
                  "Integration with CCTV systems"
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
          <h3 className="mb-4 text-xl font-bold text-orange-800">Installation Options</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Surface Mount", "Concrete foundation (300mm depth)"],
              ["Flush Mount", "Requires pit construction (400mm depth)"],
              ["Power Requirements", "Dedicated 16A circuit minimum"],
              ["Communication", "RS485, Ethernet, or wireless options"],
              ["Safety Standards", "Compliant with EN 12978 safety norms"],
              ["Warranty", "3 years on mechanical components"]
            ].map(([title, value], index) => (
              <div key={index} className="p-3 bg-white rounded-lg">
                <p className="text-sm font-semibold text-gray-500">{title}</p>
                <p className="font-medium">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Applications</h2>
          <div className="grid gap-6 mb-6 sm:grid-cols-2">
            {[
              {
                title: "Commercial Parking",
                items: [
                  "Shopping malls and retail centers",
                  "Office building parking",
                  "Hotel valet areas",
                  "Airport parking facilities"
                ]
              },
              {
                title: "Residential Security",
                items: [
                  "Gated communities",
                  "Apartment complexes",
                  "Condominium parking",
                  "Private estates"
                ]
              },
              {
                title: "Institutional Use",
                items: [
                  "University campuses",
                  "Hospital parking",
                  "Government facilities",
                  "Corporate campuses"
                ]
              },
              {
                title: "Specialized Applications",
                items: [
                  "Toll collection points",
                  "Border control checkpoints",
                  "Industrial site access",
                  "Event parking management"
                ]
              }
            ].map((category, index) => (
              <div key={index} className="p-4 transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-md">
                <h3 className="mb-3 text-lg font-bold text-blue-800">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <Check className="flex-shrink-0 mt-1 mr-2 text-green-600" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Why Synergy Access Boom Barriers?</h2>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            {[
              {
                icon: <Clock size={20} className="text-blue-600" />,
                title: "Proven Reliability",
                content: "Over 5,000 installations nationwide with 99.8% uptime"
              },
              {
                icon: <Settings size={20} className="text-green-600" />,
                title: "Custom Configurations",
                content: "Tailored solutions for unique site requirements"
              },
              {
                icon: <AlertCircle size={20} className="text-red-600" />,
                title: "Safety Certified",
                content: "Compliant with all international safety standards"
              },
              {
                icon: <Shield size={20} className="text-purple-600" />,
                title: "Comprehensive Support",
                content: "24/7 technical assistance with 6-hour response guarantee"
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
              Need a boom barrier solution for your facility?
            </p>
            <button className="px-6 py-2 font-semibold text-white transition-colors duration-300 bg-blue-600 rounded-lg hover:bg-blue-700">
              Request a Free Consultation
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

export default AutomaticBoomBarrier;