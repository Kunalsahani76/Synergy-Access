'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Radio, ScanLine, TrafficCone, Cable, RouteIcon, RadioTower, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import SEOHead from '../../../components/SEO/SEOHead';
import InternalLinks from '../../../components/SEO/InternalLinks';
import { generateSEOData, generateStructuredData } from '../../../components/utils/seo';


const banner = '/new-assets/1.jpg';
const boom1 = '/new-assets/5.jpg';
const boom2 = '/new-assets/6.jpg';
const boom3 = '/new-assets/7.jpg';

const boomBarrierModels = [
  {
    name: 'Super-Fast 3',
    image: boom1,
    description: 'A high-speed boom barrier engineered for demanding toll and parking applications.',
    features: [
      'High-speed opening and closing operation',
      '24×7 continuous-duty performance',
      'FASTag and RFID integration',
      'ANPR camera compatibility',
      'Anti-crash safety mechanism and loop detector support',
      'Traffic-light integration',
      'Weatherproof, corrosion-resistant housing',
      'Remote monitoring and control',
      'Heavy-duty industrial motor with long service life',
    ],
    specifications: [
      ['Boom Arm Length', 'Up to 3 m'],
      ['Opening / Closing Time', '0.6–1.5 seconds'],
      ['Power Consumption', '220 W'],
      ['Duty Cycle', '100% continuous operation'],
      ['Protection Rating', 'IP54 / IP55'],
      ['Integration', 'FASTag, RFID, ANPR & toll management'],
      ['Communication', 'TCP/IP, RS485, dry contact'],
      ['Design Life', 'Minimum 5 million operating cycles'],
    ],
    applications: [
      'Toll plazas',
      'Parking facilities',
    ],
  },
  {
    name: 'Quick 5',
    image: boom2,
    description: 'A reliable electromechanical barrier designed for intensive everyday vehicle access control.',
    features: [
      'Suitable for boom lengths from 3 to 5 metres',
      'High-performance electromechanical motor',
      'High-duty-cycle, continuous operation',
      'Robust powder-coated steel cabinet for outdoor use',
      'Obstacle detection with automatic boom reversal',
      'Manual release for power failures',
      'RFID, UHF, ANPR, access-control and parking-system compatible',
      'Smooth, quiet movement with precise limit switches',
      'Corrosion-resistant, energy-efficient construction',
    ],
    specifications: [
      ['Boom Length', '3–5 m'],
      ['Opening Time', '3–5 seconds'],
      ['Power Consumption', '180 W'],
      ['Duty Cycle', 'Up to 100%'],
      ['Operating Temperature', '-20°C to +55°C'],
      ['Protection Rating', 'IP54 / IP55'],
      ['Integration', 'RFID, ANPR, UHF & access-control systems'],
      ['Motor Supply', '230 V AC, 50 Hz'],
      ['Service Life', 'Over 5 million cycles'],
      ['Manual Override', 'Available'],
      ['Safety Auto-Reverse', 'Supported'],
    ],
    applications: [
      'Residential societies and gated communities',
      'Commercial and corporate office complexes',
      'Industrial facilities and manufacturing plants',
      'Shopping malls and parking areas',
      'Hospitals, educational institutions and government buildings',
      'Airports, logistics centres and transportation hubs',
    ],
  },
  {
    name: 'Supermacy 7',
    image: boom3,
    description: 'A robust, long-reach boom barrier for intensive outdoor traffic management.',
    features: [
      'Suitable for boom lengths from 5 to 7 metres',
      'High-performance electromechanical geared motor',
      'High-duty-cycle, continuous-use design',
      'Fast operation for efficient traffic management',
      'Smooth and quiet operation with precise boom control',
      'Obstacle detection with automatic boom reversal',
      'Low-maintenance, energy-efficient operation',
      'Manual emergency release during power failures',
      'RFID, ANPR, UHF, parking and access-control compatible',
      'Weatherproof, corrosion-resistant housing',
    ],
    specifications: [
      ['Boom Length', '5–7 m'],
      ['Drive Type', 'Electromechanical geared motor'],
      ['Power Supply', '230 V AC, 50 Hz'],
      ['Motor Power', '180 W'],
      ['Operating Temperature', '-20°C to +55°C'],
      ['Duty Cycle', 'Up to 100% intensive use'],
      ['Protection Rating', 'IP54 / IP55'],
      ['Opening / Closing Time', '4–8 seconds'],
      ['Boom Material', 'High-strength aluminium'],
      ['Service Life', 'Over 8 million cycles'],
    ],
    applications: [
      'Residential societies and gated communities',
      'Commercial and corporate office complexes',
      'Industrial facilities and manufacturing plants',
      'Shopping malls and parking areas',
      'Hospitals, educational institutions and government buildings',
      'Airports, logistics centres and transportation hubs',
    ],
  },
];

