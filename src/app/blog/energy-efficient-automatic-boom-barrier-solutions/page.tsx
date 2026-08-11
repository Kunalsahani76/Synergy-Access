// app/blog/energy-efficient-automatic-boom-barrier-solutions/page.tsx
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {
  Shield,
  Settings,
  Check,
  Clock,
  Zap,
  Eye,
} from 'lucide-react'

const energyEfficientImg = '/assets/boom3.jpeg' // Update with your image path

const EnergyEfficientBoomBarrier = () => {
  return (
    <main className="min-h-screen px-4 py-10 mx-auto max-w-4xl">
      <Head>
        <title>Energy-Efficient Automatic Boom Barrier Solutions | Synergy Access</title>
        <meta
          name="description"
          content="Discover the latest energy-efficient automatic boom barrier solutions that combine sustainability with reliable access control and security."
        />
        <meta
          name="keywords"
          content="energy-efficient boom barrier, automatic boom barrier, sustainable access control, low-power barrier solutions"
        />
      </Head>

      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-green-600 bg-green-100 rounded-full">
            BOOM BARRIER
          </span>
          <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Energy-Efficient Automatic Boom Barrier Solutions
          </h1>
          <p className="mb-6 text-sm text-gray-500">
            Published on August 7, 2025 • 6 min read
          </p>
          <div className="relative w-full h-80 md:h-96 rounded-lg shadow-md">
            <Image
              src={energyEfficientImg}
              alt="Energy efficient automatic boom barrier"
              className="object-cover rounded-lg"
              fill
              priority
            />
          </div>
        </header>

        <section className="mb-8">
          <p>
            As sustainability becomes a critical factor in facility management, energy-efficient automatic boom barrier solutions have emerged to provide both reliable access control and reduced environmental impact. These systems leverage advanced technologies to minimize power consumption while maintaining high performance and durability.
          </p>
        </section>

        <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <Shield className="text-green-600" size={28} />,
              title: 'Low Power Consumption',
              desc: 'State-of-the-art motors and energy-saving components reduce electricity usage without compromising function.',
            },
            {
              icon: <Check className="text-green-700" size={28} />,
              title: 'Eco-Friendly Design',
              desc: 'Use of recyclable materials and smart standby features lowers environmental footprint.',
            },
            {
              icon: <Settings className="text-green-600" size={28} />,
              title: 'Solar Power Integration',
              desc: 'Options for solar panel connectivity enable off-grid operation and further energy savings.',
            },
            {
              icon: <Zap className="text-green-600" size={28} />,
              title: 'Intelligent Operation',
              desc: 'Sensors and AI optimize barrier activity to minimize unnecessary movements and idle energy consumption.',
            },
            {
              icon: <Clock className="text-green-700" size={28} />,
              title: 'Reduced Maintenance',
              desc: 'Efficient power management leads to less wear and longer lifespan of mechanical parts.',
            },
            {
              icon: <Eye className="text-green-600" size={28} />,
              title: 'Continuous Security',
              desc: 'Energy efficiency is balanced with robust security features ensuring uncompromised barrier performance.',
            },
          ].map(({ icon, title, desc }, idx) => (
            <div key={idx} className="flex gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div>{icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{title}</h3>
                <p className="text-gray-700">{desc}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose Energy-Efficient Boom Barriers?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Lower operational costs through reduced power usage</li>
            <li>Supports green building certifications and sustainability goals</li>
            <li>Reliable and consistent access control performance</li>
            <li>Integration with modern remote monitoring and management systems</li>
            <li>Customized solutions for different facility sizes and requirements</li>
          </ul>
        </section>

        <section className="mb-10 p-6 bg-green-50 rounded-lg border border-green-200">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">Get Started With Sustainable Access Control</h2>
          <p className="mb-4 text-gray-700">
            Our team at Synergy Access offers bespoke energy-efficient boom barrier solutions tailored to your facility’s unique needs. Reduce your carbon footprint while enhancing security and traffic management.
          </p>
          <button className="px-6 py-3 font-semibold bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Contact Our Experts Today
          </button>
        </section>

        <footer className="border-t border-green-200 pt-6 mt-10 text-sm text-gray-600">
          <p>© 2025 Synergy Access. All rights reserved.</p>
        </footer>
      </article>
    </main>
  )
}

export default EnergyEfficientBoomBarrier
