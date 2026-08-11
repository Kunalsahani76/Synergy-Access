import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Synergy Access Solutions & Installation Services - Professional Setup & Support',
  description: 'Synergy Access solutions including parking management, security automation, EV charging systems. Professional installation services, technical setup, and ongoing support across India.',
  keywords: [
    'Synergy Access solutions',
    'Synergy Access installation',
    'synergy access installation services',
    'synergy access technical setup',
    'synergy access professional installation',
    'parking management solutions',
    'security automation solutions',
    'EV charging systems',
    'smart solutions',
    'automation solutions',
    'installation support',
    'system commissioning',
    'maintenance services',
    '24/7 support',
    'technical assistance'
  ],
  canonical: 'https://www.synergy-access.com/services'
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}