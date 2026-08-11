import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    title: 'Parking Guidance System - Smart Parking Navigation',
    description: 'Advanced parking guidance systems with sensors and LED indicators for efficient parking space management in malls and commercial complexes.',
    keywords: ['parking guidance', 'parking sensors', 'smart parking navigation', 'parking space indicators'],
    canonical: 'https://www.synergy-access.com/products/parking-guidance',
});

export default function ParkingGuidanceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
