"use client";
import React from 'react';
import { MapPin, Phone, Mail, HelpCircle } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import GeometricNetworkBackground from '../../components/Common/GeometricNetworkBackground';
import Head from 'next/head';
import Image from 'next/image';
import Form from '../../components/form';
import InternalLinks from '@/components/SEO/InternalLinks';

const consult = '/assets/contactbanner.jpg';

const Contact: React.FC = () => {
  // Animation variants
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInFromLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    }
  };

  // FAQ data
  const faqs = [
    {
      question: "What areas do you provide services in?",
      answer: "We provide our automation and security solutions across all major cities in India including Delhi NCR, Mumbai, Bangalore, Hyderabad, Chennai, and more."
    },
    {
      question: "Do you offer installation services?",
      answer: "Yes, we offer professional installation services for all our products. Our team of experts ensures proper setup and configuration according to your requirements."
    },
    {
      question: "What kind of after-sales support do you provide?",
      answer: "We provide comprehensive after-sales support including maintenance, troubleshooting, and technical assistance. Our support team is available to help you with any issues you may encounter."
    }
  ];

  // Structured data for contact page
  const contactStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'Synergy Access Pvt. Ltd',
      description: 'Leading manufacturer of entrance automation systems',
      url: 'https://www.synergy-access.com',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91 99993 39265',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi']
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactStructuredData, null, 2)
        }}
      />
      
      <GeometricNetworkBackground className="absolute inset-0" />
      
      <Head>
        <title>Contact Synergy Access | Get in Touch for Automation Solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Contact Synergy Access for inquiries about boom barriers, bollards, turnstiles, parking management, and access control systems." />
        <meta name="keywords" content="contact synergy access, contact boom barrier, access control, parking management, security systems" />
        <meta property="og:title" content="Contact Synergy Access" />
        <meta property="og:description" content="Get in touch with Synergy Access for all your entrance automation and security solution needs." />
      </Head>

     {/* Responsive Top Banner Image */}
           <div className="relative w-full h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] mb-8">
             <Image
               src={consult}
               alt="Consultancy Banner"
               fill
               priority
               className="object-cover object-center"
               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
             />
             
           </div>

      {/* Contact Information Cards */}
      <section className="py-16 relative">
        <div className="container px-4 mx-auto relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Reach Out To Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We&apos;re always ready to assist you with any questions about our products and services.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 gap-6 mb-16 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            {[
              {
                icon: MapPin,
                color: 'red',
                title: 'Registered Office',
                content: (
                  <>
                 <b>Synergy Electrical and Automation</b> 
                  <br />B- 6,Sector-2,
                  Noida 201301,
                  <br />Uttar Pradesh, India <br />
                  <b>Synergy Access Pvt. Ltd.</b>  <br />
                    B-103 Sector-2,<br />
                    Noida 201301,<br />
                    Uttar Pradesh, India
                  </>
                )
              },
              {
                icon: MapPin,
                color: 'indigo',
                title: 'Branch Office',
                content: (
                  <>
                    22-23 Digvijay Plot,<br />
                    New School Road<br />
                    Near Sadguru Dairy,<br />
                    Jamnagar, Gujarat - 361005
                  </>
                )
              },
              {
                icon: MapPin,
                color: 'indigo',
                title: 'Factory Address',
                content: (
                  <>
                    Row House No. 01,<br />
                    (Old Chapple),<br />
                    Ideal Eclave Building No.01,<br />
                    P.K. Road, Near Orange Hospital<br />
                    Mira Road East || Thane 401107 MAHARASHTRA
                  </>
                )
              },
              {
                icon: Phone,
                color: 'blue',
                title: 'Call Us',
                content: (
                  <>
                    <span className="block mb-1 font-medium">Sales:</span>
                    <a href="tel:+919999339265" className="text-blue-600 hover:underline">+91 99993 39265</a>
                    <span className="block mt-3 mb-1 font-medium">Support:</span>
                    <a href="tel:+919999339265" className="text-blue-600 hover:underline">+91 99993 39265</a>
                  </>
                )
              },
              {
                icon: Mail,
                color: 'green',
                title: 'Email Us',
                content: (
                  <a href="mailto:business@synergy-access.com" className="text-green-600 hover:underline">
                    business@synergy-access.com
                  </a>
                )
              }
            ].map((card, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl hover:-translate-y-1"
                variants={fadeInFromLeft}
              >
                <div className={`h-2 bg-${card.color}-500`}></div>
                <div className="p-6">
                  <div className={`w-14 h-14 bg-${card.color}-100 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                    <card.icon className={`w-7 h-7 text-${card.color}-500`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{card.title}</h3>
                  <p className="text-gray-600 text-center">{card.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form Section */}
          <div id="contact-form" className="relative z-10">
            <Form />
          </div>

          {/* FAQ Section */}
          <motion.div 
            className="mt-20 mb-16 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="mb-6 bg-white rounded-lg shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <HelpCircle className="h-6 w-6 text-indigo-500" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div 
            className="rounded-xl overflow-hidden shadow-xl relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-indigo-700 text-white py-4 px-6">
              <h3 className="text-xl font-semibold">Our Location</h3>
            </div>
            <iframe
              title="Synergy Access Noida Location"
              src="https://www.google.com/maps?q=B6,+3rd+floor,+Sector-2+Noida,201301&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
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
      </section>
      
    </div>
  );
};

export default Contact;