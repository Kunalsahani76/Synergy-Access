// app/blog/customizable-automatic-boom-barrier-solutions/page.tsx
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {
  Settings,
  Shield,
  Check,
  Clock,
  Zap,
  Eye,
} from 'lucide-react'

const boomBarrierImg = '/assets/boombarr.jpg' // Update if needed

const CustomizableBoomBarrierSolutions = () => {
  return (
    <main className="min-h-screen px-4 py-10 mx-auto max-w-4xl">
      <Head>
        <title>Customizable Automatic Boom Barrier Solutions | Synergy Access</title>
        <meta
          name="description"
          content="Discover customizable automatic boom barrier solutions tailored to meet unique security and operational challenges."
        />
        <meta
          name="keywords"
          content="customizable boom barrier, automatic boom barrier, security gate, traffic control, customizable access solutions"
        />
      </Head>

      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full">
            BOOM BARRIER
          </span>
          <h1 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Customizable Automatic Boom Barrier Solutions
          </h1>
          <p className="mb-6 text-sm text-gray-500">Published on August 7, 2025 &bull; 7 min read</p>
          <div className="relative w-full h-80 md:h-96 rounded-lg shadow-md">
            <Image
              src={boomBarrierImg}
              alt="Customizable Automatic Boom Barrier"
              className="object-cover rounded-lg"
              fill
              priority
            />
          </div>
        </header>

        <section className="mb-8 text-gray-700">
          <p>
            Automatic boom barriers are vital components of modern access control systems, seamlessly managing vehicle entry and exit while enhancing security. However, one size does not fit all — many sites require tailored boom barrier solutions designed to address specific operational and environmental constraints.
          </p>
          <p>
            At <strong>Synergy Access</strong>, we specialize in customizable boom barrier solutions that can be adapted to your unique requirements, from specialized arm types and materials to integration with cutting-edge access technologies.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {[
            {
              icon: <Settings className="text-purple-600" size={28} />,
              title: 'Tailored Mechanical Design',
              desc: 'Custom boom arm lengths, shapes, and materials to fit constricted spaces or harsh environments.',
            },
            {
              icon: <Shield className="text-purple-600" size={28} />,
              title: 'Enhanced Security Features',
              desc: 'Options for anti-vandal construction, integrated alarms, and obstacle detection for safe operation.',
            },
            {
              icon: <Clock className="text-purple-600" size={28} />,
              title: 'Flexible Operation Speed',
              desc: 'Configure opening and closing speeds to match traffic flow without compromising safety.',
            },
            {
              icon: <Zap className="text-purple-600" size={28} />,
              title: 'Seamless System Integration',
              desc: 'Works with RFID readers, ANPR cameras, biometric devices, and centralized management software.',
            },
            {
              icon: <Eye className="text-purple-600" size={28} />,
              title: 'Durability & Weather Resistance',
              desc: 'Built for indoor and outdoor use with corrosion-resistant coatings and rugged construction.',
            },
            {
              icon: <Check className="text-purple-600" size={28} />,
              title: 'Safety Protocols',
              desc: 'Incorporates safety loops, emergency stop capabilities, and user-friendly override controls.',
            },
          ].map(({ icon, title, desc }, idx) => (
            <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex-shrink-0">{icon}</div>
              <div>
                <h3 className="font-semibold text-xl mb-1">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose Synergy Access for Your Custom Boom Barrier?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            <li>Expert consultation to understand your site-specific operational needs</li>
            <li>Robust engineering to deliver reliable and long-lasting products</li>
            <li>Flexible finance and maintenance plans tailored to your requirements</li>
            <li>Local installation and ongoing support for peak performance</li>
            <li>Integration with the latest access control technologies for comprehensive security</li>
          </ul>
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            Contact Our Experts
          </button>
        </section>

        <footer className="pt-6 mt-10 border-t border-gray-200 text-sm text-gray-500">
          <p>© 2025 Synergy Access. All rights reserved.</p>
        </footer>
      </article>
    </main>
  )
}

export default CustomizableBoomBarrierSolutions
