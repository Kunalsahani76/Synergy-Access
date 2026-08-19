"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Award, CheckCircle, TrendingUp, Trophy, Puzzle, Timer, Settings, MapPin } from 'lucide-react';

import InternalLinks from '../../components/SEO/InternalLinks';

import Image from 'next/image';
const banner = '/new-assets/about-hero.png';
const barrier1 = '/new-assets/1.jpg';
const barrier2 = '/new-assets/2.jpg';
const solutionIcon = '/assets/icons/iso.png';
const solution1 = '/assets/icons/msme.png';
const solution2 = '/assets/icons/ce.png';
import GeometricNetworkBackground from '../../components/Common/GeometricNetworkBackground';

const About: React.FC = () => {
  const bubbleContainerRef = useRef(null);
  const stats = [
    { label: 'Years of Experience', value: '6+', icon: TrendingUp },
    { label: 'Projects Completed', value: '200+', icon: CheckCircle },
    { label: 'Happy Clients', value: '150+', icon: Users },
    { label: 'Products Installed', value: '500+', icon: Award }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize security in every solution we provide, ensuring maximum protection for your premises.'
    },
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Our products are engineered with precision to deliver consistent performance and reliability.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'We put our customers at the center of everything we do, providing exceptional service and support.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous testing to ensure it meets our high standards of quality.'
    }
  ];


  // Floating bubbles effect - reduced for mobile performance
  useEffect(() => {
    const container = bubbleContainerRef.current;
    if (!container) return;

    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      const size = Math.random() * 15 + 8; // Smaller bubbles for mobile
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 12 + 8; // Faster animation
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${left}%`;
      bubble.style.bottom = '-20px';
      bubble.style.animationDuration = `${animationDuration}s`;
      (container as HTMLElement).appendChild(bubble);
      setTimeout(() => bubble.remove(), animationDuration * 1000);
    };

    // Fewer bubbles on mobile for better performance
    const isMobile = window.innerWidth < 768;
    const bubbleCount = isMobile ? 4 : 8;
    const interval = isMobile ? 4000 : 3000;

    for (let i = 0; i < bubbleCount; i++) createBubble();
    const intervalId = setInterval(createBubble, interval);
    return () => clearInterval(intervalId);
  }, []);

  // Animation variants - optimized for mobile
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  const fadeLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  //   // Generate SEO data with structured data
  //   const seoData = generateSEOData({
  //     title: 'About Synergy Access - Company Profile & Vision',
  //     description: 'Learn about Synergy Access - leading manufacturer of entrance automation and intelligent access control solutions. Discover our mission, values, and commitment to security since 2019.',
  //     keywords: 'Synergy Access, entrance automation, access control, security solutions, boom barriers, turnstiles, company profile, mission, vision, values, Delhi, Noida',
  //     structuredData: generateStructuredData('Organization', {})
  //   });

  // Multiple structured data objects for better Google validation
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Synergy Access Pvt. Ltd',
    description: 'Leading manufacturer of entrance automation systems including boom barriers, bollards, turnstiles, and access control solutions.',
    url: 'https://www.synergy-access.com',
    foundingDate: '2019',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Delhi NCR',
      addressLocality: 'Noida'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91 99993 39265',
      contactType: 'customer service',
      areaServed: 'IN'
    }
  };

  const turnstileProductData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Turnstiles',
    description: 'Bi-directional tripod turnstile for pedestrian access control and security management',
    category: 'Access Control Systems',
    brand: {
      '@type': 'Brand',
      name: 'Synergy Access'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Synergy Access Pvt. Ltd',
      url: 'https://www.synergy-access.com'
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '50000',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '50000',
        priceCurrency: 'INR',
        valueAddedTaxIncluded: true
      },
      seller: {
        '@type': 'Organization',
        name: 'Synergy Access Pvt. Ltd',
        url: 'https://www.synergy-access.com'
      }
    },
    url: 'https://www.synergy-access.com/products/tripod-turnstile'
  };

  const boomBarrierProductData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Boom Barriers',
    description: 'Heavy-duty automatic boom barriers with 7m extension capability for vehicle access control',
    category: 'Access Control Systems',
    brand: {
      '@type': 'Brand',
      name: 'Synergy Access'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Synergy Access Pvt. Ltd',
      url: 'https://www.synergy-access.com'
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '75000',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '75000',
        priceCurrency: 'INR',
        valueAddedTaxIncluded: true
      },
      seller: {
        '@type': 'Organization',
        name: 'Synergy Access Pvt. Ltd',
        url: 'https://www.synergy-access.com'
      }
    },
    url: 'https://www.synergy-access.com/products/boomBarrier'
  };

  const bollardsProductData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Bollards',
    description: 'Robust hydraulic bollards for vehicle access control and perimeter security',
    category: 'Perimeter Security Systems',
    brand: {
      '@type': 'Brand',
      name: 'Synergy Access'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Synergy Access Pvt. Ltd',
      url: 'https://www.synergy-access.com'
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '120000',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '120000',
        priceCurrency: 'INR',
        valueAddedTaxIncluded: true
      },
      seller: {
        '@type': 'Organization',
        name: 'Synergy Access Pvt. Ltd',
        url: 'https://www.synergy-access.com'
      }
    },
    url: 'https://www.synergy-access.com/products/bollards'
  };

  return (
    <motion.div className="w-full h-full relative overflow-hidden">
      {/* Multiple Structured Data Scripts for Better Validation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData, null, 2)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(turnstileProductData, null, 2)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(boomBarrierProductData, null, 2)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bollardsProductData, null, 2)
        }}
      />
      {/* Responsive Top Banner Image */}
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


      {/* Breadcrumb Section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container px-4 mx-auto py-3 sm:py-4">
          <nav className="flex items-center justify-center sm:justify-start" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-violet-600 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mx-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-violet-600">About</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>



      {/* Company Introduction Section - Professionally Optimized */}
      <motion.section
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        {/* Subtle Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-violet-100/50 to-blue-100/50 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-100/50 to-pink-100/50 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 20, 0],
              scale: [1.1, 1, 1.1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container px-4 mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Gallery - Enhanced */}
            <motion.div className="relative" variants={fadeLeft}>
              <div className="relative h-64 sm:h-80 md:h-96">
                {/* Main Image */}
                <motion.div
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={barrier1}
                    alt="Professional access control systems in operation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>

                {/* Overlay Image */}
                <motion.div
                  className="absolute bottom-4 right-4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-xl overflow-hidden shadow-xl border-4 border-white"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={barrier2}
                    alt="Advanced boom barrier technology"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Content - Enhanced */}
            <motion.div className="space-y-6" variants={fadeRight}>
              <div>
                <motion.h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Where Safety Meets Innovation,{' '}
                  <span className="text-violet-600">Spaces Connect with Confidence</span>
                </motion.h2>

                <motion.div
                  className="space-y-4 text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p className="text-base sm:text-lg">
                    At Synergy Access, we don&apos;t just open doors—we reimagine how spaces welcome, protect, and perform.
                    Whether it&apos;s a bustling industrial site, a modern residence, or a high-security facility, our smart
                    access solutions adapt like second nature.
                  </p>

                  <p className="text-base sm:text-lg">
                    From AI-enabled gate controls to intuitive pedestrian flow systems and frictionless parking experiences,
                    everything is built with one core belief: <strong className="text-gray-900">Security should never slow you down.</strong>
                  </p>

                  <p className="text-base sm:text-lg">
                    We blend engineering precision with real-world insight to create access systems that think ahead,
                    act fast, and evolve with your space.
                  </p>

                  <div className="pt-2">
                    <p className="text-lg font-semibold text-violet-600">
                      Synergy Access: where every entry becomes an experience.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section - Mobile Optimized */}
      <motion.section className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-white via-gray-50 to-white" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-3 text-center group sm:p-4"
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full sm:w-16 sm:h-16 sm:mb-4 bg-gradient-to-br from-violet-100 to-red-100 group-hover:scale-110 group-hover:shadow-md"
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', delay: index * 0.2 }}
                >
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-violet-600" />
                </motion.div>
                <motion.div
                  className="mb-1 font-sans text-2xl font-extrabold text-gray-800 sm:mb-2 sm:text-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
                >
                  <CountUpNumber end={parseInt(stat.value)} suffix={stat.value.replace(/[0-9+]/g, '')} />
                </motion.div>
                <div className="font-sans text-xs font-medium leading-tight text-gray-500 sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Steps Section - Mobile Optimized */}
      <motion.section className="relative px-2 py-8 overflow-hidden sm:py-12 md:py-16 bg-gray-50 sm:px-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
        {/* Geometric network/cube background for WHY CHOOSE US */}
        <GeometricNetworkBackground className="absolute inset-y-0 left-4 right-4" />
        <div className="relative z-10">
          <motion.h1
            className="mb-8 font-sans text-2xl font-extrabold text-center text-gray-800 sm:mb-12 sm:text-3xl md:text-4xl"
            variants={fadeUp}
          >

          </motion.h1>
          <motion.div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            {/* Left Column - Why Choose Us */}
            <motion.div variants={fadeLeft} whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 200 }}>
              <h2 className="mb-4 font-sans text-xl font-bold sm:mb-6 sm:text-2xl text-violet-700">WHY CHOOSE US</h2>
              <div className="space-y-6">
                {[
                  { icon: Trophy, text: "Trusted Expertise - With years of hands-on experience in entrance automation, we understand your security needs better than anyone." },
                  { icon: Puzzle, text: "End-to-End Solutions - From design to installation and after-sales service, we provide complete, hassle-free solutions under one roof." },
                  { icon: Shield, text: "Quality You Can Count On - We use only top-grade materials and tested technology to ensure durability, safety, and peak performance." },
                  { icon: Timer, text: "Timely Deliveries, Every Time - Your time matters. We are known for our prompt execution and on-time delivery, no matter the scale of the project." },
                  { icon: Settings, text: "Tailored for Your Needs - Every site is unique. That's why we offer customized solutions that fit your space, usage, and budget perfectly." },
                  { icon: MapPin, text: "Nationwide Support - Backed by a reliable service network across India, we're always within your reach when you need us most." },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-violet-100">
                      <item.icon className="w-4 h-4 text-violet-600" />
                    </div>
                    <p className="font-sans text-sm text-gray-600 sm:text-base">{item.text}</p>
                  </motion.div>
                ))}
              </div>
              {/* Stats - Mobile Optimized */}
              <motion.div className="space-y-4 sm:space-y-6" initial="hidden" animate="visible" variants={fadeUp}>
                <motion.div whileHover={{ scale: 1.04 }} className="transition-transform">
                  <div className="flex justify-between mb-2">
                    <span className="font-sans text-sm font-medium text-gray-700 sm:text-base">R&D</span>
                    <span className="font-sans text-sm font-medium sm:text-base text-violet-600">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
                    <motion.div className="bg-red-500 h-2 sm:h-2.5 rounded-full" style={{ width: '85%' }} initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1.2 }}></motion.div>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} className="transition-transform">
                  <div className="flex justify-between mb-2">
                    <span className="font-sans text-sm font-medium text-gray-700 sm:text-base">Innovation</span>
                    <span className="font-sans text-sm font-medium sm:text-base text-violet-600">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
                    <motion.div className="bg-blue-500 h-2 sm:h-2.5 rounded-full" style={{ width: '79%' }} initial={{ width: 0 }} animate={{ width: '79%' }} transition={{ duration: 1.2, delay: 0.2 }}></motion.div>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} className="transition-transform">
                  <div className="flex justify-between mb-2">
                    <span className="font-sans text-sm font-medium text-gray-700 sm:text-base">Quality</span>
                    <span className="font-sans text-sm font-medium sm:text-base text-violet-600">99%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
                    <motion.div className="bg-green-500 h-2 sm:h-2.5 rounded-full" style={{ width: '95%' }} initial={{ width: 0 }} animate={{ width: '95%' }} transition={{ duration: 1.2, delay: 0.4 }}></motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            {/* Right Column - Quality Assurance */}
            <motion.div
              className="p-6 bg-white border border-gray-100 shadow-lg sm:p-8 rounded-xl"
              variants={fadeRight}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <h2 className="mb-4 font-sans text-xl font-bold sm:mb-6 sm:text-2xl text-violet-700">Quality Assurance</h2>
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="mr-3 font-sans text-3xl font-bold sm:mr-4 sm:text-5xl text-violet-600">since</div>
                <div className="font-sans text-4xl font-bold text-gray-800 sm:text-6xl">2019</div>
              </div>
              <p className="mb-4 font-sans text-sm text-gray-600 sm:mb-6 sm:text-base">
                Our rigorous quality control processes ensure every product meets the highest industry standards before reaching your premises.
              </p>
              <div className="flex flex-wrap gap-2">
                <motion.span whileHover={{ scale: 1.12 }} className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full bg-violet-100 text-violet-700 font-sans transition-transform">ISO Certified</motion.span>
                <motion.span whileHover={{ scale: 1.12 }} className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full bg-violet-100 text-violet-700 font-sans transition-transform">5-Year Warranty</motion.span>
                <motion.span whileHover={{ scale: 1.12 }} className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full bg-violet-100 text-violet-700 font-sans transition-transform">24/7 Support</motion.span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Company Story & Mission/Vision - Mobile Optimized */}
      <section className="py-8 font-sans sm:py-12 md:py-20">
        <div className="container grid gap-6 px-4 mx-auto max-w-7xl sm:gap-8 md:gap-10 lg:grid-cols-2">
          {/* Synergy Access Introduction Card */}
          <motion.div
            className="flex flex-col justify-center p-6 font-sans transition-all border-2 border-blue-100 shadow-xl bg-white/90 rounded-xl sm:rounded-2xl sm:p-8 hover:shadow-2xl hover:border-blue-300"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6, boxShadow: "0 8px 32px 0 rgba(0, 123, 255, 0.15)" }}
          >
            <h2 className="mb-2 font-sans text-xl font-extrabold text-blue-800 sm:text-2xl md:text-3xl drop-shadow">Synergy Access: Securing Tomorrow, Today</h2>
            <p className="mb-3 font-sans text-base font-semibold text-gray-700 sm:mb-4 sm:text-lg">Your Gateway to Smart, Secure & Seamless Entry Solutions</p>
            <p className="mb-3 font-sans text-sm text-gray-600 sm:mb-4 sm:text-base">Established in 2019, Synergy Access has rapidly emerged as a trusted name in entrance automation and intelligent access control. As a leading manufacturer and service provider, we deliver a comprehensive range of cutting-edge solutions including:</p>
            <motion.ul className="grid grid-cols-1 gap-1 mb-3 font-sans text-sm text-gray-700 sm:mb-4 sm:grid-cols-2 sm:gap-2 sm:text-base"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {["Boom Barriers", "Hydraulic Bollards", "Tyre Killers", "Flap Barriers", "Turnstiles (DFMD, HHMD)", "Advanced Parking Systems"].map((item, idx) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-2 font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
                >
                  <span className="text-blue-500">|</span> {item}
                </motion.li>
              ))}
            </motion.ul>
            <p className="mb-3 font-sans text-sm text-gray-600 sm:mb-4 sm:text-base">Driven by innovation and backed by a robust infrastructure, we design and deliver high-performance systems that cater to both commercial and industrial needs. Our products are engineered for efficiency, durability, and security, and always delivered within the promised timeframe.</p>
            <p className="font-sans text-sm font-semibold text-blue-700 sm:text-base">Let&apos;s build a safer, smarter future, together.</p>
          </motion.div>
          {/* Mission/Vision Card */}
          <motion.div
            className="flex flex-col justify-center p-6 font-sans transition-all border-2 border-blue-100 shadow-xl bg-white/90 rounded-xl sm:rounded-2xl sm:p-8 hover:shadow-2xl hover:border-blue-300"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ y: -6, boxShadow: "0 8px 32px 0 rgba(0, 123, 255, 0.15)" }}
          >
            <h2 className="mb-4 font-sans text-2xl font-extrabold text-gray-800 sm:mb-6 sm:text-3xl">Mission & Vision</h2>
            <motion.div className="grid gap-8 sm:gap-12 md:grid-cols-2" initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div className="text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <motion.div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full sm:w-16 sm:h-16 sm:mb-6" whileHover={{ scale: 1.18, rotate: [0, 8, -8, 0] }} transition={{ type: 'spring', stiffness: 200 }}>
                  <Target className="w-6 h-6 text-red-600 sm:w-8 sm:h-8" />
                </motion.div>
                <h3 className="mb-3 font-sans text-xl font-bold text-gray-800 sm:mb-4 sm:text-2xl">Our Mission</h3>
                <p className="font-sans text-sm leading-relaxed text-gray-600 sm:text-base">
                  To provide innovative, reliable, and cost-effective entrance automation solutions
                  that enhance security and operational efficiency for our clients across India.
                </p>
              </motion.div>
              <motion.div className="text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <motion.div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full sm:w-16 sm:h-16 sm:mb-6" whileHover={{ scale: 1.18, rotate: [0, 8, -8, 0] }} transition={{ type: 'spring', stiffness: 200 }}>
                  <Shield className="w-6 h-6 text-blue-600 sm:w-8 sm:h-8" />
                </motion.div>
                <h3 className="mb-3 font-sans text-xl font-bold text-gray-800 sm:mb-4 sm:text-2xl">Our Vision</h3>
                <p className="font-sans text-sm leading-relaxed text-gray-600 sm:text-base">
                  To become the most trusted name in entrance automation systems, setting industry
                  standards for quality, innovation, and customer service excellence.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values - Mobile Optimized */}
      <motion.section className="py-12 sm:py-16 md:py-20 bg-gray-50" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div className="mb-8 text-center sm:mb-12" variants={fadeUp}>
            <h2 className="mb-3 font-sans text-2xl font-extrabold text-gray-800 sm:mb-4 sm:text-3xl">Our Core Values</h2>
            <p className="max-w-2xl px-4 mx-auto font-sans text-sm text-gray-600 sm:text-base">
              These values guide everything we do and shape how we interact with our customers,
              partners, and each other.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="p-4 text-center transition-shadow bg-white rounded-lg shadow-sm sm:p-6 hover:shadow-xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.06, boxShadow: "0 8px 32px 0 rgba(76, 29, 149, 0.10)" }}
              >
                <motion.div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 bg-red-100 rounded-full sm:w-12 sm:h-12 sm:mb-4" whileHover={{ scale: 1.18, rotate: [0, 8, -8, 0] }} transition={{ type: 'spring', stiffness: 200 }}>
                  <value.icon className="w-5 h-5 text-red-600 sm:w-6 sm:h-6" />
                </motion.div>
                <h3 className="mb-2 font-sans text-base font-semibold text-gray-800 sm:text-lg">{value.title}</h3>
                <p className="font-sans text-xs leading-relaxed text-gray-600 sm:text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certifications - Mobile Optimized */}
      <motion.section className="py-12 sm:py-16 md:py-20 bg-gray-50" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div className="mb-8 text-center sm:mb-12" variants={fadeUp}>
            <h2 className="mb-3 font-sans text-2xl font-extrabold text-gray-800 sm:mb-4 sm:text-3xl">Certifications & Quality</h2>
            <p className="max-w-2xl px-4 mx-auto font-sans text-sm text-gray-600 sm:text-base">
              Our commitment to quality is reflected in our certifications and industry standards compliance.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
            <motion.div
              className="p-4 text-center transition-shadow bg-white rounded-lg shadow-sm sm:p-6 hover:shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.08 }}
            >
              <motion.div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-green-100 rounded-full sm:w-16 sm:h-16 sm:mb-4" whileHover={{ scale: 1.18, rotate: [0, 8, -8, 0] }} transition={{ type: 'spring', stiffness: 200 }}>
                <Image src={solutionIcon} alt="ISO 9001:2015" width={32} height={32} />
              </motion.div>
              <h3 className="mb-2 font-sans text-base font-semibold text-gray-800 sm:text-lg">ISO 9001:2015</h3>
              <p className="font-sans text-xs text-gray-600 sm:text-sm">Quality Management System certified</p>
            </motion.div>
            <motion.div
              className="p-4 text-center transition-shadow bg-white rounded-lg shadow-sm sm:p-6 hover:shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ scale: 1.08 }}
            >
              <motion.div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full sm:w-16 sm:h-16 sm:mb-4" whileHover={{ scale: 1.18, rotate: [0, 8, -8, 0] }} transition={{ type: 'spring', stiffness: 200 }}>
                <Image src={solution1} alt="MSME" width={32} height={32} />
              </motion.div>
              <h3 className="mb-2 font-sans text-base font-semibold text-gray-800 sm:text-lg">MSME</h3>
              <p className="font-sans text-xs text-gray-600 sm:text-sm">Micro, Small, and Medium Enterprises</p>
            </motion.div>
            <motion.div
              className="p-4 text-center transition-shadow bg-white rounded-lg shadow-sm sm:p-6 hover:shadow-xl sm:col-span-2 md:col-span-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.08 }}
            >
              <motion.div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-purple-100 rounded-full sm:w-16 sm:h-16 sm:mb-4" whileHover={{ scale: 1.18, rotate: [0, 8, -8, 0] }} transition={{ type: 'spring', stiffness: 200 }}>
                <Image src={solution2} alt="CE" width={32} height={32} />
              </motion.div>
              <h3 className="mb-2 font-sans text-base font-semibold text-gray-800 sm:text-lg">CE</h3>
              <p className="font-sans text-xs text-gray-600 sm:text-sm">European Conformity certification</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Internal Links Section */}
      <section className="py-12 bg-gray-50 sm:py-16">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            <InternalLinks
              category="products"
              title="Our Products"
              maxLinks={4}
              currentPage="/about"
            />
            <InternalLinks
              category="services"
              title="Our Services"
              maxLinks={4}
              currentPage="/about"
            />
          </div>
        </div>
      </section>

      {/* Global Styles for Animations */}
      <style jsx global>
        {`
          .bubble {
            position: absolute;
            background: linear-gradient(135deg, #a78bfa 0%, #f87171 100%);
            opacity: 0.15;
            border-radius: 50%;
            animation: bubbleUp linear forwards;
          }
          
          @keyframes bubbleUp {
            to {
              bottom: 110%;
              opacity: 0;
            }
          }
          
          /* Mobile-specific optimizations */
          @media (max-width: 768px) {
            .bubble {
              opacity: 0.1;
            }
          }
          
          /* Touch-friendly interactions */
          @media (hover: none) and (pointer: coarse) {
            .group:hover {
              transform: none;
            }
          }
          
          /* Smooth scrolling for better UX */
          html {
            scroll-behavior: smooth;
          }
          
          /* Optimize animations for reduced motion preference */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>
    </motion.div>
  );
};

// Animated count up for stats
const CountUpNumber: React.FC<{ end: number, suffix?: string }> = ({ end, suffix }) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const duration = 1200;
    const stepTime = Math.max(Math.floor(duration / end), 20);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [end]);
  return <span>{count}{suffix || ''}+</span>;
};

export default About;
