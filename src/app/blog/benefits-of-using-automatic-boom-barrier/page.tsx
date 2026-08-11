// app/blog/benefits-of-using-automatic-boom-barrier/page.tsx
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {
  Shield,
  Settings,
  Clock,
  Zap,
  Check,
  Database,
} from 'lucide-react';

const boomBarrierImg = '/assets/boom3.jpeg'; // Update with your image path

const BoomBarrierBenefits = () => {
  return (
    <main className="min-h-screen px-4 py-10 mx-auto max-w-4xl">
      <Head>
        <title>Benefits of Using Automatic Boom Barrier | Synergy Access</title>
        <meta
          name="description"
          content="Discover the key benefits of automatic boom barriers in improving access control, enhancing security, and streamlining traffic management."
        />
        <meta
          name="keywords"
          content="automatic boom barrier, boom barrier benefits, access control, parking security, traffic management"
        />
      </Head>

      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-green-600 bg-green-100 rounded-full">
            BOOM BARRIER
          </span>
          <h1 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Benefits of Using Automatic Boom Barrier
          </h1>
          <p className="mb-6 text-sm text-gray-500">
            Published on August 7, 2025 • 6 min read
          </p>
          <div className="relative w-full h-80 md:h-96 rounded-lg shadow-md">
            <Image
              src={boomBarrierImg}
              alt="Automatic boom barrier controlling access"
              className="object-cover rounded-lg"
              fill
              priority
            />
          </div>
        </header>

        <section className="mb-8 text-gray-700">
          <p className="mb-4 text-lg leading-relaxed">
            Automatic boom barriers play a crucial role in modern access control and traffic management systems. Their integration into commercial, residential, and industrial facilities leads to greater security, efficiency, and convenience. Here are some essential benefits of deploying automatic boom barriers:
          </p>
        </section>

        <section className="mb-10 grid gap-6 md:grid-cols-2">
          {[
            {
              icon: <Shield size={24} className="text-green-600" />,
              title: 'Enhanced Security',
              description:
                'Automatic boom barriers restrict unauthorized access and help control entry, reducing security risks effectively.',
            },
            {
              icon: <Settings size={24} className="text-blue-600" />,
              title: 'Efficient Traffic Management',
              description:
                'They streamline vehicle flow by automating gate operations, minimizing congestion especially during peak hours.',
            },
            {
              icon: <Clock size={24} className="text-red-600" />,
              title: '24/7 Operation Reliability',
              description:
                'Designed for continuous operation with minimal downtime, boom barriers ensure consistent security around the clock.',
            },
            {
              icon: <Zap size={24} className="text-purple-600" />,
              title: 'Easy Integration',
              description:
                'Compatible with various access control devices including RFID, ANPR cameras, and remote controls.',
            },
            {
              icon: <Check size={24} className="text-green-700" />,
              title: 'Cost-Effective Solution',
              description:
                'Compared to manned gates, boom barriers reduce labor costs while maintaining high security standards.',
            },
            {
              icon: <Database size={24} className="text-indigo-600" />,
              title: 'Data Logging & Monitoring',
              description:
                'Most systems provide logs of access events and remote monitoring capabilities for facilities management.',
            },
          ].map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              className="flex p-6 transition-shadow duration-300 bg-white rounded-lg shadow-sm hover:shadow-md"
            >
              <div className="flex-shrink-0 mr-5">{icon}</div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-2">
            Additional Advantages
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Improves safety by minimizing unauthorized or accidental entry
            </li>
            <li>
              Can be operated remotely or integrated with mobile apps for convenience
            </li>
            <li>
              Offers scalability from small private parking lots to large commercial complexes
            </li>
            <li>
              Compatible with emergency override systems for instant access
            </li>
          </ul>
        </section>

        <section className="mb-10 p-6 bg-green-50 rounded-lg border border-green-200">
          <h2 className="mb-4 text-2xl font-bold text-green-800">
            Why Choose Synergy Access for Your Boom Barrier Needs?
          </h2>
          <p className="mb-4 text-gray-700">
            At <strong>Synergy Access</strong>, we provide state-of-the-art automatic boom barrier systems tailored to your specific requirements. Our solutions offer durability, advanced technology, and seamless integration with your existing infrastructure. Partner with us to secure your premises efficiently and reliably.
          </p>
          <button className="px-6 py-3 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors">
            Contact Our Experts
          </button>
        </section>

        <footer className="pt-6 mt-8 border-t border-gray-200 text-gray-600 text-sm">
          <div className="flex flex-wrap items-center justify-between">
            <div className="mb-4">
              <span>© 2025 Synergy Access. All rights reserved.</span>
            </div>
            <div className="flex space-x-3">
              {['Twitter', 'Facebook', 'LinkedIn', 'Email'].map((platform) => (
                <button
                  key={platform}
                  className="p-2 text-gray-500 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label={`Share on ${platform}`}
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
};

export default BoomBarrierBenefits;
