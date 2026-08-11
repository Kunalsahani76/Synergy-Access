import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Fingerprint, Eye, User, Shield, Check, Clock, Zap, Settings, AlertCircle, Database, Cpu } from 'lucide-react';
const bio = '/assets/Biometric.jpg';

const BiometricAccess = () => {
  return (
    <main className="min-h-screen px-4 py-10 mx-auto max-w-4xl">
      <Head>
        <title>Biometric Access Control Systems | Synergy Access</title>
        <meta name="description" content="Explore how biometric access control systems provide unparalleled security through fingerprint, facial recognition, and iris scanning technology." />
        <meta name="keywords" content="biometric access, fingerprint scanner, facial recognition, iris scanning, security systems" />
      </Head>

      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
            HIGH SECURITY
          </span>
          <h1 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">Biometric Access Control: The Future of Secure Authentication</h1>
          <p className="mb-6 text-sm text-gray-500">
            Published on March 15, 2025 • 7 min read
          </p>
          <div className="relative w-full h-80 md:h-96 rounded-lg shadow-md">
            <Image
              src={bio}
              alt="Biometric access control system in use"
              className="object-cover rounded-lg"
              fill
              priority
            />
          </div>
        </header>

        <div className="mb-8 text-gray-700">
          <p className="mb-4 text-lg leading-relaxed">
            Biometric access control systems have revolutionized security by replacing traditional keys and cards with <strong>unique physiological identifiers</strong>. These systems provide <strong>99.9% accurate</strong> authentication while eliminating the risks of lost credentials or unauthorized sharing.
          </p>
          <p className="mb-4">
            At <strong className="text-blue-800">Synergy Access</strong>, our biometric solutions combine <strong>military-grade encryption</strong> with <strong>user-friendly interfaces</strong>, making them ideal for corporate offices, data centers, government facilities, and high-security areas.
          </p>
        </div>

        <section className="p-6 mb-8 bg-blue-50 rounded-xl">
          <h3 className="flex items-center mb-4 text-xl font-bold text-blue-800">
            <Shield className="mr-2" size={20} /> Technology Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-2">Biometric Type</th>
                  <th className="pb-2">Accuracy</th>
                  <th className="pb-2">Speed</th>
                  <th className="pb-2">Best For</th>
                  <th className="pb-2">Fail Rate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Fingerprint", "99.2%", "0.8s", "Employee access", "0.5%"],
                  ["Facial Recognition", "98.7%", "1.2s", "High-traffic areas", "0.8%"],
                  ["Iris Scanning", "99.8%", "1.5s", "Maximum security", "0.1%"],
                  ["Palm Vein", "99.5%", "1.0s", "Healthcare facilities", "0.3%"]
                ].map(([type, accuracy, speed, use, fail], index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 font-medium">{type}</td>
                    <td className="py-3">{accuracy}</td>
                    <td className="py-3">{speed}</td>
                    <td className="py-3">{use}</td>
                    <td className="py-3">{fail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Core Biometric Technologies</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Fingerprint size={24} className="text-blue-600" />,
                title: "Fingerprint Recognition",
                content: "Advanced capacitive and optical sensors with liveness detection"
              },
              {
                icon: <User size={24} className="text-orange-600" />,
                title: "Facial Recognition",
                content: "3D depth sensing with anti-spoofing technology"
              },
              {
                icon: <Eye size={24} className="text-purple-600" />,
                title: "Iris Scanning",
                content: "Near-infrared imaging for high-accuracy identification"
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
            <ol className="pl-5 space-y-3 list-decimal">
              {[
                "Biometric sensor captures physiological data",
                "Local processor converts to encrypted template",
                "Template compared against enrolled database",
                "Access decision transmitted in <500ms",
                "Event logged with timestamp and biometric snapshot",
                "Alerts triggered for unauthorized attempts"
              ].map((item, index) => (
                <li key={index} className="pl-2">{item}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Key Benefits</h2>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            {[
              {
                icon: <Shield size={20} className="text-blue-600" />,
                title: "Unmatched Security",
                content: "Cannot be lost, stolen, or duplicated like traditional credentials"
              },
              {
                icon: <Database size={20} className="text-green-600" />,
                title: "Audit Trails",
                content: "Detailed logs of every access attempt with biometric evidence"
              },
              {
                icon: <Clock size={20} className="text-red-600" />,
                title: "Time & Attendance",
                content: "Automated workforce management integration"
              },
              {
                icon: <Settings size={20} className="text-purple-600" />,
                title: "Flexible Integration",
                content: "Works with existing access control and security systems"
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
                <Cpu className="mr-2" size={20} /> Corporate Security
              </h3>
              <ul className="space-y-2">
                {[
                  "Data center access control",
                  "Executive floor restrictions",
                  "Server room protection",
                  "Document storage security",
                  "After-hours access monitoring"
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
                <Shield className="mr-2" size={20} /> High-Security Facilities
              </h3>
              <ul className="space-y-2">
                {[
                  "Government buildings",
                  "Military installations",
                  "Research laboratories",
                  "Bank vaults",
                  "Pharmaceutical storage"
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
              ["Template Storage", "On-device encrypted (FIPS 140-2)"],
              ["Matching Speed", "< 1 second"],
              ["False Acceptance", "< 0.001%"],
              ["False Rejection", "< 0.1%"],
              ["Operating Temp", "-20°C to 60°C"],
              ["Enrollment Time", "< 30 seconds per user"]
            ].map(([title, value], index) => (
              <div key={index} className="p-3 bg-white rounded-lg">
                <p className="text-sm font-semibold text-gray-500">{title}</p>
                <p className="font-medium">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Implementation Considerations</h2>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            {[
              {
                icon: <AlertCircle size={20} className="text-blue-600" />,
                title: "Multi-Factor Options",
                content: "Combine with PIN or RFID for highest security levels"
              },
              {
                icon: <Zap size={20} className="text-green-600" />,
                title: "Failover Systems",
                content: "Backup authentication methods for system redundancy"
              },
              {
                icon: <Database size={20} className="text-red-600" />,
                title: "Data Privacy",
                content: "Compliant with GDPR and biometric data regulations"
              },
              {
                icon: <Settings size={20} className="text-purple-600" />,
                title: "User Enrollment",
                content: "Streamlined process with quality control checks"
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
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Why Synergy Access Biometrics?</h2>
          <ul className="mb-6 space-y-3">
            {[
              "Industry-leading 1:1,000,000 false acceptance rate",
              "Adaptive algorithms that improve with use",
              "Tamper-proof hardware with anti-vandal design",
              "Remote management via cloud dashboard",
              "Onsite training and 24/7 support",
              "5-year warranty on all biometric readers"
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
              Need biometric security for your facility?
            </p>
            <button className="px-6 py-2 font-semibold text-white transition-colors duration-300 bg-blue-600 rounded-lg hover:bg-blue-700">
              Request Security Assessment
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

export default BiometricAccess;