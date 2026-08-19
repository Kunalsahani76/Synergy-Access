"use client";
import { useState, useEffect } from 'react';
import { Shield, Wrench, Trophy, CheckCircle, Users, Award, TrendingUp } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import Testimonials from './testimonials';
import MagicSlider from './slider';
import Carousel from './evcharger/carousel/page';

// Image paths (place these images in public/images directory)
const images = {
  boom1: '/new-assets/1.jpg',
  boom2: '/new-assets/2.jpg',
  per: '/new-assets/8.jpg',
  boom: '/new-assets/3.jpg',
  Pedest: '/new-assets/16.jpg',
  park: '/new-assets/22.jpg',
  Metal: '/new-assets/15.jpg',
  Access: '/new-assets/24.jpg',
  Best: '/new-assets/30.jpg',
  boom3: '/new-assets/4.jpg',
  bollard: '/new-assets/9.jpg',
  banner: '/new-assets/1.jpg',
  banner2: '/new-assets/2.jpg',
  banner3: '/new-assets/3.jpg'
};

const products = [
  {
    category: 'PARKING SYSTEM',
    title: 'A Modern Urban Approach',
    description: 'Complete parking management solution with RFID integration and real-time monitoring capabilities.',
    number: '04',
    image: images.Best,
    features: ['RFID Integration', 'Real-time Monitoring', 'Payment Gateway', 'Mobile App Control'],
  },
  {
    category: 'BARRIER',
    title: 'Best in the Industry',
    description: 'World-class boom barriers extending up to 7 meters with advanced control systems.',
    number: '01',
    image: '/new-assets/BARRIER.png',
    features: ['7m Extension', 'Weather Resistant', 'LED Lighting', 'Remote Control'],
  },
  {
    category: 'BOLLARD',
    title: 'Robust & Sturdy',
    description: 'Heavy-duty automatic bollards for vehicle access control with hydraulic operation.',
    number: '02',
    image: images.bollard,
    features: ['Hydraulic Operation', 'Crash Rated', 'Stainless Steel', 'Emergency Override'],
  },
];

const productCategories = [
  {
    icon: Shield,
    category: 'MONITOR',
    title: 'Perimeter Protection',
    description: 'Advanced monitoring systems for complete perimeter security with 24/7 surveillance capabilities.',
    image: images.per,
  },
  {
    icon: Trophy,
    category: 'ACCESS',
    title: 'Automatic Boom Barrier',
    description: 'Professional grade boom barriers for commercial applications with advanced control systems.',
    image: images.boom,
  },
  {
    icon: Wrench,
    category: 'IMPROVE',
    title: 'Pedestrian Access Management',
    description: 'Smart turnstiles and access control for pedestrian areas with biometric integration.',
    image: images.Pedest,
  },
  {
    icon: Shield,
    category: 'RECORD',
    title: 'Parking Management Systems',
    description: 'Comprehensive parking solutions with real-time monitoring and payment integration.',
    image: images.park,
  },
  {
    icon: Trophy,
    category: 'SCANNING',
    title: 'Metal Detectors',
    description: 'High-sensitivity metal detection systems for security checkpoints and access control.',
    image: images.Metal,
  },
  {
    icon: Wrench,
    category: 'SEAMLESS',
    title: 'Access Control System',
    description: 'Integrated access control with biometric authentication and real-time monitoring.',
    image: images.Access,
  },
];

const stats = [
  { label: 'Years of Experience', value: '6+', icon: TrendingUp },
  { label: 'Projects Completed', value: '200+', icon: CheckCircle },
  { label: 'Happy Clients', value: '150+', icon: Users },
  { label: 'Products Installed', value: '500+', icon: Award },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring",
      duration: 0.8, 
      ease: "easeOut" 
    } 
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      type: "spring",
      duration: 0.8, 
      ease: "easeOut" 
    } 
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      type: "spring",
      duration: 0.8, 
      ease: "easeOut" 
    } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      type: "spring"
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      type: "spring",
      duration: 0.6, 
      ease: "easeOut" 
    } 
  },
};

