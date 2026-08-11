// app/blog/applications-of-tripod-turnstile-gate/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import { Calendar, Eye, MessageCircle, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Applications of Tripod Turnstile Gate | YourCompany',
  description:
    'Explore the various applications of tripod turnstile gates in enhancing security and managing access in commercial, industrial, and recreational environments.',
  keywords:
    'tripod turnstile gate, access control, security gates, turnstile applications, entrance systems',
};

const BlogPost = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 text-sm font-semibold text-white bg-indigo-600 rounded-full">
            Security Gates
          </span>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar size={14} className="text-indigo-500" />
              July 8, 2025
            </div>
            <div className="flex items-center gap-1">
              <User size={14} className="text-indigo-500" />
              Admin
            </div>
            <div className="flex items-center gap-1">
              <Eye size={14} className="text-indigo-500" />
              678 views
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={14} className="text-indigo-500" />
              5 comments
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Applications of Tripod Turnstile Gate
        </h1>

        <div className="relative w-full h-96 rounded-xl overflow-hidden mb-8">
          <Image
            src="/assets/Automatic Number.jpeg" // Replace with the correct image path
            alt="Tripod Turnstile Gate Applications"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <p className="lead text-xl text-gray-600 mb-8">
          Tripod turnstile gates are widely used access control devices that provide secure, reliable, and efficient entry management across various sectors. Their compact design and robust construction make them an ideal solution for managing pedestrian traffic while maintaining high security standards.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">1. Commercial and Office Buildings</h2>
          <p>
            Tripod turnstiles are extensively used in office complexes and commercial buildings to control employee and visitor access. They effectively prevent unauthorized entry while maintaining a smooth flow during peak hours.
          </p>
          <ul className="mt-2 space-y-2">
            <li>Integration with ID card and biometric systems for personalized access</li>
            <li>Enhances security while reducing the need for additional manpower</li>
            <li>Compact footprint suitable for lobbies and corridors</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">2. Public Transportation Facilities</h2>
          <p>
            In metro stations, bus terminals, and railway stations, tripod turnstiles facilitate controlled and rapid passenger entries, helping to prevent fare evasion and maintain order during rush hours.
          </p>
          <ul className="mt-2 space-y-2">
            <li>Supports contactless ticket validation using smart cards or mobile apps</li>
            <li>Durable and resistant to high foot traffic</li>
            <li>Can be configured for unidirectional or bidirectional flow</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">3. Recreational and Event Venues</h2>
          <p>
            Tripod turnstiles are ideal for controlling access at sports arenas, concert venues, amusement parks, and exhibitions, ensuring safety and security while streamlining visitor entry.
          </p>
          <ul className="mt-2 space-y-2">
            <li>Quick processing of ticket holders and members</li>
            <li>Integration with barcode scanning and RFID technology</li>
            <li>Robust design suited for outdoor and high-volume environments</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">4. Educational Institutions</h2>
          <p>
            Schools, colleges, and universities use tripod turnstiles to manage campus access, ensuring only authorized individuals can enter the premises.
          </p>
          <ul className="mt-2 space-y-2">
            <li>Integration with student and faculty ID cards</li>
            <li>Enhances campus safety and attendance tracking</li>
            <li>Scalable solutions for multiple entry and exit points</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">5. Industrial and Manufacturing Units</h2>
          <p>
            Factories and industrial complexes utilize tripod turnstiles to control access to restricted areas, ensuring safety compliance and monitoring employee movement.
          </p>
          <ul className="mt-2 space-y-2">
            <li>Entry control integrated with workforce management systems</li>
            <li>Sturdy construction to withstand harsh environments</li>
            <li>Supports emergency exit and manual override features</li>
          </ul>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Benefits of Using Tripod Turnstile Gates</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Cost-effective and easy to install</li>
            <li>Space-saving design</li>
            <li>Reliable and low maintenance</li>
            <li>Customizable access control integration</li>
            <li>Improves security while allowing smooth traffic flow</li>
          </ul>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Need help choosing the right turnstile system?</h3>
          <p className="mb-6">
            Contact our experts for tailored advice and solutions to meet your security and access control requirements.
          </p>
          <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            Contact Our Security Specialists
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