const productCategories = [
  { name: 'Automatic Boom Barrier', path: '/products/boom-barrier' },
  { name: 'Door Frame Metal Detector', path: '/products/dfmd' },
  { name: 'Hand Held Metal Detector', path: '/products/hhmd' },
  { name: 'Automatic Bollard', path: '/products/bollards' },
  { name: 'Parking Systems', path: '/products/parking-management' },
  { name: 'Flap Barrier', path: '/products/flap-swing-barrier' },
  { name: 'Swing Barrier', path: '/products/p-type-swing-barrier' },
  { name: 'Tyre Killer', path: '/products/tyre-killer' },
  { name: 'Road Blocker', path: '/products/road-blocker' },
  { name: 'Tripod Turnstile', path: '/products/tripod-turnstile' },
  { name: 'ANPR', path: '/products/anpr-solution' },
];

const accessories = [
  {
    icon: <Radio className="w-10 h-10 text-blue-500" />,
    label: 'Remote Control & Receiver',
    bg: 'bg-blue-50',
  },
  {
    icon: <ScanLine className="w-10 h-10 text-green-500" />,
    label: 'Infrared Safety Sensor',
    bg: 'bg-green-50',
  },
  {
    icon: <TrafficCone className="w-10 h-10 text-yellow-500" />,
    label: 'LED Traffic Light',
    bg: 'bg-yellow-50',
  },
  {
    icon: <Cable className="w-10 h-10 text-purple-500" />,
    label: 'Vehicle Loop Detector',
    bg: 'bg-purple-50',
  },
];

