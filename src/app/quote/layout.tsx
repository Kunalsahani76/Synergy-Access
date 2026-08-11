import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContacts from '@/components/FloatingContacts';
import ScrollToTop from '@/components/ScrollToTop';
import GeometricNetworkBackground from '@/components/Common/GeometricNetworkBackground';

export const metadata: Metadata = generateMetadata({
  title: 'Request a Quote - Get Custom Pricing',
  description: 'Request a customized quote for boom barriers, turnstiles, parking systems, and access control solutions. Get competitive pricing for your project.',
  keywords: [
    'request quote',
    'get pricing',
    'boom barrier price',
    'turnstile cost',
    'parking system quote',
    'access control pricing',
    'custom quote',
    'security system pricing'
  ],
  canonical: 'https://www.synergy-access.com/quote',
});


export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <GeometricNetworkBackground />
        {children}
      </main>
      <Footer />
      <FloatingContacts />
      <ScrollToTop />
    </div>
  );
}