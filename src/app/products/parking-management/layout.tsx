import { Metadata } from 'next';
import { generateMetadata, productMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    ...productMetadata.parkingManagement,
    canonical: 'https://www.synergy-access.com/products/parking-management',
});

export default function ParkingManagementLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
