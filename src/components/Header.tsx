'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Mail, Phone, Facebook, Twitter, Linkedin, Menu, X } from 'lucide-react'
import ProductsDropdown from './Dropdown'
import Image from 'next/image'
import logo from '../../public/assets/logo.png'

const contactInfo = {
  email: "business@synergy-access.com",
  phone: "+91 99993 39265"
}

const socialLinks = [
  {
    icon: <Facebook className="w-4 h-4" />,
    href: "#",
    label: "Facebook",
    color: "text-[#3B5998]"
  },
  {
    icon: <Twitter className="w-4 h-4" />,
    href: "#",
    label: "Twitter",
    color: "text-black"
  },
  {
    icon: <Linkedin className="w-4 h-4" />,
    href: "#",
    label: "LinkedIn",
    color: "text-blue-800"
  }
]

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  return (
    <header className="w-full relative">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 z-50 w-full py-2 bg-white border-b border-gray-200 hidden sm:block">
        <div className="container px-2 mx-auto md:px-4">
          <div className="flex flex-col items-center justify-between gap-1 md:flex-row">
            <div className="flex flex-col items-center w-full gap-1 md:flex-row md:gap-2 md:w-auto">
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="text-xs text-black md:text-sm">Mail Us On</span>
                <a href={`mailto:${contactInfo.email}`} className="text-xs text-black hover:text-violet-600">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4 text-blue-500" />
                <span className="text-xs text-black md:text-sm">Make a Call</span>
                <a href={`tel:${contactInfo.phone}`} className="text-xs text-black hover:text-violet-600">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/contact">
                <button className="px-3 py-1 text-xs text-white bg-violet-500 hover:bg-violet-600 rounded-md">
                  Request Demo
                </button>
              </Link>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-white rounded-lg shadow hover:shadow-md"
                  >
                    <span className={social.color}>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="fixed top-0 sm:top-[40px] left-0 w-full z-50 bg-white border-b border-gray-200">
        <div className="container px-2 mx-auto md:px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            <Link href="/" className="flex items-center min-w-[120px]">
              <Image src={logo} alt="Synergy Access Logo" width={120} height={40} priority className="w-auto h-10 sm:h-12" />
            </Link>
            {/* Desktop Nav */}
            <div className="items-center justify-center flex-1 hidden ml-4 lg:flex">
              <div className="flex items-center space-x-0 text-black">
                <Link
                  href="/"
                  className={`px-3 py-1 ${isActive('/') ? 'text-violet-600 font-semibold' : 'hover:text-violet-500'}`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`px-3 py-1 ${isActive('/about') ? 'text-violet-600 font-semibold' : 'hover:text-violet-500'}`}
                >
                  About Us
                </Link>
                <div className="relative group">
                  <button
                    className={`px-3 py-1 flex items-center ${
                      isActive('/solutions') ? 'text-violet-600 font-semibold' : 'hover:text-violet-500'
                    }`}
                  >
                    Products & Solutions
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute hidden left-1/2 -translate-x-1/2 top-full z-50 group-hover:block">
                    <ProductsDropdown />
                  </div>
                </div>
                <Link
                  href="/consultancy"
                  className={`px-3 py-1 ${isActive('/consultancy') ? 'text-violet-600 font-semibold' : 'hover:text-violet-500'}`}
                >
                  Consultancy
                </Link>
                <Link
                  href="/assistance"
                  className={`px-3 py-1 ${isActive('/assistance') ? 'text-violet-600 font-semibold' : 'hover:text-violet-500'}`}
                >
                  Assistance
                </Link>
                <Link
                  href="/blog"
                  className={`px-3 py-1 ${isActive('/blog') ? 'text-violet-600 font-semibold' : 'hover:text-violet-500'}`}
                >
                  News & Blog
                </Link>
                <Link
                  href="/contact"
                  className={`px-3 py-1 ${isActive('/contact') ? 'text-violet-600 font-semibold' : 'hover:text-violet-500'}`}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile toggle */}
            <button className="p-2 lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 bg-white border-t shadow-lg z-50 ${
            isMobileMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'
          }`}
        >
          <div className="px-4 py-2 space-y-2 text-black max-h-[80vh] overflow-y-auto">
            <Link href="/" className="block py-2 hover:text-violet-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="block py-2 hover:text-violet-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>
            <ProductsDropdown isMobile closeMobileMenu={() => setIsMobileMenuOpen(false)} />
            <Link
              href="/consultancy"
              className="block py-2 hover:text-violet-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Consultancy
            </Link>
            <Link
              href="/assistance"
              className="block py-2 hover:text-violet-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Assistance
            </Link>
            <Link href="/blog" className="block py-2 hover:text-violet-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              News & Blog
            </Link>
            <Link href="/contact" className="block py-2 hover:text-violet-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed headers */}
      <div className="h-0 sm:h-0" />

      {/* Responsive styles for mobile */}
      <style jsx global>{`
        @media (max-width: 640px) {
          header .container {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          header nav {
            height: 56px !important;
          }
          header img {
            height: 36px !important;
            width: auto !important;
          }
        }
      `}</style>
    </header>
  )
}

export default Header