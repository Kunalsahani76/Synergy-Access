import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'About Synergy Access - Leading Entrance Automation Company in India',
  description: 'Synergy Access Pvt. Ltd is India\'s leading manufacturer of entrance automation systems. Established in 2010, we specialize in boom barriers, bollards, turnstiles, and access control solutions with 1000+ successful installations.',
  keywords: [
    'Synergy Access company',
    'Synergy Access Pvt Ltd',
    'synergy access about',
    'entrance automation company india',
    'boom barrier manufacturer',
    'access control company',
    'synergy access history',
    'synergy access profile',
    'security systems manufacturer india'
  ],
  canonical: 'https://www.synergy-access.com/synergy-access'
});

export default function SynergyAccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}