import { Metadata } from 'next';
import { generateMetadata, productMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    ...productMetadata.rfid,
    canonical: 'https://www.synergy-access.com/products/rfid-solution',
});

export default function RfidSolutionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
