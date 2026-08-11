import React from 'react';
import Image from 'next/image';
import { Check, Shield, Clock, BarChart2, Settings, Camera, Cpu, Zap } from 'lucide-react';
import Head from 'next/head';
const banner = '/assets/Automatic Number.jpeg';

const ANPR = () => {
  return (
    <main className="min-h-screen px-4 py-10 mx-auto max-w-4xl">
      <Head>
        <title>ANPR Technology | Synergy Access</title>
        <meta name="description" content="Discover how ANPR (Automatic Number Plate Recognition) technology revolutionizes security and traffic management with Synergy Access solutions." />
        <meta name="keywords" content="ANPR, number plate recognition, vehicle tracking, parking management, security technology" />
      </Head>

      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
            TECHNOLOGY
          </span>
          <h1 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">ANPR Technology: Revolutionizing Vehicle Access Control</h1>
          <p className="mb-6 text-sm text-gray-500">
            Published on May 23, 2025 • 5 min read
          </p>
          <div className="relative w-full rounded-lg shadow-md h-80 md:h-96">
            <Image
              src={banner}
              alt="ANPR Technology in action"
              className="object-cover rounded-lg"
              fill
              priority
            />
          </div>
        </header>

        <div className="mb-8 text-gray-700">
          <p className="mb-4 text-lg leading-relaxed">
            Automatic Number Plate Recognition (ANPR) technology has emerged as a game-changer in modern security and traffic management systems. By combining advanced optical character recognition with artificial intelligence, ANPR systems can read vehicle license plates in real-time with remarkable accuracy.
          </p>
          <p className="mb-4">
            At <strong className="text-blue-800">Synergy Access</strong>, we&apos;ve implemented ANPR solutions across various sectors, delivering <strong>98.7% recognition accuracy</strong> even in challenging conditions. This technology forms the backbone of smart cities, efficient parking management, and high-security facilities.
          </p>
        </div>

        <section className="p-6 mb-8 bg-blue-50 rounded-xl">
          <h3 className="flex items-center mb-4 text-xl font-bold text-blue-800">
            <Shield className="mr-2" size={20} /> Key Takeaways
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <Check className="flex-shrink-0 mt-1 mr-2 text-green-600" size={18} />
              <span>Real-time vehicle identification with 95-99% accuracy rates</span>
            </li>
            <li className="flex items-start">
              <Check className="flex-shrink-0 mt-1 mr-2 text-green-600" size={18} />
              <span>Reduces manual checkpoints by up to 80%</span>
            </li>
            <li className="flex items-start">
              <Check className="flex-shrink-0 mt-1 mr-2 text-green-600" size={18} />
              <span>Integrates seamlessly with existing security infrastructure</span>
            </li>
            <li className="flex items-start">
              <Check className="flex-shrink-0 mt-1 mr-2 text-green-600" size={18} />
              <span>24/7 monitoring capability with automated alerts</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">How ANPR Technology Works</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-4 transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-3 text-white bg-blue-600 rounded-full">
                <Camera size={24} />
              </div>
              <h3 className="mb-2 font-bold">Image Capture</h3>
              <p className="text-sm text-gray-600">High-resolution cameras capture vehicle images at entry/exit points, day or night.</p>
            </div>
            <div className="p-4 transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-3 text-white bg-orange-600 rounded-full">
                <Cpu size={24} />
              </div>
              <h3 className="mb-2 font-bold">Character Recognition</h3>
              <p className="text-sm text-gray-600">Advanced OCR software extracts license plate characters from the image.</p>
            </div>
            <div className="p-4 transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-3 text-white bg-green-600 rounded-full">
                <Zap size={24} />
              </div>
              <h3 className="mb-2 font-bold">Database Matching</h3>
              <p className="text-sm text-gray-600">System checks plate against databases for authorization or alerts.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Key Benefits of ANPR Systems</h2>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            {[
              {
                icon: <Clock size={20} className="text-blue-600" />,
                title: "24/7 Automated Operation",
                content: "Works continuously without human intervention, reducing staffing costs by up to 60%."
              },
              {
                icon: <BarChart2 size={20} className="text-green-600" />,
                title: "Traffic Flow Optimization",
                content: "Processes vehicles in 2-3 seconds, eliminating bottlenecks at entry points."
              },
              {
                icon: <Shield size={20} className="text-red-600" />,
                title: "Enhanced Security",
                content: "Immediately flags unauthorized, stolen, or suspicious vehicles entering premises."
              },
              {
                icon: <Settings size={20} className="text-purple-600" />,
                title: "Seamless Integration",
                content: "Connects with barrier systems, payment gateways, and security networks effortlessly."
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
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Applications of ANPR Technology</h2>
          <div className="p-4 mb-6 bg-gray-50 rounded-lg">
            <h3 className="mb-3 font-bold text-blue-800">Commercial Implementations</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Smart parking management systems",
                "Shopping mall access control",
                "Corporate campus security",
                "Toll collection automation",
                "Fuel station forecourt security",
                "Logistics yard management"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="flex-shrink-0 mr-2 text-green-600" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="mb-3 font-bold text-blue-800">Government & High-Security Uses</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Border control and customs checkpoints",
                "Police surveillance and patrol vehicles",
                "Embassy and government building security",
                "Traffic law enforcement",
                "Congestion charge systems",
                "Anti-terrorism security measures"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="flex-shrink-0 mr-2 text-green-600" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="p-6 mb-8 bg-orange-50 rounded-xl">
          <h3 className="mb-4 text-xl font-bold text-orange-800">Technical Specifications</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Recognition Accuracy", "98.7% in optimal conditions"],
              ["Processing Speed", "< 500ms per vehicle"],
              ["Camera Resolution", "4K (3840×2160) minimum"],
              ["IR Illumination Range", "Up to 30 meters"],
              ["Operating Temperature", "-20°C to 60°C"],
              ["Database Integration", "SQL, NoSQL, and cloud APIs"]
            ].map(([spec, value], index) => (
              <div key={index} className="p-3 bg-white rounded-lg">
                <p className="text-sm font-semibold text-gray-500">{spec}</p>
                <p className="font-medium">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">Why Choose Synergy Access ANPR Solutions?</h2>
          <p className="mb-4">
            Our ANPR systems stand out in the market for several compelling reasons:
          </p>
          <ul className="mb-6 space-y-3">
            {[
              "Customizable solutions tailored to your specific requirements",
              "Industry-leading 99.2% accuracy in Indian license plate recognition",
              "Seamless integration with existing infrastructure",
              "Real-time alerts and comprehensive reporting dashboard",
              "24/7 technical support with 4-hour response guarantee",
              "Future-proof technology with regular software updates"
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
              Ready to implement ANPR technology in your facility?
            </p>
            <button className="px-6 py-2 font-semibold text-white transition-colors duration-300 bg-blue-600 rounded-lg hover:bg-blue-700">
              Request a Demo
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

export default ANPR;