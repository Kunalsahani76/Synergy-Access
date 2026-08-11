'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Building2, 
  KeyRound, 
  Users
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";

const parking = '/assets/QRBased.jpg';
const banner = '/assets/QRBasedSolutions.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const productLinks = [
  { name: 'Boom Barrier', path: '/products/boom-barrier' },
  { name: 'Bollards', path: '/products/bollards' },
  { name: 'Tripod Turnstile', path: '/products/tripod-turnstile' },
  { name: 'Parking Guidance System', path: '/products/parking-guidance' },
  { name: 'Visitor Management System', path: '/products/visitor-management' },
  { name: 'Other Solutions', path: '/products/solutions' },
];

const contactInfo = [
  {
    icon: '📞',
    title: 'Call Us',
    content: '+91 99993 39265',
    key: 'phone'
  },
  {
    icon: '✉️',
    title: 'Email',
    content: 'business@synergy-access.com',
    key: 'email'
  },
  {
    icon: '📍',
    title: 'Location',
    content: 'B6, 3rd floor, Sector-2\nNoida, 201301',
    key: 'location'
  }
];

export default function QRBasedSolutions() {
  const [activeTab, setActiveTab] = useState("description");

  // Structured data for QR Solutions product
  const qrSolutionsStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'QR Code Access Control Solutions',
    description: 'Modern QR code-based access control systems for contactless, mobile-friendly entry and visitor management',
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
      price: '25000',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '25000',
        priceCurrency: 'INR',
        valueAddedTaxIncluded: true
      },
      seller: {
        '@type': 'Organization',
        name: 'Synergy Access Pvt. Ltd',
        url: 'https://www.synergy-access.com'
      }
    },
    url: 'https://www.synergy-access.com/products/qr-solutions'
  };

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(qrSolutionsStructuredData, null, 2)
        }}
      />
      <Head>
        <title>QR Based Solutions | Synergy Access Pvt. Ltd.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta 
          name="description" 
          content="QR Based Solutions for digital access control, parking, and visitor management. Real-time monitoring, dynamic pricing, and advanced analytics." 
        />
      </Head>

      {/* Hero Banner */}
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

      {/* Main Content */}
      <div className="container px-4 py-12 mx-auto sm:px-6 lg:py-16">
        <motion.div 
          className="grid gap-8 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Left Sidebar */}
          <motion.div className="space-y-6" variants={itemAnimation}>
            {/* Products Card */}
            <Card 
              icon={<ShieldCheck className="w-5 h-5" />}
              title="OUR PRODUCTS & SOLUTIONS"
              hoverEffect
            >
              <ul className="space-y-3">
                {productLinks.map((prod) => (
                  <motion.li 
                    key={prod.name} 
                    whileHover={{ x: 5 }} 
                    whileTap={{ scale: 0.98 }} 
                    className="overflow-hidden rounded-lg"
                  >
                    <a 
                      href={prod.path} 
                      className="block px-4 py-3 text-sm font-semibold text-blue-900 transition-all rounded-lg bg-white/80 hover:bg-blue-100"
                    >
                      {prod.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </Card>

            {/* Brochures Card */}
            <Card 
              icon={<Building2 className="w-5 h-5" />}
              title="BROCHURES"
              hoverEffect
            >
              <div className="flex items-center gap-3 px-4 py-3 transition-all rounded-lg bg-white/80 hover:bg-blue-100">
                <KeyRound className="w-4 h-4 text-blue-600" />
                <a href="#" className="text-sm font-semibold text-blue-900 hover:underline">
                  QR Based Solutions.pdf
                </a>
              </div>
            </Card>

            {/* Contact Card */}
            <Card 
              icon={<Users className="w-5 h-5" />}
              title="CONTACT US"
              hoverEffect
            >
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div 
                    key={item.key}
                    className="flex items-center gap-3 px-4 py-3 transition-all rounded-lg bg-white/80 hover:bg-blue-100"
                  >
                    <span className="p-2 text-blue-600 bg-blue-100 rounded-full">{item.icon}</span>
                    <div>
                      <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
                        {item.title}
                      </div>
                      <div className="text-sm font-bold text-blue-900 whitespace-pre-line">
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Right Content */}
          <motion.div className="lg:col-span-2" variants={itemAnimation}>
            {/* Featured Image */}
            <motion.div 
              className="relative mb-8 overflow-hidden shadow-xl rounded-2xl" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.4, duration: 0.6 }} 
              whileHover={{ scale: 1.01 }}
            >
              <Image 
                src={parking}
                alt="QR Based Solutions" 
                className="object-cover w-full h-full max-h-96" 
                width={1600}
                height={640}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl font-bold sm:text-3xl">QR Based Solutions</h2>
                <p className="mt-2 text-blue-100">Digital access and parking control with QR codes</p>
              </div>
            </motion.div>

            {/* Tab Content */}
            <div className="overflow-hidden shadow-xl rounded-2xl">
              <div className="flex border-b border-gray-200">
                <TabButton 
                  active={activeTab === "description"}
                  onClick={() => setActiveTab("description")}
                >
                  Description
                </TabButton>
              </div>
              
              <div className="p-6 bg-white">
                <AnimatePresence mode="wait">
                  {activeTab === "description" && (
                    <motion.div 
                      initial="hidden" 
                      animate="visible" 
                      exit="hidden" 
                      variants={fadeIn} 
                      className="space-y-8"
                    >
                      <motion.div variants={itemAnimation}>
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">
                          QR-Based Parking and Access Control
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-600">
                          Our QR-Based Solution offers seamless entry and exit management using scannable codes, 
                          improving security, reducing manual operations, and enhancing user convenience.
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// Reusable Card Component
type CardProps = {
  icon: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
  hoverEffect?: boolean;
};

function Card({ icon, title, children, hoverEffect = false }: CardProps) {
  return (
    <motion.div 
      className="p-6 transition-all duration-300 shadow-xl rounded-2xl bg-gradient-to-br from-blue-50 to-white hover:shadow-2xl" 
      whileHover={hoverEffect ? { y: -5 } : undefined}
    >
      <h2 className="flex items-center gap-3 mb-5 text-xl font-bold text-blue-900">
        <span className="p-2 text-white bg-blue-600 rounded-full">
          {icon}
        </span>
        {title}
      </h2>
      {children}
    </motion.div>
  );
}

// Reusable Tab Button Component
type TabButtonProps = {
  active: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

function TabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <button 
      onClick={onClick} 
      className={`px-6 py-3 text-sm font-medium transition-colors duration-300 ${
        active 
          ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50" 
          : "text-gray-500 hover:text-gray-700"
      }`}
    >
      {children}
    </button>
  );
}
