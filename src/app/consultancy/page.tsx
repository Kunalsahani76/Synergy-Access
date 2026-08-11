"use client";
import React, { useState } from 'react';
import { motion, Variants, Transition } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import InternalLinks from '@/components/SEO/InternalLinks';

// Image paths (point to public folder)
const consult = '/assets/consultancy.jpg';
const Access = '/assets/control.jpg';

const Consultancy = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(`Thanks for your message, ${formData.name}! We&apos;ll contact you soon.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // Define proper types for variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      } as Transition
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      } as Transition
    }
  };



  const fadeInScale: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      } as Transition
    }
  };

  return (
    <div className="min-h-screen">
      {/* SEO */}
      <Head>
        <title>Business Consultancy Services | Synergy Access</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Expert consultancy services to optimize operations and achieve business excellence" />
        <meta name="keywords" content="consultancy, business strategy, operational efficiency" />
        <meta property="og:title" content="Professional Consultancy Services | Synergy Access" />
        <meta property="og:description" content="Transform your business with our expert consultancy services" />
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

      {/* Main Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="max-w-7xl px-4 py-8 mx-auto sm:px-6 sm:py-12 md:py-16"
      >
        {/* Company Info Section */}
        <section className="grid items-center gap-6 sm:gap-8 md:grid-cols-2">
          <motion.div
            variants={fadeInScale}
            className="relative p-4 overflow-hidden text-center bg-white shadow-xl sm:p-6 rounded-xl sm:rounded-2xl md:p-8 group"
          >
            <motion.div
              className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-blue-50 to-indigo-50 group-hover:opacity-100"
            />
            <motion.h2
              className="relative mb-3 text-xl font-bold text-gray-800 sm:mb-4 sm:text-2xl md:text-3xl"
              animate={{
                color: "transparent",
                background: [
                  "linear-gradient(to right, #2563eb, #4f46e5)",
                  "linear-gradient(to right, #4f46e5, #2563eb)"
                ],
                backgroundClip: "text"
                // Note: WebkitBackgroundClip is not a valid Framer Motion animate property.
              }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              Manufacturer of Entrance Automation Systems
            </motion.h2>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="relative w-full max-w-sm mx-auto rounded-lg shadow-md sm:max-w-md sm:rounded-xl aspect-video">
                <Image
                  src={Access}
                  alt="Automation"
                  className="object-cover"
                  fill
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6 sm:mt-8 md:mt-0">
            <p className="mb-3 text-sm leading-relaxed text-gray-700 sm:mb-4 sm:text-base">
              Incorporated in 2019, <strong>Synergy Access</strong> is a trusted manufacturer and service provider of boom barriers, hydraulic bollards, tyre killers, flap barriers, and more.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-gray-700 sm:mb-6 sm:text-base md:mb-8">
              Backed by a strong infrastructure, we deliver solutions on time and at competitive prices.
            </p>

            {/* Feature Cards */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {[
                {
                  title: 'Commercial Segments',
                  desc: 'Extensive offering of Synergy products for commercial needs.',
                  icon: (
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5V6a2.25..." />
                    </svg>
                  )
                },
                {
                  title: 'Industrial Segments',
                  desc: 'Comprehensive products and tailored industrial solutions.',
                  icon: (
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v-2.625..." />
                    </svg>
                  )
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-3 transition bg-white border-l-4 border-red-500 rounded-lg shadow sm:gap-3 sm:p-4 sm:rounded-xl hover:shadow-md md:gap-4 md:p-5">
                  <span className="text-red-600">{item.icon}</span>
                  <div>
                    <div className="text-xs font-semibold text-red-500 uppercase">Synergy Access</div>
                    <div className="text-sm font-bold text-gray-800 sm:text-base">{item.title}</div>
                    <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Description Section */}
        <motion.section
          variants={itemVariants}
          className="p-6 mt-12 bg-white shadow rounded-xl sm:p-8 sm:mt-16"
          id="contact"
        >
          <h2 className="mb-4 text-2xl font-bold text-center text-gray-900 sm:text-3xl">Our Expertise</h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-700 sm:text-base">
            At Synergy Access, we offer expert consultancy services tailored to help you optimize your operations, streamline workflows, and achieve business excellence. Our experienced consultants provide in-depth analysis, strategic planning, and actionable insights to ensure your organization reaches its full potential.
          </p>
          <p className="mb-2 text-sm text-gray-700 sm:text-base">
            Choose from one-time consultations or ongoing advisory plans, available on a monthly, quarterly, or semi-annual basis, based on your specific requirements. Whether you&apos;re facing operational challenges, need industry-specific guidance, or want to enhance efficiency, our team is here to support you with customized solutions.
            For businesses without an existing consultancy agreement, we also offer on-demand advisory sessions at competitive rates to help you make informed decisions and overcome obstacles effectively.
          </p>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          variants={itemVariants}
          className="p-6 mt-12 bg-white rounded-lg shadow-xl sm:p-8"
        >
          <h2 className="mb-6 text-2xl font-bold text-center sm:text-3xl">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block mb-1 text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-medium text-white transition-colors duration-300 bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:text-base"
            >
              Send Message
            </button>
          </form>
        </motion.section>

        {/* Comprehensive Services Section */}
        <motion.section
          variants={itemVariants}
          className="p-6 mt-12 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:p-8"
        >
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 sm:text-3xl">Our Comprehensive Consultancy Services</h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Security System Design",
                description: "Custom security solutions tailored to your facility's specific requirements and threat assessment.",
                features: ["Risk Assessment", "System Integration", "Scalability Planning"],
              },
              {
                title: "Access Control Consulting",
                description: "Expert guidance on implementing effective access control systems for various environments.",
                features: ["Biometric Systems", "Card-based Access", "Mobile Integration"]
              },
              {
                title: "Parking Management Solutions",
                description: "Complete parking system consultancy from design to implementation and maintenance.",
                features: ["ANPR Integration", "Payment Systems", "Traffic Flow Optimization"]
              },
              {
                title: "Perimeter Security",
                description: "Comprehensive perimeter protection strategies using advanced detection and barrier systems.",
                features: ["Bollard Systems", "Barrier Integration", "Surveillance Coordination"]
              },
              {
                title: "Emergency Response Planning",
                description: "Development of emergency protocols and response systems for critical security situations.",
                features: ["Protocol Development", "Training Programs", "System Testing"]
              },
              {
                title: "Compliance & Standards",
                description: "Ensure your security systems meet international standards and regulatory requirements.",
                features: ["ISO Compliance", "Industry Standards", "Certification Support"]
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInScale}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="p-6 bg-white rounded-lg shadow-md transform-gpu"
              >
                <motion.h3
                  className="mb-3 text-base font-bold text-blue-800 sm:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 + 0.2 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="mb-4 text-xs text-gray-600 sm:text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.2 + 0.3 }}
                >
                  {service.description}
                </motion.p>
                <motion.ul
                  className="space-y-1"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: { staggerChildren: 0.1, delayChildren: idx * 0.2 + 0.4 }
                    }
                  }}
                >
                  {service.features.map((feature, featureIdx) => (
                    <motion.li
                      key={featureIdx}
                      className="flex items-center text-xs text-gray-500 sm:text-sm"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      <motion.span
                        className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Process Steps Section */}
        <motion.section
          variants={itemVariants}
          className="p-6 mt-12 bg-white shadow-xl rounded-xl sm:p-8"
        >
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 sm:text-3xl">Our Consultancy Process</h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Initial Assessment",
                description: "We conduct a thorough analysis of your current security infrastructure and identify areas for improvement."
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Based on our assessment, we develop a comprehensive security strategy tailored to your specific needs."
              },
              {
                step: "03",
                title: "Implementation Planning",
                description: "We create detailed implementation plans with timelines, budgets, and resource requirements."
              },
              {
                step: "04",
                title: "Ongoing Support",
                description: "We provide continuous support and maintenance to ensure your security systems remain effective."
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                variants={fadeInScale}
                whileHover={{ scale: 1.05 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div
                  className="relative flex items-center justify-center w-16 h-16 mx-auto mb-4 overflow-hidden text-xl font-bold text-white rounded-full bg-gradient-to-r from-blue-600 to-blue-700"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 25px rgba(37, 99, 235, 0.5)"
                  }}
                >
                  <span className="relative z-10">{step.step}</span>
                </motion.div>
                <motion.h3
                  className="mb-2 text-base font-bold text-gray-800 sm:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  className="text-xs text-gray-600 sm:text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Industry Expertise Section */}
        <motion.section
          variants={itemVariants}
          className="p-6 mt-12 shadow-xl bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:p-8"
        >
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 sm:text-3xl">Industry Expertise</h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-bold text-gray-800 sm:text-xl">Commercial & Retail</h3>
              <ul className="space-y-2 text-sm text-gray-600 sm:text-base">
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-3 bg-blue-500 rounded-full"></span>
                  Shopping Centers & Malls
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-3 bg-blue-500 rounded-full"></span>
                  Office Buildings
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-3 bg-blue-500 rounded-full"></span>
                  Hotels & Hospitality
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-3 bg-blue-500 rounded-full"></span>
                  Educational Institutions
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-gray-800 sm:text-xl">Industrial & Government</h3>
              <ul className="space-y-2 text-sm text-gray-600 sm:text-base">
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-3 bg-blue-500 rounded-full"></span>
                  Manufacturing Facilities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-3 bg-blue-500 rounded-full"></span>
                  Government Buildings
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-3 bg-blue-500 rounded-full"></span>
                  Data Centers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 mr-3 bg-blue-500 rounded-full"></span>
                  Transportation Hubs
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Contact Information Section */}
        <motion.section
          variants={itemVariants}
          className="p-6 mt-12 text-white shadow-xl bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl sm:p-8"
        >
          <h2 className="mb-6 text-2xl font-bold text-center sm:text-3xl">Get Expert Consultation</h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-white/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-base font-bold sm:text-lg">Call Us</h3>
              <p className="text-sm opacity-90 sm:text-base">+91 99993 39265</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-white/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-base font-bold sm:text-lg">Email Us</h3>
              <p className="text-sm opacity-90 sm:text-base">business@synergy-access.com</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-white/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-base font-bold sm:text-lg">Visit Us</h3>
              <p className="text-sm opacity-90 sm:text-base">Delhi, India</p>
            </div>
          </div>
        </motion.section>
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
      </motion.div>
    </div>
  );
};

export default Consultancy;