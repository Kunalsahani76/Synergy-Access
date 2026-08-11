import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Shield, Check, Clock, Zap, Settings, AlertCircle, TrendingUp, HardHat } from 'lucide-react';

const bollard = '/assets/bollard.jpg';

const HydraulicBollards = () => {
  return (
    <main className="min-h-screen px-4 py-10 mx-auto max-w-4xl">
      <Head>
        <title>Hydraulic Bollards | Synergy Access</title>
        <meta name="description" content="Discover how hydraulic bollards provide robust security while maintaining smooth traffic flow in urban environments with Synergy Access solutions." />
        <meta name="keywords" content="hydraulic bollards, security bollards, traffic management, perimeter security, vehicle barriers" />
      </Head>

      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
            SECURITY SOLUTIONS
          </span>
          <h1 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">Hydraulic Bollards: Advanced Security Meets Seamless Traffic Management</h1>
          <p className="mb-6 text-sm text-gray-500">
            Published on May 23, 2025 • 6 min read
          </p>
          <div className="relative w-full h-80 md:h-96 rounded-lg shadow-md overflow-hidden">
            <Image
              src={bollard}
              alt="Hydraulic bollards in a high-security area"
              className="object-cover"
              fill
              priority
            />
          </div>
        </header>
        <div className="mb-8 text-gray-700">
          <p className="mb-4 text-lg leading-relaxed">
            Hydraulic bollards have become the gold standard in perimeter security, offering an unparalleled combination of <strong>physical protection</strong> and <strong>controlled access</strong>. These retractable barriers provide dynamic security solutions for government facilities, commercial complexes, and critical infrastructure.
          </p>
          <p className="mb-4">
            At <strong className="text-blue-800">Synergy Access</strong>, our hydraulic bollard systems are engineered to stop <strong>7.5-ton vehicles</strong> traveling at <strong>80 km/h</strong> while maintaining elegant aesthetics and smooth operation for authorized vehicles.
          </p>
        </div>

        <section className="p-6 mb-8 bg-blue-50 rounded-xl">
          <h3 className="flex items-center mb-4 text-xl font-bold text-blue-800">
            <Shield className="mr-2" size={20} /> Key Advantages
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              ["Impact Resistance", "Withstands 50,000+ pound vehicle impacts"],
              ["Rapid Deployment", "Rises in 2-3 seconds for emergency situations"],
              ["Discreet Design", "Retracts flush with ground when not in use"],
              ["All-Weather", "Operates in -30°C to 60°C temperatures"],
              ["Remote Control", "Integrated with access control systems"],
              ["Low Maintenance", "Annual servicing maintains peak performance"]
            ].map(([title, desc], index) => (
              <li key={index} className="flex items-start p-3 bg-white rounded-lg">
                <Check className="flex-shrink-0 mt-1 mr-3 text-green-600" size={18} />
                <div>
                  <h4 className="font-semibold">{title}</h4>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">How Hydraulic Bollards Work</h2>
          <div className="grid gap-6 mb-6 md:grid-cols-3">
            {[
              {
                icon: <Clock size={24} className="text-blue-600" />,
                title: "Rapid Activation",
                content: "Electro-hydraulic system raises bollards in seconds when triggered by sensors or control systems"
              },
              {
                icon: <Zap size={24} className="text-orange-600" />,
                title: "Power Options",
                content: "24V DC or 230V AC systems with battery backup for 72+ hours of operation"
              },
              {
                icon: <Settings size={24} className="text-purple-600" />,
                title: "Smart Integration",
                content: "Connects with ANPR, RFID, and biometric systems for automated access control"
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
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Security Performance Metrics</h2>
          <div className="p-4 mb-6 bg-gray-50 rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-2">Test Parameter</th>
                  <th className="pb-2">Standard</th>
                  <th className="pb-2">Synergy Access Performance</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Impact Resistance", "PAS 68:2013", "7,500kg at 80km/h"],
                  ["Operational Cycles", "EN 13000", "50,000+ cycles"],
                  ["Raise Time", "Industry Standard", "< 3 seconds"],
                  ["Weather Resistance", "IP68", "-30°C to 60°C"],
                  ["Power Consumption", "Energy Rating", "0.8kW/h per cycle"]
                ].map(([param, standard, performance], index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 font-medium">{param}</td>
                    <td className="py-3 text-gray-600">{standard}</td>
                    <td className="py-3 font-semibold text-blue-800">{performance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Ideal Applications</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-4 transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-md">
              <h3 className="flex items-center mb-3 text-lg font-bold text-blue-800">
                <HardHat className="mr-2" size={20} /> Commercial
              </h3>
              <ul className="space-y-2">
                {[
                  "Corporate headquarters perimeter security",
                  "Shopping center vehicle access points",
                  "Hotel and resort entry controls",
                  "Parking garage protection systems",
                  "Data center physical security"
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
                <Shield className="mr-2" size={20} /> Government & High-Security
              </h3>
              <ul className="space-y-2">
                {[
                  "Embassy and consulate protection",
                  "Military base access control",
                  "Government building perimeter",
                  "Critical infrastructure sites",
                  "Correctional facility security"
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
          <h3 className="mb-4 text-xl font-bold text-orange-800">Installation Considerations</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Foundation Depth", "Minimum 1.5m for standard installations"],
              ["Power Requirements", "Dedicated 32A circuit recommended"],
              ["Control Options", "RFID, biometric, or remote control"],
              ["Maintenance Cycle", "Annual hydraulic fluid replacement"],
              ["Safety Features", "Anti-crush sensors and emergency stop"],
              ["Warranty", "5 years on hydraulic components"]
            ].map(([title, value], index) => (
              <div key={index} className="p-3 bg-white rounded-lg">
                <p className="text-sm font-semibold text-gray-500">{title}</p>
                <p className="font-medium">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Why Choose Our Hydraulic Bollards?</h2>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            {[
              {
                icon: <TrendingUp size={20} className="text-green-600" />,
                title: "Proven Performance",
                content: "Certified to stop 7.5-ton vehicles at high speeds - the highest rating in the industry"
              },
              {
                icon: <Settings size={20} className="text-blue-600" />,
                title: "Custom Solutions",
                content: "Tailored designs to match your architectural requirements and security needs"
              },
              {
                icon: <AlertCircle size={20} className="text-red-600" />,
                title: "Fail-Safe Operation",
                content: "Automatically deploys during power outages or system failures"
              },
              {
                icon: <Shield size={20} className="text-purple-600" />,
                title: "Comprehensive Protection",
                content: "Full system warranty with 24/7 emergency support"
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
              Interested in hydraulic bollard solutions for your property?
            </p>
            <button className="px-6 py-2 font-semibold text-white transition-colors duration-300 bg-blue-600 rounded-lg hover:bg-blue-700">
              Get a Security Assessment
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

export default HydraulicBollards;