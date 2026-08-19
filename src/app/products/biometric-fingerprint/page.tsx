'use client';

import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

// Assets
const biometricImage = '/new-assets/Biometric – Fingerprint.png';
const bannerImage = '/assets/Biometric – Fingerprint.jpg';

// Product Links
const productLinks = [
  { name: 'Boom Barrier', path: '/products/boom-barrier' },
  { name: 'Bollards', path: '/products/bollards' },
  { name: 'Tripod Turnstile', path: '/products/tripod-turnstile' },
  { name: 'Biometric – Fingerprint Management System', path: '/products/biometric-fingerprint' },
  { name: 'Visitor Management System', path: '/products/visitor-management' },
  { name: 'Other Solutions', path: '/products/solutions' },
];

// Contact Info
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

export default function BiometricFingerprint() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-full h-full relative overflow-hidden">
      <Head>
        <title>Biometric Fingerprint System | Access Control | Synergy Access Pvt. Ltd.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Advanced Biometric Fingerprint System for secure access control. High-accuracy fingerprint recognition with fast authentication and user management." />
        <meta name="keywords" content="biometric fingerprint, access control, fingerprint recognition, security system, Synergy Access" />
      </Head>

      {/* Hero Banner */}
     <div className="relative w-full h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
             <Image
               src={bannerImage}
               alt="About Synergy Access Banner"
               fill
               priority
               className="object-cover object-center"
               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
             />             
           </div>

      {/* Main Content */}
      <div className="container px-4 py-12 mx-auto sm:px-6 lg:py-16">
        <motion.div className="grid gap-8 lg:grid-cols-3">
          {/* Left Sidebar */}
          <motion.div className="space-y-6">
            {/* Products Card */}
            <Card icon="🛡️" title="OUR PRODUCTS & SOLUTIONS" hoverEffect>
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

            {/* Brochure */}
            <Card icon="📄" title="BROCHURES" hoverEffect>
              <a
                href="#"
                className="block px-4 py-2 text-sm font-semibold text-blue-800 transition rounded hover:bg-blue-100"
              >
                Biometric System Brochure.pdf
              </a>
            </Card>

            {/* Contact Info */}
            <Card icon="📞" title="CONTACT US" hoverEffect>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <ContactItem
                    key={item.key}
                    icon={item.icon}
                    title={item.title}
                    content={item.content}
                  />
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Right Content */}
          <motion.div className="lg:col-span-2">
            {/* Featured Image */}
            <FeaturedImage
              src={biometricImage}
              alt="Biometric – Fingerprint"
              title="Biometric – Fingerprint"
              subtitle="High-accuracy fingerprint recognition for secure access control"
            />

            {/* Tabs */}
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
                {activeTab === "description" && (
                  <TabContent>
                    <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                      Biometric – Fingerprint
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-600">
                      A <span className="font-bold text-blue-900">Biometric – Fingerprint</span> is a technology-driven solution designed for high-accuracy identification and secure access control. With real-time authentication and fast matching, it ensures that only authorized personnel can gain access, making it ideal for high-security environments like data centers, government buildings, and corporate offices.
                    </p>
                  </TabContent>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

type CardProps = {
  icon: ReactNode;
  title: ReactNode;
  children: ReactNode;
  hoverEffect?: boolean;
};

function Card({ icon, title, children, hoverEffect = false }: CardProps) {
  return (
    <motion.div
      className="p-6 transition-all duration-300 shadow-xl rounded-2xl bg-gradient-to-br from-blue-50 to-white hover:shadow-2xl"
      whileHover={hoverEffect ? { y: -5 } : {}}
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

type ContactItemProps = {
  icon: string;
  title: string;
  content: string;
};

function ContactItem({ icon, title, content }: ContactItemProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 transition-all rounded-lg bg-white/80 hover:bg-blue-100">
      <span className="p-2 text-blue-600 bg-blue-100 rounded-full">{icon}</span>
      <div>
        <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
          {title}
        </div>
        <div className="text-sm font-bold text-blue-900 whitespace-pre-line">
          {content}
        </div>
      </div>
    </div>
  );
}

type FeaturedImageProps = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
};

function FeaturedImage({ src, alt, title, subtitle }: FeaturedImageProps) {
  return (
    <motion.div
      className="relative mb-8 overflow-hidden shadow-xl rounded-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      whileHover={{ scale: 1.01 }}
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={500}
        className="object-cover w-full h-full max-h-96"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="mt-2 text-blue-100">{subtitle}</p>
      </div>
    </motion.div>
  );
}

type TabButtonProps = {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
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

function TabContent({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {children}
    </motion.div>
  );
}
