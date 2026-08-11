import React from 'react';
import Image from 'next/image';
import Form from '../../components/form';
import Head from 'next/head';
import InternalLinks from '@/components/SEO/InternalLinks';
const boom = '/assets/Boom-Barrier.jpeg';
const banner = '/assets/assistence.jpg'

const Assistance: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Head>
        <title>Technical Support &amp; Assistance | Synergy Access</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Get expert technical support and maintenance services for Synergy Access products. 24/7 assistance available." />
        <meta name="keywords" content="technical support, maintenance services, Synergy Access, assistance" />
      </Head>

     {/* Responsive Top Banner Image */}
           <div className="relative w-full h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] mb-8">
             <Image
               src={banner}
               alt="Consultancy Banner"
               fill
               priority
               className="object-cover object-center"
               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
             />
             
           </div>

      {/* Support Banner - Mobile Optimized */}
      <section className="container px-4 mx-auto mb-8 sm:mb-12">
        <div className="flex flex-col items-center justify-between p-6 text-white shadow-lg sm:p-8 bg-violet-600 rounded-xl md:flex-row">
          <div className="text-center md:text-left">
            <h1 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl">We&apos;re Here to Help</h1>
            <p className="mb-4 text-sm sm:text-base md:text-lg">Our support team is dedicated to assisting you with any questions, issues, or guidance you need regarding our products and solutions.</p>
          </div>
          <Image 
            src={boom} 
            alt="Support Team" 
            className="object-cover w-32 h-32 mt-6 border-2 border-white rounded-full shadow-lg sm:w-40 sm:h-40 sm:mt-8 sm:border-4 md:mt-0 md:ml-8" 
            width={160}
            height={160}
          />
        </div>
      </section>

      {/* Maintenance and Support Section - Mobile Optimized */}
      <section className="container px-4 mx-auto mb-12 sm:mb-16">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {/* Maintenance Services */}
          <div className="p-4 bg-white rounded-lg shadow sm:p-6">
            <h3 className="mb-3 text-lg font-bold sm:mb-4 sm:text-xl text-violet-600">MAINTENANCE SERVICES</h3>
            <p className="mb-3 text-sm leading-relaxed text-gray-600 sm:mb-4 sm:text-base">
              Synergy Access provides a comprehensive array of maintenance services and on-site training. We recommend opting for a maintenance contract post-warranty for continuous access to Synergy&apos;s support services. Choose from monthly, quarterly, or semi-annual maintenance plans to suit your specific needs. If you&apos;re not covered under a contract, we offer chargeable on-site visits to diagnose issues and provide your team with the necessary solutions to restore your system&apos;s optimal performance.
            </p>
            <div className="p-3 rounded-lg sm:p-4 bg-violet-50">
            </div>
          </div>

          {/* Technical Support */}
          <div className="p-4 bg-white rounded-lg shadow sm:p-6">
            <h3 className="mb-3 text-lg font-bold sm:mb-4 sm:text-xl text-violet-600">TECHNICAL SUPPORT</h3>
            <p className="mb-3 text-sm leading-relaxed text-gray-600 sm:mb-4 sm:text-base">
                Have queries about your Synergy-provided equipment? Reach out to our responsive technical support
                 team available around the clock, any day of the week. To explore how a Synergy Certified Technician can assist in diagnosing your equipment, contact us via the provided email addresses or fill out the support form on this page. A representative will promptly get in touch to address 
                 your concerns related to installation, maintenance, hardware issues. We&apos;re here to ensure your automation, access control, and security systems function flawlessly.
                </p>
            <div className="p-3 rounded-lg sm:p-4 bg-violet-50">
            </div>
          </div>
        </div>
      </section>

      <Form />

      {/* FAQ Section - Mobile Optimized */}
      <section className="container px-4 mx-auto mb-8 sm:mb-12">
        <h2 className="mb-4 text-xl font-bold text-gray-800 sm:mb-6 sm:text-2xl">Frequently Asked Questions</h2>
        <div className="space-y-3 sm:space-y-4">
          <details className="p-3 bg-white rounded-lg shadow sm:p-4">
            <summary className="text-sm font-semibold cursor-pointer sm:text-base text-violet-700">How do I request technical support?</summary>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">You can email us at <a href='mailto:business@synergy-access.com' className='underline text-violet-600'>business@synergy-access.com</a> or call our helpline for immediate assistance.</p>
          </details>
          <details className="p-3 bg-white rounded-lg shadow sm:p-4">
            <summary className="text-sm font-semibold cursor-pointer sm:text-base text-violet-700">What is the response time for support queries?</summary>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">We aim to respond to all queries within 24 hours during business days.</p>
          </details>
          <details className="p-3 bg-white rounded-lg shadow sm:p-4">
            <summary className="text-sm font-semibold cursor-pointer sm:text-base text-violet-700">Do you provide on-site assistance?</summary>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">Yes, we offer on-site support for installation, maintenance, and urgent repairs. Please contact us to schedule a visit.</p>
          </details>
        </div>
      </section>
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
    </main>
  );
};

export default Assistance;