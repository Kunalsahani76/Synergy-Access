import { Metadata } from 'next';
import { generateMetadata, productMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    ...productMetadata.baggageScanner,
    canonical: 'https://www.synergy-access.com/products/baggage-scanner',
});

export default function BaggageScannerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