export default function Home() {
  const [statCounts, setStatCounts] = useState<string[]>(stats.map(() => ''));

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];
    stats.forEach((stat, idx) => {
      const target = parseInt(stat.value.replace(/\D/g, '')) || 0;
      const suffix = stat.value.replace(/[0-9+]/g, '');
      let count = 0;
      intervals[idx] = setInterval(() => {
        count += Math.ceil(target / 40);
        if (count >= target) {
          count = target;
          clearInterval(intervals[idx]);
        }
        setStatCounts((prev) => {
          const updated = [...prev];
          updated[idx] = count + suffix;
          return updated;
        });
      }, 30 + idx * 20);
    });
    return () => intervals.forEach(clearInterval);
  }, []);

  // Structured data for homepage products
  const homepageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Synergy Access Product Categories',
    description: 'Complete range of entrance automation and security solutions',
    numberOfItems: productCategories.length,
    itemListElement: productCategories.map((category, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: category.title,
        description: category.description,
        category: category.category,
        brand: {
          '@type': 'Brand',
          name: 'Synergy Access'
        },
        manufacturer: {
          '@type': 'Organization',
          name: 'Synergy Access Pvt. Ltd'
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
        }
      }
    }))
  };

  return (
    <div className="w-full">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageStructuredData, null, 2)
        }}
      />
      
      <Head>
        <title>Entrance Automation, Boom Barriers, Bollards, Turnstiles</title>
        <meta name="description" content="Synergy Access is a leading manufacturer and service provider of boom barriers, bollards, turnstiles, parking management, and access control systems for commercial and industrial applications." />
        <meta name="keywords" content="boom barrier, bollard, turnstile, access control, parking management, security systems, automation, entrance automation, ANPR, RFID, biometric access, Synergy Access, Delhi, Noida, Mumbai, 
        gate automation system, automatic gate system india, electric gate automation, sliding gate automation, automatic gate opener, faac gate automation india, 
        boom barrier price in india, automatic boom barrier, faac boom barrier distributor, parking boom barrier, automatic barrier gate, 
        vehicle access control system, road blocker system, hydraulic road blocker india, tyre killer system, automatic tyre killer, 
        bollards for vehicle control, retractable bollards manufacturer, 
        parking automation system, parking management solution, rfid parking system, automatic parking gate, smart parking india, access control for parking lots, 
        baggage scanner for mall, x ray baggage scanner india, 
        dfmd door frame metal detector, hhmd hand held metal detector, 
        pedestrian access gates, uvss under vehicle surveillance system, 
        access control system india, biometric access control, face recognition access system, rfid access control system, time attendance access control, faac access control india, biometric access control system, 
        face recognition attendance system, rfid based access control, visitor management system software, qr based access control system, vms with mobile application, fingerprint attendance machine, access control solutions india, 
        siren alarm system for buildings, security access management system" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section - Responsive */}
      <section className="relative">
        <MagicSlider />
      </section>
      
      {/* Stats Section */}
      <motion.section
        className="relative py-8 sm:py-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        style={{ marginTop: '-2rem' }} // Pull stats section up for mobile
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 bg-red-500 rounded-full filter blur-[80px] sm:blur-[100px] opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 sm:w-64 sm:h-64 bg-blue-500 rounded-full filter blur-[80px] sm:blur-[100px] opacity-10 animate-pulse"></div>
        </div>
        <div className="container relative z-10 px-2 sm:px-4 mx-auto">
          <motion.div 
            className="mb-6 text-center sm:mb-16"
            variants={fadeInUp}
          >
            <h2 className="mb-2 text-xl sm:text-2xl text-black md:text-3xl font-extrabold">Our Journey in Numbers</h2>
            <div className="w-12 h-1 mx-auto mb-3 rounded bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-600">
              Milestones that reflect our commitment to excellence
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="relative p-4 sm:p-6 text-center transition-all border border-gray-100 shadow-xl bg-white/90 rounded-xl sm:rounded-2xl group hover:shadow-2xl animate-fade-in-up"
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.04 }}
              >
                <div className="flex items-center justify-center mx-auto mb-2 sm:mb-3 rounded-full shadow w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-red-100 to-blue-100 animate-float">
                  <stat.icon className="text-red-500 w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <motion.div 
                  className="mb-1 text-xl sm:text-3xl font-extrabold text-gray-800 sm:mb-2 animate-fade-in-up"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {(statCounts[index] || stat.value) + "+"}
                </motion.div>
                <div className="relative inline-block">
                  <div className="text-xs font-medium text-gray-600 sm:text-sm">{stat.label}</div>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 bg-gradient-to-r from-red-500/30 to-blue-500/30 group-hover:from-red-500 group-hover:to-blue-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Company Overview */}
      <motion.section 
        className="relative py-8 sm:py-12 md:py-20 overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -top-16 -left-16 w-[220px] h-[120px] sm:w-[420px] sm:h-[320px] bg-gradient-to-br from-blue-200 via-white to-purple-100 rounded-3xl blur-2xl opacity-70 rotate-[-8deg]"></div>
          <div className="absolute top-10 right-0 w-[180px] h-[110px] sm:w-[340px] sm:h-[220px] bg-gradient-to-br from-purple-100 via-white to-blue-200 rounded-3xl blur-2xl opacity-60 rotate-12"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[90px] sm:w-[600px] sm:h-[180px] bg-gradient-to-r from-blue-100 via-white to-purple-100 rounded-3xl blur-2xl opacity-50"></div>
        </div>
        <div className="container relative z-10 px-2 sm:px-4 mx-auto">
          <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-2">
            <motion.div className="relative" variants={fadeInLeft}>
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <motion.div
                  className="relative transition-shadow duration-300 bg-white border-2 border-white shadow-lg rounded-xl hover:shadow-xl sm:border-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  style={{ aspectRatio: '1/1' }}
                >
                  <Image
                    src={images.boom1}
                    alt="Security equipment"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  className="relative mt-3 sm:mt-6 transition-shadow duration-300 bg-white border-2 border-white shadow-lg rounded-xl hover:shadow-xl sm:border-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  style={{ aspectRatio: '1/1' }}
                >
                  <Image
                    src={images.boom2}
                    alt="Access control"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <motion.div 
                className="absolute flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 text-white border-2 border-white rounded-full shadow-xl bg-gradient-to-br from-blue-600 to-red-400 -top-4 -right-4 sm:-top-6 sm:-right-6 ring-4 ring-red-200/30 sm:ring-4 animate-float"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-xl sm:text-3xl font-extrabold drop-shadow">6+</div>
                  <div className="text-xs font-semibold tracking-wider uppercase sm:text-sm">Years</div>
                  <div className="text-xs font-semibold tracking-wider uppercase sm:text-sm">Experience</div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div 
              variants={fadeInRight} 
              className="mt-6 sm:mt-0"
            >
              <div className="p-4 sm:p-8 bg-white border border-gray-200 shadow-lg rounded-xl">
                <motion.h2 
                  className="mb-3 sm:mb-4 text-lg sm:text-2xl font-bold text-gray-900"
                  variants={fadeInUp}
                >
                  Synergy Access Has A Solution To Match Every Need And Purpose
                </motion.h2>
                <div className="w-12 h-1 mb-4 sm:w-20 sm:h-1 sm:mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div className="space-y-2 sm:space-y-4 text-gray-700 text-xs sm:text-base">
                  <motion.p variants={fadeInUp} className="leading-relaxed">
                    Founded on 28th December 2019, Synergy Electrical and Automation (Widely known as Synergy -Access) was born out of a clear vision to transform the entrance automation landscape in India. We saw a critical need for secure, efficient, and reliable access control systems across commercial, residential, and industrial spaces and we stepped in to bridge that gap.
                  </motion.p>
                  <motion.p variants={fadeInUp} className="leading-relaxed">
                    What began as a passionate team of engineers and security specialists has now grown into a trusted name in the industry. As a proud manufacturer and solution provider, our growth is driven by an unwavering commitment to quality, innovation, and customer-first thinking.
                  </motion.p>
                  <motion.p variants={fadeInUp} className="leading-relaxed">
                    Today, we are honoured to serve over 150 satisfied clients nationwide from gated communities to large-scale industrial hubs. Our systems are trusted by security professionals and facility managers who count on us for performance they can rely on, every time.
                  </motion.p>
                  <motion.p variants={fadeInUp} className="font-medium leading-relaxed text-gray-900">
                    At Synergy Access, we&apos;re not just building products, we&apos;re creating safer, smarter ways to move through life.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Products Overview */}
      <motion.section 
        className="py-8 sm:py-12 md:py-20 bg-gradient-to-r from-white via-gray-50 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        id="products"
      >
        <div className="container px-2 sm:px-4 mx-auto">
          <motion.div className="mb-6 text-center sm:mb-12" variants={fadeInUp}>
            <motion.div 
              className="inline-block px-3 py-1 mb-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white rounded-full shadow bg-gradient-to-r from-blue-600 to-red-400 animate-fade-in-up"
              whileHover={{ scale: 1.05 }}
            >
              OUR PRODUCTS & SERVICES
            </motion.div>
            <h2 className="mb-2 text-lg sm:text-2xl md:text-3xl font-extrabold text-gray-800 animate-fade-in-up">
              High quality products and services that we stand behind
            </h2>
            <div className="w-8 h-0.5 mx-auto mt-2 mb-3 sm:w-16 sm:h-1 sm:mb-6 rounded bg-gradient-to-r from-red-500 to-red-700"></div>
          </motion.div>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <motion.div 
                key={product.number} 
                className="overflow-hidden transition-all duration-300 border border-gray-100 shadow-xl bg-white/90 rounded-xl sm:rounded-2xl product-card group hover:shadow-2xl animate-fade-in-up"
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.04 }}
              >
                <div className="relative overflow-hidden h-32 sm:h-44 md:h-56">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute text-white bottom-2 left-2 sm:bottom-4 sm:left-4">
                    <div className="text-xs sm:text-sm font-semibold text-red-400">{product.category}</div>
                    <h3 className="text-xs sm:text-base md:text-lg font-bold">{product.title}</h3>
                  </div>
                </div>
                <div className="p-3 sm:p-6">
                  <p className="mb-2 sm:mb-3 text-xs sm:text-sm text-gray-600">{product.description}</p>
                  <div className="mb-2 sm:mb-4">
                    <h4 className="mb-1 text-xs sm:text-sm font-semibold text-gray-700">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-600">
                          <CheckCircle className="flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl sm:text-4xl font-bold text-gray-200 opacity-50">{product.number}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <Carousel />

      {/* Product Categories */}
      <motion.section 
        className="py-8 sm:py-12 md:py-20 text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container px-2 sm:px-4 mx-auto">
          <motion.div className="mb-6 text-center sm:mb-12" variants={fadeInUp}>
            <h2 className="mb-2 text-lg sm:text-2xl md:text-3xl font-extrabold">Products & Solutions</h2>
            <p className="max-w-2xl sm:max-w-3xl mx-auto text-xs sm:text-sm md:text-base text-gray-300">
              With an excellent idea of the latest advancements in the field of automation industry, Synergy Access offers a wide variety of reliable automation solutions across all fields.
            </p>
            <div className="w-8 h-0.5 mx-auto mt-2 mb-3 sm:w-16 sm:h-1 sm:mb-6 rounded bg-gradient-to-r from-red-500 to-blue-500"></div>
          </motion.div>
          <div className="grid gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((item, index) => (
              <motion.div 
                key={index} 
                className="overflow-hidden transition-all duration-300 shadow-xl cursor-pointer bg-gray-900/90 rounded-xl sm:rounded-2xl hover:bg-gray-800 group hover:shadow-2xl animate-fade-in-up"
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <div className="relative h-28 sm:h-40 md:h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                <div className="p-3 sm:p-6">
                  <div className="flex items-center mb-1 sm:mb-4">
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-red-400">{item.category}</div>
                      <h3 className="text-xs sm:text-lg md:text-xl font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Testimonials />

      {/* Responsive global styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        @media (max-width: 640px) {
          .container {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
