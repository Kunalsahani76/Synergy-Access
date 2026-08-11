import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    title: 'Parking Information Display - Digital Parking Signs',
    description: 'LED parking information display systems for showing available parking spaces, directions, and real-time occupancy status.',
    keywords: ['parking display', 'LED parking signs', 'parking information system', 'digital parking board'],
    canonical: 'https://www.synergy-access.com/products/parking-information',
});

export default function ParkingInformationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