export default function BoomBarrier() {
  const [selectedModel, setSelectedModel] = useState(boomBarrierModels[0]);

  const seoData = generateSEOData({
    title: 'Boom Barriers - Automatic Gate Barriers',
    description: 'High-quality automatic boom barriers for parking and access control...',
    keywords: 'boom barrier, automatic gate barrier, parking barrier, access control...',
    // @ts-expect-error: generateStructuredData returns a type not assignable to Record<string, unknown>
    structuredData: generateStructuredData('Product', {
      name: 'Automatic Boom Barriers',
      description: 'Professional grade boom barriers with 3-7 second operation cycles...',
    }),
  });

  return (
    <div className="w-full">
      <SEOHead {...seoData} />

      {/* Banner */}

      <div className="relative w-full h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
        <Image
          src={banner}
          alt="About Synergy Access Banner"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
        />

      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-6 px-4 py-6 mx-auto sm:gap-8 sm:py-8 md:py-12 max-w-7xl md:grid-cols-4">

        {/* Sidebar */}
        <aside className="p-4 space-y-8 bg-gray-100 sm:p-6 md:col-span-1 rounded-xl">
          {/* Our Products */}
          <div className="p-5 space-y-2 shadow rounded-xl bg-gradient-to-br from-white via-gray-50 to-white">
            <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-blue-600">
              <span className="p-2 text-white bg-blue-600 rounded-full">🛒</span>
              OUR PRODUCTS
            </h3>
            <div className="space-y-2">
              {productCategories.map((cat) => (
                <a
                  key={cat.name}
                  href={cat.path}
                  className="block px-4 py-2 text-sm font-medium text-gray-800 transition-all duration-200 bg-white rounded-lg shadow hover:text-blue-600 hover:shadow-md hover:bg-red-50"
                >
                  {cat.name}
                </a>
              ))}
            </div>
          </div>

          {/* Brochures */}
          <div className="p-5 shadow rounded-xl bg-gradient-to-br from-blue-50 to-white">
            <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-blue-900">
              <span className="p-2 text-white bg-blue-600 rounded-full">
                <RouteIcon className="w-5 h-5" />
              </span>
              BROCHURES
            </h3>
            <div className="flex items-center gap-3 px-4 py-3 transition-all rounded-lg bg-white/80 hover:bg-blue-100">
              <RadioTower className="w-4 h-4 text-blue-600" />
              <a href="#" className="text-sm font-semibold text-blue-900 hover:underline">
                Boom Barrier Brochure.pdf
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="p-5 shadow rounded-xl bg-gradient-to-br from-blue-50 to-white">
            <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-blue-900">
              <span className="p-2 text-white bg-blue-600 rounded-full">
                <Lightbulb className="w-5 h-5" />
              </span>
              CONTACT US
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/80 hover:bg-blue-100">
                <span className="p-2 text-blue-600 bg-blue-100 rounded-full">📞</span>
                <div>
                  <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Call Us</div>
                  <div className="text-sm font-bold text-blue-900">+91 99993 39265</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/80 hover:bg-blue-100">
                <span className="p-2 text-blue-600 bg-blue-100 rounded-full">✉️</span>
                <div>
                  <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Email</div>
                  <div className="text-sm font-bold text-blue-900">business@synergy-access.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/80 hover:bg-blue-100">
                <span className="p-2 text-blue-600 bg-blue-100 rounded-full">📍</span>
                <div>
                  <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase">Location</div>
                  <div className="text-sm font-bold text-blue-900">
                    B6, 3rd floor, Sector-2<br />Noida, 201301
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Section */}
        <main className="md:col-span-3">
          {/* Product Models Grid */}
          <div className="grid grid-cols-1 gap-4 mb-8 sm:gap-6 md:gap-8 sm:mb-12 md:grid-cols-2 lg:grid-cols-3">
            {boomBarrierModels.map((model) => (
              <motion.div
                key={model.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer group ${selectedModel.name === model.name ? 'ring-2 sm:ring-4 ring-red-400' : ''
                  }`}
                onClick={() => setSelectedModel(model)}
              >
                <div className="relative w-full h-40 sm:h-56">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-contain transition-transform duration-300 bg-gray-200"
                  />
                </div>

              </motion.div>
            ))}
          </div>

          {/* Selected Model Details */}
          <div className="grid items-start gap-8 mb-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h2 className="flex items-center mb-4 text-2xl font-bold">
                  <span className="flex items-center justify-center inline-block w-6 h-6 mr-2 text-lg text-white bg-red-500 rounded-full">✔</span>
                  {selectedModel.name}
                </h2>
                <p className="mb-4 text-gray-700">{selectedModel.description}</p>
              </div>

              <div className="p-5 bg-white border border-gray-200 rounded-lg shadow">
                <h3 className="mb-3 text-lg font-bold text-blue-600">Key Features</h3>
                <ul className="space-y-2">
                  {selectedModel.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 mt-1 mr-2 text-green-500">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 bg-white border border-gray-200 rounded-lg shadow">
                <h3 className="mb-3 text-lg font-bold text-blue-600">Typical Applications</h3>
                <div className="grid grid-cols-2 gap-2">
                  {selectedModel.applications.map((app, index) => (
                    <div key={index} className="flex items-center px-3 py-2 bg-gray-50 rounded">
                      <span className="mr-2 text-blue-500">•</span>
                      <span className="text-sm">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="overflow-hidden bg-white rounded-lg shadow">
                <div className="relative w-full h-64">
                  <Image
                    src={selectedModel.image}
                    alt={selectedModel.name}
                    fill
                    className="object-contain bg-gray-100"
                  />
                </div>
              </div>

              <div className="p-5 bg-white border border-gray-200 rounded-lg shadow">
                <h3 className="mb-3 text-lg font-bold text-blue-600">Technical Specifications</h3>
                <table className="w-full text-sm border border-collapse border-gray-200">
                  <tbody>
                    {selectedModel.specifications.map(([spec, value], index) => (
                      <tr key={index} className="border-b border-gray-200 even:bg-gray-50">
                        <td className="px-3 py-2 font-medium text-gray-700 border-r border-gray-200">{spec}</td>
                        <td className="px-3 py-2 text-right font-semibold text-gray-900">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>

          {/* Accessories Included */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Accessories</h2>
            <div className="grid gap-6 md:grid-cols-4">
              {accessories.map((acc) => (
                <motion.div
                  key={acc.label}
                  whileHover={{ scale: 1.07, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
                  className={`flex flex-col items-center p-6 rounded-xl shadow bg-white ${acc.bg} transition-all duration-300`}
                >
                  <div className="mb-3">{acc.icon}</div>
                  <div className="text-lg font-semibold text-gray-800">{acc.label}</div>
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Internal Links Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            <InternalLinks
              category="products"
              title="Related Products"
              maxLinks={4}
              currentPage="/products/boom-barrier"
            />
            <InternalLinks
              category="services"
              title="Our Services"
              maxLinks={4}
              currentPage="/products/boom-barrier"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
