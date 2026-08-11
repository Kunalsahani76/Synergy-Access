import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    title: 'VMS with Mobile App - Digital Visitor Management',
    description: 'Modern visitor management system with mobile app integration, QR code check-in, and digital visitor logs for enhanced security.',
    keywords: ['VMS mobile app', 'digital visitor management', 'QR code check-in', 'mobile visitor registration'],
    canonical: 'https://www.synergy-access.com/products/vms-mobile',
});

export default function VmsMobileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
