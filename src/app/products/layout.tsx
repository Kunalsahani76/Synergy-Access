import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Synergy Access Products - Complete Range of Security & Automation Systems',
  description: 'Explore Synergy Access products including boom barriers, bollards, turnstiles, access control systems, parking management solutions, and security automation. Professional installation and support across India.',
  keywords: [
    'Synergy Access products',
    'synergy access product range',
    'synergy access boom barriers',
    'synergy access bollards',
    'synergy access access control systems',
    'synergy access turnstiles',
    'synergy access security products',
    'entrance automation products',
    'security automation systems',
    'parking management products',
    'access control solutions',
    'product specifications',
    'product features',
    'product catalog'
  ],
  canonical: 'https://www.synergy-access.com/products'
});

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}