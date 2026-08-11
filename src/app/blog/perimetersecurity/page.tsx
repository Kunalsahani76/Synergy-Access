import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Shield, Check, Eye, Zap, Settings, AlertCircle, Cctv, Radar } from 'lucide-react';

const security = '/assets/P-GATE.jpg';

const PerimeterSecurity = () => {
  return (
    <main className="min-h-screen px-4 py-10 mx-auto max-w-4xl">
      <Head>
        <title>Perimeter Security Solutions | Synergy Access</title>
        <meta name="description" content="Comprehensive perimeter security systems combining physical barriers, electronic detection, and intelligent monitoring for maximum protection." />
        <meta name="keywords" content="perimeter security, fence protection, intrusion detection, security bollards, access control" />
      </Head>

      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
            FACILITY PROTECTION
          </span>
          <h1 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">Perimeter Security: First Line of Defense for Your Property</h1>
          <p className="mb-6 text-sm text-gray-500">
            Published on January 30, 2025 • 8 min read
          </p>
          <div className="relative w-full h-80 md:h-96 rounded-lg shadow-md overflow-hidden">
            <Image
              src={security}
              alt="Perimeter security gate with access control"
              className="object-cover"
              fill
              priority
            />
          </div>
        </header>

        <div className="mb-8 text-gray-700">
          <p className="mb-4 text-lg leading-relaxed">
            Modern perimeter security systems combine <strong>physical barriers</strong>, <strong>electronic detection</strong>, and <strong>intelligent monitoring</strong> to create comprehensive protection zones around sensitive facilities. These integrated solutions deter, detect, and delay intruders while maintaining authorized access.
          </p>
          <p className="mb-4">
            <strong className="text-blue-800">Synergy Access</strong> perimeter solutions reduce security breaches by <strong>92%</strong> through layered defense strategies tailored to each facility&apos;s risk profile and operational requirements.
          </p>
        </div>

        <section className="p-6 mb-8 bg-blue-50 rounded-xl">
          <h3 className="flex items-center mb-4 text-xl font-bold text-blue-800">
            <Shield className="mr-2" size={20} /> Security Layers
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Detection Zone", "50-100m beyond perimeter"],
              ["Deterrent Barrier", "Anti-climb fencing + bollards"],
              ["Assessment Layer", "PTZ cameras with analytics"],
              ["Response Team", "90-second intervention target"],
              ["Monitoring", "24/7 security operations center"],
              ["Redundancy", "Backup power + comms systems"]
            ].map(([title, value], index) => (
              <div key={index} className="p-3 bg-white rounded-lg">
                <p className="text-sm font-semibold text-gray-500">{title}</p>
                <p className="font-medium">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Core System Components</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <span role="img" aria-label="Barrier" className="text-blue-600 text-2xl">🛡️</span>,
                title: "Physical Barriers",
                content: "Bollards, gates, fencing rated to PAS 68 standards"
              },
              {
                icon: <span role="img" aria-label="Detection" className="text-orange-600 text-2xl">🛰️</span>,
                title: "Intrusion Detection",
                content: "Fiber optic sensors, microwave, and seismic detectors"
              },
              {
                icon: <Cctv size={24} className="text-purple-600" />,
                title: "Video Analytics",
                content: "AI-powered camera systems with object recognition"
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
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Detection Technologies</h2>
          <div className="p-4 mb-6 bg-gray-50 rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-2">Technology</th>
                  <th className="pb-2">Detection Range</th>
                  <th className="pb-2">False Alarm Rate</th>
                  <th className="pb-2">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Fiber Optic Fence", "Up to 100m", "< 0.5%", "High-security perimeters"],
                  ["Microwave Barrier", "30-150m", "1-2%", "Open area protection"],
                  ["Seismic Sensor", "10-20m radius", "0.8%", "Buried perimeter detection"],
                  ["LiDAR System", "Up to 200m", "< 0.3%", "Critical infrastructure"]
                ].map(([tech, range, alarm, use], index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 font-medium">{tech}</td>
                    <td className="py-3">{range}</td>
                    <td className="py-3">{alarm}</td>
                    <td className="py-3">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Key Benefits</h2>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            {[
              {
                icon: <Shield size={20} className="text-blue-600" />,
                title: "Early Threat Detection",
                content: "Identifies intruders before they reach protected assets"
              },
              {
                icon: <Eye size={20} className="text-green-600" />,
                title: "Visual Verification",
                content: "Integrated cameras provide real-time visual assessment"
              },
              {
                icon: <AlertCircle size={20} className="text-red-600" />,
                title: "Reduced False Alarms",
                content: "AI analytics distinguish between threats and wildlife"
              },
              {
                icon: <Settings size={20} className="text-purple-600" />,
                title: "Scalable Solutions",
                content: "Modular design grows with your security needs"
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
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Industry Applications</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-4 transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-md">
              <h3 className="flex items-center mb-3 text-lg font-bold text-blue-800">
                <Zap className="mr-2" size={20} /> Commercial Facilities
              </h3>
              <ul className="space-y-2">
                {[
                  "Data center campuses",
                  "Corporate headquarters",
                  "Manufacturing plants",
                  "Logistics warehouses",
                  "Utility substations"
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
                <Radar className="mr-2" size={20} /> Government & Critical Infrastructure
              </h3>
              <ul className="space-y-2">
                {[
                  "Military installations",
                  "Airport security perimeters",
                  "Power generation facilities",
                  "Water treatment plants",
                  "Communications hubs"
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
          <h3 className="mb-4 text-xl font-bold text-orange-800">System Specifications</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Detection Probability", "> 99% for human-sized targets"],
              ["Response Time", "< 30 seconds from detection"],
              ["Environmental Rating", "IP67 for outdoor components"],
              ["Power Backup", "72+ hours UPS with generator"],
              ["Integration", "PSIM, CCTV, and access control"],
              ["Maintenance", "Remote diagnostics + quarterly checks"]
            ].map(([title, value], index) => (
              <div key={index} className="p-3 bg-white rounded-lg">
                <p className="text-sm font-semibold text-gray-500">{title}</p>
                <p className="font-medium">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Implementation Strategy</h2>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            {[
              {
                icon: <AlertCircle size={20} className="text-blue-600" />,
                title: "Risk Assessment",
                content: "Comprehensive site evaluation and threat analysis"
              },
              {
                icon: <Settings size={20} className="text-green-600" />,
                title: "Layered Design",
                content: "Defense-in-depth approach with multiple detection zones"
              },
              {
                icon: <Eye size={20} className="text-red-600" />,
                title: "Visual Deterrents",
                content: "Visible security measures to discourage attempts"
              },
              {
                icon: <Shield size={20} className="text-purple-600" />,
                title: "Response Planning",
                content: "Coordinated procedures with security personnel"
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
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Why Choose Our Perimeter Solutions?</h2>
          <ul className="mb-6 space-y-3">
            {[
              "Certified to international security standards (ISO 22152, PAS 68)",
              "Proven 92% reduction in perimeter breaches",
              "Custom-engineered solutions for each facility",
              "24/7 monitoring with armed response options",
              "5-year warranty on detection systems",
              "Cybersecurity-hardened network components"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3 text-orange-500">
                  <Check size={18} />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="p-4 text-center bg-blue-50 rounded-lg">
            <p className="mb-3 font-medium">
              Need to secure your facility&apos;s perimeter?
            </p>
            <button className="px-6 py-2 font-semibold text-white transition-colors duration-300 bg-blue-600 rounded-lg hover:bg-blue-700">
              Request Security Audit
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

export default PerimeterSecurity;