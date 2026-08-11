
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingContacts from '@/components/FloatingContacts'
import ChatBot from '@/components/ChatBot'
import ScrollToTop from '@/components/ScrollToTop'
import ClientRedirects from '@/components/ClientRedirects'
import './globals.css'
import Script from 'next/script'
import Disclaimer from '@/components/Disclaimer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Synergy Access Products & Solutions - Installation Services Noida | Reviews & Features',
  description:
    'Synergy Access - Complete range of products including boom barriers, bollards, turnstiles. Professional installation services, parking management solutions, security automation. Contact Noida office for expert consultation and reviews.',
  keywords: [
    'boom barrier','synergy access', 'bollard', 'turnstile', 'access control', 'parking management', 'security systems', 'automation', 'entrance automation', 'ANPR', 'RFID', 'biometric access','synergyaccess', 'SynergyAccess', 'Synergy Access', 'Delhi', 'Noida', 'Mumbai',
    'gate automation system', 'automatic gate system india', 'electric gate automation', 'sliding gate automation', 'automatic gate opener', 'faac gate automation india',
    'boom barrier price in india', 'automatic boom barrier', 'faac boom barrier distributor', 'parking boom barrier', 'automatic barrier gate',
    'vehicle access control system', 'road blocker system', 'hydraulic road blocker india', 'tyre killer system', 'automatic tyre killer',
    'bollards for vehicle control', 'retractable bollards manufacturer',
    'parking automation system', 'parking management solution', 'rfid parking system', 'automatic parking gate', 'smart parking india', 'access control for parking lots',
    'baggage scanner for mall', 'x ray baggage scanner india',
    'dfmd door frame metal detector', 'hhmd hand held metal detector',
    'pedestrian access gates', 'uvss under vehicle surveillance system',
    'access control system india', 'biometric access control', 'face recognition access system', 'rfid access control system', 'time attendance access control', 'faac access control india', 'biometric access control system',
    'face recognition attendance system', 'rfid based access control', 'visitor management system software', 'qr based access control system', 'vms with mobile application', 'fingerprint attendance machine', 'access control solutions india',
    'siren alarm system for buildings', 'security access management system'
  ].join(', '),
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', type: 'image/png', sizes: '180x180' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  metadataBase: new URL('https://synergy-access.com'),
  openGraph: {
    images: '/assets/banner1.jpeg',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Synergy Access Pvt. Ltd',
  alternateName: ['Synergy Access', 'SynergyAccess'],
  url: 'https://www.synergy-access.com',
  logo: 'https://www.synergy-access.com/assets/logo.png',
  description: 'Leading manufacturer of entrance automation systems including boom barriers, bollards, turnstiles, and access control solutions in India.',
  foundingDate: '2010',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'Delhi NCR',
    addressLocality: 'Noida'
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91 99993 39265',
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi']
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91 99993 39265',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi']
    }
  ],
  sameAs: [
    'https://www.synergy-access.com'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Entrance Automation Systems',
    itemListElement: [
      {
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
          name: 'Synergy Access Pvt. Ltd'
        },
        itemOffered: {
          '@type': 'Product',
          name: 'Boom Barriers',
          description: 'Automatic boom barriers for parking and access control',
          brand: {
            '@type': 'Brand',
            name: 'Synergy Access'
          },
          manufacturer: {
            '@type': 'Organization',
            name: 'Synergy Access Pvt. Ltd'
          }
        }
      },
      {
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
          name: 'Synergy Access Pvt. Ltd'
        },
        itemOffered: {
          '@type': 'Product',
          name: 'Bollards',
          description: 'Hydraulic and automatic bollards for vehicle control',
          brand: {
            '@type': 'Brand',
            name: 'Synergy Access'
          },
          manufacturer: {
            '@type': 'Organization',
            name: 'Synergy Access Pvt. Ltd'
          }
        }
      },
      {
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
          name: 'Synergy Access Pvt. Ltd'
        },
        itemOffered: {
          '@type': 'Product',
          name: 'Turnstiles',
          description: 'Pedestrian access control turnstiles and gates',
          brand: {
            '@type': 'Brand',
            name: 'Synergy Access'
          },
          manufacturer: {
            '@type': 'Organization',
            name: 'Synergy Access Pvt. Ltd'
          }
        }
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="google5195bdae4b902068.html" />

        {/* Google Tag Manager - Head */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T4FDQGSD');
          `}
        </Script>
        {/* Google Analytics (Optional, if not using GA via GTM) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-29Z3DJVNCQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-29Z3DJVNCQ');
          `}
        </Script>
      </head>
      <body className={`${inter.className} min-h-screen bg-gray-50`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T4FDQGSD"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          ></iframe>
        </noscript>
        <ClientRedirects />
        <Header />
        <main className="pt-[120px]">
          <ScrollToTop />
          {children}
        </main>
        <Footer />

        <FloatingContacts />
        <ChatBot />
        <Toaster position="top-right" />
        <Disclaimer />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
