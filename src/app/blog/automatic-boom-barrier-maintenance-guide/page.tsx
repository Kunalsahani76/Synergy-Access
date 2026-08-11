// app/blog/automatic-boom-barrier-maintenance-guide/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import { Calendar, Eye, MessageCircle, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Automatic Boom Barrier Maintenance Guide | YourCompany',
  description:
    'Comprehensive guide on maintaining automatic boom barriers to ensure long-lasting, reliable operation and optimal security performance.',
  keywords:
    'automatic boom barrier, boom barrier maintenance, parking security, boom barrier repair, barrier upkeep',
}

const BlogPost = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 text-sm font-semibold text-white bg-indigo-600 rounded-full">
            Boom Barrier
          </span>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar size={14} className="text-indigo-500" />
              April 15, 2025
            </div>
            <div className="flex items-center gap-1">
              <User size={14} className="text-indigo-500" />
              Admin
            </div>
            <div className="flex items-center gap-1">
              <Eye size={14} className="text-indigo-500" />
              1,023 views
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={14} className="text-indigo-500" />
              9 comments
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Automatic Boom Barrier Maintenance Guide
        </h1>

        <div className="relative w-full h-96 rounded-xl overflow-hidden mb-8">
          <Image
            src="/assets/Automatic Number.jpeg" // Update with your actual image path
            alt="Automatic Boom Barrier Maintenance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <p className="lead text-xl text-gray-600 mb-8">
          Automatic boom barriers are essential components for access control and traffic management in commercial, industrial, and residential facilities. To ensure optimal performance, safety, and longevity, it is vital to perform regular maintenance. This guide outlines key maintenance practices for automatic boom barriers, helping you avoid costly repairs and downtime.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">1. Regular Inspection and Cleaning</h2>
          <p>
            Routine inspections help identify wear and tear early:
          </p>
          <ul className="mt-2 space-y-2">
            <li>Check boom arm and pivot points for damage or corrosion</li>
            <li>Clean sensors, photo eyes, and control panels to remove dirt and debris</li>
            <li>Ensure no obstructions within the barrier movement range</li>
            <li>Lubricate moving parts as recommended by the manufacturer</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">2. Electrical and Control System Checks</h2>
          <p>
            Ensure the electrical components operate safely and efficiently:
          </p>
          <ul className="mt-2 space-y-2">
            <li>Inspect wiring and connectors for wear, corrosion, or loose connections</li>
            <li>Test limit switches and emergency stop buttons</li>
            <li>Verify control panel indicators and alarms are functioning correctly</li>
            <li>Confirm the battery backup (if applicable) maintains full charge</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">3. Boom Barrier Arm Maintenance</h2>
          <p>
            The boom arm is a critical mechanical part requiring attention:
          </p>
          <ul className="mt-2 space-y-2">
            <li>Examine the arm for physical damage or bending</li>
            <li>Tighten screws and bolts securing the arm</li>
            <li>Check reflective tapes and replace if faded for better visibility</li>
            <li>Inspect counterweights and balancing mechanisms</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">4. Software and Firmware Updates</h2>
          <p>
            Keep your system’s control software up to date to benefit from:
          </p>
          <ul className="mt-2 space-y-2">
            <li>Improved reliability and bug fixes</li>
            <li>Enhanced security features</li>
            <li>Compatibility with new access control integrations</li>
            <li>New functionalities and performance optimizations</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">5. Professional Servicing and Troubleshooting</h2>
          <p>
            While regular maintenance can be performed onsite, professional servicing ensures:
          </p>
          <ul className="mt-2 space-y-2">
            <li>Accurate diagnostics of electrical and mechanical faults</li>
            <li>Replacement of worn-out or malfunctioning parts</li>
            <li>Calibration of sensors and alignment of components</li>
            <li>Compliance with safety regulations and standards</li>
          </ul>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Conclusion</h2>
          <p>
            Consistent maintenance is key to maximizing the lifespan and reliability of your automatic boom barrier system. By following the outlined best practices, facility managers can reduce the risk of malfunctions, improve operational safety, and ensure uninterrupted access control.
          </p>
          <p>
            For expert maintenance services or tailored maintenance programs, contact our team today.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Need help with your boom barrier maintenance?</h3>
          <p className="mb-6">
            Our maintenance specialists are ready to assist with inspections, repairs, and preventive services tailored to your equipment.
          </p>
          <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            Contact Our Maintenance Experts
          </button>
        </div>
      </div>
    </article>
  )
}

export default BlogPost
